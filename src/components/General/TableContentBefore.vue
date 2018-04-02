<template>
  <el-table-column
  type="selection"
  width="55">
  </el-table-column>
</template>
<script>
export default {

  data () {
    return {
      multipleSelection: []
    }
  },
  methods: {
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
