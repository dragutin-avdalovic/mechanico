<template>
  <div class="notification" v-bind:class="className">
    <span class="notification-text">{{notification}}</span>
  </div>
</template>
<script>
export default {
  props: ['notification', 'className'],
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
  @import '../../assets/font/fontello/css/fontello.css';
  @import '../../assets/styles/varibles';
  .notification
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 3px;
    max-height: 2em;
    max-width: 70%;
  }
  .notification-text
  {
    font-size: 0.7em;
    font-weight: 500;
    color:$grey-my-projects-lighter;
  }
</style>
