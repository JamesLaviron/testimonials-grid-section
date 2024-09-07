const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/testimonials-grid-section/" : "/",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/assets/styles/_reset.scss";
          @import "@/assets/styles/base.scss";
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_utilities.scss";
          @import "@/assets/styles/_mixins.scss";
          @import "@/assets/styles/text-presets.scss";
          @import "@/assets/styles/common.scss";
        `
      }
    }
  }
})
