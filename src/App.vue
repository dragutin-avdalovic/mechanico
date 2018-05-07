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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
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
body {
  margin: 0;
}
</style>
