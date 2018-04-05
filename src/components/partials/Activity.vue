<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-activity"></i></el-col>
      <el-col :span="20"><span class="projects-label">ACTIVITY</span></el-col>
    </el-row>
    <el-row class="message-container">
      <Message sender='Mark' lastMessage='Hey there' date='Sep 2018'></Message>
    </el-row>
  </div>
</template>
<script>
import Message from './Message.vue'
export default {
  components: {
    Message
  },
  data () {
    return {
      input_search: ''
    }
  }
}
</script>
<style>
  @import '../../assets/font/fontello/css/fontello.css';
  .message-container
  {
    overflow: auto;
    max-height: 310px;
  }
</style>
