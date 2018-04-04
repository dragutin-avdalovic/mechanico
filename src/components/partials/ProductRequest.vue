<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :span="2" class="my-projects-icon"><i class="icon-project"></i></el-col>
      <el-col :span="22"><span class="projects-label">PRODUCT REQUEST</span></el-col>
    </el-row>
    <el-row type="flex" class="row-header" justify="center">
      <el-col :span="24">
        <div class="grid-content">
          <el-input class="search-input" placeholder="Search manufacturers" v-model="input_search" clearable>
            <el-button slot="append" type="primary" icon="icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <TableRequest :fields="fields" :selectable="false" :editable="false"></TableRequest>
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
        status: 'Approved'
      }, {
        manufacturer: 'Project 2',
        product: 'Fan Coil',
        status: 'Requested'
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied'
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied'
      }, {
        manufacturer: 'Project 3',
        product: 'Fan Coil',
        status: 'Denied'
      }],
      input_search: ''
    }
  }
}
</script>
<style>
@import '../../assets/font/fontello/css/fontello.css';
</style>
