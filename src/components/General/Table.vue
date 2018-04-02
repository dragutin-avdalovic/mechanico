<template>
  <el-table
    ref="multipleTable"
    :data="fields"
    :default-sort = "{prop: 'projectName', order: 'ascending'}"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <slot name="tableContentBefore"></slot>
    <el-table-column sortable v-for="(column, key) in columns"
     v-bind:label="column.label" v-bind:prop="column.prop" v-bind:key='key' width="140">
    </el-table-column>
    <slot name="tableContentAfter"></slot>
  </el-table>

</template>

<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  props: ['fields', 'columns'],
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(this.multipleSelection)
    }
  }
}
</script>
