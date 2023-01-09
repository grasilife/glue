import { Component, Prop, h, Host, Method } from '@stencil/core';
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
  @Prop() gtitle: string | number;
  @Prop({ mutable: true }) top = 0;
  @Prop({ mutable: true }) left = null;
  @Prop() rect = { top: 0, height: 0 };
  @Prop({ mutable: true }) width = null;
  @Prop({ mutable: true }) active = false;
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
  @Method()
  async getValue(key: string) {
    return this[key];
  }
  @Method()
  async setValue(key: string, value: any) {
    this[key] = value;
  }
  @Method()
  async getRect(
    scrollParent: Window | Element,
    scrollParentRect: { top: number }
  ) {
    const rootRect = this.root;
    console.log(rootRect,'rootRect');
    this.rect.height = rootRect.offsetHeight;

    if (scrollParent === window || scrollParent === document.body) {
      console.log(rootRect.offsetTop,getRootScrollTop(),'rootRect.offsetTop');
      this.rect.top = rootRect.offsetTop + getRootScrollTop();
    } else {
      console.log(rootRect.offsetTop,getScrollTop(scrollParent),scrollParentRect.top,'scrollParentRect.top');
      this.rect.top =
        rootRect.offsetTop + getScrollTop(scrollParent) - scrollParentRect.top;
    }

    return this.rect;
  }

  render() {
    const sticky = this.isSticky();
    return (
      <Host
        ref={(dom) => {
          this.root = dom;
        }}
        style={{ height: sticky ? `${this.rect.height}px` : undefined }}
      >
        <div
          style={this.anchorStyle()}
          class={classNames(
            'glue-index-anchor',
            {
              ['glue-index-anchor__' + BORDER_BOTTOM]: sticky,
            },
            bem([sticky])
          )}
        >
          {this.gtitle ? this.gtitle : this.index}
        </div>
      </Host>
    );
  }
}
