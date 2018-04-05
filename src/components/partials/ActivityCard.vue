<template>
  <div>
    <el-row type="flex" class="row-bg-activity" justify="center">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" size="medium" class="center-activity">
        <ActivityNotification :notification='notification' :className="className"></ActivityNotification>
        <span class="time-activity">{{time}}</span>
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" class="center-left-activity">
        <span class="from-activity">{{sender}}</span>
        <span class="message-activity">{{activityMessage}}</span>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="center-left-activity">
          <span class="date-activity">
            {{date}}
          </span>
      </el-col>
    </el-row>
    <el-row>
    </el-row>
  </div>
</template>
<script>
import ActivityNotification from './ActivityNotification.vue'
export default {
  components: {
    ActivityNotification
  },
  props: ['sender', 'activityMessage', 'date', 'time', 'notification', 'className'],
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  .center-activity
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid $grey-my-projects-darker;
  }
  .center-left-activity
  {
    display: flex;
    flex-direction: column;
  }
  .row-bg-activity
  {
    min-height: 5em;
    border: 1px solid $grey-my-projects-darker;
  }
  .from-activity
  {
    font-size: 0.9em;
    font-weight: 700;
    align-self: flex-start;
    padding-left: 1em;
    padding-top: 1em;
  }
  .message-activity
  {
    font-size: 0.8em;
    font-weight: 500;
    align-self: flex-start;
  }
  .time-activity
  {
    padding-top: 0.1em;
    font-size: 0.8em;
    font-weight: 500;
    color: $grey-my-projects-darker;
  }
  .date-activity
  {
    font-size: 0.8em;
    font-weight: 500;
    align-self: flex-start;
    padding-top: 1em;
  }
</style>
