<script setup lang="ts">
import type { NavItem } from '@nuxt/content'

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]))

const links = [{
  label: 'Docs',
  to: '/docs'
}, {
  label: 'Pricing',
  to: '/pricing'
}, {
  label: 'Blog',
  to: '/blog'
}, {
  label: 'Download',
  to: '/pricing'
}]
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Repo-Booster <UBadge
        label="AI"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UColorModeButton size="sm" />
      <UButton
        label="Get Access"
        color="gray"
        to="https://app.repo-booster.com/seo-assistant"
      />
    </template>

    <template #panel>
      <UNavigationTree
        :links="mapContentNavigation(navigation)"
        default-open
      />
    </template>
  </UHeader>
</template>
