<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
        <span class="projects-label">Message Title</span>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="my-projects-icon close">X</el-col>
    </el-row>
    <el-row type="flex" justify="center" class="row-header sender">
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <img src="../../../static/images/img_avatar2.png" alt="">
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
        <div class="center-info">
          <span class="name">{{name}}</span>
          <span class="mail">{{mail}}</span>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
        <div class="time">
        <span>{{dateReceived}}</span>
        </div>
        <div class="icons">
          <span><i class="icon-reply" style="cursor: pointer"></i></span>
          <span><i class="icon-down-dir" style="cursor: pointer"></i></span>
        </div>
      </el-col>
    </el-row>
    <div class="divider"></div>
    <div>
    <el-row class="row-header" justify="center">
      <el-col :span="24">
        <div class="message-container">
          <span>{{message}}</span>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="message-container">
          <div class="replay">
            <span>Click here to
              <el-button type="text">Reply</el-button>, <el-button type="text">Reply to all</el-button>, or <el-button type="text">Forward</el-button>
          </span>
          </div>
        </div>
      </el-col>
    </el-row>
    </div>
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
  props: ['name', 'mail', 'dateReceived', 'message'],
  data () {
    return {
    }
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
      padding-left: 1em;
      font-size: 1em;
    }
    .projects-label {
      float: left;
      font-weight: 500;
      font-size: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      padding-left: 1em;
    }
    .close{
      cursor: pointer;
      padding-left: 1em;
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
    max-height: 50vh;
  }
  .message {
    display: flex;
    flex-direction: column;
    max-height: 50vh;
    overflow: auto;
  }

  .divider {
    border: 1px solid $grey-my-projects-darker;
  }

  .time {
    padding-bottom: 0.5em;
    display: flex;
    justify-content: center;
    font-size: 0.7em;
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
    padding: 1.5em;
    background-color: $white;
    min-height: 50px;
    font-size: 0.8em;
    font-weight: 500;
    align-self: flex-start;
  }
  .replay{
    width: 100%;
    height: 50%;
    background-color: $grey-my-projects-lighter;
    font-style: italic;
    font-size: 0.8em;
    padding: 1em 2em 1em 2em;
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
    cursor: pointer;
  }
  .icons{
    color: $grey-my-projects-darker;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
</style>
