<template>
  <div class="van-doc">
    <doc-header
      :lang="lang"
      :config="config"
      :versions="versions"
      :lang-configs="langConfigs"
      @switch-version="$emit('switch-version', $event)"
    />
    <div class="van-body">
      <doc-nav :lang="lang" :nav-config="config.nav" />
      <doc-container :has-simulator="!!simulator">
        <doc-content>
          <slot />
        </doc-content>
      </doc-container>
      <doc-simulator v-if="simulator" :src="simulator" />
    </div>
  </div>
</template>

<script>
import DocNav from "./Nav";
import DocHeader from "./Header";
import DocContent from "./Content";
import DocContainer from "./Container";
import DocSimulator from "./Simulator";

export default {
  name: "van-doc",

  components: {
    DocNav,
    DocHeader,
    DocContent,
    DocContainer,
    DocSimulator
  },

  props: {
    lang: String,
    versions: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    },
    simulator: String,
    langConfigs: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    },
    config: {
      type: Object,
      required: false
    },
    base: {
      type: String,
      default: ""
    }
  },

  emits: ["switch-version"],

  watch: {
    $route() {
      this.setNav();
    }
  },

  created() {
    // this.setNav();
    // this.keyboardHandler();
  },
  mounted() {
    console.log(
      this.config,
      this.langConfigs,
      this.versions,
      this.lang,
      this.base,
      this.simulator,
      "config1"
    );
  },
  methods: {
    setNav() {
      const { nav } = this.config;
      const items = nav.reduce((list, item) => list.concat(item.items), []);
      const currentPath = this.$route.path.split("/").pop();

      let currentIndex;
      for (let i = 0, len = items.length; i < len; i++) {
        if (items[i].path === currentPath) {
          currentIndex = i;
          break;
        }
      }

      this.leftNav = items[currentIndex - 1];
      this.rightNav = items[currentIndex + 1];
    },

    keyboardNav(direction) {
      const nav = direction === "prev" ? this.leftNav : this.rightNav;
      if (nav.path) {
        this.$router.push(this.base + nav.path);
      }
    },

    keyboardHandler() {
      window.addEventListener("keyup", event => {
        switch (event.keyCode) {
          case 37: // left
            this.keyboardNav("prev");
            break;
          case 39: // right
            this.keyboardNav("next");
            break;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../common/style/var";
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
