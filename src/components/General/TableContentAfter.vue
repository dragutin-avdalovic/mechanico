<template>
  <el-table-column
    label="" width="140">
    <template slot-scope="scope">
      <el-button type="info" icon="el-icon-edit"  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
    </template>
  </el-table-column>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    }
  }
}
</script>
