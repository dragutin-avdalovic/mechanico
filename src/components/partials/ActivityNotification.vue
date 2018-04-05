<template>
  <div class="notification" style="background-color: '.color.'">
    <span class="notification-text">{{notification}}</span>
  </div>
</template>
<script>
export default {
  props: ['notification', 'color'],
  data () {
    return {
    }
  }
}
</script>
<style>
  @import '../../assets/font/fontello/css/fontello.css';
  .notification
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    border-radius: 6px;
  }
  .notification-text
  {
    font-size: 0.8em;
    font-weight: 500;
    color:#ffffff;
  }
</style>
