<template>
  <el-row type="flex" class="row-header" justify="center">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="el-col-left">
            <el-button type="info" icon="icon-trash-empty"></el-button>
            <el-button type="primary" icon="icon-plus-1">New project</el-button>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="grid-content">
        <el-input class="search-input" placeholder="Search projects" v-model="input_search" clearable>
        <el-button slot="append" type="primary" icon="icon-search"></el-button>
        </el-input>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      input_search: ''
    }
  },
  props: ['fields', 'columns', 'selectable'],
  methods: {
  }
}
</script>
<style>
.search-input
{
  min-width:5em;
  max-width: 20em;
  float: right;
  margin-right: 15px
}
.el-col-left
{
  float: left;
  margin-left: 0px;
  min-height: 1em;
  min-width: 5em;
}
.row-header {
  padding: 0.5em;
}
</style>
