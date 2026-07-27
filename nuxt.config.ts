// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2026-07-27',
    devtools: {enabled: true},
    modules: ['@nuxt/ui'],
    css: ['~/assets/css/main.css'],
    nitro: {
        preset: 'cloudflare-module',   // ← 注意是 连字符（-），不是下划线（_）
    }
})