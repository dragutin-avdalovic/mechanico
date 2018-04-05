<template>
  <div>
    <el-row type="flex" class="row-bg-activity" justify="center">
      <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" size="medium" class="center">
        <el-tag type="success">Requested licence</el-tag>
        <span class="time">11:10 am</span>
      </el-col>
      <el-col :xs="10" :sm="10" :md="10" :lg="10" :xl="10" class="center-left">
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
export default {
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
    font-size: 0.8em;
    font-weight: 500;
    color: #cccccc;
  }
</style>
