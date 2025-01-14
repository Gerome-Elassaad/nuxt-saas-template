<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from '././assets/main.css'

const colorMode = useColorMode()

const color = computed(() => colorMode.value === 'dark' ? '#111827' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: color.value },
    { property: 'og:title', content: 'Repo-Booster - Supercharge Your Git Project Today' },
    { property: 'og:description', content: 'Repo-Booster is a powerful tool to boost your GitHub repository\'s visibility and engagement.' },
    { property: 'og:image', content: 'https://repo-booster.com/Post.png' },
    { property: 'og:site_name', content: 'Repo-Booster' },
    { property: 'og:url', content: 'https://repo-booster.com' },
    { property: 'twitter:title', content: 'Repo-Booster - Supercharge Your Git Project Today' },
    { property: 'twitter:description', content: 'Repo-Booster is a powerful tool to boost your GitHub repository\'s visibility and engagement.' },
    { property: 'twitter:image', content: 'https://repo-booster.com/Post.png' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
    class: colorMode.value === 'dark' ? 'dark' : 'light'
  }
})

useSeoMeta({
  titleTemplate: '%s - Repo-Booster - Enhance GitHub Repository Visibility & SEO for Growth',
  description: 'Repo-Booster boosts GitHub repository visibility and engagement with SEO, analytics, and automation tools.',
  ogSiteName: 'Repo-Booster',
  ogImage: 'https://repo-booster.com/social-card.png',
  ogTitle: 'Repo-Booster - Supercharge Your Git Project Today',
  ogDescription: 'Repo-Booster boosts GitHub repository visibility and engagement with SEO, analytics, and automation tools.',
  ogUrl: 'https://repo-booster.com',
  twitterTitle: 'Repo-Booster - Supercharge Your Git Project Today',
  twitterDescription: 'Repo-Booster boosts GitHub repository visibility and engagement with SEO, analytics, and automation tools.',
  twitterImage: 'https://repo-booster.com/social-card.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <div class="min-h-screen w-full bg-custom-dark bg-cover bg-center">
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
  </div>
</template>
