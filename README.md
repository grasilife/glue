<p align="center">
    <img alt="logo" src="https://grasilife.github.io/material/logo.svg" width="120" style="margin-bottom: 10px;">
</p>

<h1 align="center">Glue</h1>

<p align="center">可能是中国第一个如此完善的移动端web components组件库</p>

### 介绍

Glue是一个基于web components构建的组件库,可以在react,vue2,vue3,angular和html等任何前端框架中,真正做到了一个组件库多框架运行

## 特性

- 提供 60 多个高质量组件，覆盖移动端各类场景
- 性能极佳
- 单元测试覆盖率 90%+，提供稳定性保障
- 完善的中英文文档和示例
- 支持全平台
- 支持按需引入
- 支持主题定制
- 支持 TypeScript

## 安装

```bash
npm i glue-components -S
```

## 快速上手

### vue中使用,参考[stencil的Vue中使用使用指南](<https://stenciljs.com/docs/vue/>)
```js
import Vue from 'vue';
import App from './App.vue';
import "glue-components/dist/glue-components/glue-components.css";
import { applyPolyfills, defineCustomElements } from 'glue-components/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the glue-components
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
      <glue-button></glue-button>
    </div>
  )
}
```

### React中使用,参考[stencil的React使用指南](<https://stenciljs.com/docs/react/>)

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "glue-components/dist/glue-components/glue-components.css";
import registerServiceWorker from './registerServiceWorker';

// test-component is the name of our made up web components that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'glue-components/loader';

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
      <glue-button></glue-button>
    </div>
  )
}
```
### Angular中使用,参考[stencil的Angular使用指南](<https://stenciljs.com/docs/angular/>)

```js
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements } from 'glue-components/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements();
```

```js
import {Component, ElementRef, ViewChild} from '@angular/core';

import 'glue-components';

@Component({
    selector: 'app-home',
    template: `<glue-button #test></glue-button>`,
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

    @ViewChild('test') myGlueButtonComponent: ElementRef<HTMLTestComponentElement>;

    async onAction() {
        await this.myGlueButtonComponent.nativeElement.testComponentMethod();
    }
}
```
### Ember中使用,参考[stencil的Ember使用指南](<https://stenciljs.com/docs/ember/>)

```bash
ember install ember-cli-stencil
```

glue 也支持按需引入、CDN 引入等方式，详细说明见 [快速上手](https://grasilife.github.io/glue/#/zh-CN/quickstart).

## 贡献代码

修改代码请阅读我们的 [开发指南](https://grasilife.github.io/glue/#/zh-CN/contribution)。

使用过程中发现任何问题都可以提 [Issue](https://github.com/grasilife/glue/issues) 给我们，当然，我们也非常欢迎你给我们发 [PR](https://github.com/grasilife/glue/pulls)。

## 浏览器支持

现代浏览器以及 Android 4.0+, iOS 8.0+, chrome 60+, Safari 10.1+,Firefox 63+,Edge 79+

## 链接

- [详细文档](https://grasilife.github.io/glue/#/zh-CN/home)
- [更新日志](https://grasilife.github.io/glue/#/zh-CN/changelog-v3)

## 手机预览

可以手机扫码以下二维码访问手机端 demo：
后续支持

## 微信讨论群

欢迎大家加入 Glue 交流群一起讨论，添加下方微信并注明『加入 Glue 交流群』即可

<img src="https://grasilife.github.io/material/wechat.jpeg" width="240" height="240" >

## 开源协议

本项目基于 [MIT](https://zh.wikipedia.org/wiki/MIT%E8%A8%B1%E5%8F%AF%E8%AD%89) 协议，请自由地享受和参与开源。
