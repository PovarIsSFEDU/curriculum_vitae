<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-wrap">

      <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto" v-for="education in custom_educations"
           :key="education.name">
        <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
          <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
        </div>
        <div
            class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
          {{ education.order }}
        </div>
        <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
          <div
              class="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
            <svg-icon v-bind:type=education.svg_logo classes="w-12 h-12"></svg-icon>
          </div>
          <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
            <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">{{ education.name }}</h2>
            <p class="leading-relaxed">{{ education.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import svgIcon from "@/components/utilities/svg-icon";
// import request from "@/tools/request";

export default {
  name: "custom-educations",
  components: {
    svgIcon
  },
  data: () => ({
    custom_education: {
      name: '',
      dates: '',
      description: '',
      svg_logo: '',
      order: ''
    },
    custom_educations: []
  }),
  mounted() {
    this.fetchMaterials()
  },
  methods: {
    fetchMaterials() {

      // request.get(`/api/admin/educations`).then((response) => {
      //       this.custom_links = response.data.custom_links
      //     }
      // )

      this.custom_educations = [
        {
          name: 'Shooting Stars',
          dates: '2020-2022',
          description: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.',
          svg_logo: 'shield',
          order: 1
        },
        {
          name: 'The Catalyzer',
          dates: '2021-2022',
          description: 'VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.',
          svg_logo: 'heartbeat',
          order: 2
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>