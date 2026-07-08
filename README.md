# Portfolio

A React + Vite + Tailwind CSS portfolio for an AI-augmented fullstack developer.
Design system: "blueprint schematic" — light/dark grid background, navy ink,
copper + teal accents, corner-bracket framing as the recurring signature device.

## Setup

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Replacing placeholder content

All copy lives in `src/data/` — edit these files, no need to touch components:

- `data/experience.js` — work history
- `data/skills.js` — stack, grouped by layer
- `data/projects.js` — project cards
- `data/education.js` — degrees
- `data/certifications.js` — certs
- `data/nav.js` — nav links + social/contact links

Also update the name/headline directly in `Navbar.jsx` and `Hero.jsx`.

## Assets

Drop your real files into `public/`, replacing the empty placeholders:

- `public/profile.jpg` — shown in the About section
- `public/resume.pdf` — linked from the About spec sheet ("Download PDF")
- `public/favicon.ico` — browser tab icon

## Dark mode

`ThemeToggle.jsx` toggles a `dark` class on `<html>` and persists the choice in
`localStorage`. Color tokens for both themes live in `src/index.css` as CSS
custom properties, mapped into Tailwind via `tailwind.config.js`.
