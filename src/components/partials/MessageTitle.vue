<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-mail"></i></el-col>
      <el-col :span="20"><span class="projects-label">Message Title</span></el-col>
    </el-row>
    <el-row type="flex" justify="center" class="row-header sender">
      <el-col :span="4">
        <img src="../../../static/images/img_avatar2.png" alt="">
      </el-col>
      <el-col :span="12">
        <div class="center-info">
          <span class="name">John Doe</span>
          <span class="mail">John.Doe@email.com</span>
        </div>
      </el-col>
      <el-col :span="4">
        <span class="time">12.04.2018</span>
      </el-col>
      <el-col :span="4">
        <div class="icons">
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
          <div class="replay">
            <span>Click here to<button>Reply</button>, <button>Reply to all</button>, or <button>Forward</button>
          </span>
          </div>
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
  .header {
    background-color: $blue-my-projects;
    color: $white;
    .my-projects-icon {
      margin-top: auto;
      margin-bottom: auto;
      padding-left: 0.5em;
      font-size: 1.5em;
    }
    .projects-label {
      float: left;
      font-weight: 500;
      font-size: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }
  }
  .sender {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
  }

  .message-container {
    display: flex;
    justify-content: center;
    overflow: auto;
    max-height: 40vh;
  }

  .divider {
    border: 1px solid $grey-my-projects-darker;
  }

  .time {
    font-size: 0.8em;
    font-weight: 500;
    color: $dark-my-projects;
  }

  img {
    height: 50px;
    padding: 0.5em;
  }

  .message {
    display: flex;
    text-align: left;
  }

  .message-container {
    padding: 2em;
    background-color: $white;
    min-height: 100px;
    font-size: 0.8em;
    font-weight: 500;
    align-self: flex-start;
  }
  .replay{
    width: 100%;
    background-color: $grey-my-projects-lighter;
    font-style: italic;
    font-size: 0.9em;
    padding: 2em;
  }

  .center-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      font-size: 0.9em;
      font-weight: 700;
      align-self: flex-start;
    }
    .mail {
      font-size: 0.8em;
      font-weight: 500;
      align-self: flex-start;
    }
  }
  button{
    color: $blue-requests;
    font-size: 1em;
    background: none;
    border: none;
    outline: inherit;
    font-style: italic;
  }
  .icons{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
</style>
