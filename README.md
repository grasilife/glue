<p align="center">
    <img alt="logo" src="https://img.yzcdn.cn/vant/logo.png" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Glue</h1>

<p align="center">轻量、可靠的移动端web component组件库</p>

<p align="center">
    <img src="https://img.shields.io/npm/v/vant.svg?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/github/workflow/status/youzan/vant/CI/dev?style=flat-square" alt="npm version" />
    <img src="https://img.shields.io/codecov/c/github/youzan/vant/dev.svg?style=flat-square&color=#4fc08d" alt="Coverage Status" />
    <img src="https://img.shields.io/npm/dm/vant.svg?style=flat-square&color=#4fc08d" alt="downloads" />
    <img src="https://img.shields.io/jsdelivr/npm/hm/vant?style=flat-square" alt="Jsdelivr Hits">
    <img src="https://img.badgesize.io/https://unpkg.com/vant/lib/vant.min.js?compression=gzip&style=flat-square&label=gzip%20size&color=#4fc08d" alt="Gzip Size" />
</p>

### 介绍

Glue是一个基于web component构建的组件库,可以在react,vue2,vue3,angular和html等任何框架中,真正做到了一个组件库多框架运行

## 特性

- 提供 60 多个高质量组件，覆盖移动端各类场景
- 性能极佳，组件平均体积不到 1kb（min+gzip）
- 单元测试覆盖率 90%+，提供稳定性保障
- 完善的中英文文档和示例
- 支持全平台
- 支持按需引入
- 支持主题定制
- 支持国际化
- 支持 TypeScript
- 支持 SSR

## 安装

```bash
npm i glue-components -S

```

## 快速上手

### vue中使用

```js
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'test-components/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/test-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

new Vue({
  render: h => h(App)
}).$mount('#app');
```

```js
render() {
  return (
    <div>
      <test-stencil-component></test-stencil-component>
    </div>
  )
}
```

### React中使用

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// test-component is the name of our made up Web Component that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'test-components/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements();
});
```

```js
render() {
  return (
    <div>
      <test-stencil-component></test-stencil-component>
    </div>
  )
}
```

glue 也支持按需引入、CDN 引入等方式，详细说明见 [快速上手](https://vant-contrib.gitee.io/vant#/zh-CN/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](https://vant-contrib.gitee.io/vant/#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/youzan/vant/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/youzan/vant/pulls)。

## 浏览器支持

现代浏览器以及 Android 4.0+, iOS 8.0+.

## 链接

- [详细文档](https://vant-contrib.gitee.io/vant)
- [更新日志](https://vant-contrib.gitee.io/vant#/zh-CN/changelog)
- [Gitter 讨论组](https://gitter.im/vant-contrib/discuss?utm_source=share-link&utm_medium=link&utm_campaign=share-link)

## 手机预览

可以手机扫码以下二维码访问手机端 demo：

<img src="https://img.yzcdn.cn/vant/preview_qrcode_20180528.png" width="220" height="220" >

## 微信讨论群

欢迎大家加入 Glue 交流群一起讨论，添加下方微信并注明『加入 Glue 交流群』即可

<img src="https://cdn.nlark.com/yuque/0/2021/jpeg/111166/1612176324564-512412fa-2261-48b4-b66e-67ede1a0fc5f.jpeg" width="240" height="240" >

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
