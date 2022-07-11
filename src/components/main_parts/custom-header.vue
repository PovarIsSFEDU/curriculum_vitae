<template>
  <Disclosure as="header" class="bg-gray-800" v-slot="{ open }">
<!--    max-w-7xl-->
    <div class=" mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">

          <!-- Mobile menu button-->
          <DisclosureButton
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
            <XIcon v-else class="block h-6 w-6" aria-hidden="true"/>
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <!--Photo-logo-->
          <div class="flex-shrink-0 flex items-center">
            <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                 alt="Workflow"/>
            <img class="hidden lg:block h-8 w-auto"
                 src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in custom_links" :key="item.name" :href="item.link"
                 :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']"
                 :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in custom_links" :key="item.name" as="a" :href="item.href"
                          :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']"
                          :aria-current="item.current ? 'page' : undefined">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import request from "@/tools/request";
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/vue'
import {MenuIcon, XIcon} from '@heroicons/vue/outline'

export default {
  name: "custom-header",
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    MenuIcon,
    XIcon
  },
  props: {
    id: {
      type: String,
      required: false
    },
    login_panel: {
      type: Boolean,
      required: false
    }
  },
  data: () => ({
    open: false,
    custom_link: {
      id: '',
      name: '',
      description: '',
      link: '',
      logo: '',
      custom_styles: '',
      current: ''
    },
    custom_links: []
  }),
  mounted() {
    this.fetchMaterials()
  },
  methods: {
    fetchMaterials() {
      if (this.id) {
        request.get(`/api/admin/allMaterials`).then((response) => {
              this.custom_links = response.data.custom_links
            }
        )
      } else {
        this.custom_links = [
          {
            id: 1,
            name: 'About Me',
            description: 'Some words about me',
            link: '#aboutme',
            logo: '',
            custom_styles: [],
            current: true
          },
          {
            id: 2,
            name: 'Achievements',
            description: 'All of my progress',
            link: '#achievements',
            logo: '',
            custom_styles: [],
            current: false
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>