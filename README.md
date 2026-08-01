# Adeoluwa Adekoya — Portfolio

The source for [ade-adekoya-portfolio.vercel.app](https://ade-adekoya-portfolio.vercel.app), a responsive portfolio presenting my shipped products, machine-learning work, technical experience, and contact information.

## Highlights

- Product-focused introduction and technical profile
- Featured work across iOS, full stack AI, and machine learning
- Direct App Store, live-demo, source-code, resume, LinkedIn, and email links
- Project image previews with an accessible modal viewer
- Responsive layouts and reduced-motion support
- Production deployment on Vercel

## Featured projects

- [SchedAI](https://github.com/adeoluwa-4/SchedAI), available on the [App Store](https://apps.apple.com/us/app/schedai/id6777319679)
- [World Cup 2026 Predictor](https://github.com/adeoluwa-4/wc26-predictor), available as a [live dashboard](https://adeoluwa-4-wc26-predictor-streamlit-app-awcr9s.streamlit.app)
- [VoicePreserve](https://github.com/adeoluwa-4/VoicePreserve)
- [Airline Passenger Satisfaction](https://github.com/adeoluwa-4/airline-passenger-satisfaction)

## Technology

- React 18
- Vite 5
- Tailwind CSS
- PostCSS and Autoprefixer
- Vercel

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

Preview the generated build with:

```bash
npm run preview
```

## Project structure

```text
src/                    application entry point and styling
public/                 project images, logos, icons, and resume assets
portfolio_website.jsx   portfolio content and component structure
index.html              Vite document entry point
```

## Design decisions

The site keeps the content in a single project-oriented experience so recruiters can move quickly from skills to evidence. Links use destination-specific wording—such as “View in App Store” and “Live Demo”—and interactive image previews include keyboard and reduced-motion considerations.

## Deployment

The production site is deployed on Vercel at [ade-adekoya-portfolio.vercel.app](https://ade-adekoya-portfolio.vercel.app). The repository contains the source of truth; production claims should be verified against the live URL after each release.
