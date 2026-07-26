<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
    <UCard class="max-w-2xl w-full">

      <!-- ===== 头部 ===== -->
      <template #header>
        <div class="text-center">
          <h1 class="text-3xl font-bold text-pink-600 dark:text-pink-400">
            柚见小南の小窝
          </h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">
            一个普通高中牲 · 周六随缘更新 🐾
          </p>
        </div>
      </template>

      <!-- ===== 个人介绍 ===== -->
      <div class="text-center text-gray-700 dark:text-gray-300 space-y-2">
        <p>
          泥嚎喵～ 窝是 <strong class="text-pink-500">柚见小南</strong>（Yuzumikonami）<br>
          爱写 <span class="font-mono">bash</span> 和 <span class="font-mono">html</span>，爱玩 MC 和 BA
        </p>
        <p class="text-sm text-gray-400 dark:text-gray-500">
          ✨ 与你的日常，就是奇迹！ ✨
        </p>
      </div>

      <UDivider class="my-4" />

      <!-- ===== 外链按钮 ===== -->
      <div class="flex flex-wrap justify-center gap-3">
        <UButton
            icon="i-simple-icons-bilibili"
            color="primary"
            variant="solid"
            to="https://space.bilibili.com/3461565743368895"
            target="_blank"
        >
          B站
        </UButton>
        <UButton
            icon="i-simple-icons-github"
            color="neutral"
            variant="solid"
            to="https://github.com/Yuzumikonami"
            target="_blank"
        >
          GitHub
        </UButton>
        <UButton
            icon="i-simple-icons-gitee"
            color="neutral"
            variant="solid"
            to="https://gitee.com/Yuzumikonami"
            target="_blank"
        >
          Gitee
        </UButton>
      </div>

      <UDivider class="my-4" />

      <!-- ===== 项目展示（MC 开服脚本 + BA 生成器） ===== -->
      <h2 class="text-lg font-semibold text-center mb-3 text-gray-800 dark:text-gray-200">
        🛠️ 窝的小项目
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <UCard class="text-left">
          <h3 class="font-bold text-pink-600 dark:text-pink-400">AetherCraft 开服脚本</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">MC 服务器一键部署脚本</p>
          <template #footer>
            <UButton size="xs" color="neutral" variant="outline" to="#" target="_blank">
              查看 →
            </UButton>
          </template>
        </UCard>

        <UCard class="text-left">
          <h3 class="font-bold text-pink-600 dark:text-pink-400">🎨 BA Logo 生成器</h3>
          <p class="text-sm text-gray-500 dark:text-gray-400">蔚蓝档案风格 Logo 在线生成</p>
          <template #footer>
            <UButton size="xs" color="neutral" variant="outline" to="#" target="_blank">
              查看 →
            </UButton>
          </template>
        </UCard>
      </div>

      <!-- ===== 页脚 ===== -->
      <UDivider class="my-4" />
      <p class="text-center text-xs text-gray-400 dark:text-gray-600">
        © 2026 柚见小南の小窝 · 用 ❤️ 和 🐾 搭建
      </p>

    </UCard>
  </div>
</template>

<script setup lang="ts">
//空
</script>