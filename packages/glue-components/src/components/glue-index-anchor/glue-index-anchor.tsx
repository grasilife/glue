import { Component, Prop, h } from '@stencil/core';
import classNames from 'classnames';
import { BORDER_BOTTOM } from '../../global/constant/constant';
import { getRootScrollTop, getScrollTop } from '../../utils/dom/scroll';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-index-anchor');
@Component({
  tag: 'glue-index-anchor',
  styleUrl: 'glue-index-anchor.less',
  shadow: false,
})
export class GlueIndexAnchor {
  @Prop() index: string | number;
  @Prop() top = 0;
  @Prop() left = null;
  @Prop() rect = { top: 0, height: 0 };
  @Prop() width = null;
  @Prop() active = false;
  root: HTMLElement;
  isSticky = () => this.active;
  anchorStyle = () => {
    // const { zIndex, highlightColor } = parent.props;

    if (this.isSticky()) {
      return {
        // zIndex: `${zIndex}`,
        left: this.left ? `${this.left}px` : null,
        width: this.width ? `${this.width}px` : null,
        transform: this.top ? `translate3d(0, ${this.top}px, 0)` : null,
        // color: highlightColor,
      };
    }
  };

  getRect = (
    scrollParent: Window | Element,
    scrollParentRect: { top: number }
  ) => {
    const rootRect = this.root;
    this.rect.height = rootRect.offsetHeight;

    if (scrollParent === window || scrollParent === document.body) {
      this.rect.top = rootRect.offsetTop + getRootScrollTop();
    } else {
      this.rect.top =
        rootRect.offsetTop + getScrollTop(scrollParent) - scrollParentRect.top;
    }

    return this.rect;
  };

  render() {
    const sticky = this.isSticky();
    return (
      <div
        ref={(dom) => {
          this.root = dom;
        }}
        style={{ height: sticky ? `${this.rect.height}px` : undefined }}
      >
        <div
          style={this.anchorStyle()}
          class={classNames(
            {
              ['glue-index-anchor__' + BORDER_BOTTOM]: sticky,
            },
            bem([sticky])
          )}
        >
          {this.index}
        </div>
      </div>
    );
  }
}
