import {
  Component,
  Prop,
  h,
  State,
  EventEmitter,
  Event,
  Element,
} from '@stencil/core';
import { isDef } from '../../utils/base';
import '@glue/touch-emulator';
// import { getRootScrollTop, setRootScrollTop } from '../../utils/dom/scroll';
import { UseTouch } from '../../utils/composables/use-touch';
import { useScrollParent } from '../../utils/useScrollParent';
import { isHidden } from '../../utils/dom/style';
import { getScrollTop } from '../../utils/dom/scroll';
import { getElementChildren } from '../../utils/base';
import { useRect } from '../../utils/useRect';
let touchActiveIndex: string;
import classNames from 'classnames';
function genAlphabet() {
  const indexList = [];
  const charCodeOfA = 'A'.charCodeAt(0);

  for (let i = 0; i < 26; i++) {
    indexList.push(String.fromCharCode(charCodeOfA + i));
  }

  return indexList;
}
@Component({
  tag: 'glue-index-bar',
  styleUrl: 'glue-index-bar.less',
  shadow: false,
})
export class GlueIndexBar {
  @Element() el!: HTMLGlueIndexBarElement;
  @Prop() zIndex: string;
  @Prop() highlightColor: string;
  @Prop() sticky = true;
  @Prop() stickyOffsetTop = 0;
  @Prop() indexList = genAlphabet();
  @State() activeAnchor = '';
  @State() selectActiveIndex = '';
  @State() children = [];
  @Event() clickSidebar: EventEmitter;
  root: HTMLElement;
  touch = new UseTouch();
  componentWillLoad() {
    this.children = getElementChildren(this.el, 'GLUE-INDEX-ANCHOR');
    console.log(this.children, 'this.children11');
    let scrollParent = useScrollParent(this.el);
    console.log(this.el.tagName, scrollParent, 'this.elthis.elthis.el11');
    scrollParent.addEventListener(
      'scroll',
      () => {
        this.onScroll();
      },
      {
        passive: true,
      }
    );
  }
  getMatchAnchor = (index: string) => {
    return this.children.find((item) => String(item.index) === index);
  };

  getActiveAnchor = (
    scrollTop: number,
    rects: Array<{ top: number; height: number }>
  ) => {
    console.log(scrollTop, rects, this.children, '1121212');
    for (let i = this.children.length - 1; i >= 0; i--) {
      const prevHeight = i > 0 ? rects[i - 1].height : 0;
      console.log(prevHeight, 'prevHeightprevHeight');
      const reachTop = this.sticky ? prevHeight + this.stickyOffsetTop : 0;
      // console.log(
      //   this.sticky,
      //   prevHeight,
      //   scrollTop,
      //   reachTop,
      //   rects[i].top,
      //   'reachTop'
      // );

      if (scrollTop + reachTop >= rects[i].top) {
        console.log(scrollTop + reachTop, rects[i].top, i, 'rects[i].top');
        return i;
      }
    }

    return -1;
  };

  async onScroll() {
    if (isHidden(this.el)) {
      return;
    }

    const { sticky, indexList } = this;
    let scrollParent = useScrollParent(this.el);
    const scrollTop = getScrollTop(scrollParent);
    const scrollParentRect = useRect(scrollParent);
    let rects = [];
    console.log(this.children, 'this.children1221');
    for (let i = 0; i < this.children.length; i++) {
      let item = this.children[i];
      console.log(item, 'itemitem');
      console.log(scrollParent, scrollParentRect, 'scrollParentRect');
      let rect = await item.getRect(scrollParent, scrollParentRect);

      rects.push(rect);
    }

    console.log(rects, 'rectsrects');
    let active = -1;
    if (this.selectActiveIndex) {
      const match = this.getMatchAnchor(this.selectActiveIndex);
      if (match) {
        const rect = match.getRect(scrollParent, scrollParentRect);
        active = this.getActiveAnchor(rect.top, rects);
      }
    } else {
      active = this.getActiveAnchor(scrollTop, rects);
      console.log(active, 'activeactive');
    }

    this.activeAnchor = indexList[active];
    console.log(this.activeAnchor, 'this.activeAnchor');

    if (sticky) {
      this.children.forEach((item, index) => {
        console.log(item.left, 'huhuhauhu');
        if (index === active || index === active - 1) {
          const rect = item.getBoundingClientRect();
          console.log(rect, 'rectrectrect');
          item.setValue('left', rect.left);
          item.setValue('width', rect.width);
        } else {
          item.setValue('left', null);
          item.setValue('width', null);
        }

        if (index === active) {
          item.setValue('active', true);

          let top =
            Math.max(this.stickyOffsetTop, rects[index].top - scrollTop) +
            scrollParentRect.top;
          item.setValue('top', top);
        } else if (index === active - 1 && this.selectActiveIndex === '') {
          const activeItemTop = rects[active].top - scrollTop;
          item.setValue('active', activeItemTop > 0);
          let top = activeItemTop + scrollParentRect.top - rects[index].height;
          item.setValue('top', top);
        } else {
          item.setValue('active', false);
        }
      });
    }

    this.selectActiveIndex = '';
  }

  scrollTo = (index: string) => {
    if (!index) {
      return;
    }

    // const match = children.filter(item => String(item.index) === index);

    // if (match[0]) {
    //   match[0].$el.scrollIntoView();

    //   if (this.sticky && this.stickyOffsetTop) {
    //     setRootScrollTop(getRootScrollTop() - this.stickyOffsetTop);
    //   }

    //   // emit('select', match[0].index);
    // }
  };
  scrollToElement = (element) => {
    const { index } = element.dataset;
    if (index) {
      this.scrollTo(index);
    }
  };
  onClickSidebar = (event: MouseEvent) => {
    this.scrollToElement(event.target);
  };
  sidebarStyle = () => {
    if (isDef(this.zIndex)) {
      return {
        zIndex: (parseFloat(this.zIndex) + 1).toString(),
      };
    }
  };

  highlightStyle = () => {
    if (this.highlightColor) {
      return {
        color: this.highlightColor,
      };
    }
  };
  renderIndexes = () => {
    return this.indexList.map((index) => {
      const active = index === this.activeAnchor;
      return (
        <span
          class={classNames('glue-index-bar__index', {
            'glue-index-bar__index--active': active,
          })}
          style={active ? this.highlightStyle() : undefined}
          data-index={index}
        >
          {index}
        </span>
      );
    });
  };
  onTouchMove = (event: TouchEvent) => {
    this.touch.move(event);

    if (this.touch.isVertical()) {
      // preventDefault(event);

      const { clientX, clientY } = event.touches[0];
      const target = document.elementFromPoint(clientX, clientY) as HTMLElement;
      if (target) {
        const { index } = target.dataset;

        if (index && touchActiveIndex !== index) {
          touchActiveIndex = index;
          this.scrollToElement(target);
        }
      }
    }
  };

  render() {
    return (
      <div
        ref={(dom) => {
          this.root = dom;
        }}
        class="glue-index-bar"
      >
        <div
          class="glue-index-bar__sidebar"
          // style={this.sidebarStyle()}
          onClick={this.onClickSidebar}
          onTouchStart={this.touch.start}
          onTouchMove={this.onTouchMove}
        >
          {this.renderIndexes()}
        </div>
        <slot></slot>
      </div>
    );
  }
}
