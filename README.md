# SK Apps — website

A luxury, professional company site for **SK Apps**, an independent app studio.
Built with Next.js (App Router), TypeScript, and Framer Motion.

Pages: **Home · About · Work (Portfolio) · Contact**

---

## Design direction

- **Obsidian & Aurora** — near-black surfaces, frosted glass, and a restrained
  iridescent (blue → lilac → mint) accent used only on signature moments.
- **Type** — Instrument Serif (display) paired with Geist (UI).
- **Signature 3D element** — a cluster of floating glass "app cards" in real
  CSS 3D perspective that parallax-tilts to the cursor (`src/components/HeroScene.tsx`).
- Respects `prefers-reduced-motion`, keyboard focus is visible, fully responsive.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

Requires Node.js 18.18+ (20+ recommended).

---

## Make it yours

- **All copy, projects, team, stats, FAQs** live in `src/data/site.ts` —
  edit there, no component changes needed.
- **Colours & type** are CSS variables at the top of `src/app/globals.css`
  (`--obsidian`, `--a1/--a2/--a3` aurora stops, `--cta`, radii, etc.).
- **Project images** — the cards currently use gradient placeholders. Drop real
  screenshots into `work-visual` in `src/app/page.tsx` and
  `src/components/WorkGrid.tsx`.
- **Contact form** — `src/components/ContactForm.tsx` is a demo. Wire the button
  to Formspree, Resend, or your own API route to send real email.

---

## Want heavier 3D later?

The hero is deliberately lightweight CSS/Framer Motion so it stays fast. To go
further, drop a **Spline** scene or **React Three Fiber** canvas into
`HeroScene.tsx` — lazy-load it so 3D assets only load after the core page, and
keep a static fallback for reduced-motion users.

---

## Structure

```
src/
  app/
    layout.tsx          # Geist font, navbar + footer, metadata
    globals.css         # design system (tokens + all styles)
    page.tsx            # Home
    about/page.tsx
    portfolio/page.tsx
    contact/page.tsx
  components/
    Navbar.tsx  Footer.tsx
    HeroScene.tsx       # 3D glass-card signature
    Reveal.tsx          # scroll-reveal wrapper
    WorkGrid.tsx        # filterable portfolio grid
    ContactForm.tsx  Accordion.tsx
  data/
    site.ts             # ← edit your content here
```
