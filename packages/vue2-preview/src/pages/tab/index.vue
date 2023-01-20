<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="basicUsage">
      <van-tabs v-model="active">
        <van-tab :title="tab + index" v-for="index in tabs" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="matchByName">
      <van-tabs v-model="activeName">
        <van-tab name="a" :title="tab + 1"> {{ content }} 1 </van-tab>
        <van-tab name="b" :title="tab + 2"> {{ content }} 2 </van-tab>
        <van-tab name="c" :title="tab + 3"> {{ content }} 3 </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title2">
      <van-tabs>
        <van-tab v-for="index in 8" :title="tab + index" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title3">
      <van-tabs @disabled="onClickDisabled">
        <van-tab
          v-for="index in 3"
          :title="tab + index"
          :disabled="index === 2"
          :key="index"
        >
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title4">
      <van-tabs type="card">
        <van-tab v-for="index in 3" :title="tab + index" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title5">
      <van-tabs @click="onClick">
        <van-tab v-for="index in 2" :title="tab + index" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title6">
      <van-tabs :active="active" sticky>
        <van-tab :title="tab + index" v-for="index in tabs" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title7">
      <van-tabs :active="active">
        <van-tab v-for="index in 2" :key="index">
          <template #title> <van-icon name="more-o" />{{ tab }} </template>
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title8">
      <van-tabs animated>
        <van-tab :title="tab + index" v-for="index in tabs" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title9">
      <van-tabs :active="active" swipeable>
        <van-tab :title="tab + index" v-for="index in tabs" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="title10">
      <van-tabs scrollspy sticky>
        <van-tab :title="tab + index" v-for="index in 8" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>

    <glue-doc-block :gtitle="beforeChangeTitle">
      <van-tabs :before-change="beforeChange">
        <van-tab :title="tab + index" v-for="index in 4" :key="index">
          {{ content }} {{ index }}
        </van-tab>
      </van-tabs>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      content: "内容",
      tab: "标签 ",
      title2: "标签栏滚动",
      title3: "禁用标签",
      title4: "样式风格",
      title5: "点击事件",
      title6: "粘性布局",
      title7: "自定义标签",
      title8: "切换动画",
      title9: "滑动切换",
      title10: "滚动导航",
      disabled: " 已被禁用",
      matchByName: "通过名称匹配",
      beforeChangeTitle: "异步切换",
      active: 2,
      activeName: "b",
      tabs: [1, 2, 3, 4],
    };
  },

  methods: {
    onClickDisabled(index, title) {
      this.$toast(title + this.disabled);
    },

    onClick(index, title) {
      this.$toast(title);
    },

    beforeChange(name) {
      if (name === 1) {
        return false;
      }

      return new Promise((resolve) => {
        resolve(name !== 3);
      });
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-tab {
  margin-bottom: 80vh;

  .glue-tab .van-icon {
    margin-right: 5px;
    vertical-align: -2px;
  }

  .glue-tab__panel {
    padding: 24px 20px;
    background-color: @white;
  }

  .glue-tabs--card .glue-tab__pane {
    background-color: transparent;
  }
}
</style>
