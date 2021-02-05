import { Component, Prop, h } from '@stencil/core';
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

  @Prop() size = 32;
  @Prop() badge: number | string;
  @Prop() color: string;
  @Prop() tag: string;
  @Prop() classPrefix: string;
  isImage(name?: string) {
    return name ? name.indexOf('/') !== -1 : false;
  }
  render() {
    const { tag, dot, name, size, badge, color, classPrefix } = this;
    console.log(classPrefix);
    const isImageIcon = this.isImage(name);
    return (
      <glue-badge
        dot={dot}
        tag={tag}
        content={badge}
        style={{
          color,
          fontSize: addUnit(size),
        }}
      >
        <i
          class={classNames('van-icon', {
            [`van-icon-${name}`]: true,
          })}
        ></i>
        {isImageIcon && <img class="glue-icon__image" src={name} />}
      </glue-badge>
    );
  }
}
