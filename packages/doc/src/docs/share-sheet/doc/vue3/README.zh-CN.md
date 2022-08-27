# ShareSheet 分享面板

### 介绍

底部弹起的分享面板，用于展示各分享渠道对应的操作按钮，不含具体的分享逻辑。

## 代码演示

### 基础用法

分享面板通过 `options` 属性来定义分享选项，数组的每一项是一个对象，对象格式见文档下方表格。

```html
<glue-cell g_title="显示分享面板" @click="showShare = true" />
<glue-share-sheet :show="show.basic" :g_title="title" :options.prop="options" @select="onSelect" />
```

```js
<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      qq: "QQ",
      name: "名称",
      link: "复制链接",
      title: "立即分享给好友",
      weibo: "微博",
      wechat: "微信",
      poster: "分享海报",
      qrcode: "二维码",
      multiLine: "展示多行选项",
      showSheet: "显示分享面板",
      withDesc: "展示描述信息",
      customIcon: "自定义图标",
      description: "描述信息",
      weappQrcode: "小程序码",
      wechatMoments: "朋友圈",
      show: {
        basic: false,
        withDesc: false,
        multiLine: false,
        customIcon: false
      }
    };
  },

  computed: {
    options() {
      return [
        { name: this.wechat, icon: "wechat" },
        { name: this.weibo, icon: "weibo" },
        { name: this.link, icon: "link" },
        { name: this.poster, icon: "poster" },
        { name: this.qrcode, icon: "qrcode" }
      ];
    },

    multiLineOptions() {
      return [
        [
          { name: this.wechat, icon: "wechat" },
          { name: this.wechatMoments, icon: "wechat-moments" },
          { name: this.weibo, icon: "weibo" },
          { name: this.qq, icon: "qq" }
        ],
        [
          { name: this.link, icon: "link" },
          { name: this.poster, icon: "poster" },
          { name: this.qrcode, icon: "qrcode" },
          { name: this.weappQrcode, icon: "weapp-qrcode" }
        ]
      ];
    },

    customIconOptions() {
      return [
        {
          name: this.name,
          icon: "https://img.yzcdn.cn/vant/custom-icon-fire.png"
        },
        {
          name: this.name,
          icon: "https://img.yzcdn.cn/vant/custom-icon-light.png"
        },
        {
          name: this.name,
          icon: "https://img.yzcdn.cn/vant/custom-icon-water.png"
        }
      ];
    },

    optionsWithDesc() {
      return [
        { name: this.wechat, icon: "wechat" },
        { name: this.weibo, icon: "weibo" },
        {
          name: this.link,
          icon: "link",
          description: this.description
        },
        { name: this.poster, icon: "poster" },
        { name: this.qrcode, icon: "qrcode" }
      ];
    }
  },

  methods: {
    onSelect(option) {
      this.$toast(option.name);
      this.show.basic = false;
      this.show.withDesc = false;
      this.show.multiLine = false;
      this.show.customIcon = false;
    }
  }
};
</script>
```

### 展示多行选项

当分享选项的数量较多时，可以将 `options` 定义为数组嵌套的格式，每个子数组会作为一行选项展示。

```html
<glue-share-sheet :show="show.multiLine" :g_title="title" :options.prop="multiLineOptions" @select="onSelect" />
```

### 自定义图标

除了使用内置的几种图标外，可以直接在 `icon` 中传入图片 URL 来使用自定义的图标。

```html
<glue-share-sheet :show="show.customIcon" :options.prop="customIconOptions" @select="onSelect" />
```

### 展示描述信息

通过 `description` 属性可以设置标题下方的描述文字, 在 `options` 内设置 `description` 属性可以添加分享选项描述。

```html
<glue-share-sheet
  :show="show.withDesc"
  :g_title="title"
  :options="optionsWithDesc"
  :description="description"
  @select="onSelect"
/>
```

## API

### Props

