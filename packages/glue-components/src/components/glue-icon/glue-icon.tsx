import { Component, Prop, h, Host } from '@stencil/core';
import { addUnit } from '../../utils/format/unit';
import classNames from 'classnames';
@Component({
  tag: 'glue-icon',
  styleUrl: 'glue-icon.less',
  shadow: false,
})
export class GlueIcon {
  @Prop() dot: boolean;

  @Prop() name: string;

  @Prop() size = 22;
  @Prop() badge: number | string;
  @Prop() color: string;
  @Prop() tag: string;
  @Prop() classPrefix: string;
  isImage(name?: string) {
    return name ? name.indexOf('/') !== -1 : false;
  }
  renderBadge() {
    if (this.badge || this.dot) {
      return <glue-badge dot={this.dot} tag={this.tag} content={this.badge}></glue-badge>;
    }
  }
  render() {
    const { name, size, color, classPrefix } = this;
    console.log(classPrefix);
    const isImageIcon = this.isImage(name);
    return (
      <Host
        class={classNames('glue-icon', {
          [`van-icon-${name}`]: true,
        })}
        style={{
          color,
          fontSize: addUnit(size),
        }}
      >
        {/* <i></i> */}
        {isImageIcon && <img class="glue-icon__image" src={name} />}
        {this.renderBadge()}
      </Host>
    );
  }
}
