<template>
  <el-row class="manufacturers-header">
    <el-col :xs="24" :sm="24" :md="24" :m-l="24" :lg="16" :xl="18">
      <div class="el-col-left">
        <el-button size="mini" class="trash"><i class="icon-trash-empty"></i></el-button>
        <el-button size="mini" class="new-user"><i class="icon-plus-1"></i><span>New Product</span></el-button>
        <el-button size="mini" class="new-user"><i class="icon-plus-1"></i><span>New Manufacturer</span></el-button>
      </div>
    </el-col>
    <el-col :xs="24" :sm="24" :md="24" :m-l="24" :lg="8" :xl="6">
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
  /*display: flex;*/
  /*flex-direction: column;*/
    width: 100%;
    padding: 0.5em 0.5em 0 0.5em;

  .search-input {
    width: 90%;
    padding: 0px 5px;
    float: right;
    min-width: 5em;
    max-width: 20em;
    margin-right: 15px;
    border: none;
    outline: none;
    @media ('sm') {
      padding-top: 0.5em;
    }
    @media ('xs') {
      padding-top: 0.5em;
    }
    @media ('md') {
      padding-top: 0.5em;
    }
    &:focus {
      border: none;
      outline: none;
    }
    .el-button {
      background-color: #0D72B9;
      color: white;
      font-weight: 900;
      font-size: 1em;
      -moz-border-radius-bottomleft: 0;
      -moz-border-radius-bottomright: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      &:focus, &:active{
        border: solid 1px #0D72B9;
      }
    }
  }
  .el-col-left {
    min-height: 1em;
    min-width: 5em;
      .new-user
      {
        background-color: #0D72B9;
        color: white;
        padding: 7px 7px;
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
        padding: 7px 7px;
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
  .el-button+.el-button{
    margin-left: 0;
  }
  .grid-content{

  }
</style>
