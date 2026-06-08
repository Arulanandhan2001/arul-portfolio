# Arul K A — AI Engineer Portfolio

A modern, cosmic-themed personal portfolio built with React, TypeScript, Vite, and Tailwind CSS. Features glassmorphism design, particle animations, scroll-reveal effects, and a fully responsive layout.

---

## Live Preview

Run locally at **http://localhost:5173** using the dev server.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Icons | React Icons 5 |
| Linting | ESLint + TypeScript ESLint |

---

## Project Structure

```
arul-portfolio/
├── public/
│   ├── images/          # Profile image (arul.jpeg)
│   └── resume/          # Resume PDF (Arul K A.pdf)
├── src/
│   ├── components/
│   │   ├── Loader.tsx           # Animated loading screen
│   │   ├── MouseGlow.tsx        # Cursor glow effect
│   │   ├── Navbar.tsx           # Sticky navigation bar
│   │   ├── ParticleBackground.tsx  # Cosmic particle canvas
│   │   └── SectionReveal.tsx    # Scroll-triggered reveal wrapper
│   ├── data/
│   │   ├── index.ts             # All portfolio data (projects, skills, etc.)
│   │   └── types.ts             # TypeScript interfaces
│   ├── sections/
│   │   ├── Hero.tsx             # Landing hero section
│   │   ├── About.tsx            # About & journey section
│   │   ├── Experience.tsx       # Work experience timeline
│   │   ├── Projects.tsx         # Project cards grid
│   │   ├── Skills.tsx           # Skills & tech tags
│   │   ├── Certifications.tsx   # Certifications list
│   │   ├── Contact.tsx          # Contact links
│   │   └── Footer.tsx           # Footer
│   ├── styles/
│   │   └── index.css            # Global styles & Tailwind directives
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Animated intro with typing role carousel and CTA buttons |
| **About** | Personal summary and AI journey steps |
| **Experience** | Work timeline at App Innovation Technologies |
| **Projects** | 6 project cards with glassmorphism hover effects |
| **Skills** | Categorised skill badges |
| **Certifications** | IBM Data Science Professional Certificate |
| **Contact** | Email, GitHub, and LinkedIn links |

---

## Projects Featured

1. **Power Connect** — RAG-based intelligent document retrieval platform
2. **RealityWorks AI** — GPU-accelerated offline speech and language model deployment
3. **Debris IQ (DDRP)** — Roadway data ML pipeline with computer vision
4. **Lingwell** — Scenario-based conversational AI platform (FastAPI + Prompt Engineering)
5. **On Assist AI** — Multimodal AI assistant with computer vision and voice
6. **Jetson AI** — Edge AI solutions optimised for NVIDIA Jetson devices

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install & Run (Development)

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Output goes to the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Design System

- **Cosmic theme** — deep space background with nebula and cosmic colour palettes
- **Glassmorphism** — frosted glass cards with border gradients
- **Particle background** — animated canvas particles on the hero section
- **Mouse glow** — cursor-following radial glow effect
- **Scroll reveal** — Framer Motion entrance animations on every section
- **Responsive grid** — 1 → 2 → 3 column layouts across mobile, tablet, and desktop

---

## Author

**Arul K A** — AI Engineer  
[GitHub](https://github.com/Arulanandhan2001) · [LinkedIn](https://www.linkedin.com/in/arulanandhan2001/) · arul_anandhan@yahoo.com
