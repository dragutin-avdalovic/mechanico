<template>
  <el-table
    ref="tableRequest"
    class="tableRequest"
    v-loading="loading2"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="fields"
    style="width: 100%"
    :height="'calc(45vh - 116px - 1em)'"
    @selection-change="handleSelectionChange">
    <el-table-column v-if="selectable" type="selection" :width="50"></el-table-column>
    <el-table-column
      prop="productName"
      label="Product Name"
      :width="150" sortable>
    </el-table-column>
    <el-table-column
      prop="manufacturer"
      label="Manufacturer"
      :width="150" sortable>
    </el-table-column>
    <el-table-column
      prop="productType"
      label="Product Type"
      :width="150" sortable>
    </el-table-column>
    <el-table-column v-if="editable" :width="200">
      <template slot-scope="scope">
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
      width: 0
    }
  },
  props: ['fields', 'selectable', 'editable'],
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
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.status === value
    },
    filterHandler (value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  },
  mounted () {
    // this.width = parseInt(Math.round(this.$refs['tableRequest'].$el.clientWidth / 3))
  }
}
</script>
<style lang="scss" scoped>
</style>
