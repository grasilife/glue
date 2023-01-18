# 更新日志

### 提示

当前文档为 Glue 的更新日志

### 介绍

Glue 遵循 [Semver](https://semver.org/lang/zh-CN/) 语义化版本规范。

**发布节奏**

- 修订号：每周发布，包含新特性和问题修复。
- 次版本号：每隔一至二个月发布，包含新特性和较大的功能更新，向下兼容。
- 主版本号：发布时间不定，包含不兼容更新。

## 更新内容

### [0.0.2-alpha.0](https://github.com/youzan/vant/compare/v3.0.4...v3.0.5)

`2021-06-12`

**Feature**

- Badge: 新增 offset 属性 [e0b463](https://github.com/youzan/vant/commit/e0b463630108b5031a02a8afcd0c141a7fdbac9e)
- Calendar: reset 方法支持重置到指定日期 [#7966](https://github.com/youzan/vant/issues/7966)
- Icons: 新增 wechat 图标, 重命名原 wechat 图标为 wechat-pay [b3cd8c](https://github.com/youzan/vant/commit/b3cd8c14aea9e542a9de4ba9999e50c3ecbf3b3c)
- ImagePreview: 调用 swipeTo 方法后自动重置缩放状态 [#7972](https://github.com/youzan/vant/issues/7972)
- ImagePreview: 调整 swipeDuration 的默认值为 300ms [#7970](https://github.com/youzan/vant/issues/7970)
- ShareSheet: 新增 wechat-moments 朋友圈图标 [ca66fb](https://github.com/youzan/vant/commit/ca66fbca36c5c839e3a294d465b0fc2bd7bf5039)
- Slider: 新增 readonly 属性 [4cd991](https://github.com/youzan/vant/commit/4cd991dfec01bd5342cb59b750d0dfa5901b8dc8)

**style**

- ShareSheet: 更新 qrcode 图标 [32a08b](https://github.com/youzan/vant/commit/32a08bb6807d9d38027e03eef376d82b6eab282e)
- TreeSelect: 新增右侧选项点击反馈 [bada31](https://github.com/youzan/vant/commit/bada315fb3b0fbdf30c663170c867bbbc274687c)

**Bug Fixes**

- Calendar: 修复调用 reset 方法时未重置到默认日期的问题 [#7967](https://github.com/youzan/vant/issues/7967)
- Dialog: 修复切换 allowHtml 时 message 渲染不正确的问题 [#7968](https://github.com/youzan/vant/issues/7968)
- ImagePreview: 修复 scale 事件的 index 参数为 undefined 的问题 [#7971](https://github.com/youzan/vant/issues/7971)

