<template>
  <DemoSection>
    <glue-cell is-link @click="keyboard = 'default'" gtitle="弹出默认键盘"> </glue-cell>
    <glue-cell is-link @click="keyboard = 'custom'" gtitle="弹出带右侧栏的键盘"> </glue-cell>
    <glue-cell is-link @click="keyboard = 'extraKey'" gtitle="弹出身份证号键盘"> </glue-cell>
    <glue-cell is-link @click="keyboard = 'title'" gtitle="弹出带标题的键盘"> </glue-cell>
    <glue-cell is-link @click="keyboard = 'multiExtraKey'" gtitle="弹出配置多个按键的键盘"> </glue-cell>
    <glue-cell is-link @click="keyboard = 'randomKeyOrder'" gtitle="弹出配置随机数字的键盘"> </glue-cell>
    <glue-number-keyboard
      v-if="keyboard === 'default'"
      @glueBlur="keyboard = ''"
      @glueInput="onInput"
      @glueDelete="onDelete"
    />

    <glue-number-keyboard
      v-if="keyboard === 'custom'"
      :close-button-text="close"
      theme="custom"
      extra-key="."
      @glueBlur="keyboard = ''"
      @glueInput="onInput"
      @glueDelete="onDelete"
    />

    <glue-number-keyboard
      v-if="keyboard === 'extraKey'"
      :close-button-text="close"
      extra-key="X"
      @glueBlur="keyboard = ''"
      @glueInput="onInput"
      @glueDelete="onDelete"
    />

    <glue-number-keyboard
      v-if="keyboard === 'title'"
      :close-button-text="close"
      :title="title"
      extra-key="."
      @glueBlur="keyboard = ''"
      @glueInput="onInput"
      @glueDelete="onDelete"
    />

    <glue-number-keyboard
      v-if="keyboard === 'multiExtraKey'"
      :close-button-text="close"
      theme="custom"
      :extra-key.prop="['00', '.']"
      @glueBlur="keyboard = ''"
      @glueInput="onInput"
      @glueDelete="onDelete"
    />

    <glue-number-keyboard
      v-if="keyboard === 'randomKeyOrder'"
      random-key-order
      @glueBlur="keyboard = ''"
      @glueInput="onInput"
      @glueDelete="onDelete"
    />
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      close: "完成",
      input: "输入",
      title: "键盘标题",
      extraKey: "左下角按键内容",
      bindValue: "双向绑定",
      clickToInput: "点此输入",
      multiExtraKey: "配置多个按键",
      randomKeyOrder: "随机数字键盘",
      value: "",
      keyboard: "default"
    };
  },

  methods: {
    onInput(event) {
      this.$toast(`${this.input}: ${event.detail}`);
    },

    onDelete() {
      this.$toast(this.delete);
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-number-keyboard {
  padding-bottom: 300px;

  .glue-button {
    margin-left: @padding-md;
  }
}
</style>
