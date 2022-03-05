# RFC

### 介绍

RFC" (request for comments)就是一个提案，大家可以尽情讨论，稳定下来的再去实现
#### 关于stencil特性的介绍,主要是stencil的组件封装模式不同于一般的框架(vue和react);
特性:https://stenciljs.com/docs/properties#reflect-properties-values-to-attributes-reflect;
#### FAQ
https://stenciljs.com/docs/faq;
#### 关于Toast组件的实现

无法使用 const element = document.createElement('glue-toast')去创建组件,只创建了一个标签,没有创建完整的dom节点

#### 关于slot传参数的问题

web components目前没有slot传参的api
#### 多语言的支持

暂时没有实现多语言的支持

#### 当props定义为boolean时存在问题

当props定义为boolean时,必须填写默认值,这样传递过来的值才是真正的boolean值
```js
  @Prop({ reflect: true }) isOpen: boolean = true;
```
如果不声明props的默认值,则当动态修改isOpen的时候true将变为字符串"true",false将变为null
```js
  @Prop({ reflect: true }) isOpen: boolean;
```

#### 当props为驼峰,react,vue写法不同,在jsx中使用驼峰,在模版中使用短连接符
vue(模版写法)写法
```html
<glue-checkbox  :label-disabled='true'>复选框</glue-checkbox>
```
react(jsx写法)写法
```html
<glue-checkbox  labelDisabled={true}>复选框</glue-checkbox>
```

#### 当props传递数组和对象的问题
html标签只能传递字符串属性,所以将使用下面的的方法对数据进行封装

```js
export interface SomeValue {
  name: string;
  value: string;
}
```
props属性为object
```js
import { Component, Prop, Watch } from '@stencil/core';
import { SomeValue } from './some-value.interface';
@Component({
  tag: 'object-sample',
  styleUrl: '...',
  shadow: true
})
export class ObjectSample {
  private _objectData: SomeValue;
  @Prop() objectData: SomeValue | string;

  @Watch('objectData')
  objectDataWatcher(newValue: SomeValue | string) {
    if (typeof newValue === 'string') {
      this._objectData = JSON.parse(newValue);
    }
    else {
      this._objectData = newValue;
    }
  }
  componentWillLoad() {
    this.objectDataWatcher(this.objectData);
  }
render() {
    return (
      <div class='object-data'>
        <span>{this._objectData.name}</span>
        <span>{this._objectData.value}</span>
      </div>
    );
  }
}
// Implementation
<object-sample
   object-data='{"name": "Bird", "value": "Chirp"}'>
</object-sample>
```
props属性为数组
```js
import { Component, Prop, Watch } from '@stencil/core';
import { SomeValue } from './some-value.interface';
@Component({
  tag: 'array-sample',
  styleUrl: '...',
  shadow: true
})
export class ArraySample {

  private _arrayData: SomeValue[];
  @Prop() arrayData: SomeValue[] | string;
@Watch('arrayData')
  arrayDataWatcher(newValue: SomeValue[] | string) {
    if (typeof newValue === 'string') {
       this._arrayData = JSON.parse(newValue);
    }
    else {
      this._arrayData = newValue;
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.objectData);
  }
render() {
    return [
      <div class='array-size'>{ this._arrayData.length }</div>,
      this._arrayData.map(x =>
        <div class='row'>
          <span>{x.name}</span>
          <span>{x.value}</span>
        </div>
      )
    ];
  }
}
// Implementation
<array-sample
   array-data='[{"name": "Cat", "value": "Meow"}, {"name": "Dog", "value": "Woof"}]'>
</array-sample>
```

