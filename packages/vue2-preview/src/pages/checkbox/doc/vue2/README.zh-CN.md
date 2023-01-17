# Checkbox 复选框

### 介绍

用于在选中和非选中状态之间进行切换。

## 代码演示

### 基础用法

通过 `model-value` 绑定复选框的勾选状态。

```html
<glue-checkbox :model-value.prop="checked" label="复选框"></glue-checkbox>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const checked = ref(true);
    return { checked };
  }
};
```

### 禁用状态

通过设置 `disabled` 属性可以禁用复选框。

```html
<glue-checkbox :model-value.prop="checked" disabled label="复选框"></glue-checkbox>
```

### 自定义形状

将 `shape` 属性设置为 `square`，复选框的形状会变成方形。

```html
<glue-checkbox :model-value.prop="checked" shape="square" label="复选框"></glue-checkbox>
```

### 自定义颜色

通过 `checked-color` 属性设置选中状态的图标颜色。

```html
<glue-checkbox :model-value.prop="checked" checked-color="#ee0a24" label="复选框"></glue-checkbox>
```

### 自定义大小

通过 `icon-size` 属性可以自定义图标的大小。

```html
<glue-checkbox :model-value.prop="checked" icon-size="24px" label="复选框"></glue-checkbox>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slotProps` 判断是否为选中状态.

```html
<glue-checkbox :model-value.prop="checked" label="自定义图标" icon="#slot">
  <glue-icon :name="checkbox3 ? activeIcon : inactiveIcon" size="32" />
</glue-checkbox>

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
    const checked = ref(true);
    return {
      checked,
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png"
    };
  }
};
```

### 禁用文本点击

设置 `label-disabled` 属性后，点击图标以外的内容不会触发复选框切换。

```html
<glue-checkbox :model-value.prop="checked" label-disabled label="复选框"></glue-checkbox>
```

### 复选框组

复选框可以与复选框组一起使用，复选框组通过 `model-value` 数组绑定复选框的勾选状态。

```html
<glue-checkbox-group :model-value.prop="checked">
  <glue-checkbox name="a" label="复选框"></glue-checkbox>
  <glue-checkbox name="b" label="复选框"></glue-checkbox>
</glue-checkbox-group>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const checked = ref(["a", "b"]);
    return { checked };
  }
};
```

### 水平排列

将 `direction` 属性设置为 `horizontal` 后，复选框组会变成水平排列。

```html
<glue-checkbox-group :model-value.prop="checked" direction="horizontal">
  <glue-checkbox name="a" label="复选框"></glue-checkbox>
  <glue-checkbox name="b" label="复选框"></glue-checkbox>
</glue-checkbox-group>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const checked = ref([]);
    return { checked };
  }
};
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```html
<glue-checkbox-group :model-value.prop="result" :max="2">
  <glue-checkbox name="a" label="复选框"></glue-checkbox>
  <glue-checkbox name="b" label="复选框"></glue-checkbox>
  <glue-checkbox name="c" label="复选框"></glue-checkbox>
</glue-checkbox-group>
```

### 全选与反选

通过 `CheckboxGroup` 实例上的 `toggleAll` 方法可以实现全选与反选。

```html
<glue-checkbox-group :model-value.prop="result" ref="checkboxGroup">
  <glue-checkbox name="a" label="复选框"></glue-checkbox>
  <glue-checkbox name="b" label="复选框"></glue-checkbox>
  <glue-checkbox name="c" label="复选框"></glue-checkbox>
</glue-checkbox-group>

<glue-button type="primary" @click="checkAll">全选</glue-button>
<glue-button type="primary" @click="toggleAll">反选</glue-button>
```

```js
import { ref } from 'vue';

export default {
  setup() {
    const checked = ref([]);
    const checkboxGroup = ref(null);

    const checkAll = () => {
      checkboxGroup.value.toggleAll(true);
    }
    const toggleAll = () => {
      checkboxGroup.value.toggleAll();
    },

    return {
      checked,
      checkAll,
      toggleAll,
      checkboxGroup,
    };
  },
};
```

### 搭配单元格组件使用

此时你需要再引入 `Cell` 和 `CellGroup` 组件，并通过 `Checkbox` 实例上的 toggle 方法触发切换。

```html
<glue-checkbox-group :model-value.prop="checked">
  <glue-cell-group>
    <glue-cell v-for="(item, index) in list" clickable :key="item" :title="`复选框 ${item}`" @click="toggle(index)">
      <template #right-icon>
        <glue-checkbox :name="item" :ref="el => checkboxRefs[index] = el" @click.stop />
      </template>
    </glue-cell>
  </glue-cell-group>
