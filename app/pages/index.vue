<script setup lang="ts">
// 个人信息
const profile = {
  name: '柚见小南Yuzumikonami',
  title: '一个普通高中牲 🐣',
  bio: '喵喵喵 咕噜咕噜～ · 爱写 bash 和 HTML · 爱玩 MC 和 BA',
  waifu: '伊落玛丽～～',
  motto: '与你的日常，就是奇迹！',
}

const socialLinks = [
  {name: 'B站', icon: 'i-simple-icons-bilibili', url: 'https://space.bilibili.com/3461565743368895'},
  {name: 'GitHub', icon: 'i-simple-icons-github', url: 'https://github.com/Yuzumikonami'},
  {name: 'Gitee', icon: 'i-simple-icons-gitee', url: 'https://gitee.com/Yuzumikonami'},
]

const projects = [
  {name: 'AetherCraft MC开服脚本', url: 'https://aether-craft.jnxnlr.top/'},
  {name: '蔚蓝档案logo生成器', url: 'https://ba-logo.jnxnlr.top'},
]

// SEO 优化
useHead({
  title: '柚见小南の个人主页喵w',
  meta: [
    {name: 'description', content: '柚见小南Yuzumikonami的个人主页，喵喵喵，咕噜咕噜～'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
  ],
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-8 space-y-10 animate-fade-in">

    <!-- 玻璃态背景卡片 -->
    <div
        class="bg-white/70 dark:bg-slate-800/70 backdrop-blur-md p-8 rounded-[--radius-card] shadow-lg ring-1 ring-black/5 dark:ring-white/10 space-y-8">

      <!-- 头像 + 简介区 -->
      <section class="text-center space-y-4">
        <UAvatar
            src="/images/Yuzumikonami.jfif"
            alt="柚见小南の头像"
            size="3xl"
            class="mx-auto ring-4 ring-primary-200 dark:ring-primary-800 !w-44 !h-44 transition-transform hover:scale-105"
        />
        <h1 class="text-4xl font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent">
          {{ profile.name }}
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">{{ profile.title }}</p>
        <p class="text-gray-500 dark:text-gray-400">{{ profile.bio }}</p>
        <p class="text-lg text-pink-500 dark:text-pink-400 font-medium">
          💕 {{ profile.waifu }} —— {{ profile.motto }}
        </p>
      </section>

      <!-- 社交链接 -->
      <section class="flex justify-center gap-4 flex-wrap">
        <UButton
            v-for="link in socialLinks"
            :key="link.name"
            :to="link.url"
            target="_blank"
            color="neutral"
            variant="ghost"
            size="lg"
            class="text-2xl hover:scale-110 transition-transform"
        >
          <UIcon :name="link.icon" class="text-primary-500 dark:text-primary-400"/>
          {{ link.name }}
        </UButton>
      </section>

      <!-- 项目展示 -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">
          🚀 私のProjects
        </h2>
        <div class="grid gap-4 sm:grid-cols-2">
          <ULink
              v-for="project in projects"
              :key="project.name"
              :to="project.url"
              target="_blank"
              class="block"
          >
            <UCard
                class="hover:shadow-xl transition-all duration-300 cursor-pointer border-0 rounded-[--radius-card] !bg-white/60 dark:!bg-slate-700/60 backdrop-blur-sm">
              <h3 class="font-medium text-center text-primary-600 dark:text-primary-400">
                {{ project.name }}
              </h3>
            </UCard>
          </ULink>
        </div>
      </section>

      <!-- 💬 交流群（可点击跳转） -->
      <section class="text-center pt-2">
        <UButton
            to="https://qm.qq.com/q/8ZP3nqsiAw"
            target="_blank"
            color="primary"
            variant="soft"
            size="lg"
            class="rounded-full px-6 hover:scale-105 transition-transform"
        >
          💬 窝的聊天群喵
        </UButton>
      </section>

    </div>

    <!-- 页脚小彩蛋 -->
    <footer
        class="text-center text-sm text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
      © 2026 柚见小南 · 用 🐾 和 ❤️ 搭建喵w~
    </footer>
  </div>
</template>