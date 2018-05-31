<template>
  <el-table
    ref="multipleTable"
    class="multipleTable align"
    v-loading="loading2"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="fields"
    :default-sort="{prop: 'projectName', order: 'ascending'}"
    style="width: 100%"
    :height= "'calc(55vh - 106px)'"
    @selection-change="handleSelectionChange">
    <el-table-column :width="width" v-if="selectable" type="selection"></el-table-column>
    <el-table-column :width="width" sortable v-for="(column, key) in columns"
                     v-bind:label="column.label" v-bind:prop="column.prop" v-bind:key='key'>
    </el-table-column>
    <el-table-column :width="width" v-if="editable">
      <template class="align" slot-scope="scope">
        <el-button
          type="info" icon="el-icon-edit"
          @click="handleEdit(scope.$index, scope.row)"> Edit
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      multipleSelection: [],
      loading2: false,
      width: ''
    }
  },
  mounted () {
    this.width = Math.round(this.$refs.table.$el.clientWidth / 9)
  },
  props: ['fields', 'columns', 'selectable', 'editable'],
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

<style lang="scss" scoped>
  .multipleTable {
    overflow-y: auto;
    text-align: center;
  }
  .align{
    text-align: left;
  }
  .el-table__header{
    width: 100%;
  }
</style>
