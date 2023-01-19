<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <van-popover
        v-model="show.lightTheme"
        trigger="click"
        :actions="actions"
        placement="bottom-start"
        style="margin-left: 16px"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ lightTheme }}
          </van-button>
        </template>
      </van-popover>
      <van-popover
        v-model="show.darkTheme"
        theme="dark"
        trigger="click"
        :actions="actions"
        style="margin-left: 16px"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ darkTheme }}
          </van-button>
        </template>
      </van-popover>
    </DemoBlock>

    <DemoBlock :title="placement">
      <van-field
        is-link
        readonly
        name="picker"
        :label="choosePlacement"
        @click="showPicker = true"
      />

      <van-popup
        v-model="showPicker"
        round
        position="bottom"
        get-container="body"
      >
        <div class="demo-popover-box">
          <van-popover
            v-model="show.placement"
            theme="dark"
            trigger="click"
            :actions="shortActions"
            :placement="currentPlacement"
            @select="onSelect"
          >
            <template #reference>
              <div class="demo-popover-refer" />
            </template>
          </van-popover>
        </div>
        <van-picker :columns="placements" @change="onPickerChange" />
      </van-popup>
    </DemoBlock>

    <DemoBlock :title="actionOptions">
      <van-popover
        v-model="show.showIcon"
        trigger="click"
        :actions="actionsWithIcon"
        placement="bottom-start"
        style="margin-left: 16px"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ showIcon }}
          </van-button>
        </template>
      </van-popover>

      <van-popover
        v-model="show.disableAction"
        trigger="click"
        :actions="actionsDisabled"
        style="margin-left: 16px"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">
            {{ disableAction }}
          </van-button>
        </template>
      </van-popover>
    </DemoBlock>

    <DemoBlock :title="customContent">
      <van-popover
        v-model="show.customContent"
        trigger="click"
        placement="top-start"
        style="margin-left: 16px"
        @select="onSelect"
      >
        <van-grid
          square
          clickable
          :border="false"
          column-num="3"
          style="width: 240px"
        >
          <van-grid-item
            v-for="i in 6"
            :key="i"
            icon="photo-o"
            :text="option"
            @click="show.customContent = false"
          />
        </van-grid>
        <template #reference>
          <van-button type="primary">
            {{ customContent }}
          </van-button>
        </template>
      </van-popover>
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      option: "选项",
      basicUsage: "基础用法",
      actions: [{ text: "选项一" }, { text: "选项二" }, { text: "选项三" }],
      shortActions: [{ text: "选项一" }, { text: "选项二" }],
      actionsWithIcon: [
        { text: "选项一", icon: "add-o" },
        { text: "选项二", icon: "music-o" },
        { text: "选项三", icon: "more-o" },
      ],
      actionsDisabled: [
        { text: "选项一", disabled: true },
        { text: "选项二", disabled: true },
        { text: "选项三" },
      ],
      showIcon: "展示图标",
      placement: "弹出位置",
      darkTheme: "深色风格",
      lightTheme: "浅色风格",
      showPopover: "点击弹出气泡",
      actionOptions: "选项配置",
      customContent: "自定义内容",
      disableAction: "禁用选项",
      choosePlacement: "选择弹出位置",
      show: {
        showIcon: false,
        placement: false,
        darkTheme: false,
        lightTheme: false,
        customContent: false,
        disableAction: false,
      },
      showPicker: false,
      currentPlacement: "top",
      placements: [
        "top",
        "top-start",
        "top-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
      ],
    };
  },

  methods: {
    onPickerChange(picker, value) {
      setTimeout(() => {
        this.show.placement = true;
        this.currentPlacement = value;
      });
    },
    onSelect(action) {
      this.$toast(action.text);
    },
  },
};
</script>

<style lang="less">
@import "@glue/glue-cli/src/common/style/var.less";

.demo-popover {
  &-refer {
    width: 60px;
    height: 60px;
    background-color: @blue;
    border-radius: 8px;
  }

  .van-field {
    width: auto;
    margin: 0 12px;
    overflow: hidden;
    border-radius: 8px;
  }

  &-box {
    display: flex;
    justify-content: center;
    margin: 110px 0;
  }
}
</style>
