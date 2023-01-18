# AddressList 地址列表

### 介绍

展示收货地址列表。

## 代码演示

### 基础用法

```html
<van-address-list
  v-model="chosenAddressId"
  :list="list"
  :disabled-list="disabledList"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
```

```js
import { ref } from 'vue';
import { Toast } from 'vant';

export default {
  setup() {
    const chosenAddressId = ref('1');
    const list = [
      {
        id: '1',
        name: '张三',
        tel: '13000000000',
        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
        isDefault: true,
      },
      {
        id: '2',
        name: '李四',
        tel: '1310000000',
        address: '浙江省杭州市拱墅区莫干山路 50 号',
      },
    ];
    const disabledList = [
      {
        id: '3',
        name: '王五',
        tel: '1320000000',
        address: '浙江省杭州市滨江区江南大道 15 号',
      },
    ];

    const onAdd = () => Toast('新增地址');
    const onEdit = (item, index) => Toast('编辑地址:' + index);

    return {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
    };
  },
};
```

## API

### Props

| 参数             | 说明              | 类型        | 默认值     |
|------------------|-----------------|-------------|------------|
| v-model          | 当前选中地址的 id | _string_    | -          |
| list             | 地址列表          | _Address[]_ | `[]`       |
| disabled-list    | 不可配送地址列表  | _Address[]_ | `[]`       |
| disabled-text    | 不可配送提示文案  | _string_    | -          |
| switchable       | 是否允许切换地址  | _boolean_   | `true`     |
| add-button-text  | 底部按钮文字      | _string_    | `新增地址` |
| default-tag-text | 默认地址标签文字  | _string_    | -          |

### Events

| 事件名          | 说明                     | 回调参数                   |
|-----------------|------------------------|----------------------------|
| add             | 点击新增按钮时触发       | -                          |
| edit            | 点击编辑按钮时触发       | item: 地址对象，index: 索引 |
| select          | 切换选中的地址时触发     | item: 地址对象，index: 索引 |
| edit-disabled   | 编辑不可配送的地址时触发 | item: 地址对象，index: 索引 |
| select-disabled | 选中不可配送的地址时触发 | item: 地址对象，index: 索引 |
| click-item      | 点击任意地址时触发       | item: 地址对象，index: 索引 |

### Address 数据结构

| 键名      | 说明               | 类型               |
|-----------|------------------|--------------------|
| id        | 每条地址的唯一标识 | _number \| string_ |
| name      | 收货人姓名         | _string_           |
| tel       | 收货人手机号       | _number \| string_ |
| address   | 收货地址           | _string_           |
| isDefault | 是否为默认地址     | _boolean_          |

### Slots

| 名称        | 说明                 | 参数       |
|-------------|--------------------|------------|
| default     | 在列表下方插入内容   | -          |
| top         | 在顶部插入内容       | -          |
| item-bottom | 在列表项底部插入内容 | 列表项的值 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                    | 默认值                            | 描述 |
|-----------------------------------------|-----------------------------------|------|
| @address-list-padding                   | `@padding-sm @padding-sm 80px`    | -    |
| @address-list-disabled-text-color       | `@gray-6`                         | -    |
| @address-list-disabled-text-padding     | `@padding-base * 5 0 @padding-md` | -    |
| @address-list-disabled-text-font-size   | `@font-size-md`                   | -    |
| @address-list-disabled-text-line-height | `@line-height-md`                 | -    |
| @address-list-add-button-z-index        | `999`                             | -    |
| @address-list-item-padding              | `@padding-sm`                     | -    |
| @address-list-item-text-color           | `@text-color`                     | -    |
| @address-list-item-disabled-text-color  | `@gray-5`                         | -    |
| @address-list-item-font-size            | `13px`                            | -    |
| @address-list-item-line-height          | `@line-height-sm`                 | -    |
| @address-list-item-radio-icon-color     | `@red`                            | -    |
| @address-list-edit-icon-size            | `20px`                            | -    |
