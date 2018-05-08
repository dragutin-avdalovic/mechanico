<template>
  <div class="status-bg">
    <el-row>
      <el-col>
        <div class="edit"><i class="el-icon-edit"></i></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10">
        <div class="center">
          <img class="profile-img" src="../../../static/images/img_avatar2.png" alt="Avatar">
        </div>
      </el-col>
      <el-col :span="14" class="">
        <div class="status">
          <span class=""><h3 style="margin: 0;">John Doe</h3></span>
          <span class="info">Company Name</span>
        </div>
        <div class="status contact-info">
          <span class="info icon"><i class="icon-location"></i>London, UK</span>
          <span class="info icon"><i class="icon-mail"></i>John.Doe@mail.com</span>
          <span class="info icon"><i class="icon-phone"></i>+38700000000</span>
        </div>
      </el-col>
    </el-row>
    <div class="divider"></div>
    <el-row>
      <el-col :span="8">
        <div class="center">
          <el-progress :width=100 class="circle" type="circle" :percentage="0"></el-progress>
          <div class="info">New Project</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="center">
          <el-progress :width=100 class="circle" type="circle" :percentage="25"></el-progress>
          <div class="info">Total Project</div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="center">
          <el-progress :width=100 class="circle" type="circle" :percentage="80" color="#8e71c7"></el-progress>
          <div class="info">Approved Licenses</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {}
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
    padding-top: 1.5em;
    padding-bottom: 1.5em;
    background-color: $white;
    min-height: 22em;
  }

  .divider {
    border: 0.5px solid $grey-my-projects-darker;
    margin: 1em 2em 1em 2em;
  }

  .status {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .contact-info {
    /*font-size: 1.1em;*/
  }

  .info {
    padding-bottom: 0.5em;
    font-size: 0.8em;
  }
  .icon{
    font-size: 0.9em;
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
  }
  .center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
