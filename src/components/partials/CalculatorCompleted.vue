<template>
  <div class="completed">
    <div class="circle">
      <div class="content">
        <i class="el-icon-check"/>
        <p class="text">Upload Completed</p>
      </div>

    <div class="file">
      <p>File Name.xml</p>
    </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/leafs.scss';
.completed{
    display: flex;
    justify-content: center;
    padding-top:40px;
    padding-bottom:30px;
}
 .circle{
  border:3px solid #29aae2;
  border-radius:100%;
  width:100px;
  height:100px;

}
.content{
  font-size:9px;
  color:#bcbcbc;
  text-align:center;
}
.text{
  margin-top:0px;
  width:70%;
  margin-left: 14px;
}
.file{
  font-size:12px;
  color:#bcbcbc;
  text-align:center;
  margin-top:30px;
}
</style>
