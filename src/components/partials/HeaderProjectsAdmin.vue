<template>
  <div class="header-div">
    <el-tabs type="border-card">
      <el-tab-pane>
        <div slot="label" class="header">
          <div class="my-projects-icon"><i class="icon-project"></i></div>
          <div class="projects-label">PROJECTS MANAGEMENT</div>
        </div>
        <TableHeader></TableHeader>
        <Table :fields="fields" :columns="columns" :selectable="true" :editable="true"></Table>
      </el-tab-pane>
      <el-tab-pane>
        <div slot="label" class="header">
          <div class="my-projects-icon"><i class="el-icon-picture"></i></div>
          <div class="projects-label">USERS MANAGEMENT</div>
        </div>
        <UsersTableHeader></UsersTableHeader>
        <UsersTable :fields="fieldsUsers" :columns="columnsUsers" :selectable="selectableUsers" :editable="editableUsers"></UsersTable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Table from './Table.vue'
import UsersTable from './UsersTable.vue'
import UsersTableHeader from './UsersTableHeader.vue'
import TableHeader from './TableHeader.vue'
export default {
  components: {
    Table,
    TableHeader,
    UsersTable,
    UsersTableHeader
  },
  props: ['fields', 'columns', 'selectable', 'editable', 'fieldsUsers', 'columnsUsers', 'selectableUsers', 'editableUsers'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
    .header {
      display: flex;
      flex-direction: row;
      justify-self: flex-end;
      .my-projects-icon {
        font-size: 1.5em;
        padding-right: 1em;
      }
      .projects-label {
        font-weight: 500;
        font-size: 1em;
      }
    }

</style>
