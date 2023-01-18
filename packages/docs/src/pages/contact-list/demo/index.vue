<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-contact-list
        v-model="chosenContactId"
        :list="list"
        :default-tag-text="defaultTagText"
        @add="onAdd"
        @edit="onEdit"
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
      add: "新增",
      edit: "编辑",
      list: [
        {
          id: "1",
          name: "张三",
          tel: "13000000000",
          isDefault: true
        },
        {
          id: "2",
          name: "李四",
          tel: "1310000000"
        }
      ],
      select: "选择",
      defaultTagText: "默认",
      chosenContactId: "1"
    };
  },

  methods: {
    onAdd() {
      this.$toast(this.add);
    },
    onEdit(contact) {
      this.$toast(this.edit + contact.id);
    },
    onSelect(contact) {
      this.$toast(this.select + contact.id);
    }
  }
};
</script>

<style lang="less">
@import "~/common/style/var2.less";

.demo-contact-card {
  .van-popup {
    height: 100%;
    background-color: @background-color;
  }
}
</style>
