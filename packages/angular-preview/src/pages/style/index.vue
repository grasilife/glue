<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="ellipsis">
      <div class="glue-ellipsis">{{ text1 }}</div>
      <div class="glue-multi-ellipsis--l2">{{ text2 }}</div>
    </glue-doc-block>

    <glue-doc-block card :gtitle="hairline">
      <div class="glue-hairline--top" />
    </glue-doc-block>

    <glue-doc-block :gtitle="animation" card>
      <glue-cell is-link title="淡入" @click="animate('glue-fade')" />
      <glue-cell is-link title="上滑进入" @click="animate('glue-slide-up')" />
      <glue-cell is-link title="下滑进入" @click="animate('glue-slide-down')" />
      <glue-cell is-link title="左滑进入" @click="animate('glue-slide-left')" />
      <glue-cell
        is-link
        title="右滑进入"
        @click="animate('glue-slide-right')"
      />
    </glue-doc-block>
    <div ref="anime" v-show="show" class="demo-animate-block"></div>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
import { anime } from "glue-components";
export default {
  components: {},
  data() {
    return {
      fadeAnime: null,
      slideUpAnime: null,
      slideDownAnime: null,
      slideLeftAnime: null,
      slideRightAnime: null,
      show: false,
      transitionName: "",
      hairline: "1px 边框",
      ellipsis: "文字省略",
      animation: "动画",
      toggle: "切换动画",
      text1: "这是一段最多显示一行的文字，后面的内容会省略",
      text2:
        "这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略",
    };
  },
  mounted() {
    console.log(anime, "anime");
  },
  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    animate(transitionName) {
      if (transitionName == "glue-fade") {
        if (this.slideUpAnime == null) {
          this.fadeAnime = anime({
            targets: this.$refs.anime,
            opacity: [0, 1],
            easing: "easeInOutExpo",
            begin: (anim) => {
              this.show = true;
            },
            complete: (anim) => {
              this.show = false;
            },
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
            begin: (anim) => {
              this.show = true;
            },
            complete: (anim) => {
              this.show = false;
            },
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
            begin: (anim) => {
              this.show = true;
            },
            complete: (anim) => {
              this.show = false;
            },
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
            begin: (anim) => {
              this.show = true;
            },
            complete: (anim) => {
              this.show = false;
            },
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
            begin: (anim) => {
              this.show = true;
            },
            complete: (anim) => {
              this.show = false;
            },
          });
        } else {
          this.show = true;
          this.slideRightAnime.play();
        }
      }
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less">
@import "@glue/glue-cli/src/common/style/var.less";
.demo-style {
  .glue-ellipsis,
  .glue-multi-ellipsis--l2 {
    max-width: 300px;
    margin-left: @padding-md;
    font-size: 14px;
    line-height: 18px;
  }

  .glue-ellipsis {
    margin-bottom: @padding-md;
  }

  .glue-hairline--top {
    height: 30px;
    background-color: @white;

    &::after {
      top: 5px;
    }
  }

  .demo-animate-block {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    background-color: @blue;
    border-radius: 8px;
  }
}
</style>
