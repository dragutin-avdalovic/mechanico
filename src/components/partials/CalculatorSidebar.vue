<template>
<div class="sidebar">
  <div class="button">
    <el-row :gutter="5">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <button class="upperButton1"><div class="circle">1</div>UPLOAD</button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <button class="upperButton2"><div class="circle1">2</div>CALCULATE</button>
      </el-col>
    </el-row>
    </div>
    <div class="content">
      <el-row :gutter="5">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="upload">
            <el-upload
            class="upload-demo"
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
        </el-col>
      </el-row>
    <div class="button2">
      <el-row justify="center" :gutter="25">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-button type="primary">Upload Excel File</el-button>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <el-button type="primary">Create table</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>

.sidebar{
background-color:#424242;
padding-bottom: 10px;
height: 800px;
}
.circle{
display: inline-block;
border-radius: 50%;
padding: 5px;

margin-right: 10px;
width:23px;
height:20px;
background-color: #125889;
}
.circle1{
display: inline-block;
border-radius: 50%;
padding: 5px;
margin-right: 10px;
width:23px;
height:20px;
background-color: #4c4c4c;
}
.button{
padding-top: 10px;
padding-left: 10px;
padding-right: 10px;
}
.upperButton1{
background-color: #0d71b8;
color: white;
width: 100%;
height: 60px;
border-color: transparent;
cursor: pointer;
padding-right: 60px;
margin-top: 5px;
}
.upperButton1:hover {
background-color: #0052cc;
}
.upperButton2{
background-color: #606060;
color: #bcbcbc;
width: 100%;
height: 60px;
border-color: transparent;
cursor: pointer;
padding-right: 40px;
margin-top: 5px;
}
.upperButton2:hover {
background-color: #595959;
}
.content{
margin-right: 10px;
margin-left: 10px;
margin-top: 5px;
margin-bottom: 5px;
background-color: #606060;
padding-left: 10px;
padding-right: 10px;
}
.el-upload__text{
color: white;
}
.el-button{
width: 100%;
margin-top: 5px;
}
.button2{
margin-top: 10px;
padding-bottom: 30px;
}

</style>
