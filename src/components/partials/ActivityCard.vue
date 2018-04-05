<template>
  <div>
    <el-row type="flex" class="row-bg-activity" justify="center">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" size="medium" class="center">
        <ActivityNotification notification="Requested Licence" color="#8879BF"></ActivityNotification>
        <span class="time">11:10 am</span>
      </el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" class="center-left">
        <span class="from">{{sender}}</span>
        <span class="last-message">{{lastMessage}}</span>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4" class="center-left">
          <span class="last-message">
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
  props: ['sender', 'lastMessage', 'date', 'checked'],
  data () {
    return {
    }
  }
}
</script>
<style>
  @import '../../assets/font/fontello/css/fontello.css';
  .center
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .center-left
  {
    display: flex;
    flex-direction: column;
  }
  .row-bg-activity
  {
    padding-top: 1em;
    padding-bottom: 1em;
    border: 1px solid #cccccc;
  }
  .from
  {
    font-size: 0.9em;
    font-weight: 700;
    align-self: flex-start;
  }
  .last-message
  {
    font-size: 0.8em;
    font-weight: 500;
    align-self: flex-start;
    text-align: left;
  }
  .time
  {
    padding-top: 0.1em;
    font-size: 0.9em;
    font-weight: 500;
    color: #cccccc;
  }
</style>
