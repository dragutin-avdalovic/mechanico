<template>
<div class="body">
  <div class="tab-content" >
    <div class="table-responsive" >
      <table class="table text-center" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th rowspan="2" class="No">No</th>
            <th rowspan="2">Level</th>
            <th rowspan="2">Room</th>
            <th rowspan="2">Chiller</th>
            <th rowspan="2">Unit</th>
            <th data-bind="visible: showMoreFanCoilsInput" colspan="3">Heating</th>
            <th data-bind="visible: showMoreFanCoilsInput" colspan="3">Cooling</th>
            <th data-bind="visible: showMoreFanCoilsInput" rowspan="2">FanCoil Type</th>
            <th data-bind="visible: showMoreFanCoilsInput" rowspan="2">External Static Pressure (Pa)</th>
            <th rowspan="2">Noise Level (dB)</th>
            <th rowspan="2">Fans</th>
            <th data-bind="visible: editableFanCoils" rowspan="2"></th>
          </tr>
          <tr>
            <th data-bind="visible: showMoreFanCoilsInput">Required Capacity (kW)</th>
            <th data-bind="visible: showMoreFanCoilsInput">Internal Air (&#8451;)</th>
            <th data-bind="visible: showMoreFanCoilsInput">Relative Humidity (%)</th>
            <th data-bind="visible: showMoreFanCoilsInput">Required Capacity (kW)</th>
            <th data-bind="visible: showMoreFanCoilsInput">Internal Air (&#8451;)</th>
            <th data-bind="visible: showMoreFanCoilsInput">Relative Humidity (%)</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
      <div class="row">
        <div class="col-md-6 text-right">
          <!-- ko if: editableChillers -->
          <button type="button" class="btn" data-bind="click: addChiller"><i class="fa fa-plus"></i> Add Entry</button>
          <button type="button" class="btn" data-bind="click: saveChillers">Done</button>
        </div>
    </div>
</div>
  </template>

<script>

export default {

  data () {
    return {
      fileList: []
    }
  }
}
</script>

  <style lang="scss" scoped>

.table>thead>tr>th {
  vertical-align: bottom;
  background: #29aae2;
  text-align: left;
}

.table.text-center>thead>tr>th, .table.text-center>tbody>tr>th, .table.text-center>tfoot>tr>th, .table.text-center>thead>tr>td, .table.text-center>tbody>tr>td, .table.text-center>tfoot>tr>td {
  text-align: center;
  white-space: nowrap;
  padding:10px;
  color:white;
}
.tab-content{
  width:100%;
  overflow:auto;
}
.No{
  background-color:#424242 !important;
}
.row{
  margin-top:20px;
}
.btn {
  background: #29aae2 !important;
  border-color: transparent;
  color: white;
  padding: 10px 40px 10px 40px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
  </style>
