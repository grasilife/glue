# ActionBar 动作栏



## 代码演示

### 基础用法

```html
<glue-action-bar>
  <glue-action-bar-icon icon="chat-o"  @click="onClickIcon">客服</glue-action-bar-icon>
  <glue-action-bar-icon icon="cart-o"  @click="onClickIcon">购物车</glue-action-bar-icon>
  <glue-action-bar-icon icon="shop-o"  @click="onClickIcon">店铺</glue-action-bar-icon>
  <glue-action-bar-button type="danger" @click="onClickButton" :left-round="true" :right-round="true">立即购买<glue-action-bar-button>
</glue-action-bar>
```

```js
export default {
  data() {
    return {};
  },
  methods: {
    onClickIcon() {},
    onClickButton() {}
  }
};
```

### 徽标提示

在 ActionBarIcon 组件上设置 `dot` 属性后，会在图标右上角展示一个小红点；设置 `badge` 属性后，会在图标右上角展示相应的徽标。

```html
<glue-action-bar>
  <glue-action-bar-icon icon="chat-o"  dot>客服</glue-action-bar-icon>
  <glue-action-bar-icon icon="cart-o"  badge="5">购物车</glue-action-bar-icon>
  <glue-action-bar-icon icon="shop-o"  badge="12">店铺</glue-action-bar-icon>
  <glue-action-bar-button type="warning" :left-round="true">加入购物车</glue-action-bar-button>
  <glue-action-bar-button type="danger"  :right-round="true">立即购买</glue-action-bar-button>
</glue-action-bar>
```

### 自定义图标颜色

通过 ActionBarIcon 的 `color` 属性可以自定义图标的颜色。

```html
<glue-action-bar>
  <glue-action-bar-icon icon="chat-o"  color="#ee0a24">客服</glue-action-bar-icon>
  <glue-action-bar-icon icon="cart-o">购物车</glue-action-bar-icon>
  <glue-action-bar-icon icon="star"  color="#ff5000">已收藏</glue-action-bar-icon>
  <glue-action-bar-button type="warning">加入购物车</glue-action-bar-icon>
  <glue-action-bar-button type="danger">立即购买</glue-action-bar-icon>
</glue-action-bar>
```

### 自定义按钮颜色

通过 ActionBarButton 的 `color` 属性可以自定义按钮的颜色，支持传入 `linear-gradient` 渐变色。

```html
<glue-action-bar>
  <glue-action-bar-icon icon="chat-o">客服</glue-action-bar-icon>
  <glue-action-bar-icon icon="shop-o">店铺</glue-action-bar-icon>
  <glue-action-bar-button color="#be99ff" type="warning" :left-round="true">加入购物车</glue-action-bar-button>
  <glue-action-bar-button color="#7232dd" type="danger" :right-round="true">立即购买</glue-action-bar-button>
</glue-action-bar>
```

## API

### ActionBar Props

| 参数                   | 说明                                                                      | 类型      | 默认值 |
|------------------------|-------------------------------------------------------------------------|-----------|--------|
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_ | `true` |

### ActionBarIcon Props

| 参数       | 说明                     | 类型                        | 默认值    |
|------------|------------------------|-----------------------------|-----------|
| icon       | 图标                     | _string_                    | -         |
| color      | 图标颜色                 | _string_                    | `#323233` |
| icon-class | 图标额外类名             | _string \| Array \| object_ | -         |
| dot        | 是否显示图标右上角小红点 | _boolean_                   | `false`   |
| badge      | 图标右上角徽标的内容     | _number \| string_          | -         |

### ActionBarButton Props

| 参数  | 说明                                                  | 类型     | 默认值    |
|-------|-----------------------------------------------------|----------|-----------|
| type  | 按钮类型，可选值为 `primary` `info` `warning` `danger` | _string_ | `default` |
| color | 按钮颜色，支持传入 `linear-gradient` 渐变色            | _string_ | -         |
| icon  | 左侧[图标名称](#/zh-CN/icon)或图片链接                | _string_ | -         |
| disabled | 是否禁用按钮 | _boolean_ | `false` | - |
| loading | 是否显示为加载状态 | _boolean_ | `false` | - |

### ActionBarIcon Slots

| 名称    | 说明       |
|---------|----------|
| default | 文本内容   |
| icon    | 自定义图标 |

### ActionBarButton Slots

| 名称    | 说明         |
|---------|------------|
| default | 按钮显示内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值             | 描述 |
|----------------------------------|--------------------|------|
| @action-bar-background-color     | `@white`           | -    |
| @action-bar-height               | `50px`             | -    |
| @action-bar-icon-width           | `48px`             | -    |
| @action-bar-icon-height          | `100%`             | -    |
| @action-bar-icon-color           | `@text-color`      | -    |
| @action-bar-icon-size            | `18px`             | -    |
| @action-bar-icon-font-size       | `@font-size-xs`    | -    |
| @action-bar-icon-active-color    | `@active-color`    | -    |
| @action-bar-icon-text-color      | `@gray-7`          | -    |
| @action-bar-button-height        | `40px`             | -    |
| @action-bar-button-warning-color | `@gradient-orange` | -    |
| @action-bar-button-danger-color  | `@gradient-red`    | -    |

