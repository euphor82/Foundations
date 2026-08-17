# Foundations

A multi-category **Christian resource platform** — a growing library of study
material in one installable app. Built as a static **Progressive Web App**
(React + TypeScript + Vite): installable, works fully offline, hosts free.

## Sections (v1)

- **📖 Book by Book** — summaries of the books of the Bible: purpose, key people,
  key verse, and how each points to Christ, with reading-progress tracking.
  *(Sample: Genesis, John, Romans — structure supports all 66.)*
- **🕰️ Timeline** — the biblical story by era on a timeline rail. Disputed dates are
  shown as ranges and flagged rather than asserted.
- **🌐 Religions** — a **comparison table** plus fair, on-their-own-terms summaries of
  major world religions, each contrasted with Christianity with a "common ground" note.
  *(Sample: Judaism, Islam, Buddhism.)*
- **⛪ Denominations** — a **comparison table** and family-grouped detail on Christian
  traditions, with what they share and where they differ.
  *(Sample: Roman Catholic, Baptist, Pentecostal.)*
- **📚 Glossary** — searchable, cross-linked plain-language definitions.
  *(Sample: ~8 core terms.)*

Sections **cross-link**: a book links to its era on the Timeline; timeline events link
back to their books; religion, denomination, and glossary entries link to related
glossary terms.

> **Note:** This is a framework + sample-content release. The architecture and all five
> sections are complete; the written content is a curated sample so format and tone can
> be reviewed before scaling to the full set.

## Architecture

**Category-registry pattern.** Every category is a self-contained module under
`src/categories/<id>/` (its `types.ts`, `data.ts`, and view components). A single
registry — `src/categories/registry.tsx` — drives both the home hub and the router.

**Adding a new category** = create `src/categories/<id>/` with a `data.ts` and a view,
then add one entry to `CATEGORIES` in `registry.tsx`. Nothing else changes — that's the
whole point of the design.

```
src/
  main.tsx, App.tsx            app shell + HashRouter
  theme/global.css             design tokens (paper · ink · gold), light + dark
  lib/                         store (localStorage), theme, search helpers
  components/                  shared UI: Header, Hub, SearchBar, Collapsible, CompareTable
  categories/
    registry.tsx               ← single source of truth for hub + routes
    books/  timeline/  religions/  denominations/  glossary/
public/icons/                  app icons (svg + png)
.github/workflows/pages.yml    build + deploy to GitHub Pages on push to main
```

Content lives in each category's typed `data.ts` — categories legitimately differ in
shape, so each owns its own schema (`types.ts`). No code changes are needed to add
content; edit the `data.ts`.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173/foundations/
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build
```

## Deploy (free, automatic)

Pushing to `main` triggers `.github/workflows/pages.yml`, which builds and deploys to
**GitHub Pages**. Enable it once: **Settings → Pages → Build and deployment → Source:
GitHub Actions**. The app then serves at `https://euphor82.github.io/foundations/`.

The Pages base path is set in `vite.config.ts` (`base: '/foundations/'`); change it if the
repo is renamed.

## Design

A warm "paper · ink · gold" theme with a serif/sans pairing, light and dark modes, and a
mobile-first layout. Every color is a CSS token in `src/theme/global.css`, so the whole
look can be retuned in one place.
