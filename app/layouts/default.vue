<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content'

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation(), { default: () => [] })
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', { default: () => [], server: false })

provide('navigation', navigation)

const progress = ref(0)
const onScroll = () => {
  const winScroll = window.scrollY
  const height = document.documentElement.scrollHeight - window.innerHeight
  progress.value = height ? (winScroll / height) * 100 : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
    <!-- Progress bar -->
    <div 
      class="fixed top-0 left-0 h-1 bg-primary-500 z-50 transition-all duration-300"
      :style="{ width: `${progress}%` }"
    />

    <!-- Header -->
    <AppHeader class="sticky top-0 z-40 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80 border-b border-gray-200 dark:border-gray-800" />

    <!-- Main content -->
    <UMain class="flex-grow">
      <!-- Page transition -->
      <transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <slot />
      </transition>
    </UMain>

    <!-- Footer -->
    <AppFooter class="border-t border-gray-200 dark:border-gray-800" />

    <!-- Search dialog -->
    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>

    <!-- Notifications -->
    <UNotifications />

    <!-- Back to top button -->
    <button
      v-show="progress > 20"
      class="fixed bottom-6 right-6 p-2 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-all duration-300 z-50"
      @click="window.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      <UIcon name="i-heroicons-arrow-up" class="w-5 h-5" />
    </button>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.overlay {
  background-size: 100px 100px;
  background-image:
    linear-gradient(to right, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px),
    linear-gradient(to bottom, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px);
}
.dark {
  .overlay {
    background-image:
      linear-gradient(to right, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px),
      linear-gradient(to bottom, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px);
  }
}
</style>