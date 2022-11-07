# ActionSheet 动作面板

### 介绍

底部弹起的模态面板，包含与当前情境相关的多个选项。

## 代码演示

### 基础用法

动作面板通过 `actions` 属性来定义选项，`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象格式见文档下方表格。

```html
<glue-cell is-link title="基础用法" @click="show = true" />
<glue-action-sheet :show="show.basic" :actions.prop="simpleActions" @glueSelect="onSelect" @glueClose="glueClose" />
```

```js
export default {
  data() {
    return {
      basicUsage: "基础用法",
      cancel: "取消",
      title: "自定义面板",
      content: "内容",
      option1: "选项一",
      option2: "选项二",
      option3: "选项三",
      subname: "描述信息",
      showCancel: "展示取消按钮",
      buttonText: "弹出菜单",
      customPanel: "自定义面板",
      description: "这是一段描述信息",
      optionStatus: "选项状态",
      coloredOption: "着色选项",
      disabledOption: "禁用选项",
      showDescription: "展示描述信息",
      simpleActions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
      statusActions: [
        { name: "选项一", color: "#ee0a24" },
        { name: "选项二", disabled: true },
        { name: "选项三", subname: "描述信息", loading: true }
      ],
      actionsWithDescription: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三", subname: "描述信息" }],
      show: {
        basic: false,
        cancel: false,
        title: false,
        status: false,
        description: false
      }
    };
  },

  methods: {
    onSelect(item) {
      this.show.basic = false;
      this.$toast(item.name);
    },
    glueClose() {
      this.show.basic = false;
      console.log(this.show.basic, "this.show.basic");
      this.$toast(this.cancel);
    }
  }
};
</script>
```

### 展示取消按钮

设置 `cancel-text` 属性后，会在底部展示取消按钮，点击后关闭当前面板并触发 `cancel` 事件。

```html
<glue-action-sheet
  :show="show.cancel"
  :actions.prop="simpleActions"
  close-on-click-action
  :cancel-text="cancel"
  @glueClose="glueClose"
/>
```

### 展示描述信息

通过 `description` 可以在菜单顶部显示描述信息，通过选项的 `subname` 属性可以在选项文字的右侧展示描述信息。

```html
<glue-action-sheet
  :show="show.description"
  :actions.prop="actionsWithDescription"
  close-on-click-action
  :cancel-text="cancel"
  :description="description"
/>
```

### 选项状态

可以通过 `loading` 和 `disabled` 将选项设置为加载状态或禁用状态，或者通过`color`设置选项的颜色

```html
<glue-action-sheet :show="show.status" close-on-click-action :actions.prop="statusActions" :cancel-text="cancel" />
```

### 自定义面板

通过插槽可以自定义面板的展示内容，同时可以使用`title`属性展示标题栏

```html
<glue-action-sheet :show="show.title" :gtitle="title">
  <div class="demo-action-sheet-content">{{ content }}</div>
</glue-action-sheet>

<style>
  .content {
    padding: 16px 16px 160px;
  }
</style>
```

## API

### Props

| 参数                   | 说明                                                                      | 类型                | 默认值  |
| ---------------------- | ------------------------------------------------------------------------- | ------------------- | ------- |
| v-model:show           | 是否显示动作面板                                                          | _boolean_           | `false` |
| actions                | 面板选项列表                                                              | _Action[]_          | `[]`    |
| title                  | 顶部标题                                                                  | _string_            | -       |
| cancel-text            | 取消按钮文字                                                              | _string_            | -       |
| description            | 选项上方的描述信息                                                        | _string_            | -       |
| closeable              | 是否显示关闭图标                                                          | _boolean_           | `true`  |
| close-icon             | 关闭[图标名称](#/zh-CN/icon)或图片链接                                    | _string_            | `cross` |
| duration               | 动画时长，单位秒                                                          | _number \| string_  | `0.3`   |
| round                  | 是否显示圆角                                                              | _boolean_           | `true`  |
| overlay                | 是否显示遮罩层                                                            | _boolean_           | `true`  |
| lock-scroll            | 是否锁定背景滚动                                                          | _boolean_           | `true`  |
| lazy-render            | 是否在显示弹层时才渲染节点                                                | _boolean_           | `true`  |
| close-on-popstate      | 是否在页面回退时自动关闭                                                  | _boolean_           | `false` |
| close-on-click-action  | 是否在点击选项后关闭                                                      | _boolean_           | `false` |
| close-on-click-overlay | 是否在点击遮罩层后关闭                                                    | _boolean_           | `true`  |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_           | `true`  |
| teleport               | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi)        | _string \| Element_ | -       |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                     | 类型                        |
| --------- | ------------------------ | --------------------------- |
| name      | 标题                     | _string_                    |
| subname   | 二级标题                 | _string_                    |
| color     | 选项文字颜色             | _string_                    |
| className | 为对应列添加额外的 class | _string \| Array \| object_ |
| loading   | 是否为加载状态           | _boolean_                   |
| disabled  | 是否为禁用状态           | _boolean_                   |

### Events

| 事件名        | 说明                                     | 回调参数                        |
| ------------- | ---------------------------------------- | ------------------------------- |
| select        | 点击选项时触发，禁用或加载状态下不会触发 | _action: Action, index: number_ |
| cancel        | 点击取消按钮时触发                       | -                               |
| open          | 打开面板时触发                           | -                               |
| close         | 关闭面板时触发                           | -                               |
| opened        | 打开面板且动画结束后触发                 | -                               |
| closed        | 关闭面板且动画结束后触发                 | -                               |
| click-overlay | 点击遮罩层时触发                         | -                               |

### Slots

| 名称        | 说明                 |
| ----------- | -------------------- |
| default     | 自定义面板的展示内容 |
| description | 自定义描述文案       |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                   | 默认值              | 描述 |
| -------------------------------------- | ------------------- | ---- |
| @action-sheet-max-height               | `80%`               | -    |
| @action-sheet-header-height            | `48px`              | -    |
| @action-sheet-header-font-size         | `@font-size-lg`     | -    |
| @action-sheet-description-color        | `@gray-6`           | -    |
| @action-sheet-description-font-size    | `@font-size-md`     | -    |
| @action-sheet-description-line-height  | `@line-height-md`   | -    |
| @action-sheet-item-background          | `@white`            | -    |
| @action-sheet-item-font-size           | `@font-size-lg`     | -    |
| @action-sheet-item-line-height         | `@line-height-lg`   | -    |
| @action-sheet-item-text-color          | `@text-color`       | -    |
| @action-sheet-item-disabled-text-color | `@gray-5`           | -    |
| @action-sheet-subname-color            | `@gray-6`           | -    |
| @action-sheet-subname-font-size        | `@font-size-sm`     | -    |
| @action-sheet-subname-line-height      | `@line-height-sm`   | -    |
| @action-sheet-close-icon-size          | `22px`              | -    |
| @action-sheet-close-icon-color         | `@gray-5`           | -    |
| @action-sheet-close-icon-active-color  | `@gray-6`           | -    |
| @action-sheet-close-icon-padding       | `0 @padding-md`     | -    |
| @action-sheet-cancel-text-color        | `@gray-7`           | -    |
| @action-sheet-cancel-padding-top       | `@padding-xs`       | -    |
| @action-sheet-cancel-padding-color     | `@background-color` | -    |
| @action-sheet-loading-icon-size        | `22px`              | -    |
