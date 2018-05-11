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
  </div>
  <!--<div class="img">-->
  <!--<img src="/static/images/calculator.png">-->
<!--</div>-->
<!--</div>-->
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
        { id: 10, name: 'Condenser' },
        { id: 10, name: 'AHU' }
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/leafs.scss';
  @import '../../assets/styles/varibles.scss';
  .filter {
    width: 100%;
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
        overflow: hidden;
        li {
          margin-top:1em;
          padding: 25px 60px;
          opacity: 0.8;
          background-color: #606060;
          color:white;
          margin-right: 0.3em;

          &:hover {
            border-bottom: solid 3px $blue-my-projects;
            background-color: #424242;
          }
        }
        .active {
          border-bottom: solid 3px $blue-my-projects;
          background-color: #424242;
          -webkit-box-shadow: 2px -2px 2px 0px rgba(0,0,0,0.75);
          -moz-box-shadow: 2px -2px 2px 0px rgba(0,0,0,0.75);
          box-shadow: 2px -2px 2px 0px rgba(0,0,0,0.75);
        }
      }
    }
  }
</style>
