# Divyansh Singh — Portfolio

Personal portfolio built from scratch with **React 18 + Vite**. No templates, no UI kits.

## Run it

```bash
npm install
npm run dev      # dev server → http://localhost:5173
```

## Production build

```bash
npm run build    # outputs to dist/
npm run preview  # serves the build locally
```

## Structure

```
src/
  data.js               ← all content lives here (skills, projects, links…)
  index.css             ← design system (Fraunces / Inter / JetBrains Mono)
  hooks/                ← useTyped, useReveal
  components/
    Header.jsx          ← scrollspy nav, theme toggle, mobile menu
    Hero.jsx            ← intro + typing effect
    StackStrip.jsx      ← tech ticker
    About.jsx Skills.jsx Education.jsx Projects.jsx
    Certifications.jsx Contact.jsx   ← EmailJS contact form
    Footer.jsx          ← sitemap, live IST clock, colophon
    Icons.jsx           ← hand-drawn inline SVG icon set
```

Edit `src/data.js` to update content — components pick it up automatically.

Design notes: editorial layout, single warm-gold accent, dark/light themes,
fully responsive down to 360px, reduced-motion friendly.
