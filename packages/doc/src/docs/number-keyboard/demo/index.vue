<template>
  <demo-section>
    <van-cell is-link @touchstart.native.stop="keyboard = 'default'">
      {{ button1 }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'custom'">
      {{ button2 }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'extraKey'">
      {{ button3 }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'title'">
      {{ button4 }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'multiExtraKey'">
      {{ button5 }}
    </van-cell>
    <van-cell is-link @touchstart.native.stop="keyboard = 'randomKeyOrder'">
      {{ button6 }}
    </van-cell>

    <van-field
      readonly
      clickable
      :value="value"
      :label="bindValue"
      :placeholder="clickToInput"
      @touchstart.native.stop="keyboard = 'bindValue'"
    />

    <van-number-keyboard :show="keyboard === 'default'" @blur="keyboard = ''" @input="onInput" @delete="onDelete" />

    <van-number-keyboard
      :show="keyboard === 'custom'"
      :close-button-text="close"
      theme="custom"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'extraKey'"
      :close-button-text="close"
      extra-key="X"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'title'"
      :close-button-text="close"
      :title="title"
      extra-key="."
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'multiExtraKey'"
      :close-button-text="close"
      theme="custom"
      :extra-key="['00', '.']"
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard
      :show="keyboard === 'randomKeyOrder'"
      random-key-order
      @blur="keyboard = ''"
      @input="onInput"
      @delete="onDelete"
    />

    <van-number-keyboard v-model="value" :show="keyboard === 'bindValue'" maxlength="6" @blur="keyboard = ''" />
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      close: "完成",
      input: "输入",
      title: "键盘标题",
      button1: "弹出默认键盘",
      button2: "弹出带右侧栏的键盘",
      button3: "弹出身份证号键盘",
      button4: "弹出带标题的键盘",
      button5: "弹出配置多个按键的键盘",
      button6: "弹出配置随机数字的键盘",
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
    onInput(value) {
      this.$toast(`${this.input}: ${value}`);
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

  .van-button {
    margin-left: @padding-md;
  }
}
</style>
