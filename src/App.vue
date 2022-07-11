<template>
  <custom-header></custom-header>
  <custom-body></custom-body>
  <custom-footer></custom-footer>
</template>

<script>
import CustomHeader from "@/components/main_parts/custom-header";
import CustomFooter from "@/components/main_parts/custom-footer";
import CustomBody from "@/components/main_parts/custom-body";

export default {
  name: 'App',
  components: {
    CustomHeader,
    CustomBody,
    CustomFooter
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
