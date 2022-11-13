# RFC

### 介绍

RFC" (request for comments)就是一个提案，大家可以尽情讨论，稳定下来的再去实现

#### 关于 stencil 特性的介绍,主要是 stencil 的组件封装模式不同于一般的框架(vue 和 react);

特性:https://stenciljs.com/docs/properties#reflect-properties-values-to-attributes-reflect;

#### FAQ

https://stenciljs.com/docs/faq;

#### 关于 Toast 组件的实现

无法使用 const element = document.createElement('glue-toast')去创建组件,只创建了一个标签,没有创建完整的 dom 节点

#### 关于 slot 传参数的问题

web components 目前没有 slot 传参的 api

#### 关于 slot 类型的问题

slot 没法传递到子组件的子组件,比如 glue-checkbox 的 icon 的 slot,没法传递的 glue-check 组件,而是只能传递到 glue-checkbox 组件,而且 slot 一旦传递就无法隐藏

#### 多语言的支持

暂时没有实现多语言的支持

#### 当 props 定义为 boolean 时存在问题

当 props 定义为 boolean 时,必须填写默认值,这样传递过来的值才是真正的 boolean 值

```js
  @Prop({ reflect: true }) isOpen: boolean = true;
```

如果不声明 props 的默认值,则当动态修改 isOpen 的时候 true 将变为字符串"true",false 将变为 null

```js
  @Prop({ reflect: true }) isOpen: boolean;
```

#### 当 props 为驼峰,react,vue 写法不同,在 jsx 中使用驼峰,在模版中使用短连接符,如果在 jsx(react)使用短连接符,则数组和对象会传递失败,而字符串类型没啥问题

vue(模版写法)写法

```html
<glue-checkbox :label-disabled="true">复选框</glue-checkbox>
```

react(jsx 写法)写法

```html
<glue-checkbox labelDisabled="{true}">复选框</glue-checkbox>
```

#### 当 props 传递数组和对象的问题

html 标签只能传递字符串属性,所以将使用下面的的方法对数据进行封装

```js
export interface SomeValue {
  name: string;
  value: string;
}
```
