<template>
  <el-row type="flex" class="row-header" justify="center">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="el-col-left">
        <el-button type="info"><i class="icon-trash-empty"></i></el-button>
        <el-button v-on:click="openDialog('AppForm')" class="new-project"><i class="icon-plus-1"></i><span>New project</span></el-button>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="grid-content">
        <el-input class="search-input" placeholder="Search projects" v-model="input_search" clearable>
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
      dialogVisible: false,
      input_search: ''
    }
  },
  props: ['fields', 'columns', 'selectable'],
  methods: {
    openDialog (dialogId) {
      this.show(dialogId)
    }
  }
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
    .new-project
    {
      background-color: #0D72B9;
      color: white;
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
