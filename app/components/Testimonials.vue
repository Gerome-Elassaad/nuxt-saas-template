<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Define the props
const props = defineProps<{
  testimonials?: {
    headline: string;
    title: string;
    description: string;
    items: Array<{
      quote: string;
      author: {
        name: string;
        description: string;
        avatar: {
          src: string;
          loading?: 'lazy' | 'eager';
        };
      };
    }>;
  };
}>();

const currentIndex = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

// Start slider functionality
const startSlider = () => {
  if (!props.testimonials || !props.testimonials.items.length) return;

  interval = setInterval(() => {
    currentIndex.value =
      (currentIndex.value + 1) % props.testimonials.items.length;
  }, 3000);
};

const stopSlider = () => {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
};

// Lifecycle hooks
onMounted(startSlider);
onUnmounted(stopSlider);
</script>

<template>
  <div v-if="testimonials" class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="text-lg font-semibold leading-8 tracking-tight text-primary-600">
          {{ testimonials.headline }}
        </h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {{ testimonials.title }}
        </p>
        <p class="mt-6 text-lg leading-8 text-gray-400">
          {{ testimonials.description }}
        </p>
      </div>
      <div class="relative overflow-hidden mt-16 max-w-2xl mx-auto sm:mt-20 lg:mx-0 lg:max-w-none">
        <!-- Slider Wrapper -->
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Testimonial Slides -->
          <div
            v-for="(testimonial, index) in testimonials.items"
            :key="index"
            class="flex-none w-full sm:w-1/2 lg:w-1/3 px-4"
          >
            <figure
              class="rounded-2xl bg-gray-900/50 backdrop-blur-sm p-8 text-sm leading-6"
            >
              <blockquote class="text-gray-300">
                <p>"{{ testimonial.quote }}"</p>
              </blockquote>
              <figcaption class="mt-6 flex items-center gap-x-4">
                <img
                  :src="testimonial.author.avatar.src"
                  :alt="testimonial.author.name"
                  :loading="testimonial.author.avatar.loading"
                  class="h-10 w-10 rounded-full bg-gray-800"
                />
                <div>
                  <div class="font-semibold text-white">
                    {{ testimonial.author.name }}
                  </div>
                  <div class="text-gray-400">
                    {{ testimonial.author.description }}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.relative {
  height: auto;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.flex {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  transition: transform 0.5s ease-in-out;
}
</style>
