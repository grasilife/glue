import { Component, Prop, h, Host, Element } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-col');
import { getElementParent, getAttribute } from '../../utils/base';
@Component({
  tag: 'glue-col',
  styleUrl: 'glue-col.less',
  shadow: false,
})
export class GlueCol {
  @Element() el!: HTMLGlueColElement;
  @Prop() offset: string | number = 0;

  @Prop() span: string | number = 0;
  private style = () => {
    let gutter = this.getParentGutter();
    console.log(gutter, 'groups');
    return {
      paddingLeft: gutter ? `${gutter}px` : null,
      paddingRight: gutter ? `${gutter}px` : null,
    };
  };
  componentDidLoad() {}
  private getParentGutter() {
    let parentEl = getElementParent(this.el, 'GLUE-ROW');
    let gutter = getAttribute(parentEl, 'gutter');
    console.log(gutter, 'gutter');
    return gutter;
  }
  render() {
    const { span, offset } = this;
    console.log(span, offset, 'offset');
    return (
      <Host
        style={this.style()}
        class={classNames('glue-col', bem([span, [`offset-${offset}`]]))}
      >
        <slot></slot>
      </Host>
    );
  }
}
