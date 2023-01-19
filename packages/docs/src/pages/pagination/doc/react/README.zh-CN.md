# Pagination 分页

## 代码演示

### 基础用法

通过 `value` 来绑定当前页码。

```html
<glue-pagination value="1" :total-items="24" :items-per-page="5" />
```


### 简单模式

 将 `mode` 设置为 `simple` 来切换到简单模式，此时分页器不会展示具体的页码按钮。

```html
<glue-pagination value="1" :page-count="12" mode="simple" />
```

### 显示省略号

设置 `force-ellipses` 后会展示省略号按钮，点击后可以快速跳转。

```html
<glue-pagination
  value="1"
  :total-items="125"
  :show-page-size="3"
  force-ellipses
/>
```

### 自定义按钮

通过 `prev-text`、`next-text` 等插槽来自定义分页按钮的内容。

```html
<glue-pagination value="1" :total-items="50" :show-page-size="5" prev-text="#slot" next-text="#slot">
  <div slot="prev-text">
    <glue-icon name="arrow-left" />
  </div>
  <div slot="next-text">
    <glue-icon name="arrow" />
  </div>
</glue-pagination>
```

## API

### Props

| 参数           | 说明                             | 类型               | 默认值       |
|----------------|--------------------------------|--------------------|--------------|
| value          | 当前页码                         | _number_           | -            |
| mode           | 显示模式，可选值为 `simple`       | _string_           | `multi`      |
| prev-text      | 上一页按钮文字,使用#slot开启插槽 | _string_           | `上一页`     |
| next-text      | 下一页按钮文字,使用#slot开启插槽 | _string_           | `下一页`     |
| page-text      | 使用#slot开启插槽                | _string_           | ``           |
| page-count     | 总页数                           | _number \| string_ | 根据页数计算 |
| total-items    | 总记录数                         | _number \| string_ | `0`          |
| items-per-page | 每页记录数                       | _number \| string_ | `10`         |
| show-page-size | 显示的页码个数                   | _number \| string_ | `5`          |
| force-ellipses | 是否显示省略号                   | _boolean_          | `false`      |

### Events

| 事件名     | 说明           | 回调参数 |
|------------|--------------|----------|
| glueChange | 页码改变时触发 | -        |

### Slots

| 名称      | 描述                 | 参数                                                |
|-----------|--------------------|-----------------------------------------------------|
| page-text | 自定义页码           | _{ number: number, text: string, active: boolean }_ |
| prev-text | 自定义上一页按钮文字 | `-`                                                 |
| next-text | 自定义下一页按钮文字 | `-`                                                 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                                       | 默认值              | 描述 |
|--------------------------------------------|---------------------|------|
| @pagination-height                         | `40px`              | -    |
| @pagination-font-size                      | `@font-size-md`     | -    |
| @pagination-item-width                     | `36px`              | -    |
| @pagination-item-default-color             | `@blue`             | -    |
| @pagination-item-disabled-color            | `@gray-7`           | -    |
| @pagination-item-disabled-background-color | `@background-color` | -    |
| @pagination-background-color               | `@white`            | -    |
| @pagination-desc-color                     | `@gray-7`           | -    |
| @pagination-disabled-opacity               | `@disabled-opacity` | -    |
