# Product Requirements Document
## Ayush Yadav — Personal Portfolio Website

**Version:** 1.0
**Date:** August 24, 2026
**Author:** Ayush (with Claude)
**Status:** Draft for review

---

## 1. Overview

A personal portfolio website for Ayush Yadav, a 3rd-year B.Tech Data Science student, to showcase his technical skills, self-driven and client projects, and provide an easy way for recruiters, collaborators, and freelance clients to learn about him and get in touch.

**Reference design:** Dark-theme developer portfolio (see attached screenshots) — clean navbar with logo/name, animated typewriter hero headline, rotating profile photo, feature-card "About" section, icon-grid "Skills" section, tabbed "Projects" section (Personal / Client), and a two-column "Contact" section with info card + form.

## 2. Purpose & Goals

- **Primary purpose:** Both job/internship applications AND freelance client acquisition — general professional presence.
- **Goals:**
  - Give recruiters a fast, credible snapshot of Ayush's skills and projects.
  - Give potential freelance clients proof of delivered work (Rasmalai, BirthdayGift).
  - Make resume/CV instantly downloadable — no friction.
  - Reflect Ayush's actual GitHub activity, not just static text.

## 3. Target Audience

| Audience | What they need to see fast |
|---|---|
| Recruiters / hiring managers | Skills, projects, resume download, GitHub/LinkedIn |
| Freelance clients | Client project proof (Rasmalai, BirthdayGift), contact form |
| Peers / GitHub visitors | Self-projects (Fake News Predictor, ChopAI), tech stack |

## 4. Tech Stack (Recommendation)

Since Ayush is comfortable with MERN and wants GitHub API auto-fetching for projects, a React-based stack is the best fit — avoids page reloads for the tab-switching Projects section and animated hero text, and keeps his skillset consistent.

| Layer | Recommendation | Why |
|---|---|---|
| Frontend framework | **React (Vite)** or **Next.js** | Next.js if SEO/fast-loading matters for recruiters finding him via Google; Vite+React if it's mainly a linked-from-resume/LinkedIn site |
| Styling | Tailwind CSS | Fast to build the card-grid layouts seen in the reference; easy dark theme |
| Animations | Framer Motion (page/section transitions) + a small typewriter library or custom hook (hero text), CSS transitions (image crossfade) | Matches the effects in the reference screenshots |
| Data fetching | GitHub REST API (`/users/ayushydv071/repos`) via `fetch`, client-side or at build time | For auto-pulling repo stats/links |
| Contact form | Formspree / EmailJS (no backend needed) | Free-tier friendly, no server to maintain |
| Hosting | **Vercel** | Confirmed choice; native Next.js support, free tier, auto-deploy from GitHub |
| Resume file | Static PDF in `/public`, linked via download button | Simple, no backend needed |

**Open decision:** Vite+React (simpler, static) vs. Next.js (SEO-friendlier, slightly more setup). Recommend **Vite + React** for v1 since it's a personal portfolio, not content-heavy — can migrate to Next.js later if SEO becomes a priority. *(Flag this for Ayush to confirm.)*

## 5. Site Structure (Sections)

Single-page scroll app with anchor navigation (matches reference): **Home → About → Skills → Projects → Contact**

