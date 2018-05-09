<template>
<div class="tab">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="FanCoil" name="first">
        <table class=" border:0;">
          <thead style="background-color:#29aae2; color:white; overflow: auto;">
          <tr>
            <th rowspan="2">No</th>
            <th rowspan="2">Level</th>
            <th rowspan="2">Room</th>
            <th rowspan="2">Chiller</th>
            <th rowspan="2">Unit</th>
            <th data-bind="visible: showMoreFanCoilsInput" colspan="3" style="">Heating</th>
            <th data-bind="visible: showMoreFanCoilsInput" colspan="3" style="">Cooling</th>
            <th data-bind="visible: showMoreFanCoilsInput" rowspan="2" style="">FanCoil Type</th>
            <th data-bind="visible: showMoreFanCoilsInput" rowspan="2" style="">External Static Pressure (Pa)</th>
            <th rowspan="2">Noise Level (dB)</th>
            <th rowspan="2">Fans</th>
            <th data-bind="visible: editableFanCoils" rowspan="2" style="display: none;"></th>
          </tr>
          <tr>
            <th data-bind="visible: showMoreFanCoilsInput" style="">Required Capacity (kW)</th>
            <th data-bind="visible: showMoreFanCoilsInput" style="">Internal Air (℃)</th>
            <th data-bind="visible: showMoreFanCoilsInput" style="">Relative Humidity (%)</th>
            <th data-bind="visible: showMoreFanCoilsInput" style="">Required Capacity (kW)</th>
            <th data-bind="visible: showMoreFanCoilsInput" style="">Internal Air (℃)</th>
            <th data-bind="visible: showMoreFanCoilsInput" style="">Relative Humidity (%)</th>
          </tr>
          </thead>
          <tbody style="background-color:white; color:black;">
          <tr>
            <td rowspan="2">No</td>
            <td rowspan="2">Level</td>
            <td rowspan="2">Room</td>
            <td rowspan="2">Chiller</td>
            <td rowspan="2">Unit</td>
            <td data-bind="visible: showMoreFanCoilsInput" style="">Required Capacity (kW)</td>
            <td data-bind="visible: showMoreFanCoilsInput" style="">Internal Air (℃)</td>
            <td data-bind="visible: showMoreFanCoilsInput" style="">Relative Humidity (%)</td>
            <td data-bind="visible: showMoreFanCoilsInput" style="">Required Capacity (kW)</td>
            <td data-bind="visible: showMoreFanCoilsInput" style="">Internal Air (℃)</td>
            <td data-bind="visible: showMoreFanCoilsInput" style="">Relative Humidity (%)</td>
            <td data-bind="visible: showMoreFanCoilsInput" rowspan="2" style="">FanCoil Type</td>
            <td data-bind="visible: showMoreFanCoilsInput" rowspan="2" style="">External Static Pressure (Pa)</td>
            <td rowspan="2">Noise Level (dB)</td>
            <td rowspan="2">Fans</td>
            <td data-bind="visible: editableFanCoils" rowspan="2" style="display: none;"></td>
          </tr>
          </tbody>
        </table>
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
  @import '../../assets/styles/leafs.scss';
  .tab{
    padding-top: 20px;
    background-color: #424242;
  }
  .img{
    margin-left:400px;
    margin-top:240px;
    width:310px;
  }
</style>
