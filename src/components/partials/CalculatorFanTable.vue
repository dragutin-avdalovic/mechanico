<template>
<table class="table-fan">
  <thead>
  <tr>
    <th rowspan="2">No</th>
    <th rowspan="2">Level</th>
    <th rowspan="2">Room</th>
    <th rowspan="2">Chiller</th>
    <th rowspan="2">Unit</th>
    <th colspan="3" style="">Heating</th>
    <th colspan="3" style="">Cooling</th>
    <th rowspan="2" style="">FanCoil Type</th>
    <th rowspan="2" style="">External Static Pressure (Pa)</th>
    <th rowspan="2">Noise Level (dB)</th>
    <th rowspan="2">Fans</th>
    <th v-if="editableFanCoils" rowspan="2"></th>
  </tr>
  <tr>
    <th>Required Capacity (kW)</th>
    <th>Internal Air (℃)</th>
    <th>Relative Humidity (%)</th>
    <th>Required Capacity (kW)</th>
    <th>Internal Air (℃)</th>
    <th>Relative Humidity (%)</th>
  </tr>
  </thead>
  <tbody  v-for="(FanCoil, index) in FanCoilsData" v-bind:key="index">
  <tr v-if="editableFanCoils">
    <td>{{index+1}}</td>
    <td><el-input :value="FanCoil.floorField" type="text" ></el-input></td>
    <td><el-input :value="FanCoil.roomField" type="text" ></el-input></td>
    <td><el-input :value="FanCoil.chIdField" type="text" ></el-input></td>
    <td><el-input :value="FanCoil.fcIdField" type="text" ></el-input></td>
    <td><el-input :value="FanCoil.qtRicHField" type="number" ></el-input></td>
    <td><el-input :value="FanCoil.tainHField" type="number" ></el-input></td>
    <td><el-input :value="FanCoil.urinHField" type="number" ></el-input></td>
    <td><el-input :value="FanCoil.qtRicField" type="number" ></el-input></td>
    <td><el-input :value="FanCoil.tainField" type="number" ></el-input></td>
    <td><el-input :value="FanCoil.urinField" type="number" ></el-input></td>
    <td><el-select data-bind="options: typeFieldOptions,
                                                   value: typeField,
                                                   optionsValue: 'value',
                                                   optionsText: 'text',
                                                   optionsCaption: 'Choose...'"></el-select></td>
    <td><el-input  :value="FanCoil.statPresField" type="number"></el-input></td>
    <td><el-input  :value="FanCoil.noiseLevel" type="number"></el-input></td>
    <td><el-select data-bind="options: fansFieldOptions,
                                                   value: fansField,
                                                   optionsValue: 'value',
                                                   optionsText: 'text',
                                                   optionsCaption: 'Choose...'"></el-select></td>
    <td><el-button data-bind="click: $root.removeFanCoil" class="btn btn-link">Remove</el-button></td>
  </tr>
  <tr v-else>
      <td rowspan="2">{{index+1}}</td>
      <td rowspan="2">Floor 0{{FanCoil.floorField}}</td>
      <td rowspan="2">Room 0{{FanCoil.roomField}}</td>
      <td rowspan="2">{{FanCoil.chIdField}}</td>
      <td rowspan="2">{{FanCoil.fcIdField}}</td>
      <td>{{FanCoil.qtRicHField}}</td>
      <td>{{FanCoil.tainHField}}</td>
      <td>{{FanCoil.urinHField}}</td>
      <td>{{FanCoil.qtRicField}}</td>
      <td>{{FanCoil.tainField}}</td>
      <td>{{FanCoil.urinField}}</td>
      <td rowspan="2">{{FanCoil.typeFieldLabel}}</td>
      <td rowspan="2">{{FanCoil.statPresField}}</td>
      <td rowspan="2">{{FanCoil.noiseLevel}}</td>
      <td rowspan="2">{{FanCoil.fansField}}</td>
  </tr>
  </tbody>
