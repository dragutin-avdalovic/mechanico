<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import 'assets/styles/varibles.scss';
  @import 'assets/styles/leafs.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
}
/* width */
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: $grey-my-projects-lighter;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $blue-my-projects;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $blue-my-projects;
}
</style>
