<p align="center">
  <img src="https://github.com/user-attachments/assets/9eccaa4d-b283-4e69-bfa4-f889cfe2d0bd" alt="Landing" />
</p>

<p align="center">
  <a href="https://app.repo-booster.com">
    <img src="https://img.shields.io/badge/Website-Repo%20Booster-18181B?style=flat&logo=google-chrome&logoColor=28CF8D&colorB=28CF8D" alt="Website">
  </a>
  <a href="https://docs.repo-booster.com">
    <img src="https://img.shields.io/badge/Docs-Repo%20Booster-18181B?style=flat&logo=readthedocs&logoColor=28CF8D&colorB=28CF8D" alt="Docs">
  </a>
  <a href="https://api.repo-booster.com">
    <img src="https://img.shields.io/badge/API-Repo%20Booster-18181B?style=flat&logo=api&logoColor=28CF8D&colorB=28CF8D" alt="API">
  </a>
  <a href="https://status.repo-booster.com">
    <img src="https://img.shields.io/badge/Status-Repo%20Booster-18181B?style=flat&logo=check-mark&logoColor=28CF8D&colorB=28CF8D" alt="Status">
  </a>
</p>


## FULL WEBSITE TEMPLATE & APPLICATION TEMPLATE

---

## 🚀 Features

- **Dashboard**: Comprehensive overview of your website's SEO performance.
- **Domain Overview**: Detailed analysis of domain traffic, metrics, and comparisons.
- **Traffic Analytics**: Insights into traffic patterns and user engagement.
- **Keyword Research**: Advanced tools to find high-performing keywords.
- **On-Page SEO**: Optimize pages with actionable recommendations.
- **Backlink Tools**: Analyze and improve your backlink profile.
- **AI Tools**: Utilize AI for data collection, competitive analysis, keyword forecasting, and more.
- **Site Audit**: Identify and fix technical SEO issues.
- **API Integration** Google Search Console, OpenAI

---

## 🛠️ Technologies Used

## Repo-Booster (Main Branch)
- **Vue 3**: Composition API for building the front end.
- **Nuxt UI PRO**: Server-side rendering and static site generation.
- **Tailwind CSS**: Modern, utility-first CSS framework for styling.
- **Heroicons**: Scalable vector icons for consistent UI elements.
- **Sitemap & SEO**: Dynamic sitemap generation and SEO optimization.
- **MUCH MUCH MORE**

## SEO Agent (Master Branch)
- **Next.JS**
- **Typescript**
- **Tailwind CSS**: Modern, utility-first CSS framework for styling.
- **TogetherAI**
- **OPRNAI**
- **React**
- **Redux**
- **MUCH MUCH MORE**

---

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gerome-Elassaad/repo-booster-project
   ```
2. Navigate into the project directory:
   ```bash
   cd repo-booster-project
   ```
   or
  ```bash
  cd repo-booster-project
  cd ai-seo-agent
