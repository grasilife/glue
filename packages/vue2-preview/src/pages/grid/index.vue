<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="basicUsage">
      <glue-grid center>
        <glue-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="text" />
      </glue-grid>
    </glue-doc-block>

    <glue-doc-block :gtitle="columnNum">
      <glue-grid :column-num="3" center border>
        <glue-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="text" />
      </glue-grid>
    </glue-doc-block>

    <glue-doc-block :gtitle="customContent">
      <glue-grid :border="false" :column-num="3" center>
        <glue-grid-item custom="#slot">
          <glue-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </glue-grid-item>
        <glue-grid-item custom="#slot">
          <glue-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </glue-grid-item>
        <glue-grid-item custom="#slot">
          <glue-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </glue-grid-item>
      </glue-grid>
    </glue-doc-block>

    <glue-doc-block :gtitle="square">
      <glue-grid square center>
        <glue-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="text" />
      </glue-grid>
    </glue-doc-block>

    <glue-doc-block :gtitle="gutter">
      <glue-grid :gutter="10" center>
        <glue-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="text" />
      </glue-grid>
    </glue-doc-block>

    <glue-doc-block :gtitle="horizontal">
      <glue-grid direction="horizontal" :column-num="3" center>
        <glue-grid-item icon="photo-o" :text="text" />
        <glue-grid-item icon="photo-o" :text="text" />
        <glue-grid-item icon="photo-o" :text="text" />
      </glue-grid>
    </glue-doc-block>

    <glue-doc-block :gtitle="route">
      <glue-grid clickable :column-num="2" center>
        <glue-grid-item icon="home-o" :text="vueRoute" to="/" />
        <glue-grid-item
          icon="search"
          :text="urlRoute"
          url="/vant/mobile.html"
        />
      </glue-grid>
    </glue-doc-block>

    <glue-doc-block :gtitle="showBadge">
      <glue-grid :column-num="2" center>
        <glue-grid-item icon="home-o" :text="text" dot />
        <glue-grid-item icon="search" :text="text" badge="99+" />
      </glue-grid>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      text: "文字",
      route: "页面导航",
      gutter: "格子间距",
      square: "正方形格子",
      columnNum: "自定义列数",
      customContent: "自定义内容",
      urlRoute: "URL 跳转",
      vueRoute: "路由跳转",
      showBadge: "徽标提示",
      horizontal: "内容横排",
    };
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";
</style>
