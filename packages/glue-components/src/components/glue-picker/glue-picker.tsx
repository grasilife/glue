import { Component, Prop, h, Host, State, Element } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-picke');
import { BORDER_UNSET_TOP_BOTTOM } from '../../global/constant/constant';
import { preventDefault } from '../../utils/dom/event';
import { unitToPx } from '../../utils/format/unit';
import { getElementChildren } from '../../utils/base';
@Component({
  tag: 'glue-picker',
  styleUrl: 'glue-picker.less',
  shadow: false,
})
export class GluePicker {
  @Element() el!: HTMLElement;
  //pickerProps
  @Prop() first: string;
  @Prop() title: string;
  @Prop() loading: boolean;
  @Prop() readonly: boolean;
  @Prop() allowHtml: boolean;
  @Prop() cancelButtonText: string;
  @Prop() confirmButtonText: string;
  @Prop() itemHeight = 44;
  @Prop() showToolbar = true;
  @Prop() visibleItemCount = 6;
  @Prop() swipeDuration = 1000;
  //props
  @Prop() columnsFieldNames = [];
  @Prop() columns = [];
  @Prop() defaultIndex = 0;
  @Prop() toolbarPosition = 'top';
  @State() valuesKey = 'values';
  @State() formattedColumns = [];
  // @deprecated
  // should be removed in next major version
  @Prop() valueKey = 'text';
  @State() children = [];
  componentDidLoad() {
    console.log('Component has been rendered');
    this.children = getElementChildren(this.el);
  }
  itemHeightFn = () => unitToPx(this.itemHeight);

  dataType = () => {
    const { columns } = this;
    const firstColumn = columns[0] || {};

    if (firstColumn['children']) {
      return 'cascade';
    }
    if (firstColumn[this.valuesKey]) {
      return 'object';
    }
    return 'text';
  };

  formatCascade = () => {
    const formatted = [];

    let cursor = { ['children']: this.columns };

    while (cursor && cursor['children']) {
      // const children = cursor['children'];
      // let defaultIndex = cursor.defaultIndex ?? +this.defaultIndex;
      // while (children[defaultIndex] && children[defaultIndex].disabled) {
      //   if (defaultIndex < children.length - 1) {
      //     defaultIndex++;
      //   } else {
      //     defaultIndex = 0;
      //     break;
      //   }
      // }
      // formatted.push({
      //   [this.valuesKey]: cursor['children'],
      //   // className: cursor.className,
      //   defaultIndex,
      // });
      // cursor = children[defaultIndex];
    }

    this.formattedColumns = formatted;
  };

  format = () => {
    const { columns } = this;

    if (this.dataType() === 'text') {
      this.formattedColumns = [{ [this.valuesKey]: columns }];
    } else if (this.dataType() === 'cascade') {
      this.formatCascade();
    } else {
      this.formattedColumns = columns;
    }
  };

  // get indexes of all columns
  getIndexes = () => this.children.map(child => child.state.index);

  // set options of column by index
  setColumnValues = (index, options) => {
    const column = this.children[index];
    if (column) {
      column.setOptions(options);
    }
  };

  onCascadeChange = columnIndex => {
    let cursor = { ['children']: this.columns };
    const indexes = this.getIndexes();

    for (let i = 0; i <= columnIndex; i++) {
      cursor = cursor['children'][indexes[i]];
    }

    while (cursor && cursor['children']) {
      columnIndex++;
      this.setColumnValues(columnIndex, cursor['children']);
      // cursor = cursor['children'][cursor.defaultIndex || 0];
    }
  };

  // get column instance by index
  getColumn = index => this.children[index];

  // get column value by index
  getColumnValue = index => {
    const column = this.getColumn(index);
    return column && column.getValue();
  };

  // set column value by index
  setColumnValue = (index, value) => {
    const column = this.getColumn(index);

    if (column) {
      column.setValue(value);

      if (this.dataType() === 'cascade') {
        this.onCascadeChange(index);
      }
    }
  };

  // get column option index by column index
  getColumnIndex = index => (this.getColumn(index) || {}).state.index;

