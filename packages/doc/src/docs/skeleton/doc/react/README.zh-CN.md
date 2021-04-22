# Skeleton 骨架屏

### 介绍

用于在内容加载过程中展示一组占位图形。

## 代码演示

### 基础用法

通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数。

```html
<glue-skeleton title-state :row="3" loading animate-state/>
```

### 显示头像

通过 `avatar` 属性显示头像占位图。

```html
<glue-skeleton title-state avatar :row="3" loading animate-state/>
```

### 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。

```html
 <glue-switch :value="show" size="24px" @glueChange="show = !show" />
      <glue-skeleton title-state avatar :row="3" :loading="!show" animate-state>
        <div class="demo-preview">
          <img src="https://grasilife.github.io/material/logo.svg" />
          <div class="demo-content">
            <h3>关于 Glue</h3>
            <p>Glue是一个基于web components的组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。</p>
          </div>
        </div>
      </glue-skeleton>
```

```js
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
```

## API

### Props

| 参数          | 说明                                         | 类型                                          | 默认值            |
|---------------|--------------------------------------------|-----------------------------------------------|-------------------|
| row           | 段落占位图行数                               | _number \| string_                            | `0`               |
| row-width     | 段落占位图宽度，可传数组来设置每一行的宽度    | _number \| string \|<br>(number \| string)[]_ | `100%`            |
| title-state   | 是否显示标题占位图                           | _boolean_                                     | `false`           |
| avatar        | 是否显示头像占位图                           | _boolean_                                     | `false`           |
| loading       | 是否显示骨架屏，传 `false` 时会展示子组件内容 | _boolean_                                     | `true`            |
| animate-state | 是否开启动画                                 | _boolean_                                     | `false`           |
| round         | 是否将标题和段落显示为圆角风格               | _boolean_                                     | `false`           |
| title-width   | 标题占位图宽度                               | _number \| string_                            | `40%`             |
| avatar-size   | 头像占位图大小                               | _number_                                      | `32`              |
| avatar-shape  | 头像占位图形状，可选值为 `square`             | _string_                                      | `round`\|`square` |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                              | 默认值          | 描述 |
|-----------------------------------|-----------------|------|
| @skeleton-row-height              | `16px`          | -    |
| @skeleton-row-background-color    | `@active-color` | -    |
| @skeleton-row-margin-top          | `@padding-sm`   | -    |
| @skeleton-title-width             | `40%`           | -    |
| @skeleton-avatar-size             | `32px`          | -    |
| @skeleton-avatar-background-color | `@active-color` | -    |
| @skeleton-animation-duration      | `1.2s`          | -    |
