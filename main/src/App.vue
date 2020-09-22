<template>
  <div id="app">
    <MainMenu msg="Welcome to Your Vue.js App" />
    <div id="container"></div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
