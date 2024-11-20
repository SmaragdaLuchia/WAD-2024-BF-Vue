<template>
  <div id="app">
    <HeaderCompo/>
    <router-view/>
  </div>
</template>


<script>

import HeaderCompo from "@/components/HeaderCompo.vue";

export default {
  name: 'App',
  components: {HeaderCompo}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
