<template>
  <glue-doc-section :class="demoName">
    <van-tabs v-model="tab" sticky>
      <van-tab :title="demo">
        <glue-doc-block :gtitle="basicUsage">
          <glue-row>
            <glue-col span="6" @click="copy(demoIcon)">
              <glue-icon :name="demoIcon" size="32" />
            </glue-col>
            <glue-col span="6" @click="copy(demoImage)">
              <glue-icon :name="demoImage" size="32" />
            </glue-col>
          </glue-row>
        </glue-doc-block>

        <glue-doc-block :gtitle="badge">
          <glue-row>
            <glue-col span="6" @click="copy(demoIcon, { dot: true })">
              <glue-icon :name="demoIcon" dot size="32" />
            </glue-col>
            <glue-col span="6" @click="copy(demoIcon, { badge: '9' })">
              <glue-icon :name="demoIcon" badge="9" size="32" />
            </glue-col>
            <glue-col span="6" @click="copy(demoIcon, { badge: '99+' })">
              <glue-icon :name="demoIcon" badge="99+" size="32" />
            </glue-col>
          </glue-row>
        </glue-doc-block>

        <glue-doc-block :gtitle="color">
          <glue-row>
            <glue-col span="6" @click="copy(demoIcon, { color: '#1989fa' })">
              <glue-icon name="cart-o" color="#1989fa" size="32" />
            </glue-col>
            <glue-col span="6" @click="copy(demoIcon, { color: RED })">
              <glue-icon name="fire-o" :color="RED" size="32" />
            </glue-col>
          </glue-row>
        </glue-doc-block>

        <glue-doc-block :gtitle="size">
          <glue-row>
            <glue-col span="6" @click="copy(demoIcon, { size: '40' })">
              <glue-icon :name="demoIcon" size="40" />
            </glue-col>
            <glue-col span="6" @click="copy(demoIcon, { size: '3rem' })">
              <glue-icon :name="demoIcon" size="3rem" />
            </glue-col>
          </glue-row>
        </glue-doc-block>
      </van-tab>

      <van-tab :title="basic">
        <glue-row>
          <glue-col
            v-for="icon in icons.basic"
            :key="icon"
            span="6"
            @click="copy(icon)"
          >
            <glue-icon :name="icon" size="32" />
            <span>{{ icon }}</span>
          </glue-col>
        </glue-row>
      </van-tab>

      <van-tab :title="outline">
        <glue-row>
          <glue-col
            v-for="icon in icons.outline"
            :key="icon"
            span="6"
            @click="copy(icon)"
          >
            <glue-icon :name="icon" size="32" />
            <span>{{ icon }}</span>
          </glue-col>
        </glue-row>
      </van-tab>

      <van-tab :title="filled">
        <glue-row>
          <glue-col
            v-for="icon in icons.filled"
            :key="icon"
            span="6"
            @click="copy(icon)"
          >
            <glue-icon :name="icon" size="32" />
            <span>{{ icon }}</span>
          </glue-col>
        </glue-row>
      </van-tab>
    </van-tabs>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
import icons from "@vant/icons";
import { RED } from "@glue/glue-cli/src/common/constant";

// from https://30secondsofcode.org
function copyToClipboard(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;

  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

export default {
  data() {
    this.RED = RED;
    this.icons = icons;
    return {
      basicUsage: "基础用法",
      title: "图标列表",
      badge: "徽标提示",
      basic: "基础图标",
      copied: "复制成功",
      outline: "线框风格",
      filled: "实底风格",
      demo: "用法示例",
      color: "图标颜色",
      size: "图标大小",
      tab: 0,
      demoIcon: "chat-o",
      demoImage: "https://b.yzcdn.cn/vant/icon-demo-1126.png",
    };
  },
  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
  },
  methods: {
    copy(icon, option = {}) {
      let tag = `<glue-icon name="${icon}"`;
      if ("dot" in option) {
        tag = `${tag} ${option.dot ? "dot" : ""}`;
      }
      if ("badge" in option) {
        tag = `${tag} badge="${option.badge}"`;
      }
      if ("color" in option) {
        tag = `${tag} color="${option.color}"`;
      }
      if ("size" in option) {
        tag = `${tag} size="${option.size}"`;
      }
      tag = `${tag} />`;
      copyToClipboard(tag);

      this.$notify({
        type: "success",
        duration: 1500,
        className: "demo-icon-notify",
        message: `${this.copied}：${tag}`,
      });
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-icon {
  font-size: 0;

  &-list {
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
    padding-top: 10px;
  }

  &-notify {
    font-size: 13px;
  }

  glue-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36px;
      margin: -4px 0 4px;
      padding: 0 5px;
      color: @gray-7;
      font-size: 12px;
      line-height: 18px;
    }

    &:active {
      background-color: @active-color;
    }
  }

  glue-icon {
    margin: 16px 0 16px;
  }

  .van-tab__pane {
    width: auto;
    margin: 20px;
    background-color: #fff;
    border-radius: 12px;
  }
}
</style>
