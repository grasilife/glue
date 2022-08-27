<template>
  <DemoSection>
    <DemoBlock :title="basicUsage">
      <glue-uploader show-upload preview-image :after-read="afterRead" />
    </DemoBlock>

    <DemoBlock :title="preview">
      <glue-uploader :list.prop="fileList" multiple accept="*" show-upload preview-image />
    </DemoBlock>

    <DemoBlock :title="status">
      <glue-uploader :list.prop="statusFileList" :after-read="afterReadFailed" show-upload preview-image />
    </DemoBlock>

    <DemoBlock :title="maxCount">
      <glue-uploader :list.prop="fileList2" multiple :max-count="2" show-upload preview-image />
    </DemoBlock>

    <DemoBlock :title="maxSize">
      <glue-uploader
        :list.prop="fileList4"
        multiple
        :max-size="500 * 1024"
        @oversize="onOversize"
        show-upload
        preview-image
      />
    </DemoBlock>

    <DemoBlock :title="customUpload">
      <glue-uploader show-upload preview-image>
        <glue-button type="primary" icon="plus">
          {{ upload }}
        </glue-button>
      </glue-uploader>
    </DemoBlock>

    <DemoBlock :title="previewCover">
      <glue-uploader :list.prop="previewCoverFiles" show-upload preview-image>
        <template #preview-cover="{ file }">
          <div class="preview-cover glue-ellipsis">{{ file.name }}</div>
        </template>
      </glue-uploader>
    </DemoBlock>

    <DemoBlock :title="beforeReadTitle">
      <glue-uploader :list.prop="fileList3" :before-read="beforeRead" show-upload preview-image />
    </DemoBlock>

    <DemoBlock :title="disabled">
      <glue-uploader :after-read="afterRead" disabled show-upload preview-image />
    </DemoBlock>

    <DemoBlock :title="customPreviewImage">
      <glue-uploader :list.prop="fileList5" multiple accept="*" :deletable="false" show-upload preview-image />
    </DemoBlock>
  </DemoSection>
</template>

<script>
export default {
  data() {
    return {
      basicUsage: "基础用法",
      status: "上传状态",
      failed: "上传失败",
      upload: "上传文件",
      preview: "文件预览",
      maxSize: "限制上传大小",
      disabled: "禁用文件上传",
      maxCount: "限制上传数量",
      uploading: "上传中...",
      imageName: "图片名称",
      beforeReadTitle: "上传前置处理",
      overSizeTip: "文件大小不能超过 500kb",
      invalidType: "请上传 jpg 格式图片",
      customUpload: "自定义上传样式",
      previewCover: "自定义预览样式",
      customPreviewImage: "自定义单个图片预览",
      deleteMessage: "删除前置处理",
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }, { url: "https://img.yzcdn.cn/vant/tree.jpg" }],
      fileList2: [{ url: "https://img.yzcdn.cn/vant/sand.jpg" }],
      fileList3: [],
      fileList4: [{ url: "https://img.yzcdn.cn/vant/sand.jpg" }],
      fileList5: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        {
          url: "https://img.yzcdn.cn/vant/sand.jpg",
          deletable: true,
          beforeDelete: () => {
            this.$toast(this.deleteMessage);
          }
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          deletable: true,
          imageFit: "contain",
          previewSize: 120
        }
      ],
      statusFileList: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg",
          status: "uploading",
          message: this.uploading
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          status: "failed",
          message: this.failed
        }
      ],
      previewCoverFiles: [
        {
          url: "https://img.yzcdn.cn/vant/leaf.jpg",
          file: {
            name: this.imageName
          }
        }
      ]
    };
  },

  methods: {
    beforeRead(file) {
      if (file.type !== "image/jpeg") {
        this.$toast(this.invalidType);
        return false;
      }

      return true;
    },

    afterRead(file, detail) {
      console.log(file, detail);
    },

    afterReadFailed(item) {
      item.status = "uploading";
      item.message = this.uploading;

      setTimeout(() => {
        item.status = "failed";
        item.message = this.failed;
      }, 1000);
    },

    onOversize(file, detail) {
      console.log(file, detail);
      this.$toast(this.overSizeTip);
    }
  }
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-uploader {
  background-color: @white;

  glue-uploader {
    margin-left: @padding-md;
  }

  .preview-cover {
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 4px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
  }
}
</style>
