<template>
  <el-container style="height: 100vh;">
    <el-main>
        <div class="sidebar-col">
          <div class="grid-content1">
            <CalculatorSidebar @hide="hideSidebar"></CalculatorSidebar>
          </div>
        </div>
        <div class="main-col">
          <div class="grid-content">
            <CalculatorMain></CalculatorMain>
          </div>
        </div>
    </el-main>
  </el-container>
</template>

<script>
import CalculatorSidebar from '@/components/partials/CalculatorSidebar'
import CalculatorMain from '@/components/partials/CalculatorMain'

export default {
  data () {
    return {
      sidebar: null,
      main: null
    }
  },
  components: {
    CalculatorSidebar,
    CalculatorMain
  },
  methods: {
    hideSidebar (value) {
      this.sidebar = document.getElementsByClassName('sidebar-col')
      this.main = document.getElementsByClassName('main-col')
      if (value === false) {
        this.sidebar[0].style.width = 1.3 + '%'
        this.main[0].style.width = 98.7 + '%'
      } else if (value === true) {
        this.sidebar[0].style.width = 30 + '%'
        this.main[0].style.width = 70 + '%'
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
@import '../assets/styles/varibles';
@import '../assets/styles/mixins';
.grid-content{
  height:100px;
}
.el-main {
  display: flex;
  flex-direction: row;
  @include screen-size('s')
  {
    flex-direction: column;
  }
  padding: 0;
  background-color: white;
  .sidebar-col {
    width: 30%;
    @include screen-size('s')
    {
      width: 100%;
    }
    @include screen-size('xs')
    {
      width: 100%;
    }
  }
  .main-col
  {
    width: 70%;
    @include screen-size('s')
    {
      width: 100%;
    }
    @include screen-size('xs')
    {
      width: 100%;
    }
  }
}

</style>
