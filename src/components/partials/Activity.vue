<template>
  <div class="activity-container">
    <el-row class="header" type="flex" justify="center">
      <el-col :span="4" class="my-projects-icon"><i class="icon-activity"></i></el-col>
      <el-col :span="20"><span class="projects-label">ACTIVITY</span></el-col>
    </el-row>
    <el-row class="message-container">
      <ActivityCard sender='Mark Moe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="Requested License"
                    className="orange-activity"></ActivityCard>
      <ActivityCard sender='Mark Moe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="Requested License"
                    className="orange-activity"></ActivityCard>
      <ActivityCard sender='Mark Joe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="New Project"
                    className="tirquise-activity"></ActivityCard>
      <ActivityCard sender='Mark Joe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="New Product" className="blue-activity"></ActivityCard>
      <ActivityCard sender='Mark Joe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="New User" className="purple-activity"></ActivityCard>
      <ActivityCard sender='Mark Joe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="New User" className="purple-activity"></ActivityCard>
      <ActivityCard sender='Mark Joe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="New User" className="purple-activity"></ActivityCard>
      <ActivityCard sender='Mark Joe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="New User" className="purple-activity"></ActivityCard>
      <ActivityCard sender='Mark Joe' activityMessage='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                    date='Sep 2018' time="11:00 am" notification="New User" className="purple-activity"></ActivityCard>
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
  .activity-container {
    height: calc(45vh - 1.5em);
    overflow: auto;
  }
</style>
