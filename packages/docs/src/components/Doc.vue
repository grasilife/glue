<template>
  <div class="van-doc">
    <DocHeader
      :lang="lang"
      :config="config"
      :versions="versions"
      :types="types"
      :lang-configs="langConfigs"
      @switch-version="$emit('switch-version', $event)"
    />
    <div class="van-body">
      <DocNav :lang="lang" :type="type" :nav-config="config.nav" />
      <DocContainer :has-simulator="!!simulator">
        <DocContent>
          <slot />
        </DocContent>
      </DocContainer>
      <DocSimulator v-if="simulator" :src="simulator" />
    </div>
  </div>
</template>
<script setup lang="tsx" name="vanDoc">
import { watch } from "vue";
import { useRoute } from "vue-router";

import DocNav from "./DocNav.vue";
import DocHeader from "./DocHeader.vue";
import DocContent from "./DocContent.vue";
import DocContainer from "./DocContainer.vue";
import DocSimulator from "./Simulator.vue";
const route = useRoute();
console.log(route, "333232");
const emit = defineEmits(["switch-version"]);
const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  versions: {
    type: Array,
    required: false,
    default: () => {
      return [];
    },
  },
  types: {
    type: Array,
    required: false,
    default: () => {
      return [];
    },
  },
  simulator: {
    type: String,
    required: true,
  },
  langConfigs: {
    type: Array,
    required: false,
    default: () => {
      return [];
    },
  },
  config: {
    type: Object,
    required: false,
    default: () => {
      return {
        nav: "",
      };
    },
  },
  base: {
    type: String,
    required: false,
    default: () => {
      return "";
    },
  },
});
function setNav() {
  const { nav } = props.config;
  const items = nav.reduce(
    (list: string | any[], item: { items: any }) => list.concat(item.items),
    []
  );
  const currentPath = route.path.split("/").pop();

  let currentIndex;
  for (let i = 0, len = items.length; i < len; i++) {
    if (items[i].path === currentPath) {
      currentIndex = i;
      break;
    }
  }
  console.log(currentIndex, "currentIndex");
  // this.leftNav = items[currentIndex - 1];
  // this.rightNav = items[currentIndex + 1];
}

// function keyboardNav(direction) {
//   const nav = direction === "prev" ? this.leftNav : this.rightNav;
//   if (nav.path) {
//     this.$router.push(this.base + nav.path);
//   }
// }

// function keyboardHandler() {
//   window.addEventListener("keyup", (event) => {
//     switch (event.keyCode) {
//       case 37: // left
//         keyboardNav("prev");
//         break;
//       case 39: // right
//         keyboardNav("next");
//         break;
//     }
//   });
// }
watch(
  () => route.path,
  () => {
    setNav();
  }
);
</script>

<style lang="less" scoped>
@import "../common/style/var";

.van-doc {
  width: 100%;
  height: 100%;

  .van-body {
    width: 100%;
    height: calc(100% - 64px);
    float: left;
  }
}
</style>
