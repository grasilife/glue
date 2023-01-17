# DropdownMenu 下拉菜单

### 介绍

向下弹出的菜单列表。

## 代码演示

### 基础用法

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="state.value1" :options="option1" />
  <van-dropdown-item v-model="state.value2" :options="option2" />
</van-dropdown-menu>
```

```js
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      value1: 0,
      value2: 'a',
    });
    const option1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    const option2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ];

    return {
      state,
      option1,
      option2,
    };
  },
};
```

### 自定义菜单内容

通过插槽可以自定义 `DropdownItem` 的内容，此时需要使用实例上的 `toggle` 方法手动控制菜单的显示。

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value" :options="option" />
  <van-dropdown-item title="筛选" ref="item">
    <van-cell center title="包邮">
      <template #right-icon>
        <van-switch v-model="switch1" size="24" active-color="#ee0a24" />
      </template>
    </van-cell>
    <van-cell center title="团购">
      <template #right-icon>
        <van-switch v-model="switch2" size="24" active-color="#ee0a24" />
      </template>
    </van-cell>
    <div style="padding: 5px 16px;">
      <van-button type="danger" block round @click="onConfirm">
        确认
      </van-button>
    </div>
  </van-dropdown-item>
</van-dropdown-menu>
```

```js
import { ref, reactive } from 'vue';

export default {
  setup() {
    const item = ref(null);
    const state = reactive({
      value: 0,
      switch1: false,
      switch2: false,
    });
    const options = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    const onConfirm = () => {
      item.value.toggle();
    };

    return {
      item,
      state,
      option,
      onConfirm,
    };
  },
};
```

### 自定义选中态颜色

通过 `active-color` 属性可以自定义菜单标题和选项的选中态颜色。

```html
<van-dropdown-menu active-color="#1989fa">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

### 向上展开

将 `direction` 属性值设置为 `up`，菜单即可向上展开。

```html
<van-dropdown-menu direction="up">
  <van-dropdown-item v-model="value1" :options="option1" />
  <van-dropdown-item v-model="value2" :options="option2" />
</van-dropdown-menu>
```

### 禁用菜单

```html
<van-dropdown-menu>
  <van-dropdown-item v-model="value1" disabled :options="option1" />
  <van-dropdown-item v-model="value2" disabled :options="option2" />
</van-dropdown-menu>
```

## API

### DropdownMenu Props

| 参数                   | 说明                         | 类型               | 默认值    |
|------------------------|----------------------------|--------------------|-----------|
| active-color           | 菜单标题和选项的选中态颜色   | _string_           | `#ee0a24` |
| direction              | 菜单展开方向，可选值为`up`    | _string_           | `down`    |
| z-index                | 菜单栏 z-index 层级          | _number \| string_ | `10`      |
| duration               | 动画时长，单位秒              | _number \| string_ | `0.2`     |
| overlay                | 是否显示遮罩层               | _boolean_          | `true`    |
| close-on-click-overlay | 是否在点击遮罩层后关闭菜单   | _boolean_          | `true`    |
| close-on-click-outside | 是否在点击外部元素后关闭菜单 | _boolean_          | `true`    |

### DropdownItem Props

| 参数        | 说明                                                              | 类型                        | 默认值         |
|-------------|-----------------------------------------------------------------|-----------------------------|----------------|
| value       | 当前选中项对应的 value，可以通过`v-model`双向绑定                  | _number \| string_          | -              |
| title       | 菜单项标题                                                        | _string_                    | 当前选中项文字 |
| options     | 选项数组                                                          | _Option[]_                  | `[]`           |
| disabled    | 是否禁用菜单                                                      | _boolean_                   | `false`        |
| lazy-render | 是否在首次展开时才渲染菜单内容                                    | _boolean_                   | `true`         |
| title-class | 标题额外类名                                                      | _string \| Array \| object_ | -              |
| teleport    | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi) | _string \| Element_         | -              |

### DropdownItem Events

| 事件名 | 说明                          | 回调参数 |
|--------|-----------------------------|----------|
| change | 点击选项导致 value 变化时触发 | value    |
| open   | 打开菜单栏时触发              | -        |
| close  | 关闭菜单栏时触发              | -        |
| opened | 打开菜单栏且动画结束后触发    | -        |
| closed | 关闭菜单栏且动画结束后触发    | -        |

### DropdownItem Slots

| 名称    | 说明             |
|---------|----------------|
| default | 菜单内容         |
| title   | 自定义菜单项标题 |

### DropdownItem 方法

通过 ref 可以获取到 DropdownItem 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名 | 说明                                                          | 参数             | 返回值 |
|--------|-------------------------------------------------------------|------------------|--------|
| toggle | 切换菜单展示状态，传 `true` 为显示，`false` 为隐藏，不传参为取反 | _show?: boolean_ | -      |

### Option 数据结构

| 键名  | 说明                                   | 类型               |
|-------|--------------------------------------|--------------------|
| text  | 文字                                   | _string_           |
| value | 标识符                                 | _number \| string_ |
| icon  | 左侧[图标名称](#/zh-CN/icon)或图片链接 | _string_           |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                     | 默认值                         | 描述 |
|------------------------------------------|--------------------------------|------|
| @dropdown-menu-height                    | `48px`                         | -    |
| @dropdown-menu-background-color          | `@white`                       | -    |
| @dropdown-menu-box-shadow                | `0 2px 12px fade(@gray-7, 12)` | -    |
| @dropdown-menu-title-font-size           | `15px`                         | -    |
| @dropdown-menu-title-text-color          | `@text-color`                  | -    |
| @dropdown-menu-title-active-text-color   | `@red`                         | -    |
| @dropdown-menu-title-disabled-text-color | `@gray-6`                      | -    |
| @dropdown-menu-title-padding             | `0 @padding-xs`                | -    |
| @dropdown-menu-title-line-height         | `@line-height-lg`              | -    |
| @dropdown-menu-option-active-color       | `@red`                         | -    |
| @dropdown-menu-content-max-height        | `80%`                          | -    |
| @dropdown-item-z-index                   | `10`                           | -    |
