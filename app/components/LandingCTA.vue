<template>
  <div class="cta-container">
    <div class="cta-content">
      <!-- Headline -->
      <h2 class="cta-title">
        Supercharge Your Growth with <span class="highlight">Repo-Booster</span>
      </h2>
      <!-- Description -->
      <p class="cta-description">
        Unlock powerful AI-driven tools to boost your repository's visibility, optimize your SEO, and grow your audience effortlessly.
      </p>
      <!-- Buttons -->
      <div class="cta-buttons">
        <a
          href="https://repo-booster.com/pricing"
          class="cta-button-primary"
        >
          Start Free Trial
        </a>
        <a
          href="https://repo-booster.com/docs"
          class="cta-button-secondary"
        >
          Learn More
        </a>
      </div>
    </div>
    <!-- Image/Illustration -->
    <div class="cta-image">
      <img
        src="/cta-image-placeholder.jpg"
        alt="AI Growth Illustration"
        class="rounded-xl shadow-lg"
      />
    </div>
  </div>
</template>

<script setup>
/**
 * This is a responsive CTA component for a Nuxt landing page.
 * Replace the `cta-image-placeholder.png` with your desired illustration or image.
 */
</script>

<style scoped>
.cta-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 1.5rem;
  background: linear-gradient(to right, #1e293b, #334155);
  color: white;
  border-radius: 1.5rem;
}

.cta-content {
  max-width: 600px;
  text-align: center;
}

.cta-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.highlight {
  background: linear-gradient(to right, #3b82f6, #9333ea);
  -webkit-text-fill-color: transparent;
}
  .highlight {
  background: linear-gradient(to right, #3b82f6, #9333ea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  override-colors: transparent;
}

.cta-description {
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.cta-button-primary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.75rem;
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.cta-button-primary:hover {
  transform: scale(1.05);
  background-color: #2563eb;
}

.cta-button-secondary {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: white;
  color: #1e293b;
  border-radius: 0.75rem;
  border: 2px solid #1e293b;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.cta-button-secondary:hover {
  transform: scale(1.05);
  background-color: #1e293b;
  color: white;
}

.cta-image {
  max-width: 400px;
  flex: 1;
}

.cta-image img {
  width: 100%;
  height: auto;
  border-radius: 1rem;
}
</style>
