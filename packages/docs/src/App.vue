<template>
  <Doc
    :lang="lang"
    :type="type"
    :config="config"
    :versions="versions"
    :types="types"
    :simulator="simulator"
    :lang-configs="langConfigs"
  >
    <router-view />
  </Doc>
</template>
<script setup lang="tsx" name="App">
// import { listenParentPathChange } from "@glue/glue-cli";
import { computed, ref, watch, onMounted } from "vue";
import Doc from "~/components/Doc.vue";
import { glueConfig } from "@glue/glue-cli";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
console.log(route, "route111");
const simulator = ref("http://127.0.0.1:3001/vue2-preview");
const lang = computed(() => {
  const { lang }: any = route.meta;
  return lang || "zh-CN";
});
const type = computed(() => {
  const { type }: any = route.meta;
  console.log(type, "type");
  return type || "vue2";
});
const langConfigs = computed(() => {
  const { locales = {} }: any = glueConfig.site;
  return Object.keys(locales).map((key) => ({
    lang: key,
    label: locales[key].langLabel || "",
  }));
});
const config: any = computed(() => {
  const { locales }: any = glueConfig.site;
  console.log(locales, "locales");
  if (locales) {
    console.log(locales[lang.value], "locales[lang.value]");
    return locales[lang.value];
  }
  return config.site;
});
const versions = computed(() => {
  return glueConfig.site.versions;
});
const types = computed(() => {
  return glueConfig.site.types;
});
watch(
  () => route.path,
  () => {
    setTitle();
  }
);
watch(
  () => lang.value,
  () => {
    // this.setTitle();
  }
);
watch(
  () => config.value,
  () => {
    // this.setTitle();
  },
  {
    immediate: true,
  }
);
function setTitle() {
  let { title } = config.value;

  const navItems = config.value.nav.reduce(
    (result: any, nav: { items: any }) => [...result, ...nav.items],
    []
  );

  const current = navItems.find((item: { path: unknown }) => {
    return item.path === route.meta.name;
  });

  if (current && current.title) {
    title = current.title + " - " + title;
  } else if (config.value.description) {
    title += ` - ${config.value.description}`;
  }

  document.title = title;
}
onMounted(() => {
  // listenParentPathChange(router);
  window.addEventListener("message", (event) => {
    console.log(event.data, "eventeventeventeventevent");
    if (event.data?.type !== "replacePath") {
      return;
    }
    const path = event.data?.value || "";
    console.log(path, router, "path111112222");
    router.push(path).catch(() => {});
  });
});
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "./common/style/base";
@import "./common/style/highlight";

.van-doc-intro {
  padding-top: 20px;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
