<template>
<div class="sidebar">
  <div ref='sideArrow' class="sideArrow" v-on:click="hideSidebar">
    <i ref='left-arrow' class="el-icon-arrow-left"></i>
    <i ref='right-arrow' class="el-icon-arrow-right"></i>
  </div>
  <div ref='mainFilters' class="main-filters">
    <ul class="main-list">
      <button class="upperButton" v-for="(filter, index) of filters" :key="index" :class="{ active: filter.id === selectedFilter }" @click="selectFilter(filter.id)"><div class="circle">{{filter.id}}</div><p>{{filter.name}}</p></button>
    </ul>
  </div>
  <div  ref='content'  class="content">
          <div v-if="selectedFilter === 1">
            <CalculatorUpload></CalculatorUpload>
            <!--<CalculatorCompleted></CalculatorCompleted>-->
          </div>
          <div v-if="selectedFilter === 2">
            <CalculatorChoose></CalculatorChoose>
          </div>
  </div>
</div>

</template>

<script>
import CalculatorUpload from '@/components/partials/CalculatorUpload'
import CalculatorChoose from '@/components/partials/CalculatorChoose'
import CalculatorCompleted from '@/components/partials/CalculatorCompleted'

export default {
  data () {
    return {
      filters: [
        { id: 1, name: 'UPLOAD' },
        { id: 2, name: 'CALCULATE ' }
      ],
      selectedFilter: 1,
      firstClick: true
    }
  },
  components: {
    CalculatorUpload,
    CalculatorChoose,
    CalculatorCompleted
  },
  methods: {
    selectFilter (id) {
      this.$emit('onFilterSelected', id)
      this.selectedFilter = id
    },
    hideSidebar () {
      if (this.firstClick === false) {
        this.firstClick = true
        this.$refs['right-arrow'].style.display = 'none'
        this.$refs['mainFilters'].style.display = 'inline'
        this.$refs['content'].style.display = 'inline'
        this.$refs['left-arrow'].style.display = 'inline'
        this.$refs['sideArrow'].style.width = 4 + '%'
      } else if (this.firstClick === true) {
        this.firstClick = false
        this.$refs['left-arrow'].style.display = 'none'
        this.$refs['mainFilters'].style.display = 'none'
        this.$refs['content'].style.display = 'none'
        this.$refs['right-arrow'].style.display = 'inline'
        this.$refs['sideArrow'].style.width = 100 + '%'
      }
      this.$emit('hide', this.firstClick)
    }
  }}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/leafs.scss';
@import '../../assets/styles/varibles.scss';

.sideArrow{
  float:right;
  height:100vh;
  width:4%;
  position:relative;
  background-color:#606060;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease;
}
.el-icon-arrow-left{
  font-weight:600;
  color:#424242;
}
.el-icon-arrow-right{
  font-weight:600;
  color:#424242;
  display: none;
}
.sidebar {
  background-color: #424242;
  height: 100vh;
  .main-filters {
    .main-list {
      display: flex;
      font-size: 1em;
      flex-direction: row;
      padding: 1em 0;
      margin: 0;
      background-color: #424242;
      .upperButton {
        background-color: #606060;
        color: white;
        width: 98%;
        height: 68px;
        margin: 0 1%;
        border-color: transparent;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        font-weight: 600;
        &:hover {
          background-color: #29aae2;
        }
        .circle {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          width: 2em;
          min-width: 2em;
          height: 2em;
          font-size: 1em;
          background-color: #125889;
          margin-top: 7px;
          margin-left: 5px;
          margin-right: 10%;
        }
      }
      .active {
        background-color: #29aae2;
        -webkit-box-shadow: 1px -1px 2px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 1px -1px 2px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 1px -1px 2px 0px rgba(0, 0, 0, 0.75);
      }
    }
  }
}
</style>
