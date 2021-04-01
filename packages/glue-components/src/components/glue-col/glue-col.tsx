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
  @Element() el!: HTMLElement;
  @Prop() offset: string | number = 0;

  @Prop() span: string | number = 0;
  style = () => {
    let groups = this.getParentGroups();
    console.log(groups, 'groups');
    return {
      paddingLeft: groups ? `${groups}px` : null,
      paddingRight: groups ? `${groups}px` : null,
    };
  };
  componentDidLoad() {
    // this.groups();
  }
  getParentGroups() {
    let parentEl = getElementParent(this.el);
    let groups = getAttribute(parentEl, 'groups');
    console.log(groups, 'groups');
    return groups;
  }
  render() {
    const { span, offset } = this;
    console.log(span, offset, 'offset');
    return (
      <Host style={this.style()} class={classNames('glue-col', bem([span, [`offset-${offset}`]]))}>
        <slot></slot>
      </Host>
    );
  }
}
