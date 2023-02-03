<template>
  <div class="root">
    <glue-doc-nav
      @glueBack="onBack"
      :gtitle="title"
      v-if="showDocNav"
    ></glue-doc-nav>
    <router-view> </router-view>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, watch } from "vue";
import { previewRouterExternals } from "@glue/glue-cli";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const title = computed(() => {
  const { name, lang } = route.meta as any;
  console.log(name, lang, route.path, route.meta, "namenamenamename11");
  return name ? name.replace(/-/g, "") : "";
});
const showDocNav = computed(() => {
  const { path } = route.meta as any;
  return !previewRouterExternals.includes(path);
});
function onBack() {
  if (history.length > 1) {
    history.back();
  } else {
    router.replace("/");
  }
}
watch(
  () => route,
  () => {
    syncPathToParent();
  }
);
onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.data?.type !== "replacePath") {
      return;
    }
    console.log(event.data, "event.data");
    const path = event.data?.value || "";
    router.replace(path);
  });
});
function syncPathToParent() {
  console.log(window.top, "window.top");
  if (window.top) {
    window.top.postMessage(
      {
        type: "replacePath",
        value: route.path,
      },
      "*"
    );
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
.root {
  width: 100%;
  height: 100%;
}
</style>