```
4. Install dependencies:

   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## Home Page
```
├── app
│  ├── components
│  │  ├── OgImage
│  │  │  └── OgImageSaas.vue
│  │  ├── AppFooter.vue
│  │  ├── AppHeader.vue
│  │  ├── ImagePlaceholder.vue
│  │  ├── ImagePlaceholder2.vue
│  │  ├── LandingCTA.vue
│  │  ├── PageHero.vue
│  │  └── Testimonials.vue
│  ├── layouts
│  │  ├── auth.vue
│  │  └── default.vue
│  ├── pages
│  │  ├── blog
│  │  │  ├── index.vue
│  │  │  └── [slug].vue
│  │  ├── docs
│  │  │  └── [...slug].vue
│  │  ├── blog.vue
│  │  ├── docs.vue
│  │  ├── index.vue
│  │  ├── login.vue
│  │  ├── pricing.vue
│  │  └── signup.vue
│  ├── types
│  │  └── index.d.ts
│  ├── app.config.ts
│  ├── app.vue
│  └── error.vue
├── content
│  ├── 1.docs
│  │  ├── 1.getting-started
│  │  │  ├── 1.index.md
│  │  │  ├── 2.installation.md
│  │  │  ├── 3.usage.md
│  │  │  └── _dir.yml
│  │  ├── 2.features-overview
│  │  │  ├── 1.features.md
│  │  │  └── _dir.yml
│  │  ├── 3.seo-tools
│  │  │  ├── 1.domain-overview.md
│  │  │  ├── 2.keyword-research.md
│  │  │  ├── 3.competitor-analysis.md
│  │  │  ├── 4.content-marketing.md
│  │  │  ├── 5.on-page-seo.md
│  │  │  ├── 6.rank-tracking.md
│  │  │  ├── 7.local-seo.md
│  │  │  └── _dir.yml
│  │  ├── 4.analytics
│  │  │  └── _dir.yml
│  │  ├── 5.ai-features
│  │  │  ├── 1.ai-tools-overview.md
│  │  │  ├── 2.seo-assistant.md
│  │  │  ├── 3.advanced-features.md
│  │  │  ├── 4.data-collection.md
│  │  │  ├── 5.keyword-forecasting.md
│  │  │  ├── 6.predictive-roi.md
│  │  │  └── _dir.yml
│  │  └── _dir.yml
│  ├── 3.blog
│  │  ├── 1.seo-toolbox.md
│  │  ├── 2.what-is-seo.md
│  │  ├── 3.beginners-guide-to-seo.md
│  │  ├── 4.seo-tips-and-tricks.md
│  │  ├── 5.cryptocurrencies.md
│  │  └── 6.boost-seo.md
│  ├── 0.index.yml
│  ├── 2.pricing.yml
│  └── 3.blog.yml
├── public
│  ├── cta-image-placeholder.jpg
│  ├── favicon.ico
│  ├── Og-Image-SaaS.jpg
│  ├── robots.txt
│  ├── seo-search-engine-optimization-business-concept-1024x683.jpg
│  ├── sitemap.xml
│  ├── social-card.png
│  └── wc_api-ai.png
├── server
│  ├── api
│  │  ├── search.json.get.ts
│  │  └── sitemap.xml.ts
│  └── tsconfig.json
├── .env.example
├── .gitignore
├── .npmrc
├── app.config.ts
├── app.vue
├── eslint.config.mjs
├── nuxt.config.ts
├── nuxt.schema.ts
├── package.json
├── renovate.json
├── tailwind.config.ts
└── tsconfig.json
```
## Application Location
```
├── ai-seo-agent-latest
│  ├── public
│  │  ├── android-chrome-192x192.png
│  │  ├── android-chrome-512x512.png
│  │  ├── apple-touch-icon.png
│  │  ├── favicon-16x16.png
│  │  ├── favicon-32x32.png
│  │  ├── favicon.ico
│  │  ├── og-image.png
│  │  ├── placeholder.svg
│  │  └── site.webmanifest
│  ├── src
│  │  ├── components
│  │  │  ├── modals
│  │  │  │  ├── DomainInputModal.tsx
│  │  │  │  ├── KeywordStatsModal.tsx
│  │  │  │  └── LoginModal.tsx
│  │  │  ├── ui
│  │  │  │  ├── accordion.tsx
│  │  │  │  ├── alert-dialog.tsx
│  │  │  │  ├── alert.tsx
│  │  │  │  ├── aspect-ratio.tsx
│  │  │  │  ├── avatar.tsx
│  │  │  │  ├── badge.tsx
│  │  │  │  ├── breadcrumb.tsx
│  │  │  │  ├── button.tsx
│  │  │  │  ├── calendar.tsx
│  │  │  │  ├── card.tsx
│  │  │  │  ├── carousel.tsx
│  │  │  │  ├── chart.tsx
│  │  │  │  ├── checkbox.tsx
│  │  │  │  ├── collapsible.tsx
│  │  │  │  ├── command.tsx
│  │  │  │  ├── context-menu.tsx
│  │  │  │  ├── dialog.tsx
│  │  │  │  ├── drawer.tsx
│  │  │  │  ├── dropdown-menu.tsx
│  │  │  │  ├── form.tsx
│  │  │  │  ├── hover-card.tsx
│  │  │  │  ├── input-otp.tsx
│  │  │  │  ├── input.tsx
│  │  │  │  ├── label.tsx
│  │  │  │  ├── menubar.tsx
│  │  │  │  ├── navigation-menu.tsx
│  │  │  │  ├── pagination.tsx
│  │  │  │  ├── popover.tsx
│  │  │  │  ├── progress.tsx
│  │  │  │  ├── radio-group.tsx
│  │  │  │  ├── resizable.tsx
│  │  │  │  ├── scroll-area.tsx
│  │  │  │  ├── select.tsx
│  │  │  │  ├── separator.tsx
│  │  │  │  ├── sheet.tsx
│  │  │  │  ├── sidebar.tsx
│  │  │  │  ├── skeleton.tsx
│  │  │  │  ├── slider.tsx
│  │  │  │  ├── sonner.tsx
│  │  │  │  ├── switch.tsx
│  │  │  │  ├── table.tsx
│  │  │  │  ├── tabs.tsx
│  │  │  │  ├── textarea.tsx
│  │  │  │  ├── toast.tsx
│  │  │  │  ├── toaster.tsx
│  │  │  │  ├── toggle-group.tsx
│  │  │  │  ├── toggle.tsx
│  │  │  │  ├── tooltip.tsx
│  │  │  │  └── use-toast.ts
│  │  │  ├── ChatInput.tsx
│  │  │  ├── ChatSidebar.tsx
│  │  │  ├── Footer.tsx
│  │  │  ├── HelpInfo.tsx
│  │  │  ├── ProfileImport.tsx
│  │  │  ├── QuickActions.tsx
│  │  │  ├── ResponseViewer.tsx
│  │  │  ├── SideAnalysis.tsx
│  │  │  ├── ThemeProvider.tsx
│  │  │  ├── ThemeToggle.tsx
│  │  │  ├── ToolIcons.tsx
│  │  │  └── TooltipWrapper.tsx
│  │  ├── hooks
│  │  │  ├── use-mobile.tsx
│  │  │  └── use-toast.ts
│  │  ├── lib
│  │  │  └── utils.ts
│  │  ├── pages
│  │  │  └── Index.tsx
│  │  ├── utils
│  │  │  └── googleApi.ts
│  │  ├── App.css
│  │  ├── App.tsx
│  │  ├── index.css
│  │  ├── index.ts
│  │  ├── main.tsx
│  │  └── vite-env.d.ts
│  ├── bun.lockb
│  ├── components.json
│  ├── eslint.config.js
│  ├── index.html
│  ├── package.json
│  ├── postcss.config.js
│  ├── README.md
│  ├── tailwind.config.ts
│  ├── tsconfig.app.json
│  ├── tsconfig.json
│  ├── tsconfig.node.json
│  └── vite.config.ts

```

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

Let me know if you need further adjustments or additions! 😊
