<template>
  <div class="filter">
    <div class="main-filters">
      <ul class="main-list">
        <li v-for="(filter, index) of filters" :key="index" :class="{ active: filter.id === selectedFilter }" @click="selectFilter(filter.id)">{{filter.name}}</li>
      </ul>
    </div>
    <div class="filename">
    <div class="name">File name</div>
      <div class="icon"><i class="el-icon-document"></i>
    </div>
   </div>
    <el-row  class="content">
      <div v-if="selectedFilter === 0">
        <img class="mechanico-man" src="/static/images/calculator.png">
      </div>
      <div v-else-if="selectedFilter === 1">
        <CalculatorFanTable :fileName="'File Name'"></CalculatorFanTable>
      </div>
      <div v-else-if="selectedFilter === 2">
        <CalculatorChillerTable></CalculatorChillerTable>
      </div>
      <div v-else-if="selectedFilter === 3">
        Dry cooler
      </div>
      <div v-else-if="selectedFilter === 4">
        Condenser
      </div>
      <div v-else-if="selectedFilter === 5">
        AHU
      </div>
    </el-row>
  </div>
</template>

<script>
import CalculatorFanTable from './CalculatorFanTable.vue'
import CalculatorChillerTable from './CalculatorChillerTable.vue'
export default {
  components: {
    CalculatorFanTable,
    CalculatorChillerTable
  },
  data () {
    return {
      filters: [
        { id: 1, name: 'FanCoil' },
        { id: 2, name: 'Chiller' },
        { id: 3, name: 'DryColler' },
        { id: 4, name: 'Condenser' },
        { id: 5, name: 'AHU' }
      ],
      selectedFilter: 0
    }
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
    padding-right: 1%;
    padding-left: 1%;
    background-color: white;
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

   .filename {
    display:flex;
    flex-direction:row;
    font-weight: 400;
    font-size:1.2em;
    padding:0.5em 0;
    padding-left:1em;
    background-color: #424242;
     .name{
      background-color: #424242;
      color:white;
      width:66%;
      }
     .icon {
        font-size: 1em;
        color: white;
      }
    }

    .content
    {
      overflow: auto;
      background-color: white;
      height: calc(100vh - 128px);
      display: flex;
      justify-content: center;
      .mechanico-man
      {
        margin-top: 50%;
        width: 25em;
        height: 20em;
      }
    }
  }

</style>
