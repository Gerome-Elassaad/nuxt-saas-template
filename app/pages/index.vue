<template>
  <!-- Hero Section -->
  <div class="relative overflow-hidden py-20">
    <div class="landing-grid absolute inset-0 opacity-20"></div>
    <div class="hero-gradient absolute inset-0"></div>

    <div class="relative container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <!-- Main Title with Gradient -->
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span>Your Specialized AI Agent for</span><br />
          <span class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Content, Marketing & Growth.
          </span>
        </h1>

        <!-- Description -->
        <p class="text-lg mb-8 max-w-3xl mx-auto">
          AI marketing agent identifies and analyzes competitors, pulls live data from your marketing tools (Ahrefs, Google Ads, HubSpot), creates strategic plans like content briefs and gap analysis. It then produces winning content and custom workflows for SEO, social media, performance marketing, email marketing & more.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://app.repo-booster.com/pricing"
            class="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg shadow-lg min-w-[200px] transition-transform transform hover:scale-105"
          >
            Get Free Trial
          </a>
        </div>

        <!-- No credit card text -->
        <p class="text-sm">No credit card required</p>
      </div>

      <!-- Image Placeholder -->
      <div class="relative container mx-auto -mt-4">
        <!-- Increased margin-top by reducing negative margin -->
        <div class="rounded-2xl overflow-hidden shadow-2xl animate-fade-up max-w-5xl mx-auto">
          <ImagePlaceholder class="w-full h-auto object-cover rounded-2xl" />
        </div>
      </div>
    </div>

    <!-- Feature Icons -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
      <div class="bg-light-surface dark:bg-dark-surface p-6 rounded-xl text-center">
        <UIcon name="i-heroicons-magnifying-glass" class="w-8 h-8 text-blue-500 mx-auto mb-2" />
        <h3 class="font-semibold">Research</h3>
        <p class="text-sm">Get real-time info from the web, your files, and marketing tools.</p>
      </div>
      <div class="bg-light-surface dark:bg-dark-surface p-6 rounded-xl text-center">
        <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-purple-500 mx-auto mb-2" />
        <h3 class="font-semibold">Generate</h3>
        <p class="text-sm">Create & edit content in your brand voice using GPT-4 & AI.</p>
      </div>
      <div class="bg-light-surface dark:bg-dark-surface p-6 rounded-xl text-center">
        <UIcon name="i-heroicons-chart-bar" class="w-8 h-8 text-pink-500 mx-auto mb-2" />
        <h3 class="font-semibold">Optimize</h3>
        <p class="text-sm">Enhance content quality, SEO performance, and campaign effectiveness.</p>
      </div>
      <div class="bg-light-surface dark:bg-dark-surface p-6 rounded-xl text-center">
        <UIcon name="i-heroicons-share" class="w-8 h-8 text-green-500 mx-auto mb-2" />
        <h3 class="font-semibold">Publish</h3>
        <p class="text-sm">Share your website to the world with our global SEO tools.</p>
      </div>
    </div>

    <!-- Dynamic Sections -->
    <ULandingSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :align="section.align"
      :features="section.features"
    >
      <ImagePlaceholder />
    </ULandingSection>

    <ULandingSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
        />
      </UPageGrid>
    </ULandingSection>

    <!-- Testimonials Section -->
    <ULandingSection
      :headline="page.testimonials.headline"
      :title="page.testimonials.title"
      :description="page.testimonials.description"
    >
      <div class="overflow-hidden relative max-w-4xl mx-auto">
        <div
          class="flex animate-slide"
          :style="{ '--slide-duration': `${page.testimonials.items.length * 3}s` }"
        >
          <div
            v-for="(testimonial, index) in [...page.testimonials.items, ...page.testimonials.items]"
            :key="index"
            class="flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
          >
            <ULandingTestimonial
              v-bind="testimonial"
              class="bg-gray-100/50 dark:bg-gray-800/50"
            />
          </div>
        </div>
      </div>
    </ULandingSection>

    <!-- Call to Action -->
    <ULandingSection>
      <LandingCTA />
    </ULandingSection>
  </div>
</template>

<script setup lang="ts">

// Fetch Page Data
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne());
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

// SEO Metadata
useSeoMeta({
  titleTemplate: '',
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
</script>

<style scoped>
/* Testimonials Slider Animation */
@keyframes slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.flex.animate-slide {
  display: flex;
  width: calc(200%); /* Double the width for duplicated items */
  animation: slide var(--slide-duration, 20s) linear infinite;
}
</style>
