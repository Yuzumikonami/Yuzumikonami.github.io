<script setup>
const colorMode = useColorMode()

function toggleColorMode() {
  // 检测浏览器是否支持 View Transitions API
  if (document.startViewTransition) {
    // 切换深色/浅色
    document.startViewTransition(() => {
      colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
    })
  } else {
    // 不会有人还在用IE吧喵。。。还是加上吧QAQ
    colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
  }
}
</script>

<template>
  <header
      class="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50"
  >
    <div class="container mx-auto px-4 py-3 flex justify-between items-center max-w-3xl">
      <NuxtLink to="/" class="text-xl font-bold text-primary-600 dark:text-primary-400">
        🌟 Yuzumikonami
      </NuxtLink>

      <!-- 自定义切换按钮（替代 UColorModeButton） -->
      <button
          @click="toggleColorMode"
          class="p-2 rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition-colors"
          :aria-label="colorMode.preference === 'dark' ? '切换到浅色' : '切换到深色'"
      >
        <UIcon
            :name="colorMode.preference === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
            class="w-5 h-5 text-gray-700 dark:text-gray-200"
        />
      </button>
    </div>
  </header>
</template>