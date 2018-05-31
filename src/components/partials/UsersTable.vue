<template>
  <el-table
    ref="multipleTable"
    class="multipleTable"
    v-loading="loading2"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    :data="fields"
    :default-sort="{prop: 'userName', order: 'ascending'}"
    style="width: 100%"
    :height= "'calc(55vh - 132px)'"
    @selection-change="handleSelectionChange">
    <el-table-column v-if="selectable" type="selection" width="55"></el-table-column>
    <el-table-column sortable v-for="(column, key) in columns"
                     v-bind:label="column.label" v-bind:prop="column.prop" v-bind:key='key' width="140">
    </el-table-column>
    <el-table-column
      label="Status"
      width="130">
      <template slot-scope="scope">
        <i v-bind:class="scope.row.statusIcon"></i>
        <span style="margin-left: 5px">{{scope.row.status}}</span>
      </template>
    </el-table-column>
    <el-table-column label="Primary">
      <template slot-scope="scope">
        <div v-if="scope.row.primary">
          <i class="el-icon-check"></i>
        </div>
        <div v-else>
          <i class="el-icon-close"></i>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Verified">
      <template slot-scope="scope">
        <div v-if="scope.row.verified">
          <i class="el-icon-check"></i>
        </div>
        <div v-else>
          <i class="el-icon-close"></i>
        </div>
      </template>
    </el-table-column>
    <el-table-column v-if="editable"  width="140">
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
      loading2: false
    }
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
  @import '../../assets/font/fontello/css/fontello.css';
  .multipleTable {
    overflow-y: auto;
    text-align: left;
    thead {
      text-align: center;
    }
  }
  .el-icon-close{
    color:red;
    font-size: 1.5em;
    font-weight: 600;
  }
  .el-icon-check{
    color:green;
    font-size: 1.5em;
    font-weight: 600;
  }
</style>
