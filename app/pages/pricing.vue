<template>
  <div v-if="page">
    <!-- Hero Section -->
    <UPageHero v-bind="page.hero">
      <template #links>
        <UPricingToggle
          v-model="isYearly"
          class="w-48"
        />
      </template>
    </UPageHero>

    <!-- Pricing Grid -->
    <UContainer>
      <UPricingGrid>
        <UPricingCard
          v-for="(plan, index) in page.plans"
          :key="index"
          v-bind="plan"
          :price="isYearly ? plan.price.year : plan.price.month"
          :cycle="isYearly ? '/month' : '/month'"
          class="animate-fade-up"
          :style="{ animationDelay: `${index * 0.1}s` }"
        />
      </UPricingGrid>

      <!-- Save Badge -->
      <div v-if="isYearly" class="flex justify-center mt-8">
        <UBadge
          label="Save up to 17% with annual billing"
          color="primary"
          size="lg"
          class="animate-fade-up"
          :style="{ animationDelay: '0.3s' }"
        />
      </div>
    </UContainer>

    <!-- Logos Section -->
    <UContainer class="py-24">
      <ULandingLogos>
        <UIcon
          v-for="icon in page.logos.icons"
          :key="icon"
          :name="icon"
          class="w-12 h-12 flex-shrink-0 text-gray-400 dark:text-gray-500 transition-all hover:text-primary-500"
        />
      </ULandingLogos>
    </UContainer>

    <!-- FAQ Section -->
    <UContainer class="py-12">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">{{ page.faq.title }}</h2>
        <p class="text-gray-600 dark:text-gray-400">{{ page.faq.description }}</p>
      </div>
      
      <ULandingFAQ
        :items="page.faq.items"
        multiple
        default-open
        class="max-w-4xl mx-auto"
      />
    </UContainer>

    <!-- CTA Section -->
    <UContainer class="py-24">
      <ULandingCTA v-bind="page.cta" class="bg-gray-100 dark:bg-gray-900" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('pricing', () => queryContent('/pricing').findOne())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

defineOgImageComponent('Saas')

const isYearly = ref(false)
</script>

<style scoped>
.animate-fade-up {
  animation: fade-up 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>