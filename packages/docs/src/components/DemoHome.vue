<template>
  <div class="demo-home">
    <h1
      class="demo-home__title"
      :class="{ 'demo-home__title--small': smallTitle }"
    >
      <img :src="config.logo" />
      <span>{{ config.title }}</span>
    </h1>
    <h2 v-if="config.description" class="demo-home__desc">
      {{ config.description }}
    </h2>
    <DemoHomeNav
      v-for="(group, index) in config.nav"
      :key="index"
      :lang="lang"
      :type="type"
      :group="group"
    />
  </div>
</template>
<script setup lang="tsx" name="DemoHome">
import { computed } from "vue";
import { glueConfig } from "@glue/glue-cli";
import DemoHomeNav from "./DemoHomeNav.vue";
import { useRoute } from "vue-router";
const route = useRoute();
const lang = computed(() => {
  const lang = "zh-CN";
  console.log(lang, "lang");
  return lang || "";
});
const type = computed(() => {
  const { type }: any = route.meta;
  console.log(type, "type");
  return type || "vue2";
});
const config = computed(() => {
  const { locales }: any = glueConfig.site;
  console.log(locales, "locales");
  if (locales) {
    return locales[lang.value];
  }
  return glueConfig.site;
});
const smallTitle = computed(() => {
  return config.value.title.length >= 8;
});
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "@glue/glue-cli/src/common/style/var";

.demo-home {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 46px 20px 46px 20px;
  background: #fff;
  overflow: auto;

  &__title,
  &__desc {
    padding-left: 16px;
    font-weight: normal;
    line-height: 1;
    user-select: none;
  }

  &__title {
    margin: 0 0 16px;
    font-size: 32px;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 32px;
    }

    span {
      margin-left: 16px;
    }

    &--small {
      font-size: 24px;
    }
  }

  &__desc {
    margin: 0 0 40px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
}
</style>
