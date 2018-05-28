<template>
  <div class="root">
    <div class="table-complex">
      <table class="table-chiller" ref="table-chiller"  cellspacing="0" cellpadding="0" >
        <thead>
        <tr>
          <th rowspan="3" class="no" width="3%">No</th>
          <th rowspan="3" width="5%">Unit</th>
          <th rowspan="3" width="5%">System Type</th>
          <th rowspan="3" width="10%">Chiller Type</th>
          <th rowspan="3" width="5%">Type Exchanger</th>
          <th rowspan="3" width="5%">Inverter</th>
          <th rowspan="3" width="10%">Contemporanity Factor</th>
          <th rowspan="1" :colspan="showMoreChillersInputBool ? '11' : '2'" width="20%">Cooling</th>
          <th rowspan="1" colspan="8" v-bind:style="{ display: showMoreChillersInput }" width="20%">Heating</th>
          <th rowspan="1" v-bind:style="{ display: showMoreChillersInput }" width="10%">Free Cooling</th>
          <th width="7%" v-if="editableChillers" rowspan="3"></th>
        </tr>
        <tr>
          <th class="sub-head" :colspan="showMoreChillersInputBool ? '5' : '1'" rowspan="1">User Side</th>
          <th class="sub-head" :colspan="showMoreChillersInputBool ? '6' : '1'" rowspan="1">Source Side</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }" rowspan="1" colspan="3">User Side</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }" rowspan="1" colspan="5">Source Side</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }" rowspan="1" colspan="1">Source Side</th>
        </tr>
        <tr>
          <th class="sub-head">Fouling Factor</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Fluid Type</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Outlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Evaporating T. (&#8451;)</th>
          <th class="sub-head">Fouling Factor</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Fluid Type</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Outlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Air (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Evaporating T. (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Outlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Condensing T. (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Outlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Air (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Relative Humidity (%)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Evaporating T. (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Air (&#8451;)</th>
        </tr>
        </thead>
        <tbody  v-for="(Chiller, index) in ChillersData" v-bind:key="index">
        <tr v-if="editableChillers" class="input-row">
          <td class="no">{{index+1}}</td>
          <td class="input"><el-input :value="FanCoil.floorField" type="text" ></el-input></td>
          <td class="input"><el-input :value="FanCoil.roomField" type="text" ></el-input></td>
          <td class="input"><el-input :value="FanCoil.chIdField" type="text" ></el-input></td>
          <td class="input"><el-input :value="FanCoil.fcIdField" type="text" ></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}" class="input"><el-input :value="FanCoil.qtRicHField" type="number" ></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}" class="input"><el-input :value="FanCoil.tainHField" type="number" ></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}" class="input"><el-input :value="FanCoil.urinHField" type="number" ></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}" class="input"><el-input :value="FanCoil.qtRicField" type="number" ></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}" class="input"><el-input :value="FanCoil.tainField" type="number" ></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}" class="input"><el-input :value="FanCoil.urinField" type="number" ></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}">
            <select v-model="FanCoil.typeField" placeholder="Choose...">
              <option v-for="type in typeFieldOptions" v-bind:value="type.value" v-bind:key="type.value">
                {{ type.text }}
              </option>
            </select>
          </td>
          <td><el-input  :value="FanCoil.statPresField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreFanCoilsInput}"><el-input  :value="FanCoil.noiseLevel" type="number"></el-input></td>
          <td>
            <select v-model="FanCoil.fansField" placeholder="Choose...">
              <option  v-for="fan in fansFieldOptions" v-bind:value="fan.value"  v-bind:key="fan.value">
                {{ fan.text }}
              </option>
            </select>
          </td>
          <td><el-button data-bind="click: $root.removeFanCoil" class="btn btn-link">Remove</el-button></td>
        </tr>
        <tr v-else>
          <td class="no" rowspan="3">{{index+1}}</td>
          <td rowspan="3">{{Chiller.chIdField}}</td>
          <td rowspan="3">{{Chiller.typeSystemField}}</td>
          <td rowspan="3">{{makeTypeFieldText(Chiller.typeField)}}</td>
          <td rowspan="3">{{Chiller.typeExchangerField}}</td>
          <td rowspan="3">{{Chiller.inverterField}}</td>
          <td rowspan="1">{{Chiller.factorContField}}</td>
          <td>{{Chiller.ffeField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.fluidEvapField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twInField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twOutField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.tcField}}</td>

          <td>{{Chiller.ffCndField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.fluidCndField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twCinField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twCoutField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.taField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.tcField}}</td>

          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twInPDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twOutPDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.tcPDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twCinPDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.twCoutPDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.taPDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.urPDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.tePDCField}}</td>
          <td v-bind:style="{ display: showMoreChillersInput}">{{Chiller.freeCoolingSourceSideInletAir}}</td>
        </tr>
        </tbody>
      </table>
      <div class="btn-edit">
        <el-button class="button" v-on:click="showMore">{{this.showMoreChillersButtonText}}</el-button>
        <el-button v-if="!editableChillers" class="button" v-on:click="editTable">Edit table</el-button>
        <el-button v-if="editableChillers" class="button">Add entry</el-button>
        <el-button v-if="editableChillers" class="button" v-on:click="editTable">Done</el-button>
      </div>
    </div>
    <div class="table-post-calculation">
      <table class="table-chiller-post" ref="table-chiller-post"  cellspacing="0" cellpadding="0" >
        <thead>
        <tr>
          <th class="no" width="3%" rowspan="3">No</th>
          <th rowspan="3" width="5%">Room</th>
          <th rowspan="3" width="5%">Unit</th>
          <th rowspan="3" width="5%">Manufacturer</th>
          <th rowspan="3" width="5%">Model</th>
          <th width="10%" :colspan="showMoreChillersInputPostBool ? '3' : '1'" rowspan="1">Heating</th>
          <th width="10%" :colspan="showMoreChillersInputPostBool ? '3' : '1'" rowspan="1">Cooling</th>
          <th width="20%" rowspan="1" colspan="3">Dimensions</th>
          <th width="20%" v-bind:style="{ display: showMoreChillersInputPost}" rowspan="1" colspan="4">Connectors</th>
          <th width="7%" rowspan="3">Accessories</th>
        </tr>
        <tr>
          <th rowspan="2" class="subhead">Calculated Capacity (kW)</th>
          <th v-bind:style="{ display: showMoreChillersInputPost}" rowspan="2" class="subhead">Water Flow (m<sup>3</sup>/h)</th>
          <th v-bind:style="{ display: showMoreChillersInputPost}" rowspan="2" class="subhead">Water Pressure Drop (kPa)</th>
          <th rowspan="2" class="subhead">Calculated Capacity (kW)</th>
          <th v-bind:style="{ display: showMoreChillersInputPost}" rowspan="2" class="subhead">Water Flow (m<sup>3</sup>/h)</th>
          <th v-bind:style="{ display: showMoreChillersInputPost}" rowspan="2" class="subhead">Water Pressure Drop (kPa)</th>
          <th rowspan="2" class="subhead">Length</th>
          <th rowspan="2" class="subhead" >Height</th>
          <th rowspan="2" class="subhead">Depth</th>
          <th class="subhead" v-bind:style="{ display: showMoreChillersInputPost}" colspan="2">Heating</th>
          <th class="subhead" v-bind:style="{ display: showMoreChillersInputPost}" colspan="2">Cooling</th>
        </tr>
        <tr>
          <th class="subhead" v-bind:style="{ display: showMoreChillersInputPost}">In</th>
          <th class="subhead" v-bind:style="{ display: showMoreChillersInputPost}">Out</th>
          <th class="subhead" v-bind:style="{ display: showMoreChillersInputPost}">In</th>
          <th class="subhead" v-bind:style="{ display: showMoreChillersInputPost}">Out</th>
        </tr>
        </thead>
        <tbody  v-for="(FanCoilCalculated, index) in FancCoilsCalculatedData" v-bind:key="index">
        </tbody>
      </table>
      <div class="btn-edit">
        <el-button class="button" v-on:click="showMorePost">{{this.showMoreChillersButtonTextPost}}</el-button>
        <el-button class="button">Save</el-button>
        <el-button class="button">Export</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeFieldText: '',
      editableChillers: false,
      showMoreChillersInput: 'none',
      showMoreChillersInputBool: false,
      showMoreChillersInputPost: 'none',
      showMoreChillersInputPostBool: false,
      showMoreChillersButtonText: 'Show more',
      showMoreChillersButtonTextPost: 'Show more',
      ChillersData: [
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
        }
      ],
      FancCoilsCalculatedData: [
        {
          'resultCodeField': '132450',
          'roomField': '1',
          'fcIdField': 'FC1',
          'modelField': 'ZEFIRO 1260',
          'qtHField': '12,7',
          'qwHField': '1,1',
          'dpwHField': '33,1',
          'qtField': '6,2',
          'qwField': '1,1',
          'dpwField': '40,1',
          'airFlowField': '1060',
          'staticPressureField': '12000',
          'altitudeField': '0',
          'lengthField': '1380',
          'heigthField': '222',
          'depthField': '586',
          'connInField': '100',
          'conOutField': '200'
        },
        {
          'resultCodeField': '132450',
          'roomField': '1',
          'fcIdField': 'FC1',
          'modelField': 'ZEFIRO 1260',
          'qtHField': '12,7',
          'qwHField': '1,1',
          'dpwHField': '33,1',
          'qtField': '6,2',
          'qwField': '1,1',
          'dpwField': '40,1',
          'airFlowField': '1060',
          'staticPressureField': null,
          'altitudeField': '0',
          'lengthField': '1380',
          'heigthField': '222',
          'depthField': '586',
          'connInField': null,
          'conOutField': null
        },
        {
          'resultCodeField': '132450',
          'roomField': '1',
          'fcIdField': 'FC1',
          'modelField': 'ZEFIRO 1260',
          'qtHField': '12,7',
          'qwHField': '1,1',
          'dpwHField': '33,1',
          'qtField': '6,2',
          'qwField': '1,1',
          'dpwField': '40,1',
          'airFlowField': '1060',
          'staticPressureField': null,
          'altitudeField': '0',
          'lengthField': '1380',
          'heigthField': '222',
          'depthField': '586',
          'connInField': null,
          'conOutField': null
        },
        {
          'resultCodeField': '132450',
          'roomField': '1',
          'fcIdField': 'FC1',
          'modelField': 'ZEFIRO 1260',
          'qtHField': '12,7',
          'qwHField': '1,1',
          'dpwHField': '33,1',
          'qtField': '6,2',
          'qwField': '1,1',
          'dpwField': '40,1',
          'airFlowField': '1060',
          'staticPressureField': null,
          'altitudeField': '0',
          'lengthField': '1380',
          'heigthField': '222',
          'depthField': '586',
          'connInField': null,
          'conOutField': null
        }
      ],
      fansFieldOptions: [
        { value: 'AC', text: 'AC' },
        { value: 'EC', text: 'EC' }
      ],
      typeFieldOptions: [
        { value: '0', text: 'Floor' },
        { value: '1', text: 'Ducted' },
        { value: '2', text: 'Cassette' },
        { value: '3', text: 'Wall' }
      ]
    }
  },
  props: ['fileName'],
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
    },
    editTable () {
      if (this.editableChillers) {
        this.editableChillers = false
      } else {
        this.editableChillers = true
      }
    },
    showMore () {
      var elem = this.$refs['table-chiller']
      console.log(elem)
      if (this.showMoreChillersInput === 'none') {
        this.showMoreChillersInput = 'table-cell'
        this.showMoreChillersInputBool = true
        elem.style.width = 200 + '%'
        this.showMoreChillersButtonText = 'Show less'
      } else if (this.showMoreChillersInput === 'table-cell') {
        this.showMoreChillersInput = 'none'
        this.showMoreChillersInputBool = false
        elem.style.width = 100 + '%'
        this.showMoreChillersButtonText = 'Show more'
      }
    },
    showMorePost () {
      var elem = this.$refs['table-chiller-post']
      console.log(elem)
      if (this.showMoreChillersInputPost === 'none') {
        this.showMoreChillersInputPost = 'table-cell'
        this.showMoreChillersInputPostBool = true
        elem.style.width = 200 + '%'
        this.showMoreChillersButtonTextPost = 'Show less'
      } else if (this.showMoreChillersInputPost === 'table-cell') {
        this.showMoreChillersInputPost = 'none'
        this.showMoreChillersInputPostBool = false
        elem.style.width = 160 + '%'
        this.showMoreChillersButtonTextPost = 'Show more'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/leafs.scss';
  @import '../../assets/styles/varibles.scss';
  .btn {
    background: #29aae2 !important;
    border-color: transparent;
    color: white;
    padding: 10px 40px 10px 40px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .root
  {
    width: 100%;
    overflow:auto;
    height: calc(100vh - 128px);
    .table-chiller
    {
      border: solid 1px #29aae2;
      overflow-x: auto;
      width: 100%;
      thead {
        padding-bottom: 0.5em;
        background: #29aae2;
        color: white;
        overflow: auto;
        th {
          padding: 0.2em;
          border-right: solid 1px white;
          border-top: none;
          border-bottom: solid 1px #cccccc;
          border-left: none;
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
          td {
            padding: 0.4em;
          }
        }
      }
    }
    .table-chiller-post
    {
      border: solid 1px #29aae2;
      overflow-x: auto;
      width: 160%;
      thead {
        padding-bottom: 0.5em;
        background: #29aae2;
        color: white;
        overflow: auto;
        th {
          padding: 0.2em;
          border-right: solid 1px white;
          border-top: none;
          border-bottom: solid 1px #cccccc;
          border-left: none;
        }
        .subhead {
          color: #cccccc;
        }
      }
      tbody {
        background-color: white;
        color: black;
        text-align: center;
        tr {
          td {
            padding: 0.4em;
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
    .btn-edit {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .button {
        background-color: #29aae2;
        border-radius: 0px;
        color: white;
        margin: 1em 1em;
        width: 13em;
        height: 3em;
        font-size: 1em;
        font-weight: bold;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .no {
      background-color: #424242;
      border-right: none;
      color: white;
    }
  }
  select
  {
    color: $dark-my-projects;
    height: 2.5em;
    width: 80%;
    background-color: white;
    border: 1px solid $grey-my-projects-darker;
  }
</style>
