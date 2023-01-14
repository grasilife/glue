# Sidebar 侧边导航

## 代码演示

### 基础用法

通过 `modelValue` 绑定当前选中项的索引。

```html
<van-sidebar :modelValue.prop="active">
  <van-sidebar-item gtitle="标签名称" />
  <van-sidebar-item gtitle="标签名称" />
  <van-sidebar-item gtitle="标签名称" />
</van-sidebar>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    return { active };
  }
};
```

### 徽标提示

设置 `dot` 属性后，会在右上角展示一个小红点；设置 `badge` 属性后，会在右上角展示相应的徽标。

```html
<van-sidebar :modelValue.prop="active">
  <van-sidebar-item gtitle="标签名称" dot />
  <van-sidebar-item gtitle="标签名称" badge="5" />
  <van-sidebar-item gtitle="标签名称" badge="20" />
</van-sidebar>
```

### 禁用选项

通过 `disabled` 属性禁用选项。

```html
<van-sidebar :modelValue.prop="active">
  <van-sidebar-item gtitle="标签名称" />
  <van-sidebar-item gtitle="标签名称" disabled />
  <van-sidebar-item gtitle="标签名称" />
</van-sidebar>
```

### 监听切换事件

设置 `change` 方法来监听切换导航项时的事件。

```html
<van-sidebar :modelValue.prop="active" @change="onChange">
  <van-sidebar-item gtitle="标签名 1" />
  <van-sidebar-item gtitle="标签名 2" />
  <van-sidebar-item gtitle="标签名 3" />
</van-sidebar>
```

```js
import { ref } from "vue";
import { Toast } from "vant";

export default {
  setup() {
    const active = ref(0);
    const onChange = index => Toast(`标签名 ${index + 1}`);
    return {
      active,
      onChange
    };
  }
};
```

## API

### Sidebar Props

| 参数       | 说明             | 类型               | 默认值 |
| ---------- | ---------------- | ------------------ | ------ |
| modelValue | 当前导航项的索引 | _number \| string_ | `0`    |

### Sidebar Events

| 事件名 | 说明             | 回调参数                |
| ------ | ---------------- | ----------------------- |
| change | 切换导航项时触发 | index: 当前导航项的索引 |

### SidebarItem Props

| 参数     | 说明                                                                                      | 类型               | 默认值  |
| -------- | ----------------------------------------------------------------------------------------- | ------------------ | ------- |
| gtitle   | 内容                                                                                      | _string_           | `''`    |
| dot      | 是否显示右上角小红点                                                                      | _boolean_          | `false` |
| badge    | 图标右上角徽标的内容                                                                      | _number \| string_ | -       |
| disabled | 是否禁用该项                                                                              | _boolean_          | `false` |
| url      | 点击后跳转的链接地址                                                                      | _string_           | -       |
| to       | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -       |
| replace  | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false` |

### SidebarItem Events

| 事件名 | 说明       | 回调参数                |
| ------ | ---------- | ----------------------- |
| click  | 点击时触发 | index: 当前导航项的索引 |

### SidebarItem Slots

| Name   | Description |
| ------ | ----------- |
| gtitle | 自定义标题  |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                               | 默认值              | 描述 |
| ---------------------------------- | ------------------- | ---- |
| @sidebar-width                     | `80px`              | -    |
| @sidebar-font-size                 | `@font-size-md`     | -    |
| @sidebar-line-height               | `@line-height-md`   | -    |
| @sidebar-text-color                | `@text-color`       | -    |
| @sidebar-disabled-text-color       | `@gray-5`           | -    |
| @sidebar-padding                   | `20px @padding-sm`  | -    |
| @sidebar-active-color              | `@active-color`     | -    |
| @sidebar-background-color          | `@background-color` | -    |
| @sidebar-selected-font-weight      | `@font-weight-bold` | -    |
| @sidebar-selected-text-color       | `@text-color`       | -    |
| @sidebar-selected-border-width     | `4px`               | -    |
| @sidebar-selected-border-height    | `16px`              | -    |
| @sidebar-selected-border-color     | `@red`              | -    |
| @sidebar-selected-background-color | `@white`            | -    |
