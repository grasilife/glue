import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-tree-select');
import { addUnit } from '../../utils/format/unit';
@Component({
  tag: 'glue-tree-select',
  styleUrl: 'glue-tree-select.less',
  shadow: false,
})
export class GlueTreeSelect {
  @Prop() first: string;
  @Prop() max: number;
  @Prop() items: any = [];
  @Prop() height = 300300;
  @Prop({ mutable: true }) activeId = '0';
  @Prop() selectedIcon = 'success';
  @Prop({ mutable: true }) mainActiveIndex = 0;
  @Event() glueClickItem: EventEmitter;
  @Event() glueClickNav: EventEmitter;
  isMultiple = () => Array.isArray(this.activeId);

  isActiveItem = id => {
    return this.isMultiple() ? this.activeId.indexOf(id) !== -1 : this.activeId === id;
  };

  renderSubItem = item => {
    const onClick = () => {
      if (item.disabled) {
        return;
      }

      let activeId;
      if (this.isMultiple()) {
        activeId = this.activeId.slice();

        const index = activeId.indexOf(item.id);

        if (index !== -1) {
          activeId.splice(index, 1);
        } else if (activeId.length < this.max) {
          activeId.push(item.id);
        }
      } else {
        activeId = item.id;
      }

      this.activeId = activeId;
      this.glueClickItem.emit(item);
    };

    return (
      <div
        key={item.id}
        class={
          (classNames('glue-ellipsis', 'glue-tree-select__item'),
          {
            'glue-tree-select__active': this.isActiveItem(item.id),
            'glue-tree-select__disabled': item.disabled,
          })
        }
        onClick={onClick}
      >
        {item.text}
        {this.isActiveItem(item.id) && <glue-icon name={this.selectedIcon} class="glue-tree-select__selected" />}
      </div>
    );
  };

  onSidebarChange = index => {
    this.mainActiveIndex = index;
    this.glueClickNav.emit(index);
  };

  renderSidebar = () => {
    const Items = this.items.map(item => (
      <glue-sidebar-item dot={item.dot} title={item.text} badge={item.badge} class={classNames('glue-tree-select__nav-item', bem([item.className]))} disabled={item.disabled} />
    ));

    return (
      <glue-sidebar class="glue-tree-select__nav" modelValue={this.mainActiveIndex} onChange={this.onSidebarChange}>
        {Items}
      </glue-sidebar>
    );
  };

  renderContent = () => {
    // if (slots.content) {
    //   return slots.content();
    // }

    const selected = this.items[+this.mainActiveIndex] || {};
    if (selected.children) {
      return selected.children.map(this.renderSubItem);
    }
  };
  render() {
    return (
      <div class={classNames('glue-tree-select')} style={{ height: addUnit(this.height) }}>
        {this.renderSidebar()}
        <div class="glue-tree-select__content">{this.renderContent()}</div>
      </div>
    );
  }
}
