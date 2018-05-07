<template>
  <div class="inbox-composition">
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-mail"></i></el-col>
      <el-col :span="20"><span class="projects-label">INBOX</span></el-col>
    </el-row>
    <el-row type="flex" class="row-header">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-button class="trash-btn" type="info" size="mini"><i class="icon-trash-empty"></i></el-button>
        <el-button class="compose-btn" size="mini">Compose Mail</el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-input class="search-input" size="mini" placeholder="Search messages" v-model="input_search" clearable>
          <el-button size="mini" slot="append" icon="el-icon-search"></el-button>
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
  .row-header
  {
    padding: 0.5em;
    .trash-btn
    {
      color: white;
      font-size: 0.8em;
    }
    .compose-btn
    {
      color: white;
      font-size: 0.8em;
      background-color: $blue-my-projects;
      font-weight: 500;
    }
    .search-input {
      min-width: 5em;
      max-width: 20em;
      float: right;
      .el-button
      {
        background-color: $blue-my-projects;
        color: white;
      }
    }
  }
  .inbox-container {
    max-height: 44vh;
    overflow: auto;
  }
</style>
