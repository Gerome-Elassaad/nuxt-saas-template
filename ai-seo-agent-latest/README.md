<p align="center">
  <img src="https://github.com/user-attachments/assets/f91e7b23-7d31-4474-9687-690bfea576c5" alt="SEO-AGENT" />
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

## Project Links:

- **Repo-Booster Website**: [https://repo-booster.com](https://repo-booster.com)  
- **ChatBot UI**: [https://ai-seo-agent.vercel.app](https://ai-seo-agent.vercel.app)  
- **SEO Platform**: [https://app.repo-booster.com](https://app.repo-booster.com)  
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
   git clone https://github.com/Gerome-Elassaad/ai-seo-agent-latest.git
   ```
2. Navigate into the project directory:
   ```bash
   cd repo-booster
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## ⚙️ Configuration

### Sitemap
The dynamic sitemap is generated using the `sitemap` package and includes all routes from the project.

To update the sitemap, modify `routes/sitemap.xml.ts`:
```typescript
import { SitemapStream, streamToPromise } from 'sitemap';
```

### SEO Middleware
SEO metadata is managed in `plugins/seo.ts` with route-based meta tags.

To add or update metadata:
```typescript
{
  '/new-route': {
    title: 'New Route Title',
    description: 'Description for the new route.'
  }
}
```

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 📧 Contact

For support, feedback, or inquiries, please reach out to us:
- Email: support@repo-booster.com
- Website: [Repo-Booster](https://app.repo-booster.com)

---

Let me know if you need further adjustments or additions! 😊
