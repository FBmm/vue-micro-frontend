<template>
  <div v-loading.fullscreen="loading">
    <MainMenu />
    <div id="sub-container"></div>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu'

export default {
  name: 'App',
  components: {
    MainMenu
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    }
  },
  watch: {
    loading(val) {
      console.log(val)
    }
  }
}
</script>

<style>
</style>
