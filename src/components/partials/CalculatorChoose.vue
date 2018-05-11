<template>
  <el-row class="choose">
    <el-col class="wd">
      <el-col  :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="wordDropdown">
        <div class="word">
          <p class="first">FanCoil</p>
        </div>
        <div class="dropdown">
          <el-dropdown>
            <el-button type="primary">
              Choose<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col  :xs="24" :sm="24" :md="24" :lg="12" :xl="12"  class="wordDropdown">
        <div class="word">
          <p class="second">Chiller</p>
        </div>
        <div class="dropdown">
          <el-dropdown>
            <el-button type="primary">
              Choose <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-col>
    <el-col class="wd">
      <el-col  :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="wordDropdown">
        <div class="word">
          <p class="third">DryCooler</p>
        </div>
        <div class="dropdown">
          <el-dropdown>
            <el-button type="primary">
              Choose <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
      <el-col  :xs="24" :sm="24" :md="24" :lg="12" :xl="12"  class="wordDropdown">
        <div class="word">
          <p class="fourth">Condenser</p>
        </div>
        <div class="dropdown">
          <el-dropdown>
            <el-button type="primary">
              Choose <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item>Action 2</el-dropdown-item>
              <el-dropdown-item>Action 3</el-dropdown-item>
              <el-dropdown-item>Action 4</el-dropdown-item>
              <el-dropdown-item>Action 5</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-col>
    <el-col  :xs="24" :sm="24" :md="24" :lg="12" :xl="12" class="wordDropdown1">
      <div class="word1">
        <p class="fifth">AHU</p>
      </div>
      <div class="dropdown1">
        <el-dropdown>
          <el-button type="primary">
            Choose <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item>Action 4</el-dropdown-item>
            <el-dropdown-item>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-col>
    <el-col  :xs="24" :sm="24" :md="24" :lg="12" :xl="12" justify="center">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Calculate</el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <el-button class="button">Request</el-button>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleClick () {
      alert('button click')
    }
  }
}
</script>

<style scoped>
  @import '../../assets/styles/leafs.scss';
  .choose {
    height: 400px;
    margin-left: -5px;
  }

  .word {
    font-size: 14px;
    border-bottom: 2px solid #2ca5d9;
    display: inline-block;
    padding-top: 10px;
  }

  .word1 {
    font-size: 14px;
    border-bottom: 2px solid #2ca5d9;
    padding-top: 10px;
  }

  .first {
    margin-bottom: 5px;
    color: #bcbcbc;
    padding-right: 80px;
  }

  .second {
    margin-bottom: 5px;
    color: #bcbcbc;
    padding-right: 85px;
  }

  .third {
    margin-bottom: 5px;
    color: #bcbcbc;
    padding-right: 66px;
  }

  .fourth {
    margin-bottom: 5px;
    color: #bcbcbc;
    padding-right: 55px;
  }

  .fifth {
    margin-bottom: 5px;
    color: #bcbcbc;
    padding-right: 100px;
  }

  .dropdown {
    margin-top: 10px;
  }

  .dropdown1 {
    margin-top: 10px;
  }

  .el-button--primary {
    color: #bcbcbc;
    background-color: #666;
    border: 1px solid #666;
    border-radius: 0px;
  }

  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 14px;
  }

  .el-icon-arrow-down {
    margin-left: 60px;
    color: white;
    font-weight: bold;
  }

  .wordDropdown {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-left: 5px;
  }

  .wordDropdown1 {
    width: 48%;
    margin-left: 5px;
  }

  .wd {
    display: flex;
  }

  .button {
    background-color: #29aae2;
    border-color: #29aae2;
    border-radius: 0px;
    color: white;
    width: 92%;
    margin-top: 20px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

</style>
