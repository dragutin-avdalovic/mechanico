<template>
  <div>
    <el-row type="flex" class="row-bg-message" justify="center">
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3" size="medium" class="center">
        <template>
          <el-checkbox v-model="checked"></el-checkbox>
        </template>
      </el-col>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2" class="center">
        <div class="green-circle"></div>
      </el-col>
      <el-col :xs="13" :sm="13" :md="13" :lg="13" :xl="13" class="center-left">
        <span class="from">{{sender}}</span>
        <span class="last-message">{{lastMessage}}</span>
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" class="center-left">
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
    return {}
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';

  .green-circle {
    border-radius: 50%;
    background-color: $green-my-projects;
    width: 0.7em;
    height: 0.7em;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .center-left {
    display: flex;
    flex-direction: column;
  }

  .row-bg-message {
    padding-top: 1em;
    padding-bottom: 1em;
    background-color: $white;
  }

  .from {
    font-size: 0.9em;
    font-weight: 700;
    align-self: flex-start;
  }

  .last-message {
    font-size: 0.8em;
    font-weight: 500;
    align-self: flex-start;
    text-align: left;
  }
</style>
