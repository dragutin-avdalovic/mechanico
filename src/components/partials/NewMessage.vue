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
    <el-row>
      <el-col :span="24">
        <p>Subject</p>
      </el-col>
    </el-row>
    <div class="message">message</div>
    <div class="buttons">
      <button>Send Message</button>
      <button>Upload Files</button>
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

  .message-container{
    background-color: $white;
  }
  .header {
    background-color: $blue-my-projects;
    color: $white;
  }
  .info{
    min-height: 3em;
  }
  p{
    font-size: 0.8em;
    margin: 0.4em 0.4em 0.4em 1em;
  }
  .divider{
    border: 1px solid $grey-my-projects-darker;
  }
  .message{
    background-color: $grey-my-projects-lighter;
  }
  .buttons{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
