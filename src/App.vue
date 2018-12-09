<template>
  <main id="app">
    <h1>{{ title }}</h1>
    <p>{{ desc }}</p>
  </main>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "这是一个标题",
      desc: "这是一行描述"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
