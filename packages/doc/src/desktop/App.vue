<template>
  <div class="app">
    <Doc
      :lang="lang"
      :config="config"
      :versions="versions"
      :simulator="simulator"
      :lang-configs="langConfigs"
    >
      <router-view />
    </Doc>
  </div>
</template>

<script>
import Doc from "./components/Doc";
import config from "../common/config";
// import { setLang } from "../common/locales";
console.log(config, "config");
export default {
  components: {
    Doc,
  },

  data() {
    const path = location.pathname.replace(/\/index(\.html)?/, "/");

    return {
      simulator: `${path}mobile.html${location.hash}`,
    };
  },

  computed: {
    lang() {
      const lang = "zh-CN";
      console.log(lang, "lang");
      return lang || "";
    },

    langConfigs() {
      const { locales = {} } = config.site;
      return Object.keys(locales).map((key) => ({
        lang: key,
        label: locales[key].langLabel || "",
      }));
    },

    config() {
      const { locales } = config.site;
      console.log(locales, "locales");
      if (locales) {
        console.log(locales[this.lang], "locales[this.lang]");
        return locales[this.lang];
      }
      return config.site;
    },

    versions() {
      return config.site.versions || null;
    },
  },

  watch: {
    // eslint-disable-next-line
    "$route.path"() {
      this.setTitle();
    },

    lang(val) {
      //   setLang(val);
      //   this.setTitle();
    },

    config: {
      handler(val) {
        if (val) {
          //   this.setTitle();
        }
      },
      immediate: true,
    },
  },

  methods: {
    setTitle() {
      let { title } = this.config;

      const navItems = this.config.nav.reduce(
        (result, nav) => [...result, ...nav.items],
        []
      );

      const current = navItems.find((item) => {
        return item.path === this.$route.meta.name;
      });

      if (current && current.title) {
        title = current.title + " - " + title;
      } else if (this.config.description) {
        title += ` - ${this.config.description}`;
      }

      document.title = title;
    },
  },
};
</script>

<style lang="less" rel="stylesheet/less" scoped>
@import "../common/style/base";
@import "../common/style/highlight";

.van-doc-intro {
  padding-top: 20px;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
}
</style>
