# Touseef Altaf — Amazon VA Portfolio (Static Site)

## What changed from the original file
- The original `index.php` mixed HTML, CSS, JS and an unused PHP/MySQL backend
  in one file. There was no actual `<form>` on the page (only a WhatsApp
  button), so the MySQL "save inquiry" backend was dead code — it has been
  removed. The site is now a clean, fast **static** site.
- Files are now separated:
  - `index.html` — markup + SEO meta tags
  - `css/style.css` — all styles
  - `js/script.js` — all interactivity (scroll reveal, navbar shadow, photo tilt, footer year)
  - `touseef.jpg` — your photo
- Added SEO: meta description/keywords, canonical tag, Open Graph + Twitter
  card tags, JSON-LD structured data, `robots.txt`, `sitemap.xml`.
- Added security: `vercel.json` sets CSP, HSTS, X-Frame-Options,
  X-Content-Type-Options, Referrer-Policy and Permissions-Policy headers, plus
  long-term caching for static assets.

## Before you deploy
Replace `https://your-domain.vercel.app/` with your real domain in these 4 spots:
1. `index.html` → `<link rel="canonical">`, `og:url`, `og:image`, `twitter:image`, JSON-LD `url`/`image`
2. `robots.txt` → Sitemap line
3. `sitemap.xml` → `<loc>`

(Vercel gives you the final `.vercel.app` URL after your first deploy — update
these afterward, or as soon as you know your custom domain.)

## Deploy to Vercel
**Option A — Vercel CLI**
```bash
npm i -g vercel
cd amazon-va
vercel
```
Follow the prompts (link/create project, keep default settings — no build
step is needed, it's static HTML).

**Option B — GitHub**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → "Add New Project" → import the repo.
3. Framework preset: "Other" (or leave as detected). No build command needed.
4. Deploy.

## Want the contact/WhatsApp flow to also collect leads?
Since there's no backend on Vercel by default, if you later want a real
contact form (not just WhatsApp), the simplest options are:
- A free form service like Formspree or Web3Forms (just point the form's
  `action` at their endpoint — no server code needed).
- A Vercel Serverless Function (`/api/contact.js`) that emails you via a
  provider like Resend.

Happy to build either one if you want a lead-capture form added later.
