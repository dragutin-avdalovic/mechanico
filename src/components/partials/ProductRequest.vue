<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :span="2" class="my-projects-icon"><i class="icon-project"></i></el-col>
      <el-col :span="22"><span class="projects-label">PRODUCT REQUEST</span></el-col>
    </el-row>
    <Table :fields="fields" :columns="columns" :selectable="false" :editable="false"></Table>
  </div>
</template>
<script>
import Table from './Table.vue'
import TableHeader from './TableHeader.vue'
export default {
  components: {
    Table,
    TableHeader
  },
  data () {
    return {
      columns: [{prop: 'manufacturer', label: 'Manufacturer '}, {prop: 'product', label: 'Product'}, {prop: 'status', label: 'Status'}],
      fields: [{
        manufacturer: 'Project 1',
        product: 'Fan Coil',
        status: 'Approved'
      }, {
        manufacturer: 'Project 1',
        product: 'Fan Coil',
        status: 'Approved'
      }]
    }
  }
}
</script>
<style>
  @import '../../assets/font/fontello/css/fontello.css';

</style>
