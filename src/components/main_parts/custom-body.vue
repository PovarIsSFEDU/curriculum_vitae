<template>
  <main>
    <custom-card></custom-card>
    <custom-educations></custom-educations>
  </main>
</template>

<script>
import CustomEducations from "@/components/atoms/custom-educations";
import CustomCard from "@/components/atoms/custom-card";

export default {
  name: "custom-body",
  components: {
    CustomCard,
    CustomEducations
  }
}
</script>

<style scoped>

</style>