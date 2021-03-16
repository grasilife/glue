<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-contact-edit
        is-edit
        show-set-default
        :contact-info="editingContact"
        :set-default-label="defaultLabel"
        @save="onSave"
        @delete="onDelete"
      />
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      defaultLabel: "设为默认联系人",
      editingContact: {},
      save: "保存",
      delete: "删除"
    };
  },

  methods: {
    onSave() {
      this.$toast(this.save);
    },
    onDelete() {
      this.$toast(this.delete);
    }
  }
};
</script>

<style lang="less">
.demo-contact-edit {
  .van-doc-demo-block__title {
    padding-bottom: 0;
  }
}
</style>
