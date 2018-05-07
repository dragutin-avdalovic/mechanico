<template>
<div class="tab">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="FanCoil" name="first">FanCoil</el-tab-pane>
    <el-tab-pane label="Chiller" name="second">Chiller</el-tab-pane>
    <el-tab-pane label="DryColler" name="third">DryColler</el-tab-pane>
    <el-tab-pane label="Condenser" name="fourth">Condenser</el-tab-pane>
    <el-tab-pane label="AHU" name="fifth">AHU</el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-tabs__item{
    width: 53%;
    height:70px;
    background-color:#606060;
    color:#bcbcbc;
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
  .tab{
    padding-top: 20px;
    background-color: #424242;
  }
</style>
