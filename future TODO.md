# Future TODO — Poorab Gupta Portfolio

> Personal site: GenAI & Agentic AI Engineer — current stack: LangGraph / LangChain / RAG / FastAPI / Docker / Pinecone / Security.
> Last updated: 2026-08-30 — hero gradient animated, section gradients added, top orb tuned to corner + blurred.

## Priority 1 — Must Have (recruiter-facing gaps)

- [ ] **Experience / Internships timeline**
  - Wayspire — Network Security / VAPT Intern — add dates, 2-3 bullets (assessments, tools: Nmap/Burp/Wireshark, findings, remediation)
  - CDAC Noida — Offline Bootcamp — add dates, focus, hands-on labs
  - Format: vertical timeline with `mono-tag` date + title, same border style as `.about-panel`

- [ ] **Project links per project**
  - Aria — GitHub ↗ + Demo video/screenshots + PyQt overlay GIF
  - YouTube RAG Chatbot — GitHub ↗ + Chrome Web Store / Demo ↗
  - Cyber.AI — GitHub ↗ + Sample report/screenshot
  - Taskflow — GitHub ↗ + Live EC2 URL ↗ (or "Archived demo")
  - If private: show `Private — DM for access` chip instead of dead link

- [ ] **Education section (ATS scannable)**
  - JIIT Noida — BCA 2022–2025 — 8.12 CGPA — add coursework (DBMS, OS, CN, Cryptography, DSA) + 1-line highlight
  - Place between About and Projects or as small strip under About

## Priority 2 — Strong Nice-to-Have

- [ ] **Achievements as metric cards (pull from Leadership paragraph)**
  - Game Development Competition — Winner — year
  - UP State Scholarship — Recipient
  - Zen-Coders — Co-founder, mentored 50+ peers — move from paragraph to 3 cards

- [ ] **Certifications / Labs**
  - Hack The Box — profile link, rank, machines owned
  - PortSwigger Web Security Academy — completed labs (SQLi, XSS, etc.)
  - Any other: NPTEL / Coursera / AWS ? Add with verify link

- [ ] **Contact upgrades**
  - Keep `poorabgupta.work@gmail.com`, add `Copy email` button (1-click)
  - Add `Calendly / Schedule call` if open to calls
  - Optional: minimal contact form (Name, Email, Message → `mailto:`) — no backend required

- [ ] **Availability status**
  - Hero eyebrow already says `OPEN TO GENAI / AGENTIC AI ENGINEER ROLES` — add small `Available from: Month Year` + `Noida / Remote` tag in Contact for clarity

## Priority 3 — Polish (low effort, high impact)

- [ ] **Photo / avatar** — optional 120px circular mono photo in About grid, keeps brutalist type system intact
- [ ] **Project year / status tag** — add `2024` / `2025` / `Shipped` next to each `mono-tag`
- [ ] **Social proof** — link HTB profile, GitHub pinned repos + stars, LinkedIn recommendations count in Contact "Elsewhere"
- [ ] **Resume versioning** — `assets/Poorab_Gupta_CV.pdf` ensure latest, add `Last updated: Mon Year` microcopy under Download Resume
- [ ] **Favicon + OG image** — `PG_` favicon, `og:image` for LinkedIn/Twitter preview (1200×630)
- [ ] **SEO** — add JSON-LD `Person` schema, update `<title>`/description, add `rel=canonical`
- [ ] **Accessibility** — check `aria-label` on mobile toggle, ensure focus states, add `alt` if photo added

## Content & CTA Improvements

- [ ] **One-line value proposition per project** — add `Problem → Solution → Result` sub-line under title before long desc
- [ ] **Tech stack filter** — optional pill filter on Projects/Skills to quickly highlight (GenAI / Backend / Security)
- [ ] **Testimonials — SKIP for now** — not needed at this stage, would dilute current identity; revisit after 2-3 work testimonials

## Design / Tech Debt (already done — keep for reference)

- [x] Hero gradient animation — orbs `heroOrb1 7.2s` / `heroOrb2 7.5s` with `-85px → +78px` yellow sweep, black top expanded to `30%`
- [x] Blur gradients — `blur(22px/20px)` on orbs, `blur(0.5px)` on base, stops pushed to `72-76%`
- [x] Top orange orb reduced `680×560 → 500×420` and moved `26% 30% → 14% 14%` to corner
- [x] Section gradients — About/Projects/Skills/Contact warm washes `0.13-0.24` + hairline + vignette
- [ ] Future: consider subtle parallax on scroll for hero (if performance allows) — keep `prefers-reduced-motion`

## How to add (conventions)

- Keep palette: `--black #0a0503`, `--ember #c8391a`, `--ember-bright #ff6b35`, `--amber #ffb347` — no purple/indigo
- Typography: `Space Grotesk` for headings, `JetBrains Mono` / `Space Mono` for tags
- Use existing components: `.mono-tag`, `.pill`, `.fact-row`, `.about-panel`, `reveal` animation
- Add new section as `<section id="experience">` with same `.section-head` + `.section-index` pattern
