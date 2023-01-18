<template>
  <DemoSection>
    <van-tabs>
      <van-tab :title="basicUsage">
        <glue-list
          :loading="list[0].loading"
          :finished="list[0].finished"
          :finished-text="finishedText"
          @glueLoad="onLoad(0)"
        >
          <glue-cell v-for="item in list[0].items" :key="item" :gtitle="item" />
        </glue-list>
      </van-tab>

      <van-tab :title="errorInfo">
        <glue-list
          :loading="list[1].loading"
          :finished="list[1].finished"
          :error="list[1].error"
          :error-text="errorText"
          @glueLoad="onLoad(1)"
        >
          <glue-cell v-for="item in list[1].items" :key="item" :gtitle="item" />
        </glue-list>
      </van-tab>

      <van-tab :title="pullRefresh">
        <van-pull-refresh :loading="list[2].refreshing" @refresh="onRefresh(2)">
          <glue-list
            :loading="list[2].loading"
            :finished="list[2].finished"
            :finished-text="finishedText"
            @glueLoad="onLoad(2)"
          >
            <glue-cell v-for="item in list[2].items" :key="item" :gtitle="item" />
          </glue-list>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      errorInfo: "错误提示",
      errorText: "请求失败，点击重新加载",
      pullRefresh: "下拉刷新",
      finishedText: "没有更多了",
      list: [
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        },
        {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }
      ]
    };
  },

  methods: {
    onLoad(index) {
      const list = this.list[index];
      list.loading = true;

      setTimeout(() => {
        if (list.refreshing) {
          list.items = [];
          list.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          const text = list.items.length + 1;
          list.items.push(text < 10 ? "0" + text : text);
        }

        list.loading = false;
        console.log(list.loading, "list.loading");
        list.refreshing = false;

        // show error info in second demo
        if (index === 1 && list.items.length === 10 && !list.error) {
          list.error = true;
        } else {
          list.error = false;
        }

        if (list.items.length >= 40) {
          list.finished = true;
        }
      }, 1000);
    },

    onRefresh(index) {
      this.list[index].finished = false;
      this.onLoad(index);
    }
  }
};
</script>

<style lang="less">
@import "~/common/style/var2.less";

.demo-list {
  glue-cell {
    text-align: center;
  }

  .page-desc {
    margin: 0;
    padding: 5px 0;
    color: @gray-7;
    font-size: 14px;
    text-align: center;

    &--text {
      margin: 0;
    }

    &--option {
      margin: 12px;
    }
  }

  .van-checkbox__label {
    color: @gray-7;
  }
}
</style>
