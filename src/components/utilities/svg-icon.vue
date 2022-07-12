<template>
  <!--  Man logo svg-->
  <svg v-if="type==='man'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
       stroke-width="2"
       v-bind:class="classes"
       viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
  <!--  Anchor logo svg-->
  <svg v-if="type==='anchor'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
       stroke-width="2"
       v-bind:class="classes"
       viewBox="0 0 24 24">
    <circle cx="12" cy="5" r="3"></circle>
    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
  </svg>
  <!--  Heartbeat logo svg-->
  <svg v-if="type==='heartbeat'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
       stroke-width="2"
       v-bind:class="classes"
       viewBox="0 0 24 24">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>
  <!--  Shield logo svg-->
  <svg v-if="type==='shield'" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
       stroke-width="2"
       v-bind:class="classes"
       viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    type: {
      type: String,
      required: true
    },
    classes: {
      type: String,
      default: "w-12 h-12",
      required: false
    }
  }
}
</script>

<style scoped>

</style>