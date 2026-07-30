# Kizuna — Backlog

Follow-up work for the Kizuna site (client-only static SPA, deployed to
GitHub Pages at https://kizuna.postiusgroup.com via `.github/workflows/static.yml`).

Status legend: **P1** = do soon · **P2** = nice to have · **P3** = optional polish.
Items are self-contained so a fresh session can pick any one up.

---

## P1 — Tech debt

### 1. Upgrade Vite 5 → 6 to clear remaining npm advisories
- **Why:** `npm audit` reports 3 advisories (2 moderate, 1 high), all in the
  dev-only Vite/esbuild toolchain. They can't be fixed without a major bump.
- **Scope:** bump `vite` and `@vitejs/plugin-react` to their latest majors,
  run `npm install`, then verify `npm run check`, `npm run build`, and a local
  `npm run preview`. Watch for config/plugin breaking changes.
- **Risk:** breaking — this is why it was deferred from the deploy PR. Test the
  built site before merging.
- **Done when:** `npm audit` shows 0 high/moderate advisories and the build +
  preview render correctly.

### 2. SPA deep-link fallback (`404.html`)
- **Why:** GitHub Pages serves static files. The app uses client-side routing
  (wouter). Any path other than `/` (e.g. a future `/about`) will 404 on direct
  visit / refresh. Currently low impact (effectively a one-page site) but a trap
  as routes are added.
- **Scope:** add `client/public/404.html` that redirects to `/` (standard
  SPA-on-Pages shim), or document that routes must stay hash-based.
- **Done when:** a deep link refresh loads the app instead of GitHub's 404.

---

## P2 — Performance & SEO

### 3. Code-split the JS bundle
- **Why:** the site ships as a single ~423 KB JS chunk (~127 KB gzip) for a
  one-page marketing site.
- **Scope:** lazy-load below-the-fold sections (`React.lazy` + `Suspense`),
  and/or `build.rollupOptions.output.manualChunks` to split vendor. Re-check
  bundle output after.
- **Done when:** initial JS payload is meaningfully smaller; Lighthouse
  performance improves.

### 4. Add a social share image (`og:image` / `twitter:image`)
- **Why:** `client/index.html` sets `twitter:card = summary_large_image` and OG
  tags but has **no image** — social/link unfurls will look bare.
- **Scope:** add a branded share image to `client/public/` (e.g.
  `og-image.png`, 1200×630) and reference it via absolute URL
  (`https://kizuna.postiusgroup.com/og-image.png`) in the OG + Twitter tags.
- **Done when:** the URL previews with an image on Slack/X/LinkedIn.

### 5. Lighthouse pass (a11y + perf)
- **Scope:** run Lighthouse against the live site; fix quick wins (alt text,
  color contrast, heading order, image sizing/lazy-loading).

---

## P3 — Content & ops

### 6. Verify real contact details
- **Why:** `client/src/components/contact-section.tsx` uses
  `info@kizuna-realty.com` / `+81-3-1234-5678` — confirm these are the real
  business contacts (the domain is now `postiusgroup.com`), not placeholders.

### 7. (Optional) Web analytics
- Add a privacy-friendly analytics snippet (e.g. Cloudflare Web Analytics,
  which fits the existing Cloudflare setup) if traffic insight is wanted.

---

## Salvaged from `japan-living-gateway-86` (archived 2026-07-30)

`japan-living-gateway-86` was an earlier take on this same Japan-relocation site,
archived in the 2026-07-30 portfolio triage because Kizuna is the more complete
version (see `studio-ops/decisions/2026-07-30-opening-triage.md`).

It was **not** an untouched scaffold — only its README was left as the stock Lovable
template. It had 10 hand-built section components and nine real content commits.
Kizuna already covers all but two of them. These are the two it does not.

### 8. Bilingual JP/EN content — **P2, and the largest item here**
- **Why:** Kizuna has **no language support at all** — every string is hardcoded in
  a single language. This is a site selling Japanese relocation and investment to
  an international audience, and its predecessor already solved this: every section
  component in `japan-living-gateway-86/src/components/` takes a `language: string`
  prop and selects from an inline `content = { en: {...}, ja: {...} }` object
  (see `Services.tsx`, `TeamProfiles.tsx`).
- **Scope:** decide the mechanism first — the prop-drilled `content` object is
  simple and dependency-free but duplicates structure in every component; a small
  context or `i18next` scales better. Then port the existing JA copy from the
  archived repo rather than re-translating, and add a language toggle to
  `navigation.tsx`.
- **Risk:** touches every section component. Do it in one pass, not incrementally,
  or the site ends up half-translated.
- **Done when:** every section renders correctly in both locales and the choice
  persists across navigation.

### 9. Team profiles section — **P3**
- **Why:** Kizuna has `about-section` and `testimonials-section` but no team page.
  Trust matters for a relocation/investment service, and named people with faces
  carry more of it than testimonials do.
- **Scope:** port `japan-living-gateway-86/src/components/TeamProfiles.tsx`
  (142 lines, already bilingual) to this codebase's naming convention
  (`team-section.tsx`) and design system, then wire it into `pages/home.tsx`.
- **Blocked by:** nothing, but it ships with EN-only copy unless item 8 lands
  first — the source component's JA strings are already written, so doing 8 first
  means this is free.
- **Done when:** the section renders on the home page with real people, not
  placeholders.

---

## Done (shipped in PR #3)
- Repaired the broken GitHub Pages deploy (single working workflow, correct
  build/base/output).
- Stripped the Express/Drizzle/Postgres backend and all Replit tooling.
- Consolidated to a single static client + one Vite config.
- Custom domain `kizuna.postiusgroup.com` (CNAME + `base: "/"`), HTTPS enforced.
- Type-check CI gate; npm advisories 24 → 3.

## Done (this PR)
- Added favicon (`client/public/favicon.svg`), `robots.txt`, `sitemap.xml`;
  fixed the broken `/vite.svg` favicon reference.
