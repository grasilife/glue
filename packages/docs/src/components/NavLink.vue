<template>
  <router-link
    v-if="item.path"
    :class="{ active }"
    :to="path"
    v-html="itemName"
  />
  <a v-else-if="item.link" :href="item.link" v-html="itemName" />
  <a v-else v-html="itemName" />
</template>
<script setup lang="tsx" name="VanDocNavLink">
import { useRoute } from "vue-router";
import { watch, onMounted, computed } from "vue";
const route = useRoute();
const props = defineProps({
  base: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});
const itemName: any = computed(() => {
  const name = (props.item.title || props.item.name).split(" ");
  return `${name[0]} <span>${name.slice(1).join(" ")}</span>`;
});
const path: any = computed(() => {
  return `${props.base}${props.item.path}`;
});
const active: any = computed(() => {
  if (route.path === path.value) {
    return true;
  }

  if (props.item.path === "home") {
    return route.path === props.base;
  }

  return false;
});
watch(
  () => active.value,
  () => {
    scrollIntoView();
  }
);
scrollIntoView();
onMounted(() => {
  scrollIntoView();
});
function scrollIntoView() {
  if (active.value && this.$el && this.$el.scrollIntoViewIfNeeded) {
    this.$el.scrollIntoViewIfNeeded();
  }
}
</script>
