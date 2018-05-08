<template>
  <el-row type="flex" class="row-header" justify="center">
    <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="16">
      <div class="el-col-left">
        <el-button class="trash"><i class="icon-trash-empty"></i></el-button>
        <el-dropdown>
          <el-button class="groups">
            Groups<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Group 1</el-dropdown-item>
            <el-dropdown-item>Group 2</el-dropdown-item>
            <el-dropdown-item>Group 3</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button class="new-user"><i class="icon-plus-1"></i><span>New user</span></el-button>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="grid-content">
        <el-input class="search-input" placeholder="Search users" v-model="input_search" clearable>
          <el-button slot="append" icon="el-icon-search"></el-button>
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
  methods: {}
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  .search-input {
    min-width: 5em;
    max-width: 20em;
    float: right;
    margin-right: 15px;
    .el-button
    {
      background-color: #0D72B9;
      color: white;
      font-weight: 900;
      font-size: 1em;
    }
  }

  .el-col-left {
    float: left;
    margin-left: 0px;
    min-height: 1em;
    min-width: 5em;
    display: flex;
    justify-content: center;
    align-items: center;
    .new-user
    {
      background-color: #0D72B9;
      color: white;
      margin-right: 0.5em;
      i{
        font-size: 1em;
        font-weight: 700;
      }
    }
    .groups
    {
      background-color: #909399;
      color: white;
      margin-right: 0.5em;
      i{
        font-size: 1em;
        font-weight: 700;
      }
    }
    .trash
    {
      background-color: #909399;
      color: white;
      margin-right: 0.5em;
      i{
        font-size: 1em;
        font-weight: 700;
      }
    }
    span
    {
      font-size: 1em;
      font-weight: 700;
    }
  }
  .row-header {
    padding: 0.5em;
  }
</style>
