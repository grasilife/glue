import { Component, Prop, h, State, EventEmitter, Event } from '@stencil/core';
import { isDef } from '../../utils/base';
import '@glue/touch-emulator';
// import { getRootScrollTop, setRootScrollTop } from '../../utils/dom/scroll';
import { UseTouch } from '../../utils/composables/use-touch';
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
  @Prop() zIndex: string;
  @Prop() highlightColor: string;
  @Prop() sticky = true;
  @Prop() stickyOffsetTop = 0;
  @Prop() indexList = genAlphabet();
  @State() activeAnchor = '';
  @Event() clickSidebar: EventEmitter;
  root: HTMLElement;
  touch = new UseTouch();
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
  scrollToElement = element => {
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
    return this.indexList.map(index => {
      const active = index === this.activeAnchor;
      return (
        <span class={(classNames('glue-index-bar'), { 'glue-index-bar__active': active })} style={active ? this.highlightStyle() : undefined} data-index={index}>
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
        ref={dom => {
          this.root = dom;
        }}
        class="glue-index-bar"
      >
        <div class="glue-index-bar__sidebar" style={this.sidebarStyle()} onClick={this.onClickSidebar} onTouchStart={this.touch.start} onTouchMove={this.onTouchMove}>
          {this.renderIndexes()}
        </div>
        <slot></slot>
      </div>
    );
  }
}
