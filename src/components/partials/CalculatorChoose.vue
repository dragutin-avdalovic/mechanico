<template>
  <div class="choose">
    <el-row class="wd" >
      <div class="wordDropdown" :xs="24" :sm="24" :md="24" :xl="12" :lg="12">
        <div class="word">
          <p class="first">FanCoil</p>
        </div>
        <div class="dropdown">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              Choose<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">Artesi</el-dropdown-item>
              <el-dropdown-item command="2">Fun fan</el-dropdown-item>
              <el-dropdown-item command="3">Die</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="wordDropdown" :xs="24" :sm="24" :md="24" :xl="12" :lg="12">
        <div class="word">
          <p class="first">Chiller</p>
        </div>
        <div class="dropdown">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              Choose<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">Artesi</el-dropdown-item>
              <el-dropdown-item command="2">Fun fan</el-dropdown-item>
              <el-dropdown-item command="3">Die</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
    <el-row class="wd" >
      <div class="wordDropdown" :xs="24" :sm="24" :md="24" :xl="12" :lg="12">
        <div class="word">
          <p class="first">DryCooler</p>
        </div>
        <div class="dropdown">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              Choose<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">Artesi</el-dropdown-item>
              <el-dropdown-item command="2">Fun fan</el-dropdown-item>
              <el-dropdown-item command="3">Die</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div class="wordDropdown" :xs="24" :sm="24" :md="24" :xl="12" :lg="12">
        <div class="word">
          <p class="first">DryCooler</p>
        </div>
        <div class="dropdown">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              Choose<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">Artesi</el-dropdown-item>
              <el-dropdown-item command="2">Fun fan</el-dropdown-item>
              <el-dropdown-item command="3">Die</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
    <el-row class="wd" >
      <div class="wordDropdown" :xs="24" :sm="24" :md="24" :xl="12" :lg="12">
        <div class="word">
          <p class="first">AHU</p>
        </div>
        <div class="dropdown">
          <el-dropdown @command="handleCommand">
            <el-button type="primary">
              Choose<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="1">Artesi</el-dropdown-item>
              <el-dropdown-item command="2">Fun fan</el-dropdown-item>
              <el-dropdown-item command="3">Die</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </el-row>
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Calculate</el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Request</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('button click')
    },
    handleCommand (command) {
      console.log('click on item ' + command)
    }
  }
}
</script>

<style lang="scss" scoped>
  .choose {
    display: flex;
    flex-direction: column;
    .word {
      font-size: 14px;
      border-bottom: 2px solid #2ca5d9;
      width: 100%;
      text-align: left;
      .first {
        margin-bottom: 5px;
        padding-left: 10%;
        color: #bcbcbc;
      }
    }
    .wordDropdown {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .dropdown {
      margin-top: 1em;
    }
    .el-icon-arrow-down {
      font-size: 14px;
    }
    .wd {
      margin-top: 2em;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
  .el-button--primary {
    background-color: #595959;
    border-color: #595959;
    color: white;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
    .button{
    background-color: #29aae2;
    border-color: #29aae2;
    border-radius: 0px;
    color: white;
    margin: 2em 2%;
    width: 96%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    .el-dropdown-menu{
    background-color:#424242;
    color:white;
  }
  .el-dropdown-menu__item{
    color:white;
  }
  .el-dropdown-menu__item:hover{
    background-color:#606060;
  }
</style>
