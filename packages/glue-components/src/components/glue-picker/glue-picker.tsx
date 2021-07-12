import { Component, Prop, h, Host, State, Element, Watch, Event, EventEmitter, Method } from '@stencil/core';
import classNames from 'classnames';
import { createNamespace } from '../../utils/create/index';
const [bem] = createNamespace('glue-picker');
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
  @Prop() showToolbar = false;
  @Prop() visibleItemCount = 6;
  @Prop() swipeDuration = 1000;
  //props
  //props不能是对象
  @Prop() columns = [];
  @Prop() defaultIndex = 0;
  @Prop() toolbarPosition = 'top';
  @Prop() textKey = 'text';
  @Prop() valuesKey = 'values';
  @Prop() childrenKey = 'children';
  @State() formattedColumns = [];
  @State() pickerColumnRef = [];
  @State() columnIndex = 0;

  @State() children = [];

  @Event() glueConfirm: EventEmitter;
  @Event() glueCancel: EventEmitter;
  @Event() glueChange: EventEmitter;
  @Watch('columns')
  watchHandler() {
    this.format();
  }
  componentWillLoad() {
    console.log(this.textKey, this.valuesKey, this.childrenKey, 'ahiahii');
    this.format();
  }
  componentDidLoad() {
    console.log(this.pickerColumnRef, '33dwdw');
  }
  itemHeightFn = () => unitToPx(this.itemHeight);

  dataType = () => {
    const { columns } = this;

    const firstColumn = columns[0] || {};
    console.log(firstColumn, this.childrenKey, 'firstColumn');
    if (firstColumn[this.childrenKey]) {
      return 'cascade';
    }
    if (firstColumn[this.valuesKey]) {
      return 'object';
    }
    return 'text';
  };

  formatCascade = () => {
    const formatted = [];

    let cursor = { [this.childrenKey]: this.columns, defaultIndex: 0, className: '' };
    console.log(cursor, 'cursorcursor');
    while (cursor && cursor[this.childrenKey]) {
      const children: any = cursor[this.childrenKey];
      console.log(children, 'childrenchildren');
      let defaultIndex = cursor.defaultIndex ?? +this.defaultIndex;
      while (children[defaultIndex] && children[defaultIndex].disabled) {
        if (defaultIndex < children.length - 1) {
          defaultIndex++;
        } else {
          defaultIndex = 0;
          break;
        }
      }
      formatted.push({
        [this.valuesKey]: cursor[this.childrenKey],
        className: cursor.className,
        defaultIndex,
      });
      cursor = children[defaultIndex];
    }

    this.formattedColumns = formatted;
    console.log(this.formattedColumns, 'this.formattedColumns4');
  };

  format = () => {
    //统一将数据格式化为下面这种
    // const columns = [
    //   // 第一列
    //   {
    //     values: ['周一', '周二', '周三', '周四', '周五'],
    //   },
    //   // 第二列
    //   {
    //     values: ['上午', '下午', '晚上'],
    //   },
    // ];
    const { columns } = this;
    console.log(this.dataType(), 'this.dataType()');
    if (this.dataType() === 'text') {
      this.formattedColumns = [{ [this.valuesKey]: columns }];
      console.log(this.formattedColumns, 'this.formattedColumns2');
    } else if (this.dataType() === 'cascade') {
      this.formatCascade();
    } else {
      this.formattedColumns = columns;
    }
  };

  // get indexes of all columns
  @Method()
  async getIndexes() {
    this.pickerColumnRef.map(child => {
      console.log(child, 'childchild');
      return child;
    });
  }

  // set options of column by index
  @Method()
  async setColumnValues(index, options) {
    const column = this.pickerColumnRef[index];
    console.log(column, 'columncolumn');
    if (column) {
      column.setOptions(options);
    }
  }

  async onCascadeChange(columnIndex) {
    let cursor = { [this.childrenKey]: this.columns };
    console.log(cursor, columnIndex, 'cursor22');
    const indexes = await this.getIndexs();

    for (let i = 0; i <= columnIndex; i++) {
      console.log(cursor, this.childrenKey, indexes, 'ghuaugau');
      cursor = cursor[this.childrenKey][indexes[i]];
    }
    console.log(cursor, columnIndex, cursor[this.childrenKey], 'cursorcursor');
    //级连的情况下,前面的选项变动,需要重置后面的选项
    while (cursor && cursor[this.childrenKey]) {
      columnIndex++;
      this.setColumnValues(columnIndex, cursor[this.childrenKey]);
      let defaultIndex: any = cursor.defaultIndex;
      cursor = cursor[this.childrenKey][defaultIndex || 0];
    }
  }

  // get column instance by index
  getColumn = index => this.pickerColumnRef[index];

  getValue = el => {
    console.log(getElementChildren(el), 'getElementChildren(el)');
    let value = getElementChildren(el)[0].innerText;
    console.log(value, 'value');
    return value;
  };
  // set column value by index
  @Method()
  async setColumnValue(index, value) {
    const column = this.getColumn(index);

    if (column) {
      column.setValue(value);

      if (this.dataType() === 'cascade') {
        this.onCascadeChange(index);
      }
    }
  }

  // get column option index by column index
  @Method()
  async getColumnIndex(index) {
    console.log(this.getColumn(index).value, 'this.getColumn(index)');
    return (this.getColumn(index) || {}).value;
  }

  // set column option index by column index
  @Method()
  async setColumnIndex(columnIndex, optionIndex) {
    const column = this.getColumn(columnIndex);

    if (column) {
      column.setIndex(optionIndex);
      if (this.dataType() === 'cascade') {
        this.onCascadeChange(columnIndex);
      }
    }
  }

  // get options of column by index
  @Method()
  async getColumnValues(index) {
    return (this.pickerColumnRef[index] || {}).state.options;
  }

  // get values of all columns
  @Method()
  async getValues() {
    console.log(this.pickerColumnRef, '222323');
    let values = [];
    for (let i = 0; i < this.pickerColumnRef.length; i++) {
      let child = this.pickerColumnRef[i];
      console.log(child, 'childchild');
      let value = await child.getValue();
      console.log(value, 'valuevaluevaluevalue');
      values.push(value);
    }
    console.log(values, 'valuesvalues');
    return values;
  }
  async getIndexs() {
    let values = [];
    for (let i = 0; i < this.pickerColumnRef.length; i++) {
      let child = this.pickerColumnRef[i];
      console.log(child, 'childchild');
      let value = await child.getIndex();
      console.log(value, 'valuevaluevaluevalue');
      values.push(value);
    }
    console.log(values, 'valuesvalues');
    return values;
  }
  // set values of all columns
  @Method()
  async setValues(values) {
    values.forEach((value, index) => {
      this.setColumnValue(index, value);
    });
  }
  @Method()
  async getColumnValue(index) {
    const column = this.getColumn(index);
    return column && column.getValue();
  }
  // set indexes of all columns
  @Method()
  async setIndexes(indexes) {
    indexes.forEach((optionIndex, columnIndex) => {
      this.setColumnIndex(columnIndex, optionIndex);
    });
  }

  async onChange(columnIndex) {
    this.columnIndex = columnIndex;
    //columnValue当前值,columnIndex当前索引
    let values = await this.getValues();

    console.log(this.dataType(), columnIndex, values, 'this.dataType()');

    if (this.dataType() === 'cascade') {
      this.onCascadeChange(columnIndex);
      // this.glueChange.emit({
      //   columnValue: values,
      //   columnIndex: columnIndex,
      // });
    }

    if (this.dataType() === 'text') {
      this.glueChange.emit({
        columnValue: values,
        columnIndex: columnIndex,
      });
    } else {
      this.glueChange.emit({
        columnValue: values,
        columnIndex: columnIndex,
      });
    }
  }
  @Method()
  async confirm() {
    let values = await this.getValues();
    let indexs = await this.getIndexs();
    this.pickerColumnRef.forEach(child => child.stopMomentum());
    this.glueConfirm.emit({
      columnValue: values,
      columnIndex: indexs,
    });
  }

  async cancel() {
    let values = await this.getValues();
    let indexs = await this.getIndexs();
    this.glueCancel.emit({
      columnValue: values,
      columnIndex: indexs,
    });
  }

  renderTitle = () => {
    if (this.title == '#slot') {
      return <slot name="title"></slot>;
    }
    if (this.title) {
      return <div class="glue-picker__title glue-ellipsis">{this.title}</div>;
    }
  };
  renderCancelButtonText = () => {
    const text = this.cancelButtonText || '取消';
    if (this.cancelButtonText == '#slot') {
      return <slot name="concel-button-text"></slot>;
    }
    if (this.cancelButtonText) {
      return text;
    }
  };
  renderCancel = () => {
    return (
      <button
        type="button"
        class={bem('cancel')}
        onClick={() => {
          this.cancel();
        }}
      >
        {this.renderCancelButtonText()}
      </button>
    );
  };

  renderConfirmButtonText = () => {
    const text = this.confirmButtonText || '确认';
    if (this.confirmButtonText == '#slot') {
      return <slot name="confirm-button-text"></slot>;
    }
    if (this.confirmButtonText) {
      return text;
    }
  };
  renderConfirm = () => {
    return (
      <button
        type="button"
        class={bem('confirm')}
        onClick={() => {
          this.confirm();
        }}
      >
        {this.renderConfirmButtonText()}
      </button>
    );
  };
  renderOther = () => {
    return [this.renderCancel(), this.renderTitle(), this.renderConfirm()];
  };
  renderToolbar = () => {
    console.log(this.showToolbar, 'this.showToolbar');
    if (this.showToolbar) {
      return <div class={bem('toolbar')}>{this.renderOther()}</div>;
    }
  };

  renderColumnItems = () => {
    console.log(this.formattedColumns, 'this.formattedColumns');
    return this.formattedColumns.map((item, columnIndex) => (
      <glue-picker-column
        ref={dom => {
          this.pickerColumnRef[columnIndex] = dom;
          console.log(this.pickerColumnRef, 'this.pickerColumnRef');
        }}
        textKey={this.textKey}
        readonly={this.readonly}
        allowHtml={this.allowHtml}
        className={item.className}
        itemHeight={this.itemHeightFn()}
        defaultIndex={item.defaultIndex ?? +this.defaultIndex}
        swipeDuration={this.swipeDuration}
        visibleItemCount={this.visibleItemCount}
        initialOptions={item[this.valuesKey]}
        onGlueChange={() => {
          this.onChange(columnIndex);
        }}
      />
    ));
  };

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
        <div class={classNames(BORDER_UNSET_TOP_BOTTOM, 'glue-picker__frame')} style={frameStyle} />
      </div>
    );
  };
  renderloading = () => {
    if (this.loading) {
      return (
        <div class="glue-picker__loading">
          <glue-loading />
        </div>
      );
    }
  };
  render() {
    return (
      <Host class="glue-picker">
        {this.toolbarPosition === 'top' ? this.renderToolbar() : null}
        {this.renderloading()}

        <slot></slot>
        {this.renderColumns()}
        <slot></slot>
        {this.toolbarPosition === 'bottom' ? this.renderToolbar() : null}
      </Host>
    );
  }
}
