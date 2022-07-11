const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "CV-dark-grey",
    themeColor: "#1f2937"
  }
})
