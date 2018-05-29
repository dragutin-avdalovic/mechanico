<template>
  <div class="root">
    <div class="table-complex">
      <table class="table-chiller" ref="table-chiller"  cellspacing="0" cellpadding="0" >
        <thead>
        <tr>
          <th rowspan="3" class="no  bottom-none" width="3%">No</th>
          <th rowspan="3" width="5%">Unit</th>
          <th rowspan="3" width="8%">System Type</th>
          <th rowspan="3" width="8%">Chiller Type</th>
          <th rowspan="3" width="5%">Type Exchanger</th>
          <th rowspan="3" width="5%">Inverter</th>
          <th rowspan="3" width="5%">Contemporanity Factor</th>
          <th v-bind:class="{ 'right-blue': !showMoreChillersInputBool }" rowspan="1" :colspan="showMoreChillersInputBool ? '11' : '2'" width="25%">Cooling</th>
          <th rowspan="1" colspan="8" v-bind:style="{ display: showMoreChillersInput }" width="25%">Heating</th>
          <th v-bind:class="{ 'right-blue': showMoreChillersInputBool }" rowspan="1" v-bind:style="{ display: showMoreChillersInput }" width="5%">Free Cooling</th>
          <th v-bind:class="{ 'left-white': !showMoreChillersInputBool }" width="5%" v-if="editableChillers" rowspan="3"></th>
        </tr>
        <tr>
          <th class="sub-head" :colspan="showMoreChillersInputBool ? '5' : '1'" rowspan="1">User Side</th>
          <th  v-bind:class="{ 'right-blue': !showMoreChillersInputBool }" class="sub-head" :colspan="showMoreChillersInputBool ? '6' : '1'" rowspan="1">Source Side</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }" rowspan="1" colspan="3">User Side</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }" rowspan="1" colspan="5">Source Side</th>
          <th v-bind:class="{ 'right-blue': showMoreChillersInputBool } " class="sub-head" v-bind:style="{ display: showMoreChillersInput }" rowspan="1" colspan="1">Source Side</th>
        </tr>
        <tr>
          <th class="sub-head">Fouling Factor</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Fluid Type</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Outlet Water (&#8451;)</th>
          <th class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Evaporating T. (&#8451;)</th>
          <th v-bind:class="{ 'right-blue': !showMoreChillersInputBool }" class="sub-head">Fouling Factor</th>
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
          <th v-bind:class="{ 'right-blue': showMoreChillersInputBool }" class="sub-head" v-bind:style="{ display: showMoreChillersInput }">Inlet Air (&#8451;)</th>
        </tr>
        </thead>
        <tbody  v-for="(Chiller, index) in ChillersData" v-bind:key="index">
        <tr v-if="editableChillers" class="input-row">
          <td class="no  bottom-none">{{index+1}}</td>
          <td class="input"><el-input :value="Chiller.chIdField" type="text" ></el-input></td>
          <td class="input">
            <select :value="Chiller.typeSystemField">
              <option  v-for="systemType in systemTypeOptions" v-bind:value="systemType.value"  v-bind:key="systemType.value">
                {{ systemType.text }}
              </option>
            </select>
          </td>
          <td class="input">
            <select :value="Chiller.typeField" placeholder="Choose...">
              <optgroup  v-for="chillerType in chillerTypeOptions" v-bind:key="chillerType.text" v-bind:label="chillerType.text">
                <option v-for="option in chillerType.options" v-bind:key="option.value" v-bind:label="option.text" v-bind:value="option.value">
                    {{option.text}}
                </option>
              </optgroup>
            </select>
          </td>
          <td class="input">
            <select :value="Chiller.typeExchangerField">
              <option  v-for="typeExchanger in typeExchangerOptions" v-bind:value="typeExchanger.value"  v-bind:key="typeExchanger.value">
                {{ typeExchanger.text }}
              </option>
            </select>
          </td>
          <td class="input">
            <select :value="Chiller.inverterField">
              <option  v-for="inverterType in inverterOptions" v-bind:value="inverterType.value"  v-bind:key="inverterType.value">
                {{ inverterType.text }}
              </option>
            </select>
          </td>
          <td class="input"><el-input :value="Chiller.factorContField" type="text" ></el-input></td>
          <td>
            <select :value="Chiller.ffeField">
              <option  v-for="foulingFactor in foulingFactorOptions" v-bind:value="foulingFactor.value"  v-bind:key="foulingFactor.value">
                {{ foulingFactor.text }}
              </option>
            </select>
          </td>
          <td v-bind:style="{ display: showMoreChillersInput}">
            <select :value="Chiller.fluidEvapField">
              <option  v-for="fluidType in fluidTypeOptions" v-bind:value="fluidType.value"  v-bind:key="fluidType.value">
                {{ fluidType.text }}
              </option>
            </select>
          </td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twInField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twOutField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.tcField" type="number"></el-input></td>
          <td>
            <select :value="Chiller.ffcndField">
              <option  v-for="foulingFactor in foulingFactorOptions" v-bind:value="foulingFactor.value"  v-bind:key="foulingFactor.value">
                {{ foulingFactor.text }}
              </option>
            </select>
          </td>
          <td v-bind:style="{ display: showMoreChillersInput}">
            <select :value="Chiller.fluidEvapField">
              <option  v-for="fluidType in fluidTypeOptions" v-bind:value="fluidType.value"  v-bind:key="fluidType.value">
                {{ fluidType.text }}
              </option>
            </select>
          </td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twCinField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twCoutField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.taField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.tcField" type="number"></el-input></td>

          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twInPDCField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twOutPDCField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.tcPDCField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twCinPDCField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.twCoutPDCField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.taPDCField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.urPDCField" type="number"></el-input></td>
          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.tePDCField" type="number"></el-input></td>

          <td v-bind:style="{ display: showMoreChillersInput}"><el-input :value="Chiller.freeCoolingSourceSideInletAir" type="number"></el-input></td>
          <td><el-button data-bind="click: $root.removeFanCoil" class="btn btn-link">Remove</el-button></td>
        </tr>
        <tr v-else>
          <td class="no bottom-none" rowspan="3">{{index+1}}</td>
          <td rowspan="3">{{Chiller.chIdField}}</td>
          <td rowspan="3">{{Chiller.typeSystemField}}</td>
          <td rowspan="3">{{Chiller.typeField}}</td>
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
          <th class="no bottom-none" width="3%" rowspan="3">No</th>
          <th rowspan="3" width="5%">Room</th>
          <th rowspan="3" width="5%">Unit</th>
          <th rowspan="3" width="5%">Manufacturer</th>
          <th rowspan="3" width="5%">Model</th>
          <th width="10%" :colspan="showMoreChillersInputPostBool ? '3' : '1'" rowspan="1">Heating</th>
          <th width="10%" :colspan="showMoreChillersInputPostBool ? '3' : '1'" rowspan="1">Cooling</th>
          <th width="20%" rowspan="1" colspan="3">Dimensions</th>
          <th width="20%" v-bind:style="{ display: showMoreChillersInputPost}" rowspan="1" colspan="4">Connectors</th>
          <th class="right-blue" width="7%" rowspan="3">Accessories</th>
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
        <tbody  v-for="(ChillerCalculated, index) in ChillersCalculatedData" v-bind:key="index">
        <tr>
          <td class="no" rowspan="2">{{index+1}}</td>
          <td>{{ChillerCalculated.roomField}}</td>
          <td>{{ChillerCalculated.fcIdField}}</td>
          <td><el-input></el-input></td>
          <td>{{ChillerCalculated.modelField}}</td>
          <td>{{ChillerCalculated.qtHField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.qwHField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.dpwHField}}</td>
          <td>{{ChillerCalculated.qtField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.qwField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.dpwField}}</td>
          <td>{{ChillerCalculated.lengthField}}</td>
          <td>{{ChillerCalculated.heigthField}}</td>
          <td>{{ChillerCalculated.depthField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.connInField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.conOutField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.conOutField}}</td>
          <td v-bind:style="{ display: showMoreChillersInputPost}">{{ChillerCalculated.conOutField}}</td>
          <td><button class="btn btn-default btn-block" data-bind="click: $root.showAccessories">Select</button></td>
        </tr>
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
          'typeExchangerField': '0',
          'inverterField': 1,
          'ffeField': 0.0000176,
          'ffcndField': 0.0000176,
          'fluidEvapField': 2,
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
      ChillersCalculatedData: [
        {
          'roomField': '1',
          'fcIdField': 'FC1',
          'modelField': 'IDEA037 80',
          'qtHField': '78,2',
          'qwHField': '1,71',
          'dpwHField': '12,1',
          'qtField': '63,1',
          'qwField': '-',
          'dpwField': '-',
          'airFlowField': '24000',
          'staticPressureField': null,
          'altitudeField': '0',
          'lengthField': '0',
          'heigthField': '0',
          'depthField': '0',
          'connInField': null,
          'conOutField': null
        },
        {
          'roomField': '1',
          'fcIdField': 'FC1',
          'modelField': 'IDEA037 80',
          'qtHField': '78,2',
          'qwHField': '1,71',
          'dpwHField': '12,1',
          'qtField': '63,1',
          'qwField': '-',
          'dpwField': '-',
          'airFlowField': '24000',
          'staticPressureField': null,
          'altitudeField': '0',
          'lengthField': '0',
          'heigthField': '0',
          'depthField': '0',
          'connInField': null,
          'conOutField': null
        },
        {
          'roomField': '1',
          'fcIdField': 'FC1',
          'modelField': 'IDEA037 80',
          'qtHField': '78,2',
          'qwHField': '1,71',
          'dpwHField': '12,1',
          'qtField': '63,1',
          'qwField': '-',
          'dpwField': '-',
          'airFlowField': '24000',
          'staticPressureField': null,
          'altitudeField': '0',
          'lengthField': '0',
          'heigthField': '0',
          'depthField': '0',
          'connInField': null,
          'conOutField': null
        }
      ],
      systemTypeOptions: [
        { value: '0', text: 'Only Cooling' },
        { value: '3', text: 'Reversible Refrigerant' },
        { value: '6', text: 'Free Cooling' }
      ],
      chillerTypeOptions: [
        {
          text: 'Water Cooled',
          options: [
            { value: 0, text: 'Water Source' },
            { value: 4, text: 'Less Evaporator Water source' }
          ]
        },
        {
          text: 'Air Cooled',
          options: [
            { value: 1, text: 'Air Source Axial Fans' },
            { value: 2, text: 'Air Source Centrifugal Fans' },
            { value: 3, text: 'Less Condenser' },
            { value: 5, text: 'Less Evaporator Air Source Axial Fans' },
            { value: 6, text: 'Less Evaporator Air Source Centrifugal Fans' }
          ]
        }
      ],
      fluidTypeOptions: [
        { value: 0, text: 'Water' },
        { value: 1, text: 'Ethilene Glycol 5%' },
        { value: 2, text: 'Ethilene Glycol 10%' },
        { value: 3, text: 'Ethilene Glycol 15%' },
        { value: 4, text: 'Ethilene Glycol 20%' },
        { value: 5, text: 'Ethilene Glycol 25%' },
        { value: 6, text: 'Ethilene Glycol 30%' },
        { value: 7, text: 'Ethilene Glycol 35%' },
        { value: 8, text: 'Ethilene Glycol 40%' },
        { value: 9, text: 'Ethilene Glycol 45%' },
        { value: 10, text: 'Ethilene Glycol 50%' },
        { value: 11, text: 'Propylene Glycol 5%' },
        { value: 12, text: 'Propylene Glycol 10%' },
        { value: 13, text: 'Propylene Glycol 15%' },
        { value: 14, text: 'Propylene Glycol 20%' },
        { value: 15, text: 'Propylene Glycol 25%' },
        { value: 16, text: 'Propylene Glycol 30%' },
        { value: 17, text: 'Propylene Glycol 35%' },
        { value: 18, text: 'Propylene Glycol 40%' },
        { value: 19, text: 'Propylene Glycol 45%' },
        { value: 20, text: 'Propylene Glycol 50%' }
      ],
      foulingFactorOptions: [
        { value: 0.0000176, text: '0.0000176' },
        { value: 0.000044, text: '0.000044' },
        { value: 0.000088, text: '0.000088' },
        { value: 0.000132, text: '0.000132' }
      ],
      contemporanityFactorOptions: [
        { value: 1, text: '------------------' },
        { value: 0, text: '------------------' }
      ],
      typeExchangerOptions: [
        { value: 1, text: 'Tower water' },
        { value: 0, text: 'Well water' }
      ],
      inverterOptions: [
        { value: 1, text: 'Yes' },
        { value: 0, text: 'No' }
      ]
    }
  },
  props: ['fileName'],
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    makeSystemTypeFieldText (typeField) {
      for (var fieldSystemType in this.systemTypeOptions) {
        if (fieldSystemType.value === typeField) {
          typeField = fieldSystemType.text
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
        elem.style.width = 250 + '%'
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
        elem.style.width = 250 + '%'
        this.showMoreChillersButtonTextPost = 'Show less'
      } else if (this.showMoreChillersInputPost === 'table-cell') {
        this.showMoreChillersInputPost = 'none'
        this.showMoreChillersInputPostBool = false
        elem.style.width = 100 + '%'
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
        .right-blue
        {
          border-right: 1px solid #29aae2;
        }
        .left-white
        {
          border-left: 1px solid  white;
        }
        .bottom-none {
          border-bottom: none;
          border-right:none;
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
        .right-blue
        {
          border-right: 1px solid #29aae2;
        }
        .bottom-none
        {
          border-bottom: none;
          border-right:none;
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
      border-bottom: none;
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
