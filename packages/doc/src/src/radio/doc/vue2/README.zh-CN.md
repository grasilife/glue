# Radio 单选框

### 介绍

用于在多个选项中选择单个结果。

## 代码演示

### 基础用法

通过 `model-value` 绑定值当前选中项的 name。

```html
<glue-radio-group :model-value.prop="checked">
  <glue-radio name="1" label="单选框 1"></glue-radio>
  <glue-radio name="2" label="单选框 2"></glue-radio>
</glue-radio-group>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const checked = ref("1");
    return { checked };
  }
};
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，单选框组会变成水平排列。

```html
<glue-radio-group :model-value.prop="checked" direction="horizontal">
  <glue-radio name="1" label="单选框 1"></glue-radio>
  <glue-radio name="2" label="单选框 2"></glue-radio>
</glue-radio-group>
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 `disabled` 可以禁用单个选项。

```html
<glue-radio-group :model-value.prop="checked" disabled>
  <glue-radio name="1" label="单选框 1"></glue-radio>
  <glue-radio name="2" label="单选框 2"></glue-radio>
</glue-radio-group>
```

### 自定义形状

将 `shape` 属性设置为 `square`，单选框的形状会变成方形。

```html
<glue-radio-group :model-value.prop="checked">
  <glue-radio name="1" shape="square" label="单选框 1"></glue-radio>
  <glue-radio name="2" shape="square" label="单选框 2"></glue-radio>
</glue-radio-group>
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<glue-radio-group :model-value.prop="checked">
  <glue-radio name="1" checked-color="#ee0a24" label="单选框 1"></glue-radio>
  <glue-radio name="2" checked-color="#ee0a24" label="单选框 2"></glue-radio>
</glue-radio-group>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<glue-radio-group :model-value.prop="checked">
  <glue-radio name="1" icon-size="24px" label="单选框 1"></glue-radio>
  <glue-radio name="2" icon-size="24px" label="单选框 2"></glue-radio>
</glue-radio-group>
```

### 自定义图标

通过 `icon` 插槽自定义图标，并通过 `slotProps` 判断是否为选中状态。

```html
<glue-radio-group :model-value.prop="checked">
  <glue-radio name="1" label="单选框 1">
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </glue-radio>
  <glue-radio name="2" label="单选框 2">
    <template #icon="props">
      <img class="img-icon" :src="props.checked ? activeIcon : inactiveIcon" />
    </template>
  </glue-radio>
</glue-radio-group>

<style>
  .img-icon {
    height: 20px;
  }
</style>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const checked = ref("1");
    return {
      checked,
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png"
    };
  }
};
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发单选框切换。

```html
<glue-radio-group :model-value.prop="checked">
  <glue-radio name="1" label-disabled label="单选框 1">单选框 1</glue-radio>
  <glue-radio name="2" label-disabled label="单选框 1">单选框 2</glue-radio>
</glue-radio-group>
```

### 与 Cell 组件一起使用

此时你需要再引入 `Cell` 和 `CellGroup` 组件。

```html
<glue-radio-group :model-value.prop="checked">
  <glue-cell-group>
    <glue-cell title="单选框 1" clickable @click="checked = '1'">
      <template #right-icon>
        <glue-radio name="1" />
      </template>
    </glue-cell>
    <glue-cell title="单选框 2" clickable @click="checked = '2'">
      <template #right-icon>
        <glue-radio name="2" />
      </template>
    </glue-cell>
  </glue-cell-group>
</glue-radio-group>
```

## API

### Radio Props

| 参数           | 说明                      | 类型               | 默认值    |
| -------------- | ------------------------- | ------------------ | --------- |
| name           | 标识符                    | _any_              | -         |
| shape          | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled       | 是否为禁用状态            | _boolean_          | `false`   |
| label-disabled | 是否禁用文本内容点击      | _boolean_          | `false`   |
| label-position | 文本位置，可选值为 `left` | _string_           | `right`   |
| icon-size      | 图标大小，默认单位为`px`  | _number \| string_ | `20px`    |
| checked-color  | 选中状态颜色              | _string_           | `#1989fa` |

### RadioGroup Props

| 参数             | 说明                                 | 类型               | 默认值     |
| ---------------- | ------------------------------------ | ------------------ | ---------- |
| model-value.prop | 当前选中项的标识符                   | _any_              | -          |
| disabled         | 是否禁用所有单选框                   | _boolean_          | `false`    |
| direction        | 排列方向，可选值为`horizontal`       | _string_           | `vertical` |
| icon-size        | 所有单选框的图标大小，默认单位为`px` | _number \| string_ | `20px`     |
| checked-color    | 所有单选框的选中状态颜色             | _string_           | `#1989fa`  |

### Radio Events

| 事件名 | 说明             | 回调参数       |
| ------ | ---------------- | -------------- |
| click  | 点击单选框时触发 | _event: Event_ |

### RadioGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _name: string_ |

### Radio Slots

| 名称    | 说明       | 参数               |
| ------- | ---------- | ------------------ |
| default | 自定义文本 | -                  |
| icon    | 自定义图标 | _checked: boolean_ |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值                     | 描述 |
| -------------------------------- | -------------------------- | ---- |
| @radio-size                      | `20px`                     | -    |
| @radio-border-color              | `@gray-5`                  | -    |
| @radio-transition-duration       | `@animation-duration-fast` | -    |
| @radio-label-margin              | `@padding-xs`              | -    |
| @radio-label-color               | `@text-color`              | -    |
| @radio-checked-icon-color        | `@blue`                    | -    |
| @radio-disabled-icon-color       | `@gray-5`                  | -    |
| @radio-disabled-label-color      | `@gray-5`                  | -    |
| @radio-disabled-background-color | `@border-color`            | -    |
