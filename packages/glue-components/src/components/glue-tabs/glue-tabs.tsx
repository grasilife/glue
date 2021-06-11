import { Component, Prop, h, State, Element } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { addUnit } from '../../utils/format/unit';
import { getVisibleHeight, getElementTop } from '../../utils/dom/scroll';
import { getElementChildren } from '../../utils/base';
import { BORDER_TOP_BOTTOM } from '../../global/constant/constant';
import { unitToPx } from '../../utils/format/unit';
import { getVisibleTop } from '../../utils/dom/scroll';
import { callInterceptor } from '../../utils/interceptor';
import { scrollLeftTo, scrollTopTo } from './utils';
import { useScrollParent } from '../../utils/useScrollParent';
import { isHidden } from '../../utils/dom/style';
@Component({
  tag: 'glue-tabs',
  styleUrl: 'glue-tabs.less',
  shadow: false,
})
export class GlueTabs {
  @Element() el!: HTMLElement;
  @Prop() color: string;
  @Prop() border: boolean;
  @Prop() sticky: boolean;
  @Prop() animated: boolean;
  @Prop() swipeable: boolean;
  @Prop() scrollspy: boolean;
  @Prop() background: string;
  @Prop() lineWidth: string | number;
  @Prop() lineHeight: string | number;
  @Prop() beforeChange: any;
  @Prop() titleActiveColor: string;
  @Prop() titleInactiveColor: string;
  @Prop() type = 'line';
  @Prop() active = 0;
  @Prop() ellipsis = true;
  @Prop() duration = 0.3;
  @Prop() offsetTopVlaue = 0;
  @Prop() lazyRender = true;
  @Prop() swipeThreshold = 5;
  @State() children = [];
  @State() inited = false;
  @State() position = '';
  @State() currentIndex = -1;
  @State() lineStyle = {
    width: '',
    transitionDuration: '',
    backgroundColor: '',
    height: '',
    borderRadius: '',
    transform: '',
  };
  @State() tabHeight;
  @State() lockScroll;
  @State() stickyFixed;
  wrapRef;
  navRef;
  titleRefs;
  scrollable = () => this.children.length > this.swipeThreshold || !this.ellipsis;
  scroller = () => useScrollParent(this.el);
  navStyle = () => ({
    borderColor: this.color,
    background: this.background,
  });

  getTabName = (tab, index) => tab.name ?? index;

  currentName = () => {
    const activeTab = this.children[this.currentIndex];

    if (activeTab) {
      return this.getTabName(activeTab, this.currentIndex);
    }
  };

  offsetTopPx = () => unitToPx(this.offsetTopVlaue);

  scrollOffset = () => {
    if (this.sticky) {
      return this.offsetTopPx() + this.tabHeight;
    }
    return 0;
  };

  // scroll active tab into view
  scrollIntoView = immediate => {
    const nav = this.navRef;
    const titles = this.titleRefs.value;

    if (!this.scrollable() || !titles || !titles[this.currentIndex]) {
      return;
    }

    const title = titles[this.currentIndex].$el;
    const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;

    scrollLeftTo(nav, to, immediate ? 0 : +this.duration);
  };

  // update nav bar style
  setLine = () => {
    const shouldAnimate = this.inited;
    const titles = this.titleRefs;
    if (!titles || !titles[this.currentIndex] || this.type !== 'line' || isHidden(this.el)) {
      return;
    }
    const title = titles[this.currentIndex].$el;
    const { lineWidth, lineHeight } = this;
    const left = title.offsetLeft + title.offsetWidth / 2;

    this.lineStyle.width = addUnit(lineWidth);
    this.lineStyle.backgroundColor = this.color;
    this.lineStyle.transform = `translateX(${left}px) translateX(-50%)`;
    if (shouldAnimate) {
      this.lineStyle.transitionDuration = `${this.duration}s`;
    }
    if (isDef(lineHeight)) {
      const height = addUnit(lineHeight);
      this.lineStyle.height = height;
      this.lineStyle.borderRadius = height;
    }
  };

  findAvailableTab = index => {
    const diff = index < this.currentIndex ? -1 : 1;

    while (index >= 0 && index < this.children.length) {
      if (!this.children[index].disabled) {
        return index;
      }

      index += diff;
    }
  };

  setCurrentIndex = currentIndex => {
    const newIndex = this.findAvailableTab(currentIndex);

    if (!isDef(newIndex)) {
      return;
    }

    const newTab = this.children[newIndex];
    const newName = this.getTabName(newTab, newIndex);
    const shouldEmitChange = this.currentIndex !== null;

    this.currentIndex = newIndex;

    if (newName !== this.active) {
      // emit('update:active', newName);

      if (shouldEmitChange) {
        // emit('change', newName, newTab.title);
      }
    }
  };

