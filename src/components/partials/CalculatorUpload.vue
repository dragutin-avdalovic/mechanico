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
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Upload File</el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Create table</el-button>
      </el-col>
    </el-row>
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
  .button {
    background-color: #29aae2;
    border-color: #29aae2;
    border-radius: 0px;
    color: white;
    margin: 1em 1%;
    width: 98%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .upload {
    background-color: #606060;
    width: 94%;
    margin: 0 1%;

  }
</style>
