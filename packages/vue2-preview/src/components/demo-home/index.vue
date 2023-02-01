<template>
  <div class="demo-home">
    <h1
      class="demo-home__title"
      :class="{ 'demo-home__title--small': smallTitle }"
    >
      <img :src="glueConfig.logo" />
      <span>{{ glueConfig.title }}</span>
    </h1>
    <h2 v-if="glueConfig.description" class="demo-home__desc">
      {{ glueConfig.description }}
    </h2>
    <glue-doc-nav-list
      v-for="(group, index) in glueConfig.nav"
      :key="index"
      :gtitle="group.title"
      :group.prop="group.items"
      @glueItemClick="glueItemClick"
    ></glue-doc-nav-list>
  </div>
</template>

<script>
import { glueConfig } from "@glue/glue-cli";

export default {
  components: {},

  computed: {
    lang() {
      const lang = "zh-CN";
      console.log(lang, "lang");
      return lang || "";
    },
    type() {
      const { type } = this.$route.meta;
      console.log(this.$route, "this.$routethis.$routethis.$route222");
      console.log(type, "type");
      return type || "vue2";
    },

    glueConfig() {
      const { locales } = glueConfig.site;
      console.log(locales, "locales");
      if (locales) {
        console.log(locales[this.lang], "locales[this.lang]");
        return locales[this.lang];
      }
      console.log(glueConfig.site, "glueConfig.site");
      return glueConfig.site;
    },

    smallTitle() {
      return this.glueConfig.title.length >= 8;
    },
  },
  methods: {
    glueItemClick(event) {
      console.log(event, "event");
      let pathEnd = `/${this.type}/${this.lang}/${event.detail.path}`;
      console.log(pathEnd, "pathEndpathEnd");
      this.$router.push(pathEnd);
    },
  },
};
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
