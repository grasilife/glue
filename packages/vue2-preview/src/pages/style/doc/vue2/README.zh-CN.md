# 内置样式

### 介绍

Glue 中默认包含了一些常用样式，可以直接通过 className 的方式

### 文字省略

当文本内容长度超过容器最大宽度时，自动省略多余的文本。

```html
<!-- 最多显示一行 -->
<div class="glue-ellipsis">这是一段最多显示一行的文字，多余的内容会被省略</div>

<!-- 最多显示两行 -->
<div class="glue-multi-ellipsis--l2">
  这是一段最多显示两行的文字，多余的内容会被省略
</div>

<!-- 最多显示三行 -->
<div class="glue-multi-ellipsis--l3">
  这是一段最多显示三行的文字，多余的内容会被省略
</div>
```

### 1px 边框

为元素添加 Retina 屏幕下的 1px 边框（即 hairline），基于伪类 transform 实现。

```html
<!-- 上边框 -->
<div class="van-hairline--top"></div>

<!-- 下边框 -->
<div class="van-hairline--bottom"></div>

<!-- 左边框 -->
<div class="van-hairline--left"></div>

<!-- 右边框 -->
<div class="van-hairline--right"></div>

<!-- 上下边框 -->
<div class="van-hairline--top-bottom"></div>

<!-- 全边框 -->
<div class="van-hairline--surround"></div>
```

### 动画

glue内部使用[anime](https://animejs.com/)为动画内核,具体使用可查看其文档

```js
//引入anime
import { anime } from "glue-components";
```

使用方式

```html
 <glue-cell is-link title="淡入" @click="animate('glue-fade')" />
 <glue-cell is-link title="上滑进入" @click="animate('glue-slide-up')" />
 <glue-cell is-link title="下滑进入" @click="animate('glue-slide-down')" />
 <glue-cell is-link title="左滑进入" @click="animate('glue-slide-left')" />
 <glue-cell is-link title="右滑进入" @click="animate('glue-slide-right')" />
 <div ref="anime" v-show="show" class="demo-animate-block"></div>

```

``` JS
<script>
import { anime } from "glue-components";
export default {
  data() {
    return {
      fadeAnime: null,
      slideUpAnime: null,
      slideDownAnime: null,
      slideLeftAnime: null,
      slideRightAnime: null,
      show: false,
    };
  },
  methods: {
    animate(transitionName) {
      if (transitionName == "glue-fade") {
        if (this.slideUpAnime == null) {
          this.fadeAnime = anime({
            targets: this.$refs.anime,
            opacity: [0, 1],
            easing: "easeInOutExpo",
            begin: anim => {
              this.show = true;
            },
            complete: anim => {
              this.show = false;
            }
          });
        } else {
          this.show = true;
          this.fadeAnime.play();
        }
      }
      if (transitionName == "glue-slide-up") {
        if (this.slideUpAnime == null) {
          this.slideUpAnime = anime({
            targets: this.$refs.anime,
            translateY: ["100%", 0],
            easing: "easeInOutExpo",
            begin: anim => {
              this.show = true;
            },
            complete: anim => {
              this.show = false;
            }
          });
        } else {
          this.show = true;
          this.slideUpAnime.play();
        }
      }
      if (transitionName == "glue-slide-down") {
        if (this.slideDownAnime == null) {
          this.slideDownAnime = anime({
            targets: this.$refs.anime,
            translateY: ["-100%", 0],
            easing: "easeInOutExpo",
            begin: anim => {
              this.show = true;
            },
            complete: anim => {
              this.show = false;
            }
          });
        } else {
          this.show = true;
          this.slideDownAnime.play();
        }
      }
      if (transitionName == "glue-slide-left") {
        if (this.slideLeftAnime == null) {
          this.slideLeftAnime = anime({
            targets: this.$refs.anime,
            translateX: ["-100%", 0],
            easing: "easeInOutExpo",
            begin: anim => {
              this.show = true;
            },
            complete: anim => {
              this.show = false;
            }
          });
        } else {
          this.show = true;
          this.slideLeftAnime.play();
        }
      }
      if (transitionName == "glue-slide-right") {
        if (this.slideRightAnime == null) {
          this.slideRightAnime = anime({
            targets: this.$refs.anime,
            translateX: ["100%", 0],
            easing: "easeInOutExpo",
            begin: anim => {
              this.show = true;
            },
            complete: anim => {
              this.show = false;
            }
          });
        } else {
          this.show = true;
          this.slideRightAnime.play();
        }
      }
    }
  }
};
</script>
```
