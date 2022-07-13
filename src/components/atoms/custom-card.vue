<template>
  <!--  <div class="p-4 md:w-1/3">-->
  <!--    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">-->
  <!--      &lt;!&ndash;      src="https://dummyimage.com/530x476"&ndash;&gt;-->
  <!--      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="../../../public/test-images-local/plukash.jpeg"-->
  <!--           alt="blog">-->
  <!--      <div class="p-6">-->
  <!--        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">John Dow</h1>-->
  <!--        <p class="leading-relaxed mb-3">Progressive fullstack-dev.</p>-->
  <!--        <div class="flex items-center flex-wrap">-->
  <!--          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Share it-->
  <!--            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"-->
  <!--                 stroke-linecap="round" stroke-linejoin="round">-->
  <!--              <path d="M5 12h14"></path>-->
  <!--              <path d="M12 5l7 7-7 7"></path>-->
  <!--            </svg>-->
  <!--          </a>-->
  <!--          <span-->
  <!--              class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">-->
  <!--          </span>-->
  <!--          <span class="text-gray-400 inline-flex items-center leading-none text-sm">-->
  <!--            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"-->
  <!--                 stroke-linejoin="round" viewBox="0 0 24 24">-->
  <!--              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>-->
  <!--              <circle cx="12" cy="12" r="3"></circle>-->
  <!--            </svg>1.2K-->
  <!--          </span>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <section class="text-gray-600 body-font ">
    <div class="container px-5 py-20 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg-icon type="man"></svg-icon>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-4xl">John Dow</h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-lg">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh
                hot chicken gentrify portland. Williamsburg enamel pin sartorial venmo tbh
                hot chicken gentrify portland.</p>
            </div>
          </div>
          <div
              class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
            <img alt="content" class="object-cover object-center h-full w-full"
                 src="../../../public/test-images-local/plukash.jpeg">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcon from "@/components/utilities/svg-icon";

export default {
  name: "custom-card",
  components: {SvgIcon}
}
</script>

<style scoped>

</style>