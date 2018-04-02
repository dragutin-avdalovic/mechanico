<template>
  <el-table
    ref="multipleTable"
    :data="fields"
    :default-sort = "{prop: 'projectname', order: 'descending'}"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column sortable v-for="(field, index) in fields" v-bind:key="index" v-bind:label='field.label'  v-bind:prop="field.prop" width="140">
      <template slot-scope="scope">
        <span >{{field.text}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="Operations" width="180">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit"  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        prop: 'projectname',
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        prop: 'designer',
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        prop: 'consultant',
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }, {
        prop: 'projectsize',
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles'
      }],
      multipleSelection: []
    }
  },
  props: ['fields'],
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>
