<template>
  <div>
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-activity"></i></el-col>
      <el-col :span="20"><span class="projects-label">ACTIVITY</span></el-col>
    </el-row>
    <el-row class="message-container">
      <ActivityCard sender='Mark Moe' lastMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' date='Sep 2018'></ActivityCard>
      <ActivityCard sender='Mark Joe' lastMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' date='Sep 2018'></ActivityCard>
    </el-row>
  </div>
</template>
<script>
import ActivityCard from './ActivityCard.vue'
export default {
  components: {
    ActivityCard
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
