<template>
  <el-row class="manufacturers-header">
    <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
      <div class="el-col-left">
        <el-button size="mini" class="trash"><i class="icon-trash-empty"></i></el-button>
        <el-button size="mini" class="new-user"><i class="icon-plus-1"></i><span>New Product</span></el-button>
        <el-button size="mini" class="new-user"><i class="icon-plus-1"></i><span>New Manufacturer</span></el-button>
      </div>
    </el-col>
    <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10">
      <div class="grid-content">
        <el-input size="mini" class="search-input" placeholder="Search manufacturers" v-model="input_search" clearable>
          <el-button size="mini" slot="append" icon="el-icon-search"></el-button>
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
.manufacturers-header
  {
    width: 100%;
    padding: 0 0.5em 0.5em 0.5em;
    .search-input {
      min-width: 5em;
      max-width: 20em;
      float: right;
      /*margin-top: 1em;*/
      .el-button
      {
        background-color: #0D72B9;
        color: white;
        font-weight: 900;
        font-size: 0.9em;
        margin: 0;
      }
    }
    .el-col-left {
      min-height: 1em;
      min-width: 5em;
      /*display: flex;*/
      /*justify-content: center;*/
      /*align-items: center;*/
      .new-user
      {
        background-color: #0D72B9;
        color: white;
        /*margin-right: 0.1em;*/
        i{
          font-size: 0.9em;
          font-weight: 400;
        }
      }
      .groups
      {
        background-color: #909399;
        color: white;
        margin-right: 0.5em;
        i{
          font-size: 0.9em;
          font-weight: 700;
        }
      }
      .trash
      {
        background-color: #909399;
        color: white;
        /*margin-right: 0.5em;*/
        i{
          font-size: 0.9em;
          font-weight: 700;
        }
      }
      span
      {
        font-size: 0.9em;
        font-weight: 700;
      }
    }
  }
</style>
