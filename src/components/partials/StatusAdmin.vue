<template>
  <div class="status-bg">
    <el-row>
      <el-col>
        <div class="edit"><i class="el-icon-edit"></i></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" class="center">
        <img class="profile-img" src="../../../static/images/img_avatar2.png" alt="Avatar">
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
        <div class="status">
          <span class=""><h4 style="margin: 0;">{{user}}</h4></span>
          <span class="info">{{company}}</span>
        </div>
        <div class="status contact-info">
          <span class="info"><i class="icon icon-location"></i>{{city}}</span>
          <span class="info"><i class="icon icon-mail"></i>{{mail}}</span>
          <span class="info"><i class="icon icon-phone"></i>{{phone}}</span>
        </div>
      </el-col>
    </el-row>
    <div class="divider"></div>
    <el-row>
      <el-col :span="8">
        <div class="center">
          <div class="info">Total Products</div>
          <el-progress :width=100 class="circle" type="circle" :percentage="0"></el-progress>
         <RadioButton :items="itemsRadioOne"></RadioButton>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="center">
          <div class="info">Total Users</div>
          <el-progress :width=100 class="circle" type="circle" :percentage="25"></el-progress>
          <RadioButton :items="itemsRadioTwo"></RadioButton>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="center">
          <div class="info">Licence Requests</div>
          <el-progress :width=100 class="circle" type="circle" :percentage="80"></el-progress>
          <RadioButton :items="itemsRadioThree"></RadioButton>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RadioButton from './RadioButton.vue'
export default {
  components: {
    RadioButton
  },
  props: ['user', 'company', 'city', 'mail', 'phone'],
  data () {
    return {
      itemsRadioOne: [
        { id: '1', text: 'Products Used', color: '#0D72B9' },
        { id: '2', text: 'Products Unused', color: '#0D72B9' }
      ],
      itemsRadioTwo: [
        { id: '3', text: 'Manufacturers', color: '#66CD6C' },
        { id: '4', text: 'Consultants', color: '#66CD6C' }
      ],
      itemsRadioThree: [
        { id: '5', text: 'Cancelled Requests', color: '#8879BF' },
        { id: '6', text: 'Shared Requests', color: '#8879BF' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';

  .profile-img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  .status-bg {
    background-color: $white;
    padding-top: 5vh;
    padding-bottom: 9vh;
    height: 41vh;
  }

  .divider {
    border: 0.5px solid $grey-my-projects-darker;
    margin: 1em 0 1em 0;
  }

  .status {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-self: flex-start;
  }
  .info {
    padding-bottom: 0.5em;
    font-size: 0.8em;
  }
  .circle {
    margin-bottom: 1em;
  }

  .edit {
    cursor: pointer;
    display: flex;
    float: right;
    margin-right: 1em;
    font-size: 1.4em;
  }
  i{
    margin-right: 0.5em;
    font-size: 0.9em;
  }
  .center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .circle{
    padding-top: 0.5em;
  }
</style>
