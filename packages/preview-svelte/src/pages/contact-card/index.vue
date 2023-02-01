<template>
  <glue-doc-section :class="demoName">
    <glue-doc-block :gtitle="addContact">
      <van-contact-card type="add" @click="onAdd" />
    </glue-doc-block>

    <glue-doc-block :gtitle="editContact">
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        @click="onEdit"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="uneditable">
      <van-contact-card
        type="edit"
        :name="currentContact.name"
        :tel="currentContact.tel"
        :editable="false"
      />
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
import { getDemoName } from "@glue/glue-cli";
export default {
  data() {
    return {
      uneditable: "不可编辑",
      add: "新增",
      edit: "编辑",
      name: "张三",
      addContact: "添加联系人",
      editContact: "编辑联系人",
    };
  },
  computed: {
    demoName() {
      return getDemoName(this.$route);
    },
    currentContact() {
      return {
        name: this.name,
        tel: "13000000000",
      };
    },
  },

  methods: {
    onAdd() {
      this.$toast(this.add);
    },

    onEdit() {
      this.$toast(this.edit);
    },
  },
};
</script>
