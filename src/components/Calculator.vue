<template>
  <el-container style="height: 100vh;">
    <el-main>
      <el-row class="row-bg" justify="flex-start">
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <div class="grid-content1">
            <CalculatorSidebar></CalculatorSidebar>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <div class="grid-content">
            <CalculatorMain></CalculatorMain>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import CalculatorSidebar from '@/components/partials/CalculatorSidebar'
import CalculatorMain from '@/components/partials/CalculatorMain'

export default {
  components: {
    CalculatorSidebar,
    CalculatorMain
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss"scoped>
.el-upload {
  width:100% !important;
}
.grid-content{
  height:800px;
}
.el-upload-dragger{
  background-color: #606060;
  margin-top:25px;
  width:100% !important;
}


.el-tabs__item{
  width: 53%;
  height:70px;
  background-color:#606060;
  color:#bcbcbc;;
  margin-right:5px;
  padding-top:15px;
}
.el-tabs__item:hover{
 background-color:#414141;
 box-shadow: 5px 10px 18px #888888;
}
.el-tabs__active-bar{
width:53% !important;
}
</style>
