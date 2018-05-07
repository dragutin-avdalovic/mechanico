<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-mail"></i></el-col>
      <el-col :span="20"><span class="projects-label">Message Title</span></el-col>
    </el-row>
    <el-row type="flex" justify="center" class="row-header sender">
      <el-col :span="4">
        <div class="profile-picture"><img src="../../../static/images/img_avatar2.png" alt=""></div>
      </el-col>
      <el-col :span="12">
        <div class="center-info">
          <span class="from">John Doe</span>
          <span class="from">John.Doe@email.com</span>
        </div>
      </el-col>
      <el-col :span="6">
        <span class="date">12.04.2018</span>
      </el-col>
      <el-col :span="2">
        <div class="center-info">
          <span><i class="el-icon-caret-bottom" style="cursor: pointer"></i></span>
          <span><i class="el-icon-caret-bottom" style="cursor: pointer"></i></span>
        </div>
        <!--<el-button type="info" size="mini" icon="icon-trash-empty"></el-button>-->
        <!--<el-button type="primary" size="mini">Compose Mail</el-button>-->
      </el-col>
    </el-row>
    <div class="divider"></div>
    <el-row class="row-header" justify="center">
      <el-col :span="24">
        <div class="message-container"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="message-container">
          <button>Reply</button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TableRequest from './TableRequest.vue'
import TableHeader from './TableHeader.vue'
import Message from './Message.vue'

export default {
  components: {
    TableRequest,
    TableHeader,
    Message
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';

  .sender {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
  }

  .message-container {
    overflow: auto;
    max-height: 310px;
  }

  .divider {
    border: 1px solid $grey-my-projects-darker;
  }

  .date {
    font-size: 0.9em;
  }

  img {
    width: 50px;
    height: 50px;
  }

  .message {
    display: flex;
    text-align: left;
  }

  .message-container {
    background-color: $white;
    min-height: 100px;
  }

  .from {
    font-size: 0.9em;
    font-weight: 700;
    align-self: flex-start;
  }

  .center-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
