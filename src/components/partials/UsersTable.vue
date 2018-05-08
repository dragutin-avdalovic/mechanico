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
    height="310"
    @selection-change="handleSelectionChange">
    <el-table-column v-if="selectable" type="selection" width="55"></el-table-column>
    <el-table-column sortable v-for="(column, key) in columns"
                     v-bind:label="column.label" v-bind:prop="column.prop" v-bind:key='key' width="140">
    </el-table-column>
    <el-table-column
      label="Status"
      width="130">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">waiting</span>
      </template>
    </el-table-column>
    <el-table-column label="Primary">
      <template slot-scope="scope">
        <div>
          <icon class="icon-ok"></icon>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="Verified">
      <template slot-scope="scope">
        <div>
          <icon class="icon-ok"></icon>
        </div>
      </template>
    </el-table-column>
    <el-table-column v-if="editable">
      <template slot-scope="scope">
        <el-button
          type="info" icon="icon-pencil"
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
  }
  .icon-ok{
    color:red;
  }
</style>
