<template>
  <demo-section>
    <demo-block :title="basicUsage">
      <van-uploader :after-read="afterRead" />
    </demo-block>

    <demo-block :title="preview">
      <van-uploader v-model="fileList" multiple accept="*" />
    </demo-block>

    <demo-block :title="status">
      <van-uploader v-model="statusFileList" :after-read="afterReadFailed" />
    </demo-block>

    <demo-block :title="maxCount">
      <van-uploader v-model="fileList2" multiple :max-count="2" />
    </demo-block>

    <demo-block :title="maxSize">
      <van-uploader
        v-model="fileList4"
        multiple
        :max-size="500 * 1024"
        @oversize="onOversize"
      />
    </demo-block>

    <demo-block :title="customUpload">
      <van-uploader>
        <van-button type="primary" icon="plus">
          {{ upload }}
        </van-button>
      </van-uploader>
    </demo-block>

    <demo-block :title="previewCover">
      <van-uploader v-model="previewCoverFiles">
        <template #preview-cover="{ file }">
          <div class="preview-cover van-ellipsis">{{ file.name }}</div>
        </template>
      </van-uploader>
    </demo-block>

    <demo-block :title="beforeReadTitle">
      <van-uploader v-model="fileList3" :before-read="beforeRead" />
    </demo-block>

    <demo-block :title="disabled">
      <van-uploader :after-read="afterRead" disabled />
    </demo-block>

    <demo-block :title="customPreviewImage">
      <van-uploader
        v-model="fileList5"
        multiple
        accept="*"
        :deletable="false"
      />
    </demo-block>
  </demo-section>
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
      fileList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://img.yzcdn.cn/vant/tree.jpg" },
      ],
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
          },
        },
        {
          url: "https://img.yzcdn.cn/vant/tree.jpg",
          deletable: true,
          imageFit: "contain",
          previewSize: 120,
        },
      ],
      statusFileList: [],
      previewCoverFiles: [],
    };
  },

  created() {
    this.statusFileList.push(
      {
        url: "https://img.yzcdn.cn/vant/leaf.jpg",
        status: "uploading",
        message: this.uploading,
      },
      {
        url: "https://img.yzcdn.cn/vant/tree.jpg",
        status: "failed",
        message: this.failed,
      }
    );

    this.previewCoverFiles.push({
      url: "https://img.yzcdn.cn/vant/leaf.jpg",
      file: {
        name: this.imageName,
      },
    });
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
    },
  },
};
</script>

<style lang="less">
@import "../../../common/style/var2.less";

.demo-uploader {
  background-color: @white;

  .van-uploader {
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
