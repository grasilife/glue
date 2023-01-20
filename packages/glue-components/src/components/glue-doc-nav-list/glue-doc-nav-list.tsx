import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'glue-doc-nav-list',
  styleUrl: 'glue-doc-nav-list.less',
  shadow: false,
})
export class GlueDocNavList {
  @Prop() group: any[] = [];
  @Prop() gtitle: string = '';
  @Event() glueItemClick: EventEmitter;
  render() {
    return (
      <Host class={classNames('glue-doc-nav-list')}>
        <div class="glue-doc-nav-list__title">{this.gtitle}</div>
        <div class="glue-doc-nav-list__group">
          {this.group.map((navItem) => {
            return (
              <div
                class="glue-doc-nav-list__block"
                onClick={() => {
                  this.glueItemClick.emit(navItem);
                }}
              >
                {navItem.title}
                <svg viewBox="0 0 1024 1024" class="glue-doc-nav-list__icon">
                  <path
                    fill="#B6C3D2"
                    d="M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"
                  />
                  <path
                    fill="#B6C3D2"
                    d="M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}
