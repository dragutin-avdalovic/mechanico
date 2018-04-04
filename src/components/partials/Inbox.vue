<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-mail"></i></el-col>
      <el-col :span="20"><span class="projects-label">INBOX</span></el-col>
    </el-row>
    <el-row type="flex" class="row-header" justify="center">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <el-button type="info" size="mini" icon="icon-trash-empty"></el-button>
          <el-button type="primary" size="mini">Compose Mail</el-button>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <el-input  size="mini" placeholder="Search projects" v-model="input_search" clearable>
            <el-button slot="append" type="primary" icon="icon-search"></el-button>
          </el-input>
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
