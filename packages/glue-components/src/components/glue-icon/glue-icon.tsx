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
  @Prop() size: number | string = 16;
  @Prop() badge: number | string;
  @Prop() color: string;
  @Prop() backgroundColor: string;
  @Prop() tag: string;
  @Prop() classPrefix: string;
  private isImage(name?: string) {
    return name ? name.indexOf('/') !== -1 : false;
  }
  render() {
    const { dot, name, size, badge, color, classPrefix, backgroundColor } =
      this;
    console.log(addUnit(size), 'jiahuahu');
    const isImageIcon = this.isImage(name);
    console.log(isImageIcon, 'isImageIcon');
    return (
      <Host>
        <glue-badge dot={dot} content={badge} slot-content>
          <i
            style={{
              // borderColor: color,
              color: color,
              backgroundColor: backgroundColor,
              borderColor: backgroundColor,
              fontSize: addUnit(size),
            }}
            class={classNames(classPrefix, 'glue-icon', {
              [`van-icon-${name}`]: true,
            })}
          ></i>
          {isImageIcon && (
            <img
              style={{
                fontSize: addUnit(size),
              }}
              class="glue-icon__image"
              src={name}
            />
          )}
        </glue-badge>
      </Host>
    );
  }
}
