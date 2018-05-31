<template>
  <div>
  <el-row type="flex" class="row-header" justify="center">
    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
      <div class="el-col-left">
        <el-button type="info"><i class="icon-trash-empty"></i></el-button>
        <el-button @click="dialogVisible = true" class="new-project"><i class="icon-plus-1"></i><span>New project</span></el-button>
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
  <el-dialog
    class="new-project"
    title="Create project"
    :visible.sync="dialogVisible"
    width="50%"
    :before-close="handleClose">
    <AppForm></AppForm>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">Save</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import AppForm from './AppForm.vue'

export default {
  data () {
    return {
      dialogVisible: false,
      input_search: ''
    }
  },
  props: ['fields', 'columns', 'selectable'],
  methods: {
    handleClose (done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  components: {
    AppForm
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
    border: none;
    outline: none;
    .el-button
    {
      background-color: #0D72B9;
      color: white;
      font-weight: 900;
      font-size: 1em;
      -moz-border-radius-bottomleft: 0;
      -moz-border-radius-bottomright: 0;
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
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
    padding: 1em 0.5em;
  }
  .el-input__inner:focus {
    outline:none;
    border: none;
  }
  .new-project
  {
    background-color: rgba(#0D72B9, 0.7);
    .dialog-footer
    {
    }
  }
</style>