### 5.1 Navbar
- Logo/name (left)
- Center nav links: Home, About, Skills, Projects, Contact
- Right: **"Download Resume"** button (replaces "Download CV" from reference — per Ayush's request) with download icon, links to static PDF
- *(Optional, from reference but not confirmed needed: language flag icon — recommend dropping unless Ayush wants multilingual)*

### 5.2 Hero (Home)
- Large heading: **"I am a [Animated Text] Developer."**
- Animated word cycles with typewriter-style type + erase effect through:
  1. `Frontend`
  2. `Backend`
  3. `API` *(and optionally `Full Stack` / `ML` — Ayush to confirm if more words wanted)*
- Bold/colorful accent styling on the animated word (per reference: bright color + underscore cursor)
- Short intro paragraph (1–2 lines about who he is)
- Primary CTA button: "Browse Projects" (scrolls to Projects section)
- Social icons row: GitHub, LinkedIn, Gmail, (Instagram/other — Ayush to confirm which)
- **Rotating profile picture:** circular image frame, auto-crossfades between **2 photos** every **5 seconds** (Ayush will provide both images)

### 5.3 About
- Left: 3–4 feature cards (icon + title + 1-line description), matching reference's "Back-End / Front-End / API Integration / Mobile-Web" pattern — to be re-labeled around Ayush's actual strengths, e.g.:
  - **DSA & Problem Solving** (C++, competitive programming)
  - **Full-Stack Development** (MERN)
  - **Machine Learning** (model building, TF-IDF, classifiers)
  - **Automation** (n8n workflows)
- Right: "Hi there! I'm Ayush Yadav" heading + bio paragraph(s) — background, what he's currently focused on, what he's building toward.

### 5.4 Skills
Icon grid (matches reference layout), grouped or flat — Ayush to confirm grouped vs. flat. Confirmed skills to include:
- **MERN Stack:** MongoDB, Express.js, React, Node.js
- **C++** (DSA/competitive programming)
- **Machine Learning** (Python, scikit-learn/TensorFlow as applicable)
- Plus (from memory context, confirm inclusion): Git/GitHub, Python, n8n

*(Note: reference shows individual icons per exact tool — e.g., separate MongoDB/Express/React/Node icons rather than one "MERN" tile. Recommend breaking MERN into 4 individual icons for visual consistency with the reference grid.)*

### 5.5 Projects
Tabbed toggle: **Personal Projects** | **Client Projects** (matches reference exactly)

**Personal Projects tab:**
| Project | Details needed from Ayush |
|---|---|
| Fake News Predictor | Tech tags (Python, Flask, TF-IDF, ML classifiers), 2–3 line description, GitHub link, live demo link (if any), screenshot/preview image |
| ChopAI | Tech tags (n8n, Cloudinary, AI), 2–3 line description, GitHub link, live demo link (if any), screenshot/preview image |

**Client Projects tab:**
| Project | Details needed from Ayush |
|---|---|
| Rasmalai | What kind of project (site type), tech tags, 2–3 line description, live link (if shareable), screenshot |
| BirthdayGift | Tech tags, 2–3 line description, live link (if shareable), screenshot |

Each project card (per reference): screenshot/mockup on left, title + category label, tech-stack pill tags, hover/overlay description box, GitHub icon + external-link icon at bottom.

**Data source:** GitHub API auto-fetch confirmed as the approach — recommend a **hybrid model**:
- For projects with public repos (Fake News Predictor, ChopAI), auto-pull repo description, stars, primary language, and last-updated date from GitHub API to keep info fresh.
- For client projects without public repos (Rasmalai, BirthdayGift), use manually-entered data (since these are freelance work, may not be open-source).
- All four render through the same card component regardless of data source.

### 5.6 Contact
- Left card: "Contact Me" — location, email, phone (optional), social icons
- Right: "Get in touch" form — Name, Email, Message fields + Send button
- Form submission via Formspree/EmailJS (no backend required)

## 6. Non-Functional Requirements

- **Responsive:** Must work cleanly on mobile (single-column stacking), tablet, and desktop.
- **Performance:** Lighthouse score 90+ target; lazy-load project images.
- **Dark theme:** Matches reference — dark gray/black background, bright accent color(s) for highlights (reference uses green + pink; Ayush to confirm his preferred accent colors).
- **Accessibility:** Alt text on all images, sufficient color contrast, keyboard-navigable nav.
- **SEO basics:** Meta title/description, Open Graph tags (so link previews look good when shared on LinkedIn/WhatsApp).

## 7. Assets Needed From Ayush

- [ ] 2 profile photos for the rotating hero image
- [ ] Resume PDF file
- [ ] Screenshots/preview images for all 4 projects
- [ ] Live links (if any) for all 4 projects
- [ ] GitHub repo links for Fake News Predictor and ChopAI
- [ ] Final accent color choice (or confirm reference's green/pink)
- [ ] Confirm which social icons to include (GitHub, LinkedIn confirmed — Instagram/Skype/etc. from reference optional)
- [ ] Short bio paragraph text for About section
- [ ] Location/contact details for Contact section

## 8. Out of Scope (v1)

- Blog section (not selected)
- Multi-language support (flag icon in reference — not confirmed needed)
- CMS/admin panel for editing content without code
- Backend database — v1 is static/frontend-only with a form service

## 9. Milestones

| Phase | Deliverable |
|---|---|
| 1 | Finalize content (bios, project write-ups, images, resume PDF) |
| 2 | Build static layout — Navbar, Hero, About, Skills (no animation yet) |
| 3 | Add animations — typewriter hero text, image crossfade, scroll transitions |
| 4 | Build Projects section with GitHub API integration + tabs |
| 5 | Build Contact form + wire up form service |
| 6 | Responsive pass + performance/SEO polish |
| 7 | Deploy to Vercel, connect custom domain (if any) |

## 10. Open Questions for Ayush

1. Vite+React or Next.js — confirm final call?
2. Exact accent color palette — keep green/pink from reference or pick new?
3. Words to cycle in hero animation — just Frontend/Backend/API, or add more (Full Stack, ML)?
4. Domain name — using a free Vercel subdomain or buying a custom domain?
5. Client projects (Rasmalai, BirthdayGift) — okay to publicly link live URLs, or need client permission first?