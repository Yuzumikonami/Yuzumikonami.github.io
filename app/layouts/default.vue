<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <Header />
    <main class="container mx-auto px-4 py-8 max-w-3xl">
      <slot />
    </main>
    <Footer />
  </div>
</template>