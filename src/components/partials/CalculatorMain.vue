<template>
<div class="tab">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="FanCoil" name="first">
      <CalculatorFanTable></CalculatorFanTable>
    </el-tab-pane>
    <el-tab-pane label="Chiller" name="second">Chiller</el-tab-pane>
    <el-tab-pane label="DryColler" name="third">DryColler</el-tab-pane>
    <el-tab-pane label="Condenser" name="fourth">Condenser</el-tab-pane>
    <el-tab-pane label="AHU" name="fifth">AHU</el-tab-pane>
  </el-tabs>
<!--<div class="img">-->
  <!--<img src="/static/images/calculator.png">-->
<!--</div>-->
</div>

</template>

<script>
import CalculatorFanTable from './CalculatorFanTable.vue'
export default {
	   components: {
   		 CalculatorTable
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  components:
  {
    CalculatorFanTable
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/leafs.scss';
  .tab{
    padding-top: 20px;
    background-color: #424242;
    margin:0px;

  }
  .img{
    margin-left:400px;
    margin-top:240px;
    width:310px;
  }
  .el-tab-pane
  {
    overflow: auto;
  }
</style>
