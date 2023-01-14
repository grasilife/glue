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
  @Prop() max: number = Infinity;
  @Prop() items: any = [];
  @Prop() height = 300300;
  //TODO：active如果为activeId，居然取不到值，很奇怪
  @Prop({ mutable: true }) activeId: any;
  @Prop() selectedIcon = 'success';
  @Prop({ mutable: true }) mainActiveIndex: any;
  @Event() glueClickItem: EventEmitter;
  @Event() glueClickNav: EventEmitter;
  isMultiple = () => Array.isArray(this.activeId);

  isActiveItem = (id) => {
    console.log(this.isMultiple(), this.activeId, id, 'agjhuahiu');
    return this.isMultiple()
      ? this.activeId.indexOf(id) != -1
      : this.activeId == id;
  };

  renderSubItem = (item) => {
    const onClick = () => {
      if (item.disabled) {
        return;
      }

      let activeSelect;
      if (this.isMultiple()) {
        activeSelect = this.activeId.slice();
        console.log(activeSelect, this.activeId, 'this.activeId');
        const index = activeSelect.indexOf(item.id);

        if (index !== -1) {
          activeSelect.splice(index, 1);
        } else if (activeSelect.length < this.max) {
          activeSelect.push(item.id);
        }
      } else {
        activeSelect = item.id;
      }
      console.log(activeSelect, 'activeactiveactive');
      this.activeId = activeSelect;
      this.glueClickItem.emit(item);
    };
    console.log(
      this.isActiveItem(item.id),
      item.id,
      'this.isActiveItem(item.id)'
    );
    return (
      <div
        key={item.id}
        class={classNames('glue-ellipsis', 'glue-tree-select__item', {
          'glue-tree-select__item--active': this.isActiveItem(item.id),
          'glue-tree-select__item--disabled': item.disabled,
        })}
        onClick={onClick}
      >
        {item.text}
        {this.isActiveItem(item.id) && (
          <glue-icon
            name={this.selectedIcon}
            class="glue-tree-select__selected"
          />
        )}
      </div>
    );
  };

  onSidebarChange = (event) => {
    let index = event.detail;
    console.log(index, event, 'indexindexindex');
    this.mainActiveIndex = index;
    this.glueClickNav.emit(index);
  };

  renderSidebar = () => {
    console.log(this.mainActiveIndex, 'this.mainActiveIndex');
    const Items = this.items.map((item) => (
      <glue-sidebar-item
        dot={item.dot}
        title={item.text}
        badge={item.badge}
        class={classNames('glue-tree-select__nav-item', bem([item.className]))}
        disabled={item.disabled}
        // value={item.id}
      />
    ));

    return (
      <glue-sidebar
        class="glue-tree-select__nav"
        model-value={this.mainActiveIndex}
        onGlueChange={this.onSidebarChange}
      >
        {Items}
      </glue-sidebar>
    );
  };

  renderContent = () => {
    // if (slots.content) {
    //   return slots.content();
    // }
    //获取这个节点
    const selected = this.items.filter((item) => {
      return item.id == this.mainActiveIndex;
    });
    console.log(selected, this.mainActiveIndex, 'selectedselected');
    if (selected.length != 0 && selected[0].children) {
      return selected[0].children.map(this.renderSubItem);
    }
  };
  render() {
    return (
      <div
        class={classNames('glue-tree-select')}
        style={{ height: addUnit(this.height) }}
      >
        {this.renderSidebar()}
        <div class="glue-tree-select__content">{this.renderContent()}</div>
      </div>
    );
  }
}