</table>
</template>
<script>
export default {
  data () {
    return {
      editableFanCoils: true,
      FanCoilsData: [
        {
          'floorField': '1',
          'roomField': '1',
          'chIdField': 'CH1',
          'fcIdField': 'FC1',
          'typeField': '0',
          'velField': 'MAX',
          'fansField': 'AC',
          'statPresField': null,
          'qtRicField': '18',
          'tainField': '27',
          'urinField': '50',
          'fluidField': '1',
          'concField': '25',
          'twInField': '7',
          'twOutField': '12',
          'qwRicField': null,
          'qtRicHField': '35',
          'tainHField': '21',
          'urinHField': '50',
          'fluidHField': '0',
          'concHField': '0',
          'twInHField': '70',
          'twOutHField': '60',
          'qwRicHField': null,
          'typeChillerField': '0',
          'typeSystemField': '0',
          'factorContField': '0,75',
          'chillTaExternalField': '35',
          'chillTaExternalHField': '7',
          'chillUrExternalHField': '87',
          'chillFluidField': '0',
          'chillConcField': '0',
          'chillTwCinField': '30',
          'chillTwCoutField': '35',
          'chillTwCinHField': '10',
          'chillTwCoutHField': '5',
          'PropertyChanged': null
        },
        {
          'floorField': '1',
          'roomField': '1',
          'chIdField': 'CH1',
          'fcIdField': 'FC2',
          'typeField': '0',
          'velField': 'MAX',
          'fansField': 'AC',
          'statPresField': null,
          'qtRicField': null,
          'tainField': null,
          'urinField': null,
          'fluidField': '1',
          'concField': '25',
          'twInField': '7',
          'twOutField': '12',
          'qwRicField': null,
          'qtRicHField': null,
          'tainHField': null,
          'urinHField': null,
          'fluidHField': '0',
          'concHField': '0',
          'twInHField': '70',
          'twOutHField': '60',
          'qwRicHField': null,
          'typeChillerField': '0',
          'typeSystemField': '0',
          'factorContField': '0,75',
          'chillTaExternalField': '35',
          'chillTaExternalHField': '7',
          'chillUrExternalHField': '87',
          'chillFluidField': '0',
          'chillConcField': '0',
          'chillTwCinField': '30',
          'chillTwCoutField': '35',
          'chillTwCinHField': '10',
          'chillTwCoutHField': '5',
          'PropertyChanged': null
        },
        {
          'floorField': '1',
          'roomField': '1',
          'chIdField': 'CH1',
          'fcIdField': 'FC3',
          'typeField': '0',
          'velField': 'MAX',
          'fansField': 'AC',
          'statPresField': null,
          'qtRicField': null,
          'tainField': null,
          'urinField': null,
          'fluidField': '1',
          'concField': '25',
          'twInField': '7',
          'twOutField': '12',
          'qwRicField': null,
          'qtRicHField': null,
          'tainHField': null,
          'urinHField': null,
          'fluidHField': '0',
          'concHField': '0',
          'twInHField': '70',
          'twOutHField': '60',
          'qwRicHField': null,
          'typeChillerField': '0',
          'typeSystemField': '0',
          'factorContField': '0,75',
          'chillTaExternalField': '35',
          'chillTaExternalHField': '7',
          'chillUrExternalHField': '87',
          'chillFluidField': '0',
          'chillConcField': '0',
          'chillTwCinField': '30',
          'chillTwCoutField': '35',
          'chillTwCinHField': '10',
          'chillTwCoutHField': '5',
          'PropertyChanged': null
        },
        {
          'floorField': '1',
          'roomField': '2',
          'chIdField': 'CH1',
          'fcIdField': 'FC7',
          'typeField': '2',
          'velField': 'MAX',
          'fansField': 'AC',
          'statPresField': null,
          'qtRicField': '14',
          'tainField': '23',
          'urinField': '50',
          'fluidField': '1',
          'concField': '25',
          'twInField': '7',
          'twOutField': '12',
          'qwRicField': null,
          'qtRicHField': '5',
          'tainHField': '21',
          'urinHField': '50',
          'fluidHField': '0',
          'concHField': '0',
          'twInHField': '70',
          'twOutHField': '60',
          'qwRicHField': null,
          'typeChillerField': '0',
          'typeSystemField': '0',
          'factorContField': '0,75',
          'chillTaExternalField': '35',
          'chillTaExternalHField': '7',
          'chillUrExternalHField': '87',
          'chillFluidField': '0',
          'chillConcField': '0',
          'chillTwCinField': '30',
          'chillTwCoutField': '35',
          'chillTwCinHField': '10',
          'chillTwCoutHField': '5',
          'PropertyChanged': null
        }
      ]
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
  .table-fan
  {
    overflow: auto;
    border: 0;
    thead
    {
      background-color:#29aae2;
      color:white;
      overflow: auto;
    }
    tbody {
      background-color:white;
      color:black;
      text-align: center;
    }
  }
</style>
