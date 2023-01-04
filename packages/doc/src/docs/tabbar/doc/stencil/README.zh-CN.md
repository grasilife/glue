# Tabbar 标签栏

## 代码演示

### 基础用法

`modelValue` 默认绑定选中标签的索引值，通过修改 `modelValue` 即可切换选中的标签。

```html
<glue-tabbar :model-value.prop="active">
  <glue-tabbar-item icon="home-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="search" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="friends-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="setting-o" gtitle="标签"></glue-tabbar-item>
</glue-tabbar>
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

### 通过名称匹配

在标签指定 `name` 属性的情况下，`:model-value.prop` 的值为当前标签的 `name`。

```html
<glue-tabbar :model-value.prop="active">
  <glue-tabbar-item name="home" icon="home-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item name="search" icon="search" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item name="friends" icon="friends-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item name="setting" icon="setting-o" gtitle="标签"></glue-tabbar-item>
</glue-tabbar>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const active = ref("home");
    return { active };
  }
};
```

### 徽标提示

设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<glue-tabbar :model-value.prop="active">
  <glue-tabbar-item icon="home-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="search" dot gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="friends-o" badge="5" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="setting-o" badge="20" gtitle="标签"></glue-tabbar-item>
</glue-tabbar>
```

### 自定义图标

通过 `icon` 插槽自定义图标，可以通过 `slot-scope` 判断标签是否选中。

```html
<glue-tabbar :model-value.prop="active">
  <glue-tabbar-item badge="3">
    <span>自定义</span>
    <template #icon="props">
      <img :src="props.active ? icon.active : icon.inactive" />
    </template>
  </glue-tabbar-item>
  <glue-tabbar-item icon="search" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="setting-o" gtitle="标签"></glue-tabbar-item>
</glue-tabbar>
```

```js
import { ref } from "vue";

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active: "https://img01.yzcdn.cn/vant/user-active.png",
      inactive: "https://img01.yzcdn.cn/vant/user-inactive.png"
    };
    return {
      icon,
      active
    };
  }
};
```

### 自定义颜色

```html
<glue-tabbar :model-value.prop="active" active-color="#ee0a24" inactive-color="#000">
  <glue-tabbar-item icon="home-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="search" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="friends-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item icon="setting-o" gtitle="标签"></glue-tabbar-item>
</glue-tabbar>
```

### 监听切换事件

```html
<glue-tabbar :model-value.prop="active" @change="onChange">
  <glue-tabbar-item icon="home-o" gtitle="标签1"></glue-tabbar-item>
  <glue-tabbar-item icon="search" gtitle="标签2"></glue-tabbar-item>
  <glue-tabbar-item icon="friends-o" gtitle="标签3"></glue-tabbar-item>
  <glue-tabbar-item icon="setting-o" gtitle="标签4"></glue-tabbar-item>
</glue-tabbar>
```

```js
import { ref } from "vue";
import { Toast } from "vant";

export default {
  setup() {
    const active = ref(0);
    const onChange = index => Toast(`标签 ${index}`);
    return {
      icon,
      onChange
    };
  }
};
```

### 路由模式

标签栏支持路由模式，用于搭配 `vue-router` 使用。路由模式下会匹配页面路径和标签的 `to` 属性，并自动选中对应的标签。

```html
<router-view />

<glue-tabbar route>
  <glue-tabbar-item replace to="/home" icon="home-o" gtitle="标签"></glue-tabbar-item>
  <glue-tabbar-item replace to="/search" icon="search" gtitle="标签"></glue-tabbar-item>
</glue-tabbar>
```

## API

### Tabbar Props

| 参数                   | 说明                                                                                             | 类型                           | 默认值    |
| ---------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------ | --------- |
| modelValue             | 当前选中标签的名称或索引值                                                                       | _number \| string_             | `0`       |
| fixed                  | 是否固定在底部                                                                                   | _boolean_                      | `true`    |
| border                 | 是否显示外边框                                                                                   | _boolean_                      | `true`    |
| z-index                | 元素 z-index                                                                                     | _number \| string_             | `1`       |
| active-color           | 选中标签的颜色                                                                                   | _string_                       | `#1989fa` |
| inactive-color         | 未选中标签的颜色                                                                                 | _string_                       | `#7d7e80` |
| route                  | 是否开启路由模式                                                                                 | _boolean_                      | `false`   |
| placeholder            | 固定在底部时，是否在标签位置生成一个等高的占位元素                                               | _boolean_                      | `false`   |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei)，设置 fixed 时默认开启 | _boolean_                      | `false`   |
| before-change          | 切换标签前的回调函数，返回 `false` 可阻止切换，支持返回 Promise                                  | _(name) => boolean \| Promise_ | -         |

### Tabbar Events

| 事件名     | 说明           | 回调参数                           |
| ---------- | -------------- | ---------------------------------- |
| glueChange | 切换标签时触发 | active: 当前选中标签的名称或索引值 |

### TabbarItem Props

| 参数        | 说明                                                                                      | 类型               | 默认值           |
| ----------- | ----------------------------------------------------------------------------------------- | ------------------ | ---------------- |
| name        | 标签名称，作为匹配的标识符                                                                | _number \| string_ | 当前标签的索引值 |
| icon        | [图标名称](#/zh-CN/icon)或图片链接                                                        | _string_           | -                |
| icon-prefix | 图标类名前缀，同 Icon 组件的 [class-prefix 属性](#/zh-CN/icon#props)                      | _string_           | `glue-icon`      |
| dot         | 是否显示图标右上角小红点                                                                  | _boolean_          | `false`          |
| badge       | 图标右上角徽标的内容                                                                      | _number \| string_ | -                |
| url         | 点击后跳转的链接地址                                                                      | _string_           | -                |
| to          | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to) | _string \| object_ | -                |
| replace     | 是否在跳转时替换当前页面历史                                                              | _boolean_          | `false`          |

### TabbarItem Slots

| 名称 | 说明       | 参数                   |
| ---- | ---------- | ---------------------- |
| icon | 自定义图标 | active: 是否为选中标签 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                 | 默认值                     | 描述 |
| ------------------------------------ | -------------------------- | ---- |
| @tabbar-height                       | `50px`                     | -    |
| @tabbar-z-index                      | `1`                        | -    |
| @tabbar-background-color             | `@white`                   | -    |
| @tabbar-item-font-size               | `@font-size-sm`            | -    |
| @tabbar-item-text-color              | `@gray-7`                  | -    |
| @tabbar-item-active-color            | `@blue`                    | -    |
| @tabbar-item-active-background-color | `@tabbar-background-color` | -    |
| @tabbar-item-line-height             | `1`                        | -    |
| @tabbar-item-icon-size               | `22px`                     | -    |
| @tabbar-item-margin-bottom           | `4px`                      | -    |
