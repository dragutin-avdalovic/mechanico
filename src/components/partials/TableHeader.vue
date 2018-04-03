<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="6">
      <div class="el-col-left">
            <el-button type="info" icon="el-icon-delete"></el-button>
            <el-button type="primary" icon="el-icon-plus">New project</el-button>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content">
        <el-input class="search-input" placeholder="Search projects" v-model="input_search" clearable>
        <el-button slot="append" type="primary" icon="el-icon-search"></el-button>
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
.grid-content
{
  min-height: 2.5em;
  min-width: 15em;
}
.search-input
{
  min-width:15em;
  max-width: 20em;
  float: right;
  margin-right: 15px
}
.row-bg {
  padding: 1em 0;
}
.el-col-left
{
  float: left;
  padding-left: 0px;
  min-height: 2.5em;
  min-width: 15em;
}
</style>
