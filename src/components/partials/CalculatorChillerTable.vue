<template>
  <div class="table-responsive">
      <table class="table text-center table-fan" cellspacing="0" cellpadding="0">
          <thead>
              <tr>
                  <th rowspan="3" style="background-color:#424242;">No</th>
                  <th rowspan="3">Unit</th>
                  <th rowspan="3">System Type</th>
                  <th rowspan="3">Chiller Type</th>
                  <th rowspan="3">Type Exchanger</th>
                  <th rowspan="3">Inverter</th>
                  <th rowspan="3">Contemporanity Factor</th>
                <th rowspan="1" colspan="11">Cooling</th>
                  <th rowspan="1" colspan="8" >Heating</th>
                  <th rowspan="1" style="">Free Cooling</th>
                  <th rowspan="3" style="display: none;"></th>
              </tr>
              <tr>
                  <th rowspan="1" colspan="5" style="color:#ccc;">User Side</th>
                  <th rowspan="1" colspan="6" style="color:#ccc;">Source Side</th>
                  <th rowspan="1" colspan="3" style="color:#ccc;">User Side</th>
                  <th rowspan="1" colspan="5" style="color:#ccc;">Source Side</th>
                  <th rowspan="1" colspan="1" style="">Source Side</th>
              </tr>
              <tr>
                  <th>Fouling Factor</th>
                  <th >Fluid Type</th>
                  <th >Inlet Water (℃)</th>
                  <th >Outlet Water (℃)</th>
                  <th >Evaporating T. (℃)</th>
                  <th>Fouling Factor</th>
                  <th >Fluid Type</th>
                  <th >Inlet Water (℃)</th>
                  <th >Outlet Water (℃)</th>
                  <th >Inlet Air (℃)</th>
                  <th >Evaporating T. (℃)</th>
                  <th >Inlet Water (℃)</th>
                  <th >Outlet Water (℃)</th>
                  <th >Condensing T. (℃)</th>
                  <th >Inlet Water (℃)</th>
                  <th >Outlet Water (℃)</th>
                  <th >Inlet Air (℃)</th>
                  <th >Relative Humidity (%)</th>
                  <th >Evaporating T. (℃)</th>
                  <th >Inlet Air (℃)</th></tr>
          </thead>
      </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      typeFieldText: '',
      editableFanCoils: false,
      ChillerData: [
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
        }],
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
      if (this.editableFanCoils) {
        this.editableFanCoils = false
      } else {
        this.editableFanCoils = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/leafs.scss';
    .table-fan {
      border: solid 1px #29aae2;
      overflow-x: auto;
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
          td {
            padding: 0.4em;
          }
        }
      }
    }
</style>
