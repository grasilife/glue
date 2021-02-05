<template>
  <div class="van-doc-nav">
    <div v-for="(group, index) in navConfig" class="van-doc-nav__group" :key="index">
      <div class="van-doc-nav__title">
        {{ group.title }}
      </div>
      <template v-if="group.items">
        <div v-for="(item, groupIndex) in group.items" :key="groupIndex" class="van-doc-nav__item">
          <van-doc-nav-link :item="item" :base="base" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink";

export default {
  name: "VanDocNav",

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    lang: String,
    navConfig: Array
  },

  data() {
    return {
      top: 0,
      bottom: 0
    };
  },

  computed: {
    style() {
      return {
        top: this.top + "px",
        bottom: this.bottom + "px"
      };
    },

    base() {
      return this.lang ? `/${this.lang}/` : "/";
    }
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 64 - offset);
    }
  }
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../../common/style/var";

.van-doc-nav {
  width: 220px;
  height: 100%;
  float: left;
  position: relative;
  z-index: 1;
  min-width: @van-doc-nav-width;
  max-width: @van-doc-nav-width;
  overflow-y: scroll;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 6px;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(69, 90, 100, 0.2);
  }

  &__group {
    margin-bottom: 16px;
    padding-left: 6px;
  }

  &__title {
    padding: 8px 0 8px @van-doc-padding;
    color: #455a64;
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
  }

  &__item {
    a {
      display: block;
      margin: 8px 0;
      padding: 8px 0 8px @van-doc-padding;
      color: #455a64;
      font-size: 14px;
      line-height: 20px;
      transition: color 0.2s;

      &:hover,
      &.active {
        color: @van-doc-green;
      }

      &.active {
        font-weight: 600;
        background-color: #ebfff0;
        border-radius: 999px;
      }

      span {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 1300px) {
    &__item {
      a {
        font-size: 13px;
      }

      &:active {
        font-size: 14px;
      }
    }
  }
}
</style>
