<template>
  <DemoSection>
    <DemoBlock :title="addContact">
      <van-contact-card type="add" @click="onAdd" />
    </DemoBlock>

    <DemoBlock :title="editContact">
      <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" @click="onEdit" />
    </DemoBlock>

    <DemoBlock :title="uneditable">
      <van-contact-card type="edit" :name="currentContact.name" :tel="currentContact.tel" :editable="false" />
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      uneditable: "不可编辑",
      add: "新增",
      edit: "编辑",
      name: "张三",
      addContact: "添加联系人",
      editContact: "编辑联系人"
    };
  },
  computed: {
    currentContact() {
      return {
        name: this.name,
        tel: "13000000000"
      };
    }
  },

  methods: {
    onAdd() {
      this.$toast(this.add);
    },

    onEdit() {
      this.$toast(this.edit);
    }
  }
};
</script>