</glue-checkbox-group>
```

```js
import { ref, onBeforeUpdate } from "vue";

export default {
  setup() {
    const checked = ref([]);
    const checkboxRefs = ref([]);
    const toggle = index => {
      checkboxRefs.value[index].toggle();
    };

    onBeforeUpdate(() => {
      checkboxRefs.value = [];
    });

    return {
      list: ["a", "b"],
      toggle,
      checked,
      checkboxRefs
    };
  }
};
```

## API

### Checkbox Props

| 参数           | 说明                      | 类型               | 默认值    |
| -------------- | ------------------------- | ------------------ | --------- |
| model-value    | 是否为选中状态            | _boolean_          | `false`   |
| name           | 标识符                    | _any_              | -         |
| shape          | 形状，可选值为 `square`   | _string_           | `round`   |
| disabled       | 是否禁用复选框            | _boolean_          | `false`   |
| label-disabled | 是否禁用复选框文本点击    | _boolean_          | `false`   |
| label-position | 文本位置，可选值为 `left` | _string_           | `right`   |
| icon-size      | 图标大小，默认单位为 `px` | _number \| string_ | `20px`    |
| checked-color  | 选中状态颜色              | _string_           | `#1989fa` |
| bind-group     | 是否与复选框组绑定        | _boolean_          | `true`    |

### CheckboxGroup Props

| 参数          | 说明                                  | 类型               | 默认值     |
| ------------- | ------------------------------------- | ------------------ | ---------- |
| model-value   | 所有选中项的标识符                    | _any[]_            | -          |
| disabled      | 是否禁用所有复选框                    | _boolean_          | `false`    |
| max           | 最大可选数，`0`为无限制               | _number \| string_ | `0`        |
| direction     | 排列方向，可选值为 `horizontal`       | _string_           | `vertical` |
| icon-size     | 所有复选框的图标大小，默认单位为 `px` | _number \| string_ | `20px`     |
| checked-color | 所有复选框的选中状态颜色              | _string_           | `#1989fa`  |

### Checkbox Events

| 事件名 | 说明                     | 回调参数           |
| ------ | ------------------------ | ------------------ |
| change | 当绑定值变化时触发的事件 | _checked: boolean_ |
| click  | 点击复选框时触发         | _event: Event_     |

### CheckboxGroup Events

| 事件名 | 说明                     | 回调参数       |
| ------ | ------------------------ | -------------- |
| change | 当绑定值变化时触发的事件 | _names: any[]_ |

### Checkbox Slots

| 名称    | 说明       | 参数               |
| ------- | ---------- | ------------------ |
| default | 自定义文本 | -                  |
| icon    | 自定义图标 | _checked: boolean_ |

### CheckboxGroup 方法

通过 ref 可以获取到 CheckboxGroup 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名    | 说明                                                               | 参数                          | 返回值 |
| --------- | ------------------------------------------------------------------ | ----------------------------- | ------ |
| toggleAll | 切换所有复选框，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _options?: boolean \| object_ | -      |

### toggleAll 方法示例

```js
const { checkboxGroup } = this.$refs;

// 全部反选
checkboxGroup.toggleAll();
// 全部选中
checkboxGroup.toggleAll(true);
// 全部取消
checkboxGroup.toggleAll(false);

// 全部反选，并跳过禁用的复选框
checkboxGroup.toggleAll({
  skipDisabled: true
});
// 全部选中，并跳过禁用的复选框
checkboxGroup.toggleAll({
  checked: true,
  skipDisabled: true
});
```

### Checkbox 方法

通过 ref 可以获取到 Checkbox 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                                                             | 参数                | 返回值 |
| ------ | ---------------------------------------------------------------- | ------------------- | ------ |
| toggle | 切换选中状态，传 `true` 为选中，`false` 为取消选中，不传参为取反 | _checked?: boolean_ | -      |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                | 默认值                     | 描述 |
| ----------------------------------- | -------------------------- | ---- |
| @checkbox-size                      | `20px`                     | -    |
| @checkbox-border-color              | `@gray-5`                  | -    |
| @checkbox-transition-duration       | `@animation-duration-fast` | -    |
| @checkbox-label-margin              | `@padding-xs`              | -    |
| @checkbox-label-color               | `@text-color`              | -    |
| @checkbox-checked-icon-color        | `@blue`                    | -    |
| @checkbox-disabled-icon-color       | `@gray-5`                  | -    |
| @checkbox-disabled-label-color      | `@gray-5`                  | -    |
| @checkbox-disabled-background-color | `@border-color`            | -    |
