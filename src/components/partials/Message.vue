<template>
  <div>
    <el-row type="flex" class="row-header" justify="center">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p>kakfdsfsda</p>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p>kaka</p>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <p>lal</p>
      </el-col>
    </el-row>
    <el-row>
    </el-row>
  </div>
</template>
<script>
import TableRequest from './TableRequest.vue'
import TableHeader from './TableHeader.vue'
export default {
  components: {
    TableRequest,
    TableHeader
  },
  data () {
    return {
      fields: [{
        manufacturer: 'Project 1',
        product: 'Fan Coil',
        status: 'Approved',
        type: 'success'
      }, {
        manufacturer: 'Project 2',
        product: 'Fan Coil',
        status: 'Requested',
        type: ''
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied',
        type: 'danger'
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied',
        type: 'danger'
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied',
        type: 'danger'
      }],
      input_search: ''
    }
  }
}
</script>
<style>
  @import '../../assets/font/fontello/css/fontello.css';
</style>
