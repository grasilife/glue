<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-grid>
        <van-grid-item v-for="i in 4" :key="i" icon="photo-o" :text="text" />
      </van-grid>
    </demo-block>

    <demo-block :title="columnNum">
      <van-grid :column-num="3">
        <van-grid-item v-for="i in 6" :key="i" icon="photo-o" :text="text" />
      </van-grid>
    </demo-block>

    <demo-block :title="customContent">
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-1.jpg"
          />
        </van-grid-item>
        <van-grid-item>
          <van-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-2.jpg"
          />
        </van-grid-item>
        <van-grid-item>
          <van-image
            fit="contain"
            src="https://img.yzcdn.cn/vant/apple-3.jpg"
          />
        </van-grid-item>
      </van-grid>
    </demo-block>

    <demo-block :title="square">
      <van-grid square>
        <van-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="text" />
      </van-grid>
    </demo-block>

    <demo-block :title="gutter">
      <van-grid :gutter="10">
        <van-grid-item v-for="i in 8" :key="i" icon="photo-o" :text="text" />
      </van-grid>
    </demo-block>

    <demo-block :title="horizontal">
      <van-grid direction="horizontal" :column-num="3">
        <van-grid-item icon="photo-o" :text="text" />
        <van-grid-item icon="photo-o" :text="text" />
        <van-grid-item icon="photo-o" :text="text" />
      </van-grid>
    </demo-block>

    <demo-block :title="route">
      <van-grid clickable :column-num="2">
        <van-grid-item icon="home-o" :text="vueRoute" to="/" />
        <van-grid-item icon="search" :text="urlRoute" url="/vant/mobile.html" />
      </van-grid>
    </demo-block>

    <demo-block :title="showBadge">
      <van-grid :column-num="2">
        <van-grid-item icon="home-o" :text="text" dot />
        <van-grid-item icon="search" :text="text" badge="99+" />
      </van-grid>
    </demo-block>
  </demo-section>
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
      horizontal: "内容横排"
    };
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";
</style>
