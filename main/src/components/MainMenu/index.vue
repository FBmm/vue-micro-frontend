<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="/app1/form">表单</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(path) {
      console.log(path);
      window.history.pushState(null, path, path);
    }
  }
}
</script>

<style>

</style>