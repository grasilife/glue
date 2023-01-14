# Steps 步骤条

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

## 代码演示

### 基础用法

`active` 属性表示当前步骤的索引，从 0 起计。

```html
<glue-steps :active="active">
  <glue-step>买家下单</glue-step>
  <glue-step>商家接单</glue-step>
  <glue-step>买家提货</glue-step>
  <glue-step>交易完成</glue-step>
</glue-steps>
```

```js
import { ref } from "vue";

export default {
  steup() {
    const active = ref(1);
    return { active };
  }
};
```

### 自定义样式

可以通过 `active-icon` 和 `active-color` 属性设置激活状态下的图标和颜色。

```html
<glue-steps :active="active" active-icon="success" active-color="#38f">
  <glue-step>买家下单</glue-step>
  <glue-step>商家接单</glue-step>
  <glue-step>买家提货</glue-step>
  <glue-step>交易完成</glue-step>
</glue-steps>
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

```html
<glue-steps direction="vertical" :active="0">
  <glue-step>
    <h3>【城市】物流状态1</h3>
    <p>2016-07-12 12:40</p>
  </glue-step>
  <glue-step>
    <h3>【城市】物流状态2</h3>
    <p>2016-07-11 10:00</p>
  </glue-step>
  <glue-step>
    <h3>快件已发货</h3>
    <p>2016-07-10 09:30</p>
  </glue-step>
</glue-steps>
```

## API

### Steps Props

| 参数           | 说明                                                   | 类型               | 默认值       |
| -------------- | ------------------------------------------------------ | ------------------ | ------------ |
| active         | 当前步骤                                               | _number \| string_ | `0`          |
| direction      | 显示方向，可选值为 `vertical`                          | _string_           | `horizontal` |
| active-color   | 激活状态颜色                                           | _string_           | `#07c160`    |
| inactive-color | 未激活状态颜色                                         | _string_           | `#969799`    |
| active-icon    | 激活状态底部图标，可选值见 [Icon 组件](#/zh-CN/icon)   | _string_           | `checked`    |
| inactive-icon  | 未激活状态底部图标，可选值见 [Icon 组件](#/zh-CN/icon) | _string_           | -            |

### Step Slots

| 名称          | 说明                 |
| ------------- | -------------------- |
| active-icon   | 自定义激活状态图标   |
| inactive-icon | 自定义未激活状态图标 |

### Steps Events

| 事件名     | 说明                       | 回调参数        |
| ---------- | -------------------------- | --------------- |
| click-step | 点击步骤的标题或图标时触发 | _index: number_ |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| @step-text-color                 | `@gray-6`       | -    |
| @step-active-color               | `@green`        | -    |
| @step-process-text-color         | `@text-color`   | -    |
| @step-font-size                  | `@font-size-md` | -    |
| @step-line-color                 | `@border-color` | -    |
| @step-finish-line-color          | `@green`        | -    |
| @step-finish-text-color          | `@text-color`   | -    |
| @step-icon-size                  | `12px`          | -    |
| @step-circle-size                | `5px`           | -    |
| @step-circle-color               | `@gray-6`       | -    |
| @step-horizontal-title-font-size | `@font-size-sm` | -    |
| @steps-background-color          | `@white`        | -    |
