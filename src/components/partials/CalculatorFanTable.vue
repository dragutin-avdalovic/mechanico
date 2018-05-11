<template>
<table class="table-fan"  cellspacing="0" cellpadding="0" >
  <thead>
  <tr>
    <th class="no" rowspan="2">No</th>
    <th rowspan="2" width="10%">Level</th>
    <th rowspan="2" width="10%">Room</th>
    <th rowspan="2" width="10%">Chiller</th>
    <th rowspan="2" width="10%">Unit</th>
    <th colspan="3" width="20%">Heating</th>
    <th colspan="3" width="20%">Cooling</th>
    <th rowspan="2" width="10%">FanCoil Type</th>
    <th rowspan="2"  width="10%">External Static Pressure (Pa)</th>
    <th rowspan="2"  width="10%">Noise Level (dB)</th>
    <th rowspan="2" width="10%">Fans</th>
    <th v-if="editableFanCoils" rowspan="2"></th>
  </tr>
  <tr>
    <th class="sub-head">Required Capacity (kW)</th>
    <th class="sub-head">Internal Air (℃)</th>
    <th class="sub-head">Relative Humidity (%)</th>
    <th class="sub-head">Required Capacity (kW)</th>
    <th class="sub-head">Internal Air (℃)</th>
    <th class="sub-head">Relative Humidity (%)</th>
  </tr>
  </thead>
  <tbody  v-for="(FanCoil, index) in FanCoilsData" v-bind:key="index">
  <tr v-if="editableFanCoils">
    <td class="no">{{index+1}}</td>
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
    <td>
      <el-select v-model="FanCoil.typeField" placeholder="Choose...">
        <el-option
          v-for="type in typeFieldOptions"
          :key="type.value"
          :label="type.text"
          :value="type.value">
        </el-option>
      </el-select>
    </td>
    <td><el-input  :value="FanCoil.statPresField" type="number"></el-input></td>
    <td><el-input  :value="FanCoil.noiseLevel" type="number"></el-input></td>
    <td>
      <el-select v-model="FanCoil.fansField" placeholder="Choose...">
        <el-option
          v-for="fan in fansFieldOptions"
          :key="fan.value"
          :label="fan.text"
          :value="fan.value">
        </el-option>
      </el-select>
    </td>
    <td><el-button data-bind="click: $root.removeFanCoil" class="btn btn-link">Remove</el-button></td>
  </tr>
  <tr v-else>
      <td class="no" rowspan="2">{{index+1}}</td>
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
      <td rowspan="2">{{makeTypeFieldText(FanCoil.typeField)}}</td>
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
      typeFieldText: '',
      editableFanCoils: false,
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
      ],
      fansFieldOptions: [
        { value: 'AC', text: 'AC' },
        { value: 'EC', text: 'EC' }
      ],
      typeFieldOptions: [
        { value: 0, text: 'Floor' },
        { value: 1, text: 'Ducted' },
        { value: 2, text: 'Cassette' },
        { value: 3, text: 'Wall' }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    makeTypeFieldText (typeField) {
      for (var fieldType in this.typeFieldOptions) {
        if (fieldType.value === typeField) {
          typeField = fieldType.text
          console.log(typeField)
          return typeField
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/leafs.scss';
  .btn {
    background: #29aae2 !important;
    border-color: transparent;
    color: white;
    padding: 10px 40px 10px 40px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .no {
    background-color: #424242;
    border-right: none;
    color: white;
  }
  .table-fan {
    border: solid 1px #29aae2;
    overflow-x: auto;
    width: 200%;
    thead {
      padding-bottom: 0.5em;
      background: #29aae2;
      color: white;
      overflow: auto;
      th {
        padding: 0.2em;
      }
      .sub-head {
        color: #cccccc;
      }
    }
    tbody {
      background-color: white;
      color: black;
      text-align: center;
      tr {
        padding: 0.4em 0;
        td {
          padding: 0.8em;
        }
      }
    }
  }
  table, td {
    border: solid 1px #29aae2;
    border-top: none;
    border-bottom: none;
    border-left: none;
  }
</style>
