# PasswordInput 密码输入框

### 介绍

带网格的输入框组件，可以用于输入密码、短信验证码等场景，通常与[数字键盘](#/zh-CN/number-keyboard)组件配合使用。

## 代码演示

### 基础用法

搭配数字键盘组件来实现密码输入功能。

```html
<!-- 密码输入框 -->
<glue-password-input :value="value" :focused="showKeyboard" @glueFocus="showKeyboard = true" />
<!-- 数字键盘 -->
<glue-number-keyboard v-model="value" :show="showKeyboard" @blur="showKeyboard = false" />
```

### 自定义长度

通过 `length` 属性来设置密码长度。

```html
<glue-password-input :value="value" :length="4" :focused="showKeyboard" @glueFocus="showKeyboard = true" />
```

### 格子间距

通过 `gutter` 属性来设置格子之间的间距。

```html
<glue-password-input :value="value" :gutter="10" :focused="showKeyboard" @glueFocus="showKeyboard = true" />
```

### 明文展示

将 `mask` 设置为 `false` 可以明文展示输入的内容，适用于短信验证码等场景。

```html
<glue-password-input :value="value" :mask.prop="false" :focused="showKeyboard" @glueFocus="showKeyboard = true" />
```

### 提示信息

通过 `info` 属性设置提示信息，通过 `error-info` 属性设置错误提示，例如当输入六位时提示密码错误。

```html
<glue-password-input
  :value="value"
  info="密码为 6 位数字"
  :error-info="errorInfo"
  :focused="showKeyboard"
  @glueFocus="showKeyboard = true"
/>
<glue-number-keyboard :show="!!current" @glueBlur="current = ''" @glueInput="onInput" @glueDelete="onDelete" />
```

```js
<script>
export default {
  data() {
    return {
      info: "密码为 6 位数字",
      errorInfo: "密码错误",
      value: {
        showInfo: "123",
        addGutter: "123",
        basicUsage: "123",
        removeMask: "123",
        customLength: "123"
      },
      current: "basicUsage"
    };
  },

  watch: {
    current(value) {
      if (value) {
        const el = this.$refs[value].$el;
        const { top } = el.getBoundingClientRect();
        window.scrollTo(0, window.pageYOffset + top);
      }
    }
  },

  methods: {
    onInput(event) {
      let key = event.detail;
      const { value, current } = this;
      const maxlegnth = current === "customLength" ? 4 : 6;
      const newValue = (value[current] + key).slice(0, maxlegnth);

      value[current] = newValue;

      if (current === "showInfo" && newValue.length === 6 && newValue !== "123456") {
        this.errorInfo = this.errorInfo;
      }
    },
    onDelete() {
      const { value, current } = this;
      value[current] = value[current].slice(0, value[current].length - 1);

      if (current === "showInfo") {
        this.errorInfo = "";
      }
    }
  }
};
</script>
```

## API

### Props

| 参数       | 说明                                                  | 类型               | 默认值  |
| ---------- | ----------------------------------------------------- | ------------------ | ------- |
| value      | 密码值                                                | _string_           | `''`    |
| info       | 输入框下方文字提示                                    | _string_           | -       |
| error-info | 输入框下方错误提示                                    | _string_           | -       |
| length     | 密码最大长度                                          | _number \| string_ | `6`     |
| gutter     | 输入框格子之间的间距，如 `20px` `2em`，默认单位为`px` | _number \| string_ | `0`     |
| mask       | 是否隐藏密码内容                                      | _boolean_          | `true`  |
| focused    | 是否已聚焦，聚焦时会显示光标                          | _boolean_          | `false` |

### Events

| 事件名    | 说明             | 回调参数 |
| --------- | ---------------- | -------- |
| glueFocus | 输入框聚焦时触发 | -        |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                             | 默认值          | 描述 |
| -------------------------------- | --------------- | ---- |
| @password-input-height           | `50px`          | -    |
| @password-input-margin           | `0 @padding-md` | -    |
| @password-input-font-size        | `20px`          | -    |
| @password-input-border-radius    | `6px`           | -    |
| @password-input-background-color | `@white`        | -    |
| @password-input-info-color       | `@gray-6`       | -    |
| @password-input-info-font-size   | `@font-size-md` | -    |
| @password-input-error-info-color | `@red`          | -    |
| @password-input-dot-size         | `10px`          | -    |
| @password-input-dot-color        | `@black`        | -    |
