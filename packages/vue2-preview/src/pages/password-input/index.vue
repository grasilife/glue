<template>
  <glue-doc-section>
    <div class="demo-password-input-container">
      <glue-doc-block ref="basicUsage" title="基础用法">
        <glue-password-input
          :value="value.basicUsage"
          :focused="current === 'basicUsage'"
          @glueFocus="current = 'basicUsage'"
        />
      </glue-doc-block>

      <glue-doc-block ref="customLength" title="自定义长度">
        <glue-password-input
          :value="value.customLength"
          :length="4"
          :focused="current === 'customLength'"
          @glueFocus="current = 'customLength'"
        />
      </glue-doc-block>

      <glue-doc-block ref="addGutter" title="格子间距">
        <glue-password-input
          :value="value.addGutter"
          :gutter="10"
          :focused="current === 'addGutter'"
          @glueFocus="current = 'addGutter'"
        />
      </glue-doc-block>

      <glue-doc-block ref="removeMask" title="明文展示">
        <glue-password-input
          :mask.prop="false"
          :value="value.removeMask"
          :focused="current === 'removeMask'"
          @glueFocus="current = 'removeMask'"
        />
      </glue-doc-block>

      <glue-doc-block ref="showInfo" title="提示信息">
        <glue-password-input
          :info="info"
          :value="value.showInfo"
          :error-info="errorInfo"
          :focused="current === 'showInfo'"
          @glueFocus="current = 'showInfo'"
        />
      </glue-doc-block>
    </div>

    <glue-number-keyboard
      :show="!!current"
      @glueBlur="current = ''"
      @glueInput="onInput"
      @glueDelete="onDelete"
    />
  </glue-doc-section>
</template>

<script>
export default {
  data() {
    return {
      info: "密码为 6 位数字",
      errorInfo: "密码错误",
      value: {
        showInfo: "123",
        addGutter: "123",
        basicUsage: "123",
        removeMask: "123",
        customLength: "123",
      },
      current: "basicUsage",
    };
  },

  watch: {
    current(value) {
      if (value) {
        const el = this.$refs[value].$el;
        const { top } = el.getBoundingClientRect();
        window.scrollTo(0, window.pageYOffset + top);
      }
    },
  },

  methods: {
    onInput(event) {
      let key = event.detail;
      const { value, current } = this;
      const maxlegnth = current === "customLength" ? 4 : 6;
      const newValue = (value[current] + key).slice(0, maxlegnth);

      value[current] = newValue;

      if (
        current === "showInfo" &&
        newValue.length === 6 &&
        newValue !== "123456"
      ) {
        this.errorInfo = this.errorInfo;
      }
    },
    onDelete() {
      const { value, current } = this;
      value[current] = value[current].slice(0, value[current].length - 1);

      if (current === "showInfo") {
        this.errorInfo = "";
      }
    },
  },
};
</script>

<style lang="less">
.demo-password-input {
  min-height: 140vh;
}
.demo-password-input-container {
  height: calc(100% - 240px);
  overflow: auto;
}
</style>
