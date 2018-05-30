<template>
  <div class="choose">
    <div class="inner-container">
      <el-row class="wd" >
        <div class="wordDropdownLeft">
          <div class="word">
            <p class="first">FanCoil</p>
          </div>
          <div class="dropdown">
            <el-dropdown @command="handleCommand">
              <el-button type="primary">
                {{command}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">Artesi</el-dropdown-item>
                <el-dropdown-item command="2">Whirpoll</el-dropdown-item>
                <el-dropdown-item command="3">Sense</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="wordDropdownRight">
          <div class="word">
            <p class="first">Chiller</p>
          </div>
          <div class="dropdown">
            <el-dropdown @command="handleCommand">
              <el-button type="primary">
              {{command}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">Artesi</el-dropdown-item>
                <el-dropdown-item command="2">Whirpoll</el-dropdown-item>
                <el-dropdown-item command="3">Sense</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-row>
      <el-row class="wd" >
        <div class="wordDropdownLeft">
          <div class="word">
            <p class="first">DryCooler</p>
          </div>
          <div class="dropdown">
            <el-dropdown @command="handleCommand">
              <el-button type="primary">
              {{command}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">Artesi</el-dropdown-item>
                <el-dropdown-item command="2">Whirpoll</el-dropdown-item>
                <el-dropdown-item command="3">Sense</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="wordDropdownRight">
          <div class="word">
            <p class="first">Condenser</p>
          </div>
          <div class="dropdown">
            <el-dropdown @command="handleCommand">
              <el-button type="primary">
              {{command}}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">Artesi</el-dropdown-item>
                <el-dropdown-item command="2">Whirpoll</el-dropdown-item>
                <el-dropdown-item command="3">Sense</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-row>
      <el-row class="wdLast" >
        <div class="wordDropdownLeft">
          <div class="word">
            <p class="first">AHU</p>
          </div>
          <div class="dropdown">
            <el-dropdown @command="handleCommand">
              <el-button type="primary">
                {{command}}<i class="el-icon-arrow-down el-icon--right"></i>
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
    </div>
    <div class="btns">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Calculate</el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Request</el-button>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      command: 'Choose'
    }
  },
  methods: {
    handleClick () {
      alert('button click')
    },
    handleCommand (comm) {
      // this.command = comm
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/mixins.scss';
  .choose {
    width: 94%;
    margin-left: 1%;
    margin-right: 1%;
    background-color: #606060;
    @include screen-size('s')
    {
      height: 85vh;
    }
    .inner-container
    {
      background-color: #606060;
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      justify-content: space-around;
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
      .wordDropdownLeft {
        display: flex;
        flex-direction: column;
        margin-right: auto;
        @include screen-size('xs')
        {
          margin-left: auto;
          margin-right: auto
        }
      }
      .wordDropdownRight{
        display: flex;
        flex-direction: column;
        margin-left: auto;
        @include screen-size('xs')
        {
          margin-left: auto;
          margin-right: auto
        }
      }
      .dropdown {
        margin-top: 1em;
      }
      .wd {
        margin-top: 2em;
        display: flex;
        justify-content: flex-start;
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        @include screen-size('xs')
        {
          flex-direction: column;
          justify-content: space-around;
          margin-top: 0.5em;
        }
      }
      .wdLast {
        width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        margin-bottom: 2em;
        margin-top: 2em;
        display: flex;
      }
    }
  }
  .btns
  {
    background-color: #606060;
    height: 20vh;
    .button{
      background-color: #29aae2;
      border-color: #29aae2;
      border-radius: 0px;
      color: white;
      margin: 1em 10%;
      width: 80%;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .el-icon-arrow-down {
    font-size: 14px !important;
  }
  .el-dropdown-menu
  {
    background-color:white;
    color:#424242;
  }
  .el-dropdown-menu__item
  {
    color:#424242;
  }
  .el-dropdown-menu__item:hover
  {
    background-color:#606060;
  }
  .el-button--primary
  {
    background-color: #595959;
    border-color: #595959;
    color: white;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
</style>
