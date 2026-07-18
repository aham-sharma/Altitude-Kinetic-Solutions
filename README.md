# AK Solutions — Website Prototype

A React (Vite) marketing site for **Altitude Kinetic Solutions**, with three routed pages
(Home, About, Contact) sharing a common layout, plus a working Contact form.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL that prints in the terminal (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
npm run preview
```

## Pages / routing

- `/` — Home
- `/about` — About
- `/contact` — Contact form
- Anything else — a small 404 page

Routing is done with `react-router-dom`, nested under a shared `Layout` (`src/App.jsx`,
`src/components/Layout.jsx`) so the navbar and footer persist across pages.

## Making the Contact form actually send you an email

A static React site can't send email on its own — there's no server. This project uses
**EmailJS** (free tier, no backend needed) to deliver form submissions straight to
**Altitude.kinetic.Solutions@gmail.com**. Setup takes about 5 minutes:

1. Go to https://www.emailjs.com and create a free account.
2. **Add an email service**: Email Services → Add New Service → choose Gmail → connect
   `Altitude.kinetic.Solutions@gmail.com`. Note the **Service ID**.
3. **Create an email template**: Email Templates → Create New Template. Set the "To email"
   field to `Altitude.kinetic.Solutions@gmail.com` (or `{{to_email}}`), and use these
   variables in the template body, matching what the form sends:
   - `{{from_name}}`
   - `{{phone_number}}`
   - `{{from_email}}`
   - `{{purpose}}`

   Example template body:
   ```
   New contact form submission

   Name: {{from_name}}
   Phone: {{phone_number}}
   Email: {{from_email}}
   Purpose: {{purpose}}
   ```
   Note the **Template ID**.
4. **Get your Public Key**: Account → General → Public Key.
5. Copy `.env.example` to `.env` and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev`. Submitting the Contact form will now email you directly.

Until `.env` is filled in, the form still validates input, but shows a message explaining
that email delivery isn't configured yet (instead of failing silently).

## Deploying

This is a static site — it deploys as-is to Vercel, Netlify, GitHub Pages, or Cloudflare
Pages. Just remember to set the same three `VITE_EMAILJS_*` environment variables in your
hosting provider's dashboard (not just your local `.env`), since Vite bakes them in at
build time.

## Project structure

```
src/
  assets/aks-logo.png       — your logo
  components/
    Layout.jsx              — shared navbar + footer wrapper
    Navbar.jsx
    Footer.jsx
    AscentLine.jsx          — the animated ascent-line signature graphic
    ContourDivider.jsx      — the topographic section divider
  pages/
    Home.jsx
    About.jsx
    Contact.jsx             — the form, wired to EmailJS
    NotFound.jsx
  App.jsx                   — route definitions
  main.jsx                  — entry point + router
  index.css                 — design tokens, fonts, animations
```

## Design notes

Palette and type are pulled directly from the logo: deep navy background, an electric-blue
gradient accent (matching the peak in the mark), Space Grotesk for display type (its sharp
angles echo the logo's mountain forms), Inter for body copy, and JetBrains Mono for small
uppercase labels (a "technical readout" feel to match "Kinetic"). The recurring visual motif
is the **ascent line** — a jagged path that reads as both a mountain traverse and a rising
momentum/stock line — used in the hero and as a scroll-in accent elsewhere.

All copy is placeholder content for this prototype and should be swapped for real service
descriptions, pricing, and case studies before going live.
