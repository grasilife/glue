<template>
  <DemoSection>
    <van-tabs v-model="activeTab">
      <van-tab :title="basicUsage">
        <van-index-bar>
          <div v-for="index in indexList" :key="index">
            <van-index-anchor :index="index" />
            <van-cell :title="text" />
            <van-cell :title="text" />
            <van-cell :title="text" />
          </div>
        </van-index-bar>
      </van-tab>

      <van-tab :title="customIndexListTitle">
        <van-index-bar :index-list="customIndexList">
          <div v-for="index in customIndexList" :key="index">
            <van-index-anchor :index="index">
              {{ title + index }}
            </van-index-anchor>
            <van-cell :title="text" />
            <van-cell :title="text" />
            <van-cell :title="text" />
          </div>
        </van-index-bar>
      </van-tab>
    </van-tabs>
  </DemoSection>
</template>

<script>
export default {
  data() {
    const indexList = [];
    const charCodeOfA = "A".charCodeAt(0);

    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i));
    }

    return {
      title: "标题",
      basicUsage: "基础用法",
      text: "文本",
      customIndexListTitle: "自定义索引列表",
      activeTab: 0,
      indexList,
      customIndexList: [1, 2, 3, 4, 5, 6, 8, 9, 10]
    };
  }
};
</script>
