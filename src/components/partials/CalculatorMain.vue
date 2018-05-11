<template>
<!--<div class="tab">-->
  <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
    <!--<el-tab-pane label="FanCoil" name="first">-->
      <!--<CalculatorFanTable></CalculatorFanTable>-->
    <!--</el-tab-pane>-->
    <!--<el-tab-pane label="Chiller" name="second">Chiller</el-tab-pane>-->
    <!--<el-tab-pane label="DryColler" name="third">DryColler</el-tab-pane>-->
    <!--<el-tab-pane label="Condenser" name="fourth">Condenser</el-tab-pane>-->
    <!--<el-tab-pane label="AHU" name="fifth">AHU</el-tab-pane>-->
  <!--</el-tabs>-->
  <div class="filter">
    <div class="main-filters">
      <ul class="main-list">
        <li v-for="(filter, index) of filters" :key="index" :class="{ active: filter.id === selectedFilter }" @click="selectFilter(filter.id)">{{filter.name}}</li>
      </ul>
    </div>
    <el-row class="file-name-item">
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12" class="fileName">File.xml</el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"><icon class="el-icon-document"></icon></el-col>
    </el-row>
    <el-row  class="content">
      <!--<img class="mechanico-man" src="/static/images/calculator.png">-->
      <CalculatorFanTable></CalculatorFanTable>
    </el-row>
  </div>
</template>

<script>
import CalculatorFanTable from './CalculatorFanTable.vue'
export default {
  data () {
    return {
      filters: [
        { id: 1, name: 'FanCoil' },
        { id: 2, name: 'Chiller' },
        { id: 3, name: 'DryColler' },
        { id: 4, name: 'Condenser' },
        { id: 5, name: 'AHU' }
      ],
      selectedFilter: 1
    }
  },
  components:
  {
    CalculatorFanTable
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    selectFilter (id) {
      this.$emit('onFilterSelected', id)
      this.selectedFilter = id
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/leafs.scss';
  @import '../../assets/styles/varibles.scss';
  .filter {
    width: 98%;
    margin-left: 1%;
    margin-right: 1%;
    background-color: #424242;
    ul {
      list-style: none;
      width: 100%;
      display: flex;
      margin: 0;
      padding: 0;
      background-color: #424242;
      li {
        cursor: pointer;
      }
    }
    .main-filters {
      display: flex;
      font-size: 1em;
      .main-list {
        width:100%;
        overflow: auto;
        li {
          margin-top:1em;
          padding: 25px 60px;
          opacity: 0.8;
          background-color: #606060;
          color:white;
          margin-right: 0.3em;

          &:hover {
            border-bottom: solid 3px #29aae2;
            background-color: #424242;
          }
        }
        .active {
          border-bottom: solid 3px #29aae2;
          background-color: #424242;
          -webkit-box-shadow: 1px -1px 2px 0px rgba(0,0,0,0.75);
          -moz-box-shadow: 1px -1px 2px 0px rgba(0,0,0,0.75);
          box-shadow: 1px -1px 2px 0px rgba(0,0,0,0.75);
        }
      }
    }
    .file-name-item
    {
      .fileName
      {
        padding: 1em 3em;
        font-size: 1em;
        font-weight: 800;
        color: white;
      }
      icon {
        padding: 0.5em 3em;
        font-size: 1.5em;
        font-weight: 500;
        color: white;
        float: right;
        padding-right: 40%;
      }
    }
    .content
    {
      overflow: auto;
      background-color: white;
      height: calc(100vh - 135px);
      display: flex;
      justify-content: center;
      .mechanico-man
      {
        width: 25em;
        height: 20em;
      }
    }
  }
</style>
