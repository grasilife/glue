<template>
  <DemoSection>
    <DemoBlock card :title="basicUsage">
      <glue-cell is-link :g_title="showSheet" @click="show.basic = true" />
      <glue-share-sheet :show="show.basic" :g_title="title" :options.prop="options" @select="onSelect" />
    </DemoBlock>

    <DemoBlock card :title="multiLine">
      <glue-cell is-link :g_title="showSheet" @click="show.multiLine = true" />
      <glue-share-sheet :show="show.multiLine" :g_title="title" :options.prop="multiLineOptions" @select="onSelect" />
    </DemoBlock>

    <DemoBlock card :title="customIcon">
      <glue-cell is-link :g_title="showSheet" @click="show.customIcon = true" />
      <glue-share-sheet :show="show.customIcon" :options.prop="customIconOptions" @select="onSelect" />
    </DemoBlock>

    <DemoBlock card :title="withDesc">
      <glue-cell is-link :g_title="showSheet" @click="show.withDesc = true" />
      <glue-share-sheet
        :show="show.withDesc"
        :g_title="title"
        :options="optionsWithDesc"
        :description="description"
        @select="onSelect"
      />
    </DemoBlock>
  </DemoSection>
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
