<template>
  <div class="product-container">
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-project"></i></el-col>
      <el-col :span="20"><span class="projects-label">PRODUCT REQUEST</span></el-col>
    </el-row>
    <el-row type="flex" class="row-header" justify="center">
      <el-col :span="24">
        <div class="grid-content">
          <el-input class="search-input" size="mini" placeholder="Search manufacturers" v-model="input_search" clearable>
            <el-button size="mini" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <TableRequest :fields="fields" :selectable="false" :editable="false"></TableRequest>
    </el-row>
  </div>
</template>

<script>
import TableRequest from './TableRequest.vue'
import TableHeader from './TableHeader.vue'

export default {
  components: {
    TableRequest,
    TableHeader
  },
  data () {
    return {
      fields: [
        {
          manufacturer: 'Project 1',
          product: 'Fan Coil',
          status: 'Approved',
          type: 'success'
        }, {
          manufacturer: 'Project 2',
          product: 'Fan Coil',
          status: 'Requested',
          type: ''
        },
        {
          manufacturer: 'Project 2',
          product: 'Fan Coil',
          status: 'Requested',
          type: ''
        }, {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        }, {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        }, {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        },
        {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        },
        {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        },
        {
          manufacturer: 'Project 3',
          product: 'Fan Coil',
          status: 'Denied',
          type: 'danger'
        }
      ],
      input_search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  .header {
    background-color: $blue-my-projects;
    color: $white;
    .my-projects-icon {
      margin-top: auto;
      margin-bottom: auto;
      padding-left: 0.5em;
      font-size: 1.5em;
    }
    .projects-label {
      float: left;
      font-weight: 500;
      font-size: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }
  }
  .row-header
  {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    .search-input {
      min-width: 5em;
      max-width: 20em;
      margin-right: 15px;
      float: right;
      border: none;
      outline: none;
      .el-button {
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
  }
</style>