| 参数                   | 说明                                                                      | 类型                | 默认值   |
| ---------------------- | ------------------------------------------------------------------------- | ------------------- | -------- |
| v-model:show           | 是否显示分享面板                                                          | _boolean_           | `false`  |
| options                | 分享选项                                                                  | _Option[]_          | `[]`     |
| title                  | 顶部标题                                                                  | _string_            | -        |
| cancel-text            | 取消按钮文字，传入空字符串可以隐藏按钮                                    | _string_            | `'取消'` |
| description            | 标题下方的辅助描述文字                                                    | _string_            | -        |
| duration               | 动画时长，单位秒                                                          | _number \| string_  | `0.3`    |
| overlay                | 是否显示遮罩层                                                            | _boolean_           | `true`   |
| lock-scroll            | 是否锁定背景滚动                                                          | _boolean_           | `true`   |
| lazy-render            | 是否在显示弹层时才渲染内容                                                | _boolean_           | `true`   |
| close-on-popstate      | 是否在页面回退时自动关闭                                                  | _boolean_           | `true`   |
| close-on-click-overlay | 是否在点击遮罩层后关闭                                                    | _boolean_           | `true`   |
| safe-area-inset-bottom | 是否开启[底部安全区适配](#/zh-CN/advanced-usage#di-bu-an-quan-qu-gua-pei) | _boolean_           | `true`   |
| teleport               | 指定挂载的节点，[用法示例](#/zh-CN/popup#zhi-ding-gua-zai-wei-zhi)        | _string \| Element_ | -        |

### Option 数据结构

`options`属性为一个对象数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名        | 说明                                                                                                            | 类型     |
| ----------- | --------------------------------------------------------------------------------------------------------------- | -------- |
| name        | 分享渠道名称                                                                                                    | _string_ |
| description | 分享选项描述                                                                                                    | _string_ |
| icon        | 图标，可选值为 `wechat` `weibo` `qq` `link` `qrcode` `poster` `weapp-qrcode` `wechat-moments`，支持传入图片 URL | _string_ |
| className   | 分享选项类名                                                                                                    | _string_ |

### Events

| 事件名        | 说明               | 回调参数                        |
| ------------- | ------------------ | ------------------------------- |
| select        | 点击分享选项时触发 | _option: Option, index: number_ |
| cancel        | 点击取消按钮时触发 | -                               |
| click-overlay | 点击遮罩层时触发   | -                               |

### Slots

| 名称        | 说明           |
| ----------- | -------------- |
| title       | 自定义顶部标题 |
| description | 自定义描述文字 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                      | 默认值                                  | 描述 |
| ----------------------------------------- | --------------------------------------- | ---- |
| @share-sheet-header-padding               | `@padding-sm @padding-md @padding-base` | -    |
| @share-sheet-title-color                  | `@text-color`                           | -    |
| @share-sheet-title-font-size              | `@font-size-md`                         | -    |
| @share-sheet-title-line-height            | `@line-height-md`                       | -    |
| @share-sheet-description-color            | `@gray-6`                               | -    |
| @share-sheet-description-font-size        | `@font-size-sm`                         | -    |
| @share-sheet-description-line-height      | `16px`                                  | -    |
| @share-sheet-icon-size                    | `48px`                                  | -    |
| @share-sheet-option-name-color            | `@gray-7`                               | -    |
| @share-sheet-option-name-font-size        | `@font-size-sm`                         | -    |
| @share-sheet-option-description-color     | `@gray-5`                               | -    |
| @share-sheet-option-description-font-size | `@font-size-sm`                         | -    |
| @share-sheet-cancel-button-font-size      | `@font-size-lg`                         | -    |
| @share-sheet-cancel-button-height         | `48px`                                  | -    |
| @share-sheet-cancel-button-background     | `@white`                                | -    |

## 常见问题

### 如何实现分享逻辑？

在不同的 App 或浏览器中，存在各式各样的分享接口或分享方式，因此 ShareSheet 组件不提供具体的分享逻辑，需要开发者根据业务场景自行实现。

#### 微信内分享

由于微信未提供分享相关的 API，需要引导用户点击右上角进行分享。

#### App 内分享

可以通过 JSBridge 调用原生应用的 SDK 进行分享。

#### 分享海报或二维码

可以通过 [Popup](#/zh-CN/popup) 组件以弹层的形式展示图片，然后引导用户保存图片进行分享。
