<template>
  <div>
    <el-tabs type="border-card">
      <el-tab-pane class="tab" label="PROJECTS MANAGEMENT">
        <TableHeader></TableHeader>
        <Table :fields="fields" :columns="columns" :selectable="true" :editable="true"></Table>
      </el-tab-pane>
      <el-tab-pane class="tab" label="USER MANAGEMENT">
        lala
      </el-tab-pane>
    </el-tabs>
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
  props: ['fields', 'columns', 'selectable', 'editable'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  @import '../../assets/styles/leafs';

</style>
