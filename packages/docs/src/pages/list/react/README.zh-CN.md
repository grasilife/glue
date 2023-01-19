# List 列表

### 介绍

瀑布流滚动加载，用于展示长列表，当列表即将滚动到底部时，会触发事件并加载更多列表项。

## 代码演示

### 基础用法

List 组件通过 `loading` 和 `finished` 两个变量控制加载状态，当组件滚动到底部时，会触发 `load` 事件并将 `loading` 设置成 `true`。此时可以发起异步操作并更新数据，数据更新完毕后，将 `loading` 设置成 `false` 即可。若数据已全部加载完毕，则直接将 `finished` 设置成 `true` 即可。

```html
<glue-list
  :loading="state.loading"
  :finished="state.finished"
  finished-text="没有更多了"
  @glueLoad="onLoad"
>
  <glue-cell v-for="item in state.list" :key="item" :title="item" />
</glue-list>
```

```js
export default {
  data() {
    return {
      list: [
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }
      ]
    };
  },

  methods: {
    onLoad(index) {
      const list = this.list[index];
      list.loading = true;

      setTimeout(() => {
        if (list.refreshing) {
          list.items = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? "0" + text : text);
        }

        list.loading = false;
        console.log(list.loading, "list.loading");
        list.refreshing = false;

        // show error info in second demo
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }

        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    },
  }
};
```

### 错误提示

若列表数据加载失败，将 `error` 设置成 `true` 即可显示错误提示，用户点击错误提示后会重新触发 load 事件。

```html
<glue-list
  :loading="state.loading"
  v-model:error="state.error"
  error-text="请求失败，点击重新加载"
  @glueLoad="onLoad"
>
  <glue-cell v-for="item in state.list" :key="item" :title="item" />
</glue-list>
```

```js
export default {
  data() {
    return {
      list: [
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }
      ]
    };
  },

  methods: {
    onLoad(index) {
      const list = this.list[index];
      list.loading = true;

      setTimeout(() => {
        if (list.refreshing) {
          list.items = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? "0" + text : text);
        }

        list.loading = false;
        console.log(list.loading, "list.loading");
        list.refreshing = false;

        // show error info in second demo
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }

        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    },
  }
};
```

### 下拉刷新

List 组件可以与 [PullRefresh](#/zh-CN/pull-refresh) 组件结合使用，实现下拉刷新的效果。

```html
<van-pull-refresh v-model="state.refreshing" @refresh="onRefresh">
  <glue-list
    :loading="state.loading"
    :finished="state.finished"
    finished-text="没有更多了"
    @glueLoad="onLoad"
  >
    <glue-cell v-for="item in state.list" :key="item" :title="item" />
  </glue-list>
</van-pull-refresh>
```

```js
export default {
  data() {
    return {
      list: [
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }
      ]
    };
  },

  methods: {
    onLoad(index) {
      const list = this.list[index];
      list.loading = true;

      setTimeout(() => {
        if (list.refreshing) {
          list.items = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? "0" + text : text);
        }

        list.loading = false;
        console.log(list.loading, "list.loading");
        list.refreshing = false;

        // show error info in second demo
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }

        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    },

    onRefresh(index) {
      this.list[index].finished = false;
      this.onLoad(index);
    }
  }
};
```

## API

### Props

| 参数            | 说明                                                                               | 类型               | 默认值      |
|-----------------|----------------------------------------------------------------------------------|--------------------|-------------|
| loading         | 是否处于加载状态，加载过程中不触发`load`事件                                        | _boolean_          | `false`     |
| finished        | 是否已加载完成，加载完成后不再触发`load`事件                                        | _boolean_          | `false`     |
| error           | 是否加载失败，加载失败后点击错误提示可以重新<br>触发`load`事件，必须使用`sync`修饰符 | _boolean_          | `false`     |
| offset          | 滚动条与底部距离小于 offset 时触发`load`事件                                       | _number \| string_ | `300`       |
| loading-text    | 加载过程中的提示文案,使用#slot开启插槽                                             | _string_           | `加载中...` |
| finished-text   | 加载完成后的提示文案,使用#slot开启插槽                                             | _string_           | -           |
| error-text      | 加载失败后的提示文案,使用#slot开启插槽                                             | _string_           | -           |
| immediate-check | 是否在初始化时立即执行滚动位置检查                                                 | _boolean_          | `false`     |
| direction       | 滚动触发加载的方向，可选值为`up` `down`                                             | _string_           | `down`      |

### Events

| 事件名   | 说明                               | 回调参数 |
|----------|----------------------------------|----------|
| glueLoad | 滚动条与底部距离小于 offset 时触发 | -        |

### 方法

通过 ref 可以获取到 List 实例并调用实例方法

| 方法名 | 说明                                                 | 参数 | 返回值 |
|--------|----------------------------------------------------|------|--------|
| check  | 检查当前的滚动位置，若已滚动至底部，则会触发 load 事件 | -    | -      |

### Slots

| 名称          | 说明                       |
|---------------|--------------------------|
| default       | 列表内容                   |
| loading-text  | 自定义底部加载中提示       |
| finished-text | 自定义加载完成后的提示文案 |
| error-text    | 自定义加载失败后的提示文案 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/theme)。

| 名称                    | 默认值          | 描述 |
|-------------------------|-----------------|------|
| @list-icon-margin-right | `5px`           | -    |
| @list-text-color        | `@gray-6`       | -    |
| @list-text-font-size    | `@font-size-md` | -    |
| @list-text-line-height  | `50px`          | -    |

## 常见问题

### List 的运行机制是什么？

List 会监听浏览器的滚动事件并计算列表的位置，当列表底部与可视区域的距离小于`offset`时，List 会触发一次 load 事件。

### 为什么 List 初始化后会立即触发 load 事件？

List 初始化后会触发一次 load 事件，用于加载第一屏的数据，这个特性可以通过`immediate-check`属性关闭。

### 为什么会连续触发 load 事件？

如果一次请求加载的数据条数较少，导致列表内容无法铺满当前屏幕，List 会继续触发 load 事件，直到内容铺满屏幕或数据全部加载完成。因此你需要调整每次获取的数据条数，理想情况下每次请求获取的数据条数应能够填满一屏高度。

### loading 和 finished 分别是什么含义？

`List`有以下三种状态，理解这些状态有助于你正确地使用`List`组件：

- 非加载中，`loading`为`false`，此时会根据列表滚动位置判断是否触发`load`事件（列表内容不足一屏幕时，会直接触发）
- 加载中，`loading`为`true`，表示正在发送异步请求，此时不会触发`load`事件
- 加载完成，`finished`为`true`，此时不会触发`load`事件

在每次请求完毕后，需要手动将`loading`设置为`false`，表示加载结束

### 使用 float 布局后一直触发加载？

若 List 的内容使用了 float 布局，可以在容器上添加`van-clearfix`类名来清除浮动，使得 List 能正确判断元素位置

```html
<glue-list>
  <div class="van-clearfix">
    <div class="float-item" />
    <div class="float-item" />
    <div class="float-item" />
  </div>
</glue-list>
```

### 在 html、body 上设置 overflow 后一直触发加载？

如果在 html 和 body 标签上设置了`overflow-x: hidden`样式，会导致 List 一直触发加载。

```css
html,
body {
  overflow-x: hidden;
}
```

这个问题的原因是当元素设置了`overflow-x: hidden`样式时，该元素的`overflow-y`会被浏览器设置为`auto`，而不是默认值`visible`，导致 List 无法正确地判断滚动容器。解决方法是去除该样式，或者在 html 和 body 标签上添加`height: 100%`样式。
