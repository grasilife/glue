# Overlay 遮罩层

### 介绍

创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。

## 代码演示

### 基础用法

```html
<glue-button type="primary"  @click="show = true" >显示遮罩层</glue-button>
<glue-overlay :show="show" @click="show = false" />
```

```js
<script>
export default {
  data() {
    return {
      show: false,
    };
  }
};
</script>
```

### 嵌入内容

通过默认插槽可以在遮罩层上嵌入任意内容。

```html
<glue-button type="primary" style="margin-left: 16px;" @click="showEmbedded = true">嵌入内容</glue-button>
<glue-overlay :show="show" @click="show = false">
  <div class="wrapper" @click.stop>
    <div class="block" />
  </div>
</glue-overlay>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>
```

## API

### Props

| 参数         | 说明                                            | 类型               | 默认值  |
|--------------|-----------------------------------------------|--------------------|---------|
| show         | 是否展示遮罩层                                  | _boolean_          | `false` |
| z-index      | z-index 层级                                    | _number \| string_ | `1`     |
| duration     | 动画时长，单位秒                                 | _number \| string_ | `0.3`   |
| class-name   | 自定义类名                                      | _string_           | -       |
| custom-style | 自定义样式                                      | _object_           | -       |
| lock-scroll  | 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动 | _boolean_          | `true`  |

### Events

| 事件名  | 说明     | 回调参数       |
|---------|--------|----------------|
| default | 默认事件 | _event: Event_ |

### Slots

| 名称    | 说明                              |
|---------|---------------------------------|
| default | 默认插槽，用于在遮罩层上方嵌入内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                      | 默认值               | 描述 |
|---------------------------|----------------------|------|
| @overlay-z-index          | `1`                  | -    |
| @overlay-background-color | `rgba(0, 0, 0, 0.7)` | -    |
