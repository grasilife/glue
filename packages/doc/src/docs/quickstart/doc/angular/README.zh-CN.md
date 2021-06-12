# 快速上手

### 介绍

通过本章节你可以了解到 Glue 的安装方法和基本使用姿势。

### 安装

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
Vue.config.ignoredElements = [/glue-\w*/];

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

## 常见问题

### 在 HTML 中无法正确渲染组件？

在 HTML 中使用 Glue 组件时，你可能会碰到部分示例代码无法正确渲染的情况，比如下面的用法：

```html
<glue-cell-group>
  <glue-cell title="单元格" value="内容" />
  <glue-cell title="单元格" value="内容" />
</glue-cell-group>
```

这是因为 HTML 并不支持自闭合的自定义元素，也就是说 `<glue-cell />` 这样的语法是不被识别的，使用完整的闭合标签可以避免这个问题：

```html
<glue-cell-group>
  <glue-cell title="单元格" value="内容"></glue-cell>
  <glue-cell title="单元格" value="内容"></glue-cell>
</glue-cell-group>
```

在单文件组件、字符串模板和 JSX 中可以使用自闭合的自定义元素，因此不会出现这个问题。
### 组件名称,属性,slot的写法规范

在glue始终是横线连接 (kebab-case),而非单词大写开头 (PascalCase)

正确的写法

```html
<glue-cell title="单元格" is-link arrow-direction="down" value="内容" ></glue-cell>
```

错误的写法

```html
<glueCell title="单元格" is-link arrowDirection="down" value="内容" ></glue-cell>
```
