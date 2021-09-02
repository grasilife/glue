import { Component, Prop, h, Host } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-tabs-content',
  styleUrl: 'glue-tabs-content.less',
  shadow: false,
})
export class GlueTabsContent {
  @Prop() first: string;
  @Prop() inited: boolean;
  @Prop() animated: boolean;
  @Prop() swipeable: boolean;
  @Prop() lazyRender: boolean;
  @Prop() count = false;
  @Prop() duration = false;
  @Prop() currentIndex = false;
  swipeRef;
  onChange = (index: number) => {
    console.log(index, 'index');
    // emit('change', index);
  };

  renderChildren = () => {
    const Content = <slot></slot>;

    if (this.animated || this.swipeable) {
      return (
        <glue-swipe
          ref={(dom) => {
            this.swipeRef = dom;
          }}
          // loop={false}
          class="glue-tabs-content__track"
          // duration={+this.duration * 1000}
          // touchable={this.swipeable}
          // lazyRender={this.lazyRender}
          // showIndicators={false}
          // onChange={this.onChange}
        >
          {Content}
        </glue-swipe>
      );
    }

    return Content;
  };

  swipeToCurrentTab = (index: number) => {
    const swipe = this.swipeRef;
    if (swipe && swipe.state.active !== index) {
      swipe.swipeTo(index, { immediate: !this.inited });
    }
  };
  render() {
    return (
      <Host
        class={classNames('glue-tabs-content', {
          'glue-tabs-content--animated': this.animated || this.swipeable,
        })}
      >
        {this.renderChildren()}
      </Host>
    );
  }
}
