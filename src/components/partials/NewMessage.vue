<template>
  <div class="message-container">
    <el-row class="header" type="flex" justify="center">
      <el-col :span="20"><span class="projects-label">New Message</span></el-col>
      <el-col :span="4" class="my-projects-icon">X</el-col>
    </el-row>
    <div class="info">
      <el-row>
        <el-col :span="24">
          <input type="text" name="name" placeholder="To..">
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <input type="text" name="text" placeholder="From..">
        </el-col>
      </el-row>
    </div>
    <div class="divider"></div>
    <div class="subject">
      <el-row>
        <el-col :span="24">
          <input type="text" name="name" placeholder="Subject..">
        </el-col>
      </el-row>
    </div>
      <el-row>
        <el-col :span="24">
          <div class="message">
      <textarea name="message" id="" cols="10" rows="10"></textarea>
          </div>
        </el-col>
      </el-row>
    <div class="buttons">
      <el-button class="send">Send Message</el-button>
      <el-button class="upload"><i class="el-icon-upload2"></i>Upload Files</el-button>
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
      padding-left: 2.5em;
      font-size: 1em;
    }
    .projects-label {
      float: left;
      font-weight: 500;
      font-size: 1em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
      padding-left: 2.5em;
    }
  }
  .message-container{
    background-color: $white;
  }
  .info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 3em;
    margin: 0.3em 0.3em 0 1.5em;
  }
  .subject{
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 2em;
    margin: 0em 0.3em 0 1.5em;
  }
  input{
    width: 100%;
    border: none;
    resize: none;
    outline: none;
  }
  .divider{
    border: 0.5px solid $grey-my-projects-darker;
  }
  .message{
    padding: 1.5em;
    min-height: 10em;
    background-color: $grey-my-projects-lighter;
  }
  textarea{
    width: 100%;
    background-color: $grey-my-projects-lighter;
    border: none;
    resize: none;
    outline: none;
  }
  .buttons{
    min-height: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
    .send{
      border: none;
      outline: none;
      background-color: $blue-my-projects;
      color: #ffffff;
    }
    .upload{
      color: $dark-my-projects;
      border: none;
      outline: none;
      background-color: $grey-my-projects-lighter;
    }
  }
</style>
