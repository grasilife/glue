# Circle 环形进度条

### 介绍

圆环形的进度条组件，支持进度渐变动画。

## 代码演示

### 基础用法

`rate` 属性表示进度条的目标进度，`current-rate` 表示动画过程中的实时进度。当 `rate` 发生变化时，`current-rate` 会以 `speed` 的速度变化，直至达到 `rate` 设定的值。

```html
<glue-circle
  :current-rate="currentRate1"
  :rate="rate"
  :speed="100"
  @glueChange="change"
  :text="currentRate1.toFixed(0) + '%'"
></glue-circle>
```

```js
<script>
const format = rate => Math.min(Math.max(rate, 0), 100);

export default {
  data() {
    return {
      addText: "增加",
      decreaseText: "减少",
      basicUsage: "基础用法",
      gradient: "渐变色",
      customSize: "大小定制",
      customStyle: "样式定制",
      customColor: "颜色定制",
      customWidth: "宽度定制",
      counterClockwise: "逆时针",
      rate: 70,
      currentRate1: 70,
      currentRate2: 70,
      currentRate3: 70,
      currentRate4: 70,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      }
    };
  },
    methods: {
    add() {
      this.rate = format(this.rate + 20);
    },
    change(value) {
      console.log(value, "value");
      this.currentRate1 = value.detail;
    },
    reduce() {
      this.rate = format(this.rate - 20);
    }
  }
};
</script>
```

### 宽度定制

通过 `stroke-width` 属性来控制进度条宽度。

```html
<glue-circle
  :current-rate="currentRate3"
  :rate="rate"
  :speed="100"
  :stroke-width="60"
  :text="customWidth"
></glue-circle>
```

### 颜色定制

通过 `color` 属性来控制进度条颜色，`layer-color` 属性来控制轨道颜色。

```html
<glue-circle
  :current-rate="currentRate3"
  line-color="#ee0a24"
  :rate="rate"
  layer-color="#ebedf0"
  :speed="100"
  :text="customColor"
/>
```

### 渐变色

`color` 属性支持传入对象格式来定义渐变色。

```html
<glue-circle
  :current-rate="currentRate2"
  :rate="rate"
  :speed="100"
  :line-color="gradientColor"
  :text="gradient"
></glue-circle>
```

### 逆时针方向

将 `clockwise` 设置为 `false`，进度会从逆时针方向开始。

```html
<glue-circle
  :current-rate="currentRate4"
  line-color="#07c160"
  :rate="rate"
  :speed="100"
  :clockwise="true"
  :text="counterClockwise"
  style="margin-top: 15px;"
/>
```

### 大小定制

通过 `size` 属性设置圆环直径。

```html
<glue-circle
  :current-rate="currentRate4"
  line-color="#7232dd"
  :rate="rate"
  :speed="100"
  size="120px"
  :clockwise="true"
  :text="customSize"
  style="margin-top: 15px;"
></glue-circle>
```

## API

### Props

| 参数           | 说明                                       | 类型               | 默认值    |
| -------------- | ------------------------------------------ | ------------------ | --------- |
| current-rate   | 当前进度                                   | _number_           | -         |
| rate           | 目标进度                                   | _number \| string_ | `100`     |
| size           | 圆环直径，默认单位为 `px`                  | _number \| string_ | `100px`   |
| color          | 进度条颜色，传入对象格式可以定义渐变色     | _string \| object_ | `#1989fa` |
| layer-color    | 轨道颜色                                   | _string_           | `white`   |
| fill           | 填充颜色                                   | _string_           | `none`    |
| speed          | 动画速度（单位为 rate/s）                  | _number \| string_ | `0`       |
| text           | 文字                                       | _string_           | -         |
| stroke-width   | 进度条宽度                                 | _number \| string_ | `40`      |
| stroke-linecap | 进度条端点的形状，可选值为 `sqaure` `butt` | _string_           | `round`   |
| clockwise      | 是否顺时针增加                             | _boolean_          | `false`   |

### Slots

| 名称    | 说明           |
| ------- | -------------- |
| default | 自定义文字内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                     | 默认值              | 描述 |
| ------------------------ | ------------------- | ---- |
| @circle-size             | `100px`             | -    |
| @circle-color            | `@blue`             | -    |
| @circle-layer-color      | `@white`            | -    |
| @circle-text-color       | `@text-color`       | -    |
| @circle-text-font-weight | `@font-weight-bold` | -    |
| @circle-text-font-size   | `@font-size-md`     | -    |
| @circle-text-line-height | `@line-height-md`   | -    |
