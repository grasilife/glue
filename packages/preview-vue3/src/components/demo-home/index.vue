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
    <glue-doc-nav-list
      v-for="(group, index) in nav"
      :key="index"
      :gtitle="group.title"
      :group.prop="group.items"
      @glueItemClick="glueItemClick"
    ></glue-doc-nav-list>
  </div>
</template>
<script setup lang="tsx" name="demoHome">
import { glueConfig } from "@glue/glue-cli";
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const lang = computed(() => {
  const { lang } = route.meta as any;
  return lang;
});
const type = computed(() => {
  const { type } = route.meta;
  return type || "vue3";
});
const config = computed(() => {
  const { locales } = glueConfig.site;
  console.log(locales, glueConfig, route.meta.lang, "locales222");
  if (locales) {
    console.log(locales[lang.value], "locales[lang.value]");
    return locales[lang.value];
  }
});
const nav = computed(() => {
  return config.value.nav.filter(
    (item: { previewHidden: boolean }) => item.previewHidden !== true
  );
});
const smallTitle = computed(() => {
  return config.value.title.length >= 8;
});
function glueItemClick(event: { detail: { path: any } }) {
  console.log(event, "event");
  let pathEnd = `/${type.value}/${lang.value}/${event.detail.path}`;
  console.log(pathEnd, "pathEndpathEnd");
  router.push(pathEnd);
}
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
