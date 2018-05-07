<template>
<div class="tab">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="FanCoil" name="first">FanCoil</el-tab-pane>
    <el-tab-pane label="Chiller" name="second">Chiller</el-tab-pane>
    <el-tab-pane label="DryColler" name="third">DryColler</el-tab-pane>
    <el-tab-pane label="Condenser" name="fourth">Condenser</el-tab-pane>
    <el-tab-pane label="AHU" name="fifth">AHU</el-tab-pane>
  </el-tabs>
<div class="img">
  <img src="static/images/calculator.png">
</div>
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

  .tab{
    padding-top: 20px;
    background-color: #424242;
  }
  .img{
    border:2px solid red;
    margin-right:400px;
    margin-top:240px;
  }
</style>
