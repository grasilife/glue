# Picker 选择器

### 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，通常与[弹出层](#/zh-CN/popup)组件配合使用。

## 代码演示

### 基础用法

#### 选项配置

Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。

#### 顶部栏

顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `confirm` 事件，点击取消按钮触发 `cancel` 事件。

```html
<glue-picker gtitle="标题" :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange" />
```

```js
import { Toast } from "vant";

export default {
  setup() {
    const columns = ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华"];

    const onConfirm = (value, index) => {
      Toast(`当前值: ${value}, 当前索引: ${index}`);
    };
    const onChange = (value, index) => {
      Toast(`当前值: ${value}, 当前索引: ${index}`);
    };
    const onCancel = () => Toast("取消");

    return {
      columns,
      onChange,
      onCancel,
      onConfirm
    };
  }
};
```

### 默认选中项

单列选择时，可以通过 `default-index` 属性设置初始选中项的索引。

```html
<glue-picker gtitle="标题" :columns.prop="columns" :default-index="2" />
```

### 多列选择

`columns` 属性可以通过对象数组的形式配置多列选择，对象中可以配置选项数据、初始选中项等，详细格式见[下方表格](#/zh-CN/picker#column-shu-ju-jie-gou)。

```html
<glue-picker gtitle="标题" :columns.prop="columns" />
```

```js
export default {
  setup() {
    const columns = [
      // 第一列
      {
        values: ["周一", "周二", "周三", "周四", "周五"],
        defaultIndex: 2
      },
      // 第二列
      {
        values: ["上午", "下午", "晚上"],
        defaultIndex: 1
      }
    ];

    return { columns };
  }
};
```

### 级联选择

使用 `columns` 的 `children` 字段可以实现选项级联的效果。如果级联层级较多，推荐使用 [Cascader 级联选项组件](#/zh-CN/cascader)。

```html
<glue-picker gtitle="标题" :columns.prop="columns" />
```

```js
export default {
  setup() {
    const columns = [
      {
        text: "浙江",
        children: [
          {
            text: "杭州",
            children: [{ text: "西湖区" }, { text: "余杭区" }]
          },
          {
            text: "温州",
            children: [{ text: "鹿城区" }, { text: "瓯海区" }]
          }
        ]
      },
      {
        text: "福建",
        children: [
          {
            text: "福州",
            children: [{ text: "鼓楼区" }, { text: "台江区" }]
          },
          {
            text: "厦门",
            children: [{ text: "思明区" }, { text: "海沧区" }]
          }
        ]
      }
    ];

    return { columns };
  }
};
```

> 级联选择的数据嵌套深度需要保持一致，如果部分选项没有子选项，可以使用空字符串进行占位。

### 禁用选项

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

```html
<glue-picker :columns.prop="columns" />
```

```js
export default {
  setup() {
    const columns = [{ text: "杭州", disabled: true }, { text: "宁波" }, { text: "温州" }];

    return { columns };
  }
};
```

### 动态设置选项

通过 Picker 上的实例方法可以更灵活地控制选择器，比如使用 `setColumnValues` 方法实现多列联动。

```html
<glue-picker ref="picker" :columns.prop="columns" @change="onChange" />
```

```js
import { ref } from "vue";

export default {
  setup() {
    const picker = ref(null);

    const cities = {
      浙江: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      福建: ["福州", "厦门", "莆田", "三明", "泉州"]
    };
    const columns = [{ values: Object.keys(cities) }, { values: cities["浙江"] }];

    const onChange = values => {
      picker.value.setColumnValues(1, cities[values[0]]);
    };

    return {
      picker,
      columns,
      onChange
    };
  }
};
```

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

```html
<glue-picker :columns.prop="columns" :loading="loading" />
```

```js
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      columns: [],
      loading: true
    });

    setTimeout(() => {
      state.loading = false;
      state.columns = ["选项"];
    }, 1000);

    return { state };
  }
};
```

### 搭配弹出层使用

在实际场景中，Picker 通常作为用于辅助表单填写，可以搭配 Popup 和 Field 实现该效果。

```html
<glue-field v-model="value" readonly clickable label="城市" placeholder="选择城市" @click="showPicker = true" />
<glue-popup v-model:show="showPicker" round position="bottom">
  <glue-picker :columns.prop="columns" @cancel="showPicker = false" @confirm="onConfirm" />
</glue-popup>
```

```js
import { reactive } from "vue";

export default {
  setup() {
    const columns = ["杭州", "宁波", "温州", "绍兴", "湖州", "嘉兴", "金华"];
    const state = reactive({
      value: "",
      showPicker: false
    });

    const onConfirm = value => {
      state.value = value;
      state.showPicker = false;
    };

    return {
      state,
      columns,
      onConfirm
    };
  }
};
```

### 自定义 Columns 的结构

```html
<glue-picker :gtitle="标题" :columns.prop="columns" :columns-field-names="customFieldName" />
```

```js
import { reactive } from "vue";

export default {
  setup() {
    const columns = [
      {
        cityName: "浙江",
        cities: [
          {
            cityName: "杭州",
            cities: [{ cityName: "西湖区" }, { cityName: "余杭区" }]
          },
          {
            cityName: "温州",
            cities: [{ cityName: "鹿城区" }, { cityName: "瓯海区" }]
          }
        ]
      },
      {
        cityName: "福建",
        cities: [
          {
            cityName: "福州",
            cities: [{ cityName: "鼓楼区" }, { cityName: "台江区" }]
          },
          {
            cityName: "厦门",
            cities: [{ cityName: "思明区" }, { cityName: "海沧区" }]
          }
        ]
      }
    ];

    const customFieldName = {
      text: "cityName",
      children: "cities"
    };

    return {
      columns,
      customFieldName
    };
  }
};
```

## API

### Props

| 参数                | 说明                                                | 类型               | 默认值                                                     |
| ------------------- | --------------------------------------------------- | ------------------ | ---------------------------------------------------------- |
| columns             | 对象数组，配置每一列显示的数据                      | _Column[]_         | `[]`                                                       |
| columns-field-names | 自定义`columns`结构中的字段                         | _object_           | `{ text: 'text', values: 'values', children: 'children' }` |
| gtitle              | 顶部栏标题                                          | _string_           | -                                                          |
| confirm-button-text | 确认按钮文字                                        | _string_           | `确认`                                                     |
| cancel-button-text  | 取消按钮文字                                        | _string_           | `取消`                                                     |
| value-key           | 选项对象中，选项文字对应的键名                      | _string_           | `text`                                                     |
| toolbar-position    | 顶部栏位置，可选值为`bottom`                        | _string_           | `top`                                                      |
| loading             | 是否显示加载状态                                    | _boolean_          | `false`                                                    |
| show-toolbar        | 是否显示顶部栏                                      | _boolean_          | `true`                                                     |
| allow-html          | 是否允许选项内容中渲染 HTML                         | _boolean_          | `false`                                                    |
| default-index       | 单列选择时，默认选中项的索引                        | _number \| string_ | `0`                                                        |
| item-height         | 选项高度，支持 `px` `vw` `vh` `rem` 单位，默认 `px` | _number \| string_ | `44`                                                       |
| visible-item-count  | 可见的选项个数                                      | _number \| string_ | `6`                                                        |
| swipe-duration      | 快速滑动时惯性滚动的时长，单位 `ms`                 | _number \| string_ | `1000`                                                     |

### Events

当选择器有多列时，事件回调参数会返回数组

| 事件名  | 说明               | 回调参数                                                                     |
| ------- | ------------------ | ---------------------------------------------------------------------------- |
| confirm | 点击完成按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| cancel  | 点击取消按钮时触发 | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，所有列选中值对应的索引 |
| change  | 选项改变时触发     | 单列：选中值，选中值对应的索引<br>多列：所有列选中值，当前列对应的索引       |

### Slots

| 名称           | 说明                   | 参数                       |
| -------------- | ---------------------- | -------------------------- |
| default        | 自定义整个顶部栏的内容 | -                          |
| gtitle         | 自定义标题内容         | -                          |
| confirm        | 自定义确认按钮内容     | -                          |
| cancel         | 自定义取消按钮内容     | -                          |
| option         | 自定义选项内容         | _option: string \| object_ |
| columns-top    | 自定义选项上方内容     | -                          |
| columns-bottom | 自定义选项下方内容     | -                          |

### Column 数据结构

当传入多列数据时，`columns` 为一个对象数组，数组中的每一个对象配置每一列，每一列有以下 `key`:

| 键名         | 说明                       | 类型                        |
| ------------ | -------------------------- | --------------------------- |
| values       | 列中对应的备选值           | _string[]_                  |
| defaultIndex | 初始选中项的索引，默认为 0 | _number_                    |
| className    | 为对应列添加额外的类名     | _string \| Array \| object_ |
| children     | 级联选项                   | _Column_                    |

### 方法

通过 ref 可以获取到 Picker 实例并调用实例方法，详见[组件实例方法](#/zh-CN/advanced-usage#zu-jian-shi-li-fang-fa)。

| 方法名          | 说明                            | 参数                     | 返回值      |
| --------------- | ------------------------------- | ------------------------ | ----------- |
| getValues       | 获取所有列选中的值              | -                        | values      |
| setValues       | 设置所有列选中的值              | values                   | -           |
| getIndexes      | 获取所有列选中值对应的索引      | -                        | indexes     |
| setIndexes      | 设置所有列选中值对应的索引      | indexes                  | -           |
| getColumnValue  | 获取对应列选中的值              | columnIndex              | value       |
| setColumnValue  | 设置对应列选中的值              | columnIndex, value       | -           |
| getColumnIndex  | 获取对应列选中项的索引          | columnIndex              | optionIndex |
| setColumnIndex  | 设置对应列选中项的索引          | columnIndex, optionIndex | -           |
| getColumnValues | 获取对应列中所有选项            | columnIndex              | values      |
| setColumnValues | 设置对应列中所有选项            | columnIndex, values      | -           |
| confirm         | 停止惯性滚动并触发 confirm 事件 | -                        | -           |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                            | 默认值                     | 描述 |
| ------------------------------- | -------------------------- | ---- |
| @picker-background-color        | `@white`                   | -    |
| @picker-toolbar-height          | `44px`                     | -    |
| @picker-gtitle-font-size        | `@font-size-lg`            | -    |
| @picker-gtitle-line-height      | `@line-height-md`          | -    |
| @picker-action-padding          | `0 @padding-md`            | -    |
| @picker-action-font-size        | `@font-size-md`            | -    |
| @picker-confirm-action-color    | `@text-link-color`         | -    |
| @picker-cancel-action-color     | `@gray-6`                  | -    |
| @picker-option-font-size        | `@font-size-lg`            | -    |
| @picker-option-text-color       | `@black`                   | -    |
| @picker-option-disabled-opacity | `0.3`                      | -    |
| @picker-loading-icon-color      | `@blue`                    | -    |
| @picker-loading-mask-color      | `rgba(255, 255, 255, 0.9)` | -    |

## 常见问题

### 在桌面端无法操作组件？

参见[桌面端适配](#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei)。
