<template>
  <div class="inbox-composition">
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-mail"></i></el-col>
      <el-col :span="20"><span class="projects-label">INBOX</span></el-col>
    </el-row>
    <el-row type="flex" class="row-header">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-button type="info" size="mini" icon="icon-trash-empty"></el-button>
        <el-button type="primary" size="mini">Compose Mail</el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-input size="mini" placeholder="Search messages" v-model="input_search" clearable>
          <el-button slot="append" type="primary" icon="icon-search"></el-button>
        </el-input>
      </el-col>
    </el-row>
    <el-row class="inbox-container">
      <Message sender='Mark' lastMessage='Hey there' date='Sep 2018'></Message>
      <Message sender='Dan' lastMessage='Hey there' date='March 2018'></Message>
      <Message sender='Phill' lastMessage='Hey there' date='Sep 2018'></Message>
      <Message sender='Phill' lastMessage='Hey there' date='Sep 2018'></Message>
      <Message sender='Phill' lastMessage='Hey there' date='Sep 2018'></Message>
      <Message sender='Vesna' lastMessage='Hey there' date='July 2018'></Message>
      <Message sender='Vesna' lastMessage='Hey there' date='July 2018'></Message>
      <Message sender='Vesna' lastMessage='Hey there' date='July 2018'></Message>
      <Message sender='Vesna' lastMessage='Hey there' date='July 2018'></Message>
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
    return {
      input_search: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';

  .inbox-container {
    max-height: 44vh;
    overflow: auto;
  }
</style>
