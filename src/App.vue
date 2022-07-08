<template>
  <custom-header></custom-header>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CustomHeader from "@/components/custom-header";
export default {
  name: 'App',
  components: {
    CustomHeader,
    // HelloWorld
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
  margin-top: 60px;
}
</style>
