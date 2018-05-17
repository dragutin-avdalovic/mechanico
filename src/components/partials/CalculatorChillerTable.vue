<template>
      
          <div role="tabpanel" class="tab-pane active" id="upload-chillers">
              <div class="table-responsive">
                  <table class="table text-center" cellspacing="0" cellpadding="0">
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
                              <th >Inlet Air (℃)</th>                                                                                                               
                          </tr>
                      </thead> 
                                       
                  </table>
              </div>
              <br>        

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
      "floorField":"1",
      "roomField":"1",
      "chIdField":"CH1",
      "fcIdField":"FC1",
      "typeField":"0",
      "velField":"MAX",
      "fansField":"AC",
      "statPresField":null,
      "qtRicField":"18",
      "tainField":"27",
      "urinField":"50",
      "fluidField":"1",
      "concField":"25",
      "twInField":"7",
      "twOutField":"12",
      "qwRicField":null,
      "qtRicHField":"35",
      "tainHField":"21",
      "urinHField":"50",
      "fluidHField":"0",
      "concHField":"0",
      "twInHField":"70",
      "twOutHField":"60",
      "qwRicHField":null,
      "typeChillerField":"0",
      "typeSystemField":"0",
      "factorContField":"0,75",
      "chillTaExternalField":"35",
      "chillTaExternalHField":"7",
      "chillUrExternalHField":"87",
      "chillFluidField":"0",
      "chillConcField":"0",
      "chillTwCinField":"30",
      "chillTwCoutField":"35",
      "chillTwCinHField":"10",
      "chillTwCoutHField":"5",
      "PropertyChanged":null
   },
   {  
      "floorField":"1",
      "roomField":"1",
      "chIdField":"CH1",
      "fcIdField":"FC2",
      "typeField":"0",
      "velField":"MAX",
      "fansField":"AC",
      "statPresField":null,
      "qtRicField":null,
      "tainField":null,
      "urinField":null,
      "fluidField":"1",
      "concField":"25",
      "twInField":"7",
      "twOutField":"12",
      "qwRicField":null,
      "qtRicHField":null,
      "tainHField":null,
      "urinHField":null,
      "fluidHField":"0",
      "concHField":"0",
      "twInHField":"70",
      "twOutHField":"60",
      "qwRicHField":null,
      "typeChillerField":"0",
      "typeSystemField":"0",
      "factorContField":"0,75",
      "chillTaExternalField":"35",
      "chillTaExternalHField":"7",
      "chillUrExternalHField":"87",
      "chillFluidField":"0",
      "chillConcField":"0",
      "chillTwCinField":"30",
      "chillTwCoutField":"35",
      "chillTwCinHField":"10",
      "chillTwCoutHField":"5",
      "PropertyChanged":null
   },
   {  
      "floorField":"1",
      "roomField":"1",
      "chIdField":"CH1",
      "fcIdField":"FC3",
      "typeField":"0",
      "velField":"MAX",
      "fansField":"AC",
      "statPresField":null,
      "qtRicField":null,
      "tainField":null,
      "urinField":null,
      "fluidField":"1",
      "concField":"25",
      "twInField":"7",
      "twOutField":"12",
      "qwRicField":null,
      "qtRicHField":null,
      "tainHField":null,
      "urinHField":null,
      "fluidHField":"0",
      "concHField":"0",
      "twInHField":"70",
      "twOutHField":"60",
      "qwRicHField":null,
      "typeChillerField":"0",
      "typeSystemField":"0",
      "factorContField":"0,75",
      "chillTaExternalField":"35",
      "chillTaExternalHField":"7",
      "chillUrExternalHField":"87",
      "chillFluidField":"0",
      "chillConcField":"0",
      "chillTwCinField":"30",
      "chillTwCoutField":"35",
      "chillTwCinHField":"10",
      "chillTwCoutHField":"5",
      "PropertyChanged":null
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
               
        #upload-chillers{
          width:265vh;
        }
        .table-responsive{
          border:1px solid #29aae2;
      }

        .table>thead>tr>th {
            vertical-align: bottom;
            background-color:#29aae2;
            text-align: left;

        }
                        
        .table.text-center>thead>tr>th, .table.text-center>tbody>tr>th, .table.text-center>tfoot>tr>th, .table.text-center>thead>tr>td, .table.text-center>tbody>tr>td, .table.text-center>tfoot>tr>td {
            text-align: center;
            white-space: nowrap;
            color:white;
            padding:15px;
        }

        

 
        
 

</style>
