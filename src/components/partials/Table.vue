<template>
  <el-table
    ref="multipleTable"
    :data="fields"
    :default-sort = "{prop: 'projectName', order: 'ascending'}"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column v-if="selectable" type="selection" width="55"></el-table-column>
    <el-table-column sortable v-for="(column, key) in columns"
     v-bind:label="column.label" v-bind:prop="column.prop" v-bind:key='key' width="140">
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <el-button
          type="info" icon="el-icon-edit"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>

</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      multipleSelection: []
    }
  },
  props: ['fields', 'columns', 'selectable'],
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    }
  }
}
</script>
