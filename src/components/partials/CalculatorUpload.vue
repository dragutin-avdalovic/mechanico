<template>
  <div class="upload">
    <el-upload class="upload-demo"
               drag
               action="https://jsonplaceholder.typicode.com/posts/"
               :on-preview="handlePreview"
               :on-remove="handleRemove"
               :file-list="fileList"
               multiple>
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handlePreview () {
    },
    handleRemove () {
    }
  }
}
</script>

<style lang="scss" scoped>

  .el-upload__text {
    color: white !important;
  }
</style>
