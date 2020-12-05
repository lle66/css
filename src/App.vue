<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="app_header" onclick="toPage()">APP Part</div>
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
  }
};
</script>

<style>
#app {
  height: 100%;
}
.app_header {
  /* text-align: center; */
  font-size: larger;
  color: #fff;
  width: 100%;
  height: 100px;
  line-height: 100px;
  background: rgba(225, 0, 0, 0.5);
}
</style>
