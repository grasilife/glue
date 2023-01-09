import { Component, Prop, h, State, Element, Host, Watch } from '@stencil/core';
import classNames from 'classnames';
import { isDef } from '../../utils/base';
import { addUnit } from '../../utils/format/unit';
import {
  getVisibleHeight,
  getElementTop,
  setRootScrollTop,
} from '../../utils/dom/scroll';
import { getElementChildren, getAttribute } from '../../utils/base';
import { BORDER_TOP_BOTTOM } from '../../global/constant/constant';
import { unitToPx } from '../../utils/format/unit';
import { getVisibleTop } from '../../utils/dom/scroll';
import { callInterceptor } from '../../utils/interceptor';
import { scrollLeftTo, scrollTopTo } from './utils';
import { useScrollParent } from '../../utils/useScrollParent';
import { isHidden } from '../../utils/dom/style';
console.log(getElementTop, scrollTopTo);
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-tabs');

@Component({
  tag: 'glue-tabs',
  styleUrl: 'glue-tabs.less',
  shadow: false,
})
export class GlueTabs {
  @Element() el!: HTMLGlueTabsElement;
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
  @State() titleRefs = [];
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
  contentRef;
  wrapRef;
  navRef;
  @Watch('currentIndex')
  currentIndexHandle() {
    this.scrollIntoView(false);
    this.setLine();

    // scroll to correct position
    if (this.stickyFixed && !this.scrollspy) {
      setRootScrollTop(Math.ceil(getElementTop(this.el) - this.offsetTopPx()));
    }
  }
  @Watch('children')
  titleRefsHandle() {
    console.log(this.children, 'aghviahiai');
    // this.setLine();
  }
  scrollable = () =>
    this.children.length > this.swipeThreshold || !this.ellipsis;
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
  scrollIntoView = (immediate) => {
    const nav = this.navRef;
    const titles = this.titleRefs;

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
    console.log(titles, 'titlestitles');
    if (
      !titles ||
      !titles[this.currentIndex] ||
      this.type !== 'line' ||
      isHidden(this.el)
    ) {
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
    console.log(this.lineStyle, 'this.lineStyle');
  };

  findAvailableTab = (index) => {
    const diff = index < this.currentIndex ? -1 : 1;

    while (index >= 0 && index < this.children.length) {
      if (!this.children[index].disabled) {
        return index;
      }

      index += diff;
    }
  };

  setCurrentIndex = (currentIndex) => {
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
  setCurrentIndexByName = (name) => {
    const matched = this.children.filter(
      (tab, index) => this.getTabName(tab, index) === name
    );

    const index = matched[0] ? this.children.indexOf(matched[0]) : 0;
    this.setCurrentIndex(index);
  };

  scrollToCurrentContent = (immediate = false) => {
    console.log(immediate);

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

  onStickyScroll = (params) => {
    this.stickyFixed = params.isFixed;
    // emit('scroll', params);
  };

  scrollTo = (name) => {
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
  getProp = (el, type) => {
    let prop = getAttribute(el, type);
    return prop;
  };
  setTitleRefs = (dom) => {
    let mydata = [];
    mydata.push(dom);
    console.log(dom, 'domdomdom');
    // this.titleRefs = [...mydata];
  };
  renderNav = () => {
    // let list = [];
    console.log(this.children, 'this.children22');
    return this.children.map((item, index) => {
      let title = this.getProp(item, 'title');
      return (
        <glue-tabs-title
          ref={(dom) => {
            this.setTitleRefs(dom);
          }}
          // ref={this.setTitleRefs(index)}
          // dot={dot}
          // type={this.type}
          // badge={badge}
          title={title}
          // color={color}
          // style={titleStyle}
          // class={titleClass}
          // isActive={index === this.currentIndex}
          // disabled={disabled}
          // scrollable={this.scrollable()}
          // activeColor={titleActiveColor}
          // inactiveColor={titleInactiveColor}
          onClick={() => {
            this.onClick(item, index);
          }}
        />
      );
    });
    // for (let i = 0; i < this.children.length; i++) {
    //   let item = this.children[i];
    //   let index = i;
    //   // let dot = this.getProp(item, 'dot');
    //   // let badge = this.getProp(item, 'badge');
    //   // let title = this.getProp(item, 'title');
    //   // let color = this.getProp(item, 'color');
    //   // let titleStyle = this.getProp(item, 'titleStyle');
    //   // let titleClass = this.getProp(item, 'titleClass');
    //   // let disabled = this.getProp(item, 'disabled');
    //   // let titleActiveColor = this.getProp(item, 'titleActiveColor');
    //   // let titleInactiveColor = this.getProp(item, 'titleInactiveColor');
    //   // console.log(index, this.currentIndex, dot, 'this.currentIndex');
    //   list.push();
    // }
    // console.log(list, 'listlistlist');
    // return list;
  };

  renderHeader = () => {
    const { type, border } = this;
    console.log(
      this.scrollable(),
      BORDER_TOP_BOTTOM,
      border,
      type,
      'afbabiufanini'
    );
    this.setLine();
    return (
      <div
        ref={(dom) => {
          this.wrapRef = dom;
        }}
        class={classNames('glue-tabs__wrap', {
          'glue-tabs__wrap--scrollable': this.scrollable(),
          [BORDER_TOP_BOTTOM]: type === 'line' && border,
        })}
      >
        <div
          ref={(dom) => {
            this.navRef = dom;
          }}
          role="tablist"
          class={classNames('glue-tabs__nav', {
            ['glue-tabs__nav--' + this.type]: this.type,
          })}
          style={this.navStyle()}
        >
          <slot name="nav-left"></slot>
          {this.renderNav()}
          {type === 'line' && (
            <div class="glue-tabs__line" style={this.lineStyle} />
          )}
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
  componentShouldUpdate() {
    console.log(this.children, this.titleRefs, 'hfuanfuanin11');
    if (this.children.length == this.titleRefs.length) {
      // this.setLine();
    }
  }
  componentDidLoad() {
    console.log(this.contentRef, 'Component has been rendered');
    let htmlCollection = getElementChildren(this.contentRef, 'GLUE-TAB');
    //转成数组
    this.children = [].slice.call(htmlCollection);
    console.log(this.children, 'this.children');
    this.setLine();
  }

  render() {
    return (
      <Host class={classNames('glue-tabs', bem([this.type]))}>
        {this.sticky ? (
          <glue-sticky
            container={this.el}
            offset-top={this.offsetTopPx()}
            onScroll={this.onStickyScroll}
          >
            {this.renderHeader()}
          </glue-sticky>
        ) : (
          this.renderHeader()
        )}
        <glue-tabs-content
          ref={(dom) => {
            this.contentRef = dom;
          }}
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
      </Host>
    );
  }
}
