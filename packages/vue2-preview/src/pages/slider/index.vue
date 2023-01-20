<template>
  <glue-doc-section>
    <glue-doc-block :gtitle="title1">
      <glue-slider :value="value1" @glueChange="onChange" />
    </glue-doc-block>

    <glue-doc-block :gtitle="title2">
      <glue-slider range :value="value2" @glueChange="onChange" />
    </glue-doc-block>

    <glue-doc-block :gtitle="title3">
      <glue-slider
        :value="value3"
        :min="-50"
        :max="50"
        @glueChange="onChange"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="title4">
      <glue-slider :value="value4" disabled />
    </glue-doc-block>

    <glue-doc-block :gtitle="title5">
      <glue-slider :value="value5" :step="10" @glueChange="onChange" />
    </glue-doc-block>

    <glue-doc-block :gtitle="customStyle">
      <glue-slider
        :value="value6"
        bar-height="4px"
        active-color="#ee0a24"
        @glueChange="onChange"
      />
    </glue-doc-block>

    <glue-doc-block :gtitle="customButton">
      <glue-slider :value="value7" active-color="#ee0a24" button-block="#slot">
        <div slot="button-block">
          <div class="custom-button">{{ value7 }}</div>
        </div>
      </glue-slider>
    </glue-doc-block>

    <glue-doc-block :gtitle="vertical">
      <div :style="{ height: '150px', paddingLeft: '30px' }">
        <glue-slider :value="value8" vertical @glueChange="onChange" />
        <glue-slider
          :value="value9"
          range
          vertical
          style="margin-left: 100px"
          @glueChange="onChange"
        />
      </div>
    </glue-doc-block>
  </glue-doc-section>
</template>

<script>
export default {
  data() {
    return {
      title1: "基础用法",
      title2: "双滑块",
      title3: "指定选择范围",
      title4: "禁用",
      title5: "指定步长",
      customStyle: "自定义样式",
      customButton: "自定义按钮",
      text: "当前值：",
      vertical: "垂直方向",
      value1: 50,
      value2: [20, 60],
      value3: 0,
      value4: 50,
      value5: 50,
      value6: 50,
      value7: 50,
      value8: 50,
      value9: [20, 60],
    };
  },
  methods: {
    onChange(value) {
      console.log(value, "valuevaluevalue");
      this.$toast(this.text + value.detail);
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-slider {
  background: @white;
  user-select: none;

  .van-doc-demo-block {
    padding: 0 @padding-md 20px;
  }

  .glue-doc-demo-block__title {
    padding-left: 0;
  }

  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: @red;
    border-radius: 100px;
  }
}
</style>