  // correct the index of active tab
  setCurrentIndexByName = name => {
    const matched = this.children.filter((tab, index) => this.getTabName(tab, index) === name);

    const index = matched[0] ? this.children.indexOf(matched[0]) : 0;
    this.setCurrentIndex(index);
  };

  scrollToCurrentContent = (immediate = false) => {
    if (this.scrollspy) {
      const target = this.children[this.currentIndex].$el;

      if (target) {
        // const to = getElementTop(target, scroller.value) - scrollOffset.value;

        this.lockScroll = true;
        // scrollTopTo(this.scroller(), to, immediate ? 0 : +this.duration, () => {
        //   this.lockScroll = false;
        // });
      }
    }
  };

  // emit event when clicked
  onClick = (item, index) => {
    const { title, disabled } = this.children[index];
    console.log(item, index, title, 'item, index');
    const name = this.getTabName(this.children[index], index);

    if (disabled) {
      // emit('disabled', name, title);
    } else {
      callInterceptor({
        interceptor: this.beforeChange,
        args: [name],
        done: () => {
          this.setCurrentIndex(index);
          this.scrollToCurrentContent();
        },
      });

      // emit('click', name, title);
      // route(item);
    }
  };

  onStickyScroll = params => {
    this.stickyFixed = params.isFixed;
    // emit('scroll', params);
  };

  scrollTo = name => {
    this.setCurrentIndexByName(name);
    this.scrollToCurrentContent(true);
  };

  getCurrentIndexOnScroll = () => {
    for (let index = 0; index < this.children.length; index++) {
      const top = getVisibleTop(this.children[index].$el);

      if (top > this.scrollOffset()) {
        return index === 0 ? 0 : index - 1;
      }
    }

    return this.children.length - 1;
  };

  onScroll = () => {
    if (this.scrollspy && !this.lockScroll) {
      const index = this.getCurrentIndexOnScroll();
      this.setCurrentIndex(index);
    }
  };

  renderNav = () =>
    this.children.map((item, index) => (
      <glue-tabs-title
        // ref={this.setTitleRefs(index)}
        dot={item.dot}
        type={this.type}
        badge={item.badge}
        title={item.title}
        color={this.color}
        style={item.titleStyle}
        class={item.titleClass}
        isActive={index === this.currentIndex}
        disabled={item.disabled}
        scrollable={this.scrollable()}
        renderTitle={item.$slots.title}
        activeColor={this.titleActiveColor}
        inactiveColor={this.titleInactiveColor}
        onClick={() => {
          this.onClick(item, index);
        }}
      />
    ));

  renderHeader = () => {
    const { type, border } = this;
    return (
      <div
        ref={dom => {
          this.wrapRef = dom;
        }}
        class={classNames({
          'glue-tabs__wrap--scrollable': this.scrollable(),
          [BORDER_TOP_BOTTOM]: type === 'line' && border,
        })}
      >
        <div
          ref={dom => {
            this.navRef = dom;
          }}
          role="tablist"
          class={classNames({
            'glue-tabs__nav--type': this.scrollable(),
          })}
          style={this.navStyle()}
        >
          <slot name="nav-left"></slot>
          {this.renderNav()}
          {type === 'line' && <div class="glue-tabs__line" style={this.lineStyle} />}
          <slot name="nav-right"></slot>
        </div>
      </div>
    );
  };
  init = () => {
    this.setCurrentIndexByName(this.active || this.currentName());
    this.inited = true;
    this.tabHeight = getVisibleHeight(this.wrapRef);
    this.scrollIntoView(true);
  };
  componentDidLoad() {
    console.log('Component has been rendered');
    this.children = getElementChildren(this.el);
  }
  render() {
    return (
      <div class={classNames('cunstom')}>
        {this.sticky ? (
          <glue-sticky container={this.el} offset-top={this.offsetTopPx()} onScroll={this.onStickyScroll}>
            {this.renderHeader()}
          </glue-sticky>
        ) : (
          this.renderHeader()
        )}
        <glue-tabs-content
        // count={this.children.length}
        // inited={this.inited}
        // animated={this.animated}
        // duration={this.duration}
        // swipeable={this.swipeable}
        // lazyRender={this.lazyRender}
        // currentIndex={this.currentIndex}
        // onChange={this.setCurrentIndex}
        >
          <slot></slot>
        </glue-tabs-content>
      </div>
    );
  }
}
