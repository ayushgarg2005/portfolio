# Ayush Garg — Full Stack & Backend Engineer Portfolio 🚀

<div align="center">

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop)

[![Live Preview](https://img.shields.io/badge/Live_Preview-Portfolio-3B82F6?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/ayushgarg2005)
[![LeetCode Profile](https://img.shields.io/badge/LeetCode-1000+_Solved-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/ayushgarg0729)
[![GitHub](https://img.shields.io/badge/GitHub-ayushgarg2005-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayushgarg2005)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayush_Garg-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayushgarg2005)

A state-of-the-art, responsive web engineering portfolio crafted with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lenis Smooth Scrolling**. Architected to showcase production-grade backend engineering, distributed systems, real-time web applications, and algorithmic mastery.

</div>

---

## ✨ Engineering Highlights & Features

- **⚡ Modern Responsive UI/UX**: Built from the ground up for seamless responsiveness across mobile phones, tablets, and wide desktop displays. Features a premium glassmorphic design system with custom HSL dark/light themes.
- **🌐 Interactive Neural Canvas Background**: Dynamic HTML5 `<canvas>` rendering interactive network nodes and ambient multi-tone gradient floaters that react to mouse movements.
- **🌀 Inertial Smooth Scrolling**: Powered by **Lenis** for ultra-smooth vertical scrolling, inertia damping, and polished section transitions.
- **📊 Live GitHub API Integration**: Dynamically fetches real-time repository metrics, follower counts, commit activity grids, and programming language distributions directly via the GitHub API.
- **🏆 Verified Algorithmic Rigor**: Dedicated sections highlighting **1000+ solved LeetCode DSA problems**, JEE Mains 98.93 percentile rank, and academic excellence.
- **🎨 Framer Motion Micro-Interactions**: Fluid layout animations, layout tab transitions, interactive bento grids, and hover shimmer effects.

---

## 🛠️ Tech Stack & Technical Arsenal

### **Languages & Core CS**
`C++ (STL)` • `Python` • `JavaScript (ES6+)` • `SQL` • `Data Structures & Algorithms` • `Systems Programming`

### **Frontend Engineering**
`React.js 19` • `Vite` • `Tailwind CSS v4` • `Redux Toolkit` • `Framer Motion` • `Lenis` • `GSAP`

### **Backend & Distributed Systems**
`Node.js` • `Express.js` • `RESTful APIs` • `Socket.io (WebSockets)` • `Apache Kafka` • `Microservices Architecture` • `JWT & RBAC`

### **Databases & Sub-Millisecond Caching**
`PostgreSQL` • `MongoDB` • `Redis Pub/Sub & Caching` • `Prisma ORM` • `Firebase`

### **DevOps, Cloud & AI Integration**
`Docker` • `Git / GitHub Actions` • `Cloudinary` • `LangChain` • `Google Gemini API`

---

## 🚀 Featured Production Projects

### 1. **Real-Time Chat Application (Distributed Social Networking Platform)**
- **Architecture**: Sub-100ms real-time messaging pipeline built with Node.js, WebSockets (`ws`), and cross-server horizontal scaling via **Redis Pub/Sub**.
- **Resilience**: Integrated **Apache Kafka** asynchronous ingestion pipelines to decouple database writes from PostgreSQL during traffic spikes.
- **AI Integration**: Embedded a persistent **Gemini 2.0 Flash AI Chatbot** via LangChain utilizing Redis-backed conversational memory buffers.

### 2. **Vingo Food Delivery Platform**
- **Architecture**: Multi-tenant marketplace supporting custom dashboards for customers, restaurant owners, and delivery partners.
- **Features**: Live interactive map tracking with **Leaflet.js**, automated media delivery pipelines with **Cloudinary & Multer**, global cart management via **Redux Toolkit**, and live order updates via **Socket.io**.

### 3. **Course-Selling E-Commerce Platform**
- **Security & Scale**: Video course storefront secured with strict Role-Based Access Control (RBAC), custom JWT middleware, **Zod** schema validation, and API rate limiting against brute-force attacks.

---

## 📁 Repository Structure

```text
portfolio/
├── public/                 # Static assets & favicons
├── src/
│   ├── animations/         # Custom animation utilities & helpers
│   ├── assets/             # Images, profile portraits, and icons
│   ├── components/         # Core responsive UI components
│   │   ├── Navbar.jsx      # Glassmorphic responsive header & mobile menu
│   │   ├── Hero.jsx        # Landing hero with animated typing effect
│   │   ├── About.jsx       # Engineering pillars & career goals
│   │   ├── Skills.jsx      # Bento box technical stack grid
│   │   ├── Projects.jsx    # Production showcase cards
│   │   ├── Achievements.jsx# Academic & competitive records
│   │   ├── GithubSection.jsx# Live GitHub API metrics & contribution grid
│   │   ├── Contact.jsx     # Recruiter CTA & interactive email form
│   │   ├── Footer.jsx      # Minimalist footer & back-to-top control
│   │   ├── Background.jsx  # HTML5 Canvas neural particles & mesh
│   │   └── Loader.jsx      # Animated entry splash screen
│   ├── data/               # Centralized data stores
│   │   ├── portfolioData.js# Personal info, education, stats & skills
│   │   └── projectsData.js # Detailed production project specifications
│   ├── hooks/              # Custom React hooks (useTheme, useGithub)
│   ├── pages/              # Page containers (Home.jsx)
│   ├── App.jsx             # Main single-page application orchestrator
│   ├── index.css           # Vanilla CSS tokens & Tailwind v4 imports
│   └── main.jsx            # React root mount
├── package.json            # Dependencies & scripts
└── vite.config.js          # Vite build configuration
```

---

## 💻 Getting Started (Local Development)

### **Prerequisites**
- **Node.js**: v18.0.0 or higher
- **npm** or **pnpm** or **yarn**

### **Installation Steps**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ayushgarg2005/portfolio.git
   cd portfolio
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Launch the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173` to explore the portfolio locally.

### **Building for Production**
To generate an optimized production build:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📱 Responsive & Mobile Design Specifications

This website strictly adheres to mobile-first responsive web design principles across all viewport sizes:
- **Mobile (`< 640px`)**: Single-column vertical stacks, touch-optimized spacing, streamlined typography scaling, and smooth slide-down navigation drawer.
- **Tablet (`640px — 1024px`)**: Balanced 2-column bento grids, full-width span accents for odd items, adjusted horizontal padding, and optimized navbar interactions.
- **Desktop (`> 1024px`)**: Multi-column architectural grids, glassmorphic hover animations, shimmer glows, and interactive canvas particle connections.

---

## 📬 Contact & Connect

Looking for a passionate backend engineer, full-stack developer, or technical intern? Feel free to reach out directly:

- **Email**: [asdgarg0729@gmail.com](mailto:asdgarg0729@gmail.com)
- **Phone**: +91-9306674283
- **Location**: New Delhi, India
- **LinkedIn**: [linkedin.com/in/ayushgarg2005](https://www.linkedin.com/in/ayushgarg2005)
- **GitHub**: [github.com/ayushgarg2005](https://github.com/ayushgarg2005)
- **LeetCode**: [leetcode.com/u/ayushgarg0729](https://leetcode.com/u/ayushgarg0729)

---

<div align="center">
  <p font-family="monospace">Engineered with ❤️ & ☕ by <b>Ayush Garg</b></p>
</div>
