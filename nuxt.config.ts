// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  // 注册模块
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],
  // 引入全局 CSS 文件
  css: ['~/assets/css/main.css']
})