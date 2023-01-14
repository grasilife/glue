import {
  Component,
  Prop,
  h,
  Event,
  EventEmitter,
  Host,
  Watch,
  State,
  Element,
} from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-tree-select');
import { addUnit } from '../../utils/format/unit';
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-tree-select',
  styleUrl: 'glue-tree-select.less',
  shadow: false,
})
export class GlueTreeSelect {
  @Element() el!: HTMLGlueTreeSelectElement;
  @Prop() max: number = Infinity;
  @Prop() items: any = [];
  @Prop() height = 300;
  @Prop({ reflect: true, mutable: true }) activeId: any;
  @Prop() selectedIcon = 'success';
  @Prop({ reflect: true, mutable: true }) mainActiveIndex: any;
  @Event() glueClickItem: EventEmitter;
  @Event() glueClickNav: EventEmitter;
  @State() modelValue: any;
  isMultiple = () => Array.isArray(this.activeId);
  @Watch('activeId')
  watchActiveId() {
    this.modelValue = this.activeId;
  }
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
        gtitle={item.text}
        badge={item.badge}
        class={classNames('glue-tree-select__nav-item', bem([item.className]))}
        disabled={item.disabled}
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
  componentDidLoad() {
    let children = getElementChildren(this.el, 'GLUE-SIDEBAR-ITEM');
    console.log(children, 'children');
    for (let i = 0; i < children.length; i++) {
      let element = children[i];
      console.log(this.items[i], 'this.items[i].id');
      element.setIndex(i);
      element.setValue('parentModelValue', this.activeId);
    }
  }
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
      <Host
        class={classNames('glue-tree-select')}
        style={{ height: addUnit(this.height) }}
      >
        {this.renderSidebar()}
        <div class="glue-tree-select__content">{this.renderContent()}</div>
      </Host>
    );
  }
}
