<div align="center">

![Portfolio Banner](./public/cover.png)

# 🎨 Mausam Kar - Portfolio Website

### Design Engineer | Full Stack Developer | AI/ML Enthusiast

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-2ea44f?style=for-the-badge)](https://mausam04.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Mausam5055-181717?style=for-the-badge&logo=github)](https://github.com/Mausam5055)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mausam-kar-6388861a7/)

![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=flat-square&logo=sass)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel)

![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)
![Maintained](https://img.shields.io/badge/Maintained-Yes-success?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.3.0-blue?style=flat-square)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Configuration](#-configuration)
- [SEO & Performance](#-seo--performance)
- [Projects Showcase](#-projects-showcase)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

A modern, performant, and SEO-optimized portfolio website showcasing my work as a **Design Engineer** and **Full Stack Developer**. Built with cutting-edge technologies and best practices, this portfolio features:

- 🎯 **16+ Full-Stack Projects** ranging from AI/ML to eCommerce
- ✨ **Smooth Animations** powered by Lenis & GSAP
- 🎨 **Once UI Design System** for consistent, beautiful components
- 📱 **Fully Responsive** across all devices
- 🚀 **Blazing Fast** performance with Next.js 14
- 🔍 **SEO Optimized** with dynamic Open Graph images & structured data

---

## ✨ Features

### 🎨 Design & UX

| Feature               | Description                                              |
| --------------------- | -------------------------------------------------------- |
| **Smooth Scrolling**  | Lenis-powered buttery smooth scroll experience           |
| **Dark Mode**         | Elegant dark theme with consistent design tokens         |
| **Responsive Design** | Mobile-first approach, optimized for all screen sizes    |
| **Masonry Gallery**   | Beautiful project showcase with dynamic layouts          |
| **Interactive UI**    | Hover effects, reveal animations, and micro-interactions |

### 🔧 Technical Features

| Feature                | Description                                               | Technology           |
| ---------------------- | --------------------------------------------------------- | -------------------- |
| **MDX Blog**           | Write blog posts in MDX with full React component support | MDX, Gray Matter     |
| **Dynamic Routing**    | Auto-generated routes for blog posts & projects           | Next.js App Router   |
| **Image Optimization** | Automatic image optimization & lazy loading               | Next.js Image, Sharp |
| **Type Safety**        | Full TypeScript coverage for better DX                    | TypeScript 5+        |
| **Code Highlighting**  | Syntax highlighting for code blocks                       | PrismJS              |

### 📊 SEO & Analytics

| Feature                 | Status | Implementation                  |
| ----------------------- | ------ | ------------------------------- |
| **Open Graph Images**   | ✅     | Dynamic OG image generation     |
| **Schema Markup**       | ✅     | JSON-LD structured data         |
| **Sitemap**             | ✅     | Auto-generated XML sitemap      |
| **Robots.txt**          | ✅     | SEO-friendly crawler directives |
| **Meta Tags**           | ✅     | Dynamic page-specific metadata  |
| **Google Verification** | ✅     | Search Console verified         |

---

## 🛠️ Tech Stack

### Core Technologies

```mermaid
graph LR
    A[Next.js 14] --> B[React 18]
    B --> C[TypeScript]
    C --> D[SCSS Modules]
    A --> E[Once UI]
    A --> F[MDX]
    style A fill:#000,stroke:#fff,color:#fff
    style B fill:#61DAFB,stroke:#000,color:#000
    style C fill:#3178C6,stroke:#fff,color:#fff
    style D fill:#CC6699,stroke:#fff,color:#fff
```

### Dependencies

| Category       | Package                       | Version | Purpose                      |
| -------------- | ----------------------------- | ------- | ---------------------------- |
| **Framework**  | `next`                        | 14.2.16 | React framework with SSR/SSG |
| **UI Library** | `react`                       | 18.3.1  | Component library            |
| **Language**   | `typescript`                  | 5.0+    | Type safety                  |
| **Styling**    | `sass`                        | 1.77.6  | CSS preprocessor             |
| **Animations** | `@studio-freight/react-lenis` | 0.0.47  | Smooth scrolling             |
| **Content**    | `@mdx-js/loader`              | 3.1.0   | MDX processing               |
| **Markdown**   | `gray-matter`                 | 4.0.3   | Frontmatter parsing          |
| **Gallery**    | `react-masonry-css`           | 1.0.16  | Masonry layouts              |
| **Images**     | `sharp`                       | 0.33.4  | Image optimization           |

---

## 🏗️ Architecture

### Application Architecture

```mermaid
flowchart TB
    subgraph Client["Client Layer"]
        A[Browser] --> B[Next.js App Router]
    end

    subgraph Server["Server Components"]
        B --> C[Layout.tsx]
        B --> D[Page Components]
        D --> E[generateMetadata]
    end

    subgraph Content["Content Layer"]
        F[MDX Files] --> G[Gray Matter]
        G --> H[getPosts Util]
        H --> D
    end

    subgraph Resources["Configuration"]
        I[config.js] --> D
        J[content.js] --> D
    end

    subgraph Components["UI Components"]
        K[Once UI] --> D
        L[Custom Components] --> D
    end

    subgraph SEO["SEO Layer"]
        E --> M[Open Graph Images]
        E --> N[JSON-LD Schema]
        O[Sitemap] --> P[robots.txt]
    end

    style Client fill:#e1f5ff
    style Server fill:#fff3e0
    style Content fill:#f3e5f5
    style Resources fill:#e8f5e9
    style Components fill:#fce4ec
    style SEO fill:#fff8e1
```

### Data Flow

```mermaid
sequenceDiagram
    participant User
    participant NextJS
    participant Server
    participant MDX
    participant SEO

    User->>NextJS: Navigate to page
    NextJS->>Server: Server Component render
    Server->>MDX: Fetch content
    MDX-->>Server: Parsed content
    Server->>SEO: Generate metadata
    SEO-->>Server: OG images + Schema
    Server-->>NextJS: HTML + Metadata
    NextJS-->>User: Rendered page
```

---

## 📁 Project Structure

```
Mausam04/
├── 📁 public/                    # Static assets
│   ├── cover.png                 # Preview image
│   ├── favicon.ico
│   ├── 📁 images/                # Project images
│   └── 📁 fonts/                 # Custom fonts
│
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── layout.tsx            # Root layout with metadata
│   │   ├── page.tsx              # Homepage
│   │   │
│   │   ├── 📁 about/             # About page
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 blog/              # Blog section
│   │   │   ├── page.tsx
│   │   │   ├── 📁 posts/         # MDX blog posts
│   │   │   └── 📁 [slug]/        # Dynamic blog routes
│   │   │
│   │   ├── 📁 work/              # Portfolio projects
│   │   │   ├── page.tsx
│   │   │   ├── 📁 projects/      # MDX project pages
│   │   │   └── 📁 [slug]/        # Dynamic project routes
│   │   │
│   │   ├── 📁 projects/          # Projects gallery
│   │   │   └── page.tsx
│   │   │
│   │   ├── 📁 og/                # OG image generation
│   │   │   └── route.tsx
│   │   │
│   │   ├── 📁 resources/         # Configuration
│   │   │   ├── config.js         # Site config
│   │   │   └── content.js        # Content data
│   │   │
│   │   ├── 📁 utils/             # Utility functions
│   │   ├── robots.ts             # robots.txt
│   │   └── sitemap.ts            # sitemap.xml
│   │
│   ├── 📁 components/            # React components
│   │   ├── 📁 blog/
│   │   ├── 📁 work/
│   │   ├── 📁 gallery/
│   │   └── 📁 about/
│   │
│   └── 📁 once-ui/               # Once UI design system
│       ├── 📁 components/
│       ├── 📁 styles/
│       └── 📁 tokens/
│
├── package.json
├── tsconfig.json
├── next.config.mjs
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version |
| ----------- | ------- |
| **Node.js** | 18.17+  |
| **npm**     | 9.0+    |
| **Git**     | Latest  |

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Mausam5055/Mausam04.git
cd Mausam04

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Run development server
npm run dev
```

### Development Workflow

```mermaid
flowchart LR
    A[Clone Repo] --> B[Install Dependencies]
    B --> C[Configure .env]
    C --> D[Customize Content]
    D --> E[Run Dev Server]
    E --> F{Test Locally}
    F -->|Pass| G[Build]
    F -->|Fail| D
    G --> H[Deploy to Vercel]

    style A fill:#e3f2fd
    style H fill:#c8e6c9
    style F fill:#fff9c4
```

---

## ⚙️ Configuration

### 1. Site Configuration (`src/app/resources/config.js`)

```javascript
const baseURL = "mausam04.vercel.app";

const style = {
  theme: "dark", // dark | light
  neutral: "gray", // sand | gray | slate
  brand: "emerald", // color palette
  accent: "orange",
  // ... more options
};
```

### 2. Content Configuration (`src/app/resources/content.js`)

```javascript
const person = {
  firstName: "Mausam",
  lastName: "Kar",
  role: "Design Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata",
  // ...
};
```

### 3. Environment Variables

| Variable               | Description                   | Required |
| ---------------------- | ----------------------------- | -------- |
| `NEXT_PUBLIC_BASE_URL` | Base URL for the site         | ✅       |
| `ROUTE_PASSWORD`       | Password for protected routes | ❌       |

---

## 🔍 SEO & Performance

### SEO Features Implemented

✅ **Open Graph Protocol**

- Dynamic OG image generation for each page
- Proper meta tags for social sharing
- Twitter Card support

✅ **Structured Data (JSON-LD)**

- WebPage schema for homepage
- BlogPosting schema for blog posts
- Person schema for about page
- CollectionPage schema for portfolios

✅ **Technical SEO**

- XML sitemap auto-generation
- robots.txt configuration
- Canonical URLs
- Google Search Console verification

### Performance Metrics

| Metric                       | Score  | Status |
| ---------------------------- | ------ | ------ |
| **Lighthouse Performance**   | 95+    | 🟢     |
| **First Contentful Paint**   | < 1.5s | 🟢     |
| **Largest Contentful Paint** | < 2.5s | 🟢     |
| **Cumulative Layout Shift**  | < 0.1  | 🟢     |
| **Time to Interactive**      | < 3.0s | 🟢     |

### Optimization Techniques

```mermaid
mindmap
  root((Performance))
    Images
      Next/Image
      Sharp optimization
      Lazy loading
      WebP format
    Code
      Tree shaking
      Code splitting
      Minification
      Compression
    Caching
      Static generation
      ISR
      CDN caching
    Loading
      Route prefetch
      Component lazy load
      Dynamic imports
```

---

## 🎨 Projects Showcase

This portfolio features **16+ full-stack projects** across various domains:

### Project Categories

| Category           | Count | Technologies                   |
| ------------------ | ----- | ------------------------------ |
| **AI/ML**          | 3     | Python, TensorFlow, LLMs, RAG  |
| **Full Stack Web** | 6     | MERN, Next.js, MongoDB         |
| **eCommerce**      | 2     | Stripe, Razorpay, Payment APIs |
| **Real-time Apps** | 2     | WebRTC, Socket.io              |
| **Automation**     | 2     | Node.js, APIs, Bots            |
| **UI/UX**          | 5     | React, GSAP, Three.js, Lenis   |

### Featured Projects

<details>
<summary><b>🤖 RAG System (Retrieval Augmented Generation)</b></summary>

- **Tech**: Pinecone, Next.js, OpenAI API
- **Features**: Vector embeddings, Semantic search, LLM chat interface
- **Impact**: Improves AI accuracy by 40%

</details>

<details>
<summary><b>🛡️ Phishing Detection System</b></summary>

- **Tech**: Python, ML Models, Flask
- **Features**: URL risk prediction, Threat visualization
- **Impact**: Protects users from malicious websites

</details>

<details>
<summary><b>🏪 Trendify - Multi-Vendor eCommerce</b></summary>

- **Tech**: Next.js, MongoDB, Stripe, Razorpay
- **Features**: Vendor dashboard, Product management, Payment gateways
- **Impact**: Enterprise-level marketplace solution

</details>

<details>
<summary><b>📞 Connect Flow - Communication Platform</b></summary>

- **Tech**: WebRTC, Socket.io, React, Node.js
- **Features**: Video calls, Group chat, Real-time status
- **Impact**: Demonstrates WebRTC expertise

</details>

[**View All Projects →**](https://mausam04.vercel.app/projects)

---

## 📦 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
# 1. Build the project
npm run build

# 2. Deploy to Vercel
npx vercel
```

### Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deployment Checklist

- [ ] Update `baseURL` in `config.js`
- [ ] Set environment variables
- [ ] Configure domain settings
- [ ] Verify SEO metadata
- [ ] Test all routes
- [ ] Submit sitemap to Google Search Console

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

```mermaid
flowchart LR
    A[Fork Repo] --> B[Create Branch]
    B --> C[Make Changes]
    C --> D[Commit Changes]
    D --> E[Push to Fork]
    E --> F[Create PR]
    F --> G{Review}
    G -->|Approved| H[Merge]
    G -->|Changes Needed| C

    style A fill:#e1f5ff
    style H fill:#c8e6c9
```

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact

**Mausam Kar** - Design Engineer

[![Website](https://img.shields.io/badge/🌐_Website-mausam04.vercel.app-blue?style=flat-square)](https://mausam04.vercel.app)
[![Email](https://img.shields.io/badge/📧_Email-rikikumkar@gmail.com-red?style=flat-square)](mailto:rikikumkar@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-Mausam5055-181717?style=flat-square&logo=github)](https://github.com/Mausam5055)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Mausam_Kar-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/mausam-kar-6388861a7/)

---

## 🙏 Acknowledgments

- **[Once UI](https://once-ui.com)** - Beautiful design system
- **[Next.js](https://nextjs.org)** - Amazing React framework
- **[Vercel](https://vercel.com)** - Seamless deployment platform
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scrolling library

---

<div align="center">

### ⭐ Star this repo if you find it helpful!

Made with ❤️ by [Mausam Kar](https://mausam04.vercel.app)

![Visitor Count](https://visitor-badge.laobi.icu/badge?page_id=Mausam5055.Mausam04)

</div>
