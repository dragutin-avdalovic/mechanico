<template>
<div class="sidebar">
  <div class="button">
    <el-row :gutter="5">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <button class="upperButton1"><div class="circle">1</div><p>UPLOAD</p></button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <button class="upperButton2"><div class="circle-grey">2</div><p>CALCULATE</p></button>
      </el-col>
    </el-row>
    </div>
    <div class="content">
      <el-row :gutter="5">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <CalculatorChoose></CalculatorChoose>
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
  height: 100vh;
  }
.circle{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width:2em;
  height:2em;
  font-size: 1em;
  background-color: #125889;
  margin-top: 7px;
  margin-left: 5px;
  margin-right: 10%;	
}
.circle-grey{
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width:2em;
  height:2em;
  font-size: 1em;
  background-color: #4c4c4c;
  margin-top: 7px;
  margin-left: 5px;
  margin-right: 10%;

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
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  font-weight: 600;
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
  display: flex;
  flex-direction: row;
  font-weight: 600;
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
