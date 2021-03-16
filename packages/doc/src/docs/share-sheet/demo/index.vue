<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <van-cell is-link :title="showSheet" @click="show.basic = true" />
      <van-share-sheet v-model="show.basic" :title="title" :options="options" @select="onSelect" />
    </demo-block>

    <DemoBlock card :title="multiLine">
      <van-cell is-link :title="showSheet" @click="show.multiLine = true" />
      <van-share-sheet v-model="show.multiLine" :title="title" :options="multiLineOptions" @select="onSelect" />
    </demo-block>

    <DemoBlock card :title="customIcon">
      <van-cell is-link :title="showSheet" @click="show.customIcon = true" />
      <van-share-sheet v-model="show.customIcon" :options="customIconOptions" @select="onSelect" />
    </demo-block>

    <DemoBlock card :title="withDesc">
      <van-cell is-link :title="showSheet" @click="show.withDesc = true" />
      <van-share-sheet
        v-model="show.withDesc"
        :title="title"
        :options="optionsWithDesc"
        :description="description"
        @select="onSelect"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      qq: "QQ",
      name: "名称",
      link: "复制链接",
      title: "立即分享给好友",
      weibo: "微博",
      wechat: "微信",
      poster: "分享海报",
      qrcode: "二维码",
      multiLine: "展示多行选项",
      showSheet: "显示分享面板",
      withDesc: "展示描述信息",
      customIcon: "自定义图标",
      description: "描述信息",
      weappQrcode: "小程序码",
      wechatMoments: "朋友圈",
      show: {
        basic: false,
        withDesc: false,
        multiLine: false,
        customIcon: false
      }
    };
  },

  computed: {
    options() {
      return [
        { name: this.wechat, icon: "wechat" },
        { name: this.weibo, icon: "weibo" },
        { name: this.link, icon: "link" },
        { name: this.poster, icon: "poster" },
        { name: this.qrcode, icon: "qrcode" }
      ];
    },

    multiLineOptions() {
      return [
        [
          { name: this.wechat, icon: "wechat" },
          { name: this.wechatMoments, icon: "wechat-moments" },
          { name: this.weibo, icon: "weibo" },
          { name: this.qq, icon: "qq" }
        ],
        [
          { name: this.link, icon: "link" },
          { name: this.poster, icon: "poster" },
          { name: this.qrcode, icon: "qrcode" },
          { name: this.weappQrcode, icon: "weapp-qrcode" }
        ]
      ];
    },

    customIconOptions() {
      return [
        {
          name: this.name,
          icon: "https://img.yzcdn.cn/vant/custom-icon-fire.png"
        },
        {
          name: this.name,
          icon: "https://img.yzcdn.cn/vant/custom-icon-light.png"
        },
        {
          name: this.name,
          icon: "https://img.yzcdn.cn/vant/custom-icon-water.png"
        }
      ];
    },

    optionsWithDesc() {
      return [
        { name: this.wechat, icon: "wechat" },
        { name: this.weibo, icon: "weibo" },
        {
          name: this.link,
          icon: "link",
          description: this.description
        },
        { name: this.poster, icon: "poster" },
        { name: this.qrcode, icon: "qrcode" }
      ];
    }
  },

  methods: {
    onSelect(option) {
      this.$toast(option.name);
      this.show.basic = false;
      this.show.withDesc = false;
      this.show.multiLine = false;
      this.show.customIcon = false;
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";
</style>
