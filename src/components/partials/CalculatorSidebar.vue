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
          <!--<CalculatorChoose></CalculatorChoose>-->
          <!--<CalculatorUpload></CalculatorUpload>-->
          <!--<CalculatorCompleted></CalculatorCompleted>-->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CalculatorUpload from '@/components/partials/CalculatorUpload'
import CalculatorChoose from '@/components/partials/CalculatorChoose'
import CalculatorCompleted from '@/components/partials/CalculatorCompleted'

export default {
  components: {
    CalculatorUpload,
    CalculatorChoose,
    CalculatorCompleted
  }}
</script>

<style scoped>

.sidebar{
  background-color:#424242;
  padding-bottom: 10px;
  height: 100vh;
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
.el-button{
    width: 100%;
    margin-top: 5px;
}
.btn {
    background-color: #29aae2;
    border-color: #29aae2;
    border-radius: 0px;
    color: white;
    width: 92%;
    margin-top: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