  // set column option index by column index
  setColumnIndex = (columnIndex, optionIndex) => {
    const column = this.getColumn(columnIndex);

    if (column) {
      column.setIndex(optionIndex);
      if (this.dataType() === 'cascade') {
        this.onCascadeChange(columnIndex);
      }
    }
  };

  // get options of column by index
  getColumnValues = index => (this.children[index] || {}).state.options;

  // get values of all columns
  getValues = () => this.children.map(child => child.getValue());

  // set values of all columns
  setValues = values => {
    values.forEach((value, index) => {
      this.setColumnValue(index, value);
    });
  };

  // set indexes of all columns
  setIndexes = indexes => {
    indexes.forEach((optionIndex, columnIndex) => {
      this.setColumnIndex(columnIndex, optionIndex);
    });
  };

  emitAction = event => {
    if (this.dataType() === 'text') {
      // emit(event, getColumnValue(0), getColumnIndex(0));
    } else {
      // emit(event, getValues(), getIndexes());
    }
  };

  onChange = columnIndex => {
    if (this.dataType() === 'cascade') {
      this.onCascadeChange(columnIndex);
    }

    if (this.dataType() === 'text') {
      // emit('change', getColumnValue(0), getColumnIndex(0));
    } else {
      // emit('change', getValues(), columnIndex);
    }
  };

  confirm = () => {
    this.children.forEach(child => child.stopMomentum());
    // emitAction('confirm');
  };

  cancel = () => {
    // emitAction('cancel');
  };

  renderTitle = () => {
    // if (slots.title) {
    //   return slots.title();
    // }
    if (this.title) {
      return <div class="glue-picker__title van-ellipsis">{this.title}</div>;
    }
  };

  renderCancel = () => {
    const text = this.cancelButtonText || 'cancel';
    return (
      <button type="button" class={bem('cancel')} onClick={this.cancel}>
        {text}
      </button>
    );
  };

  renderConfirm = () => {
    const text = this.confirmButtonText || 'confirm';
    return (
      <button type="button" class={bem('confirm')} onClick={this.confirm}>
        {text}
      </button>
    );
  };
  renderOther = () => {
    //TODO:判断slot
    return [this.renderCancel(), this.renderTitle(), this.renderConfirm()];
  };
  renderToolbar = () => {
    if (this.showToolbar) {
      return <div class={bem('toolbar')}>{this.renderOther()}</div>;
    }
  };

  renderColumnItems = () =>
    this.formattedColumns.map((item, columnIndex) => (
      <glue-picker-column
        textKey={this.valueKey}
        readonly={this.readonly}
        allowHtml={this.allowHtml}
        className={item.className}
        itemHeight={this.itemHeightFn()}
        defaultIndex={item.defaultIndex ?? +this.defaultIndex}
        swipeDuration={this.swipeDuration}
        visibleItemCount={this.visibleItemCount}
        initialOptions={item[this.valuesKey]}
        onChange={() => {
          this.onChange(columnIndex);
        }}
      />
    ));

  renderColumns = () => {
    const wrapHeight = this.itemHeightFn() * this.visibleItemCount;
    const frameStyle = { height: `${this.itemHeightFn()}px` };
    const columnsStyle = { height: `${wrapHeight}px` };
    const maskStyle = {
      backgroundSize: `100% ${(wrapHeight - this.itemHeightFn()) / 2}px`,
    };

    return (
      <div class={bem('columns')} style={columnsStyle} onTouchMove={preventDefault}>
        {this.renderColumnItems()}
        <div class={bem('mask')} style={maskStyle} />
        <div class={classNames(bem([BORDER_UNSET_TOP_BOTTOM, 'frame']))} style={frameStyle} />
      </div>
    );
  };
  render() {
    return (
      <Host class="glue-picker">
        {this.toolbarPosition === 'top' ? this.renderToolbar() : null}
        {this.loading ? <glue-loading class="glue-picker__loading" /> : null}
        <slot></slot>
        {this.renderColumns()}
        <slot></slot>
        {this.toolbarPosition === 'bottom' ? this.renderToolbar() : null}
      </Host>
    );
  }
}
