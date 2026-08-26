# Ngx BOS (Angular 22)

Source workspace for the Ngx BOS CRM / business operating system, plus a small
family of supporting Angular apps that live alongside it in the same workspace.
It contains:

- an **app template** under `src/` — a browser-only SPA built with standalone components, signals-first state, native control flow, and the WAW platform services (`@wawjs/*`). This is the actual product — everything else in this repo exists to support it.
- the **`@wawjs/ngx-bos` package** under `projects/ngx-bos/` — reusable BOS contracts, services, guards, selectors, pages, and routes extracted from the app
- three supporting Angular apps under `projects/`, each its own standalone/OnPush/signals project with its own `ng serve`/`ng build` target (not part of the deployed product, but part of this workspace):
  - **`projects/uikit`** — a full ngx-prime component reference and a live theme configurator ("Design Lab") for tuning the app template's design tokens
  - **`projects/showcase`** — a fuller example site (dashboards, ecommerce, projects, applications, auth, errors) built entirely from ngx-prime components, showing what a real app assembled from the same component set looks like end to end
  - **`projects/translator`** — a small tool for browsing and editing the app template's actual `src/i18n/*.json` translation files

Business apps own routes, roles, schemas, dashboards, integrations, environment values, and workflow copy under `src/`. Reusable behavior lives in `@wawjs/ngx-bos`. See [AGENTS.md](AGENTS.md) and [documentation/](documentation/) for the source/package split.

## Prerequisites

- Node `^22.22.3`, `^24.15.0`, or `>=26.0.0` with npm 8+ (Angular CLI 22 is provided locally via devDependencies)

## Getting Started

```sh
npm install   # install dependencies
npm start     # serve on http://localhost:4200 with proxy.conf.json
```

Environments live in `src/environments/`:

- `environment.ts` for local development (extends `environment.prod.ts`)
- `environment.prod.ts` for production builds (API URL, meta tags, languages, defaults)

## Scripts

- `npm start` — dev server with proxying to the configured API URL (`proxy.conf.json`)
- `npm run build` — production app build to `dist/`
- `npm run build:ngx-bos` — build the `@wawjs/ngx-bos` package with ng-packagr
- `npm run start:uikit` / `npm run build:uikit` — serve/build `projects/uikit`
- `npm run start:showcase` / `npm run build:showcase` — serve/build `projects/showcase`
- `npm run start:translator` / `npm run build:translator` — serve/build `projects/translator`

Each of `uikit`, `showcase`, and `translator` is also directly reachable via the
Angular CLI itself if you'd rather not go through the npm script aliases, e.g.
`ng serve uikit` or `ng build translator`.

## Project Structure (key paths)

- `src/app/app.config.ts` — root providers (zoneless change detection, `ngxBosProvide`, WAW services, TinyMCE, router)
- `src/app/app.routes.ts` — route map for guest, user, and admin areas
- `src/app/app.formcomponents.ts` — project-specific dynamic form components
- `src/app/layouts/` — layout shells for guest/user routes
- `src/app/pages/` — routed pages per role (e.g. `guest/sign`, `user/profile`)
- `src/environments/` — API / meta / language configuration
- `src/i18n/en.json` / `src/i18n/ua.json` — interface translations (served at `/i18n`), read by `@wawjs/ngx-translate`. Each file is an array of strings, one per language, positionally aligned — `en.json[i]` is both the English source text and the lookup key used everywhere in `src/app` (e.g. `translateService.translate('Settings')`), and `ua.json[i]` is its translation. `projects/translator` is the tool for browsing/editing these.
- `projects/ngx-bos/` — the reusable `@wawjs/ngx-bos` package (users/auth, file upload, form adapters, guards, selectors, pages, and routes). See [projects/ngx-bos/README.md](projects/ngx-bos/README.md).
- `projects/uikit/` — ngx-prime component reference (a demo page per component, across Form/Data/Button/Overlay/Navigation/Feedback/Layout/Media/Misc) plus composite "in-context" pages showing several components assembled together. Its `/design-lab` route is a live theme configurator — preset switcher, primary/surface color pickers, primitive border-radius scale, semantic focus-ring/form-field tokens, a representative component-token tree (Button/Card/Table), global config (ripple/inputVariant/darkModeSelector/RTL/zIndex), and a `pt` pass-through example — all wired to the real `@wawjs/css-prime-styled` / `@wawjs/ngx-prime` APIs, with live preview. Its topbar "Download Config" button exports a diff-only JSON of whatever you actually changed there, for handing to a human or an AI to apply in code. See [projects/uikit/ROADMAP.md](projects/uikit/ROADMAP.md) for the full component/feature inventory.
- `projects/showcase/` — a fuller example app (dashboards, users, ecommerce, projects, applications, account, authentication, error pages) built from real ngx-prime components with concrete demo data, showing what a complete app assembled from the component set looks like, not just isolated controls.
- `projects/translator/` — browses `src/i18n/en.json`/`ua.json` in a table (Table + Tag for missing/untranslated indicators, InputText to edit values), and downloads an updated JSON per language for you to drop back over the real file — it has no backend, so it can't write those files directly from the browser. v1 scope only: no new-language support, machine translation, or pluralization tooling.
- `projects/ROADMAP.md` / `projects/uikit/ROADMAP.md` — status and design notes for the three supporting apps above, if you want the "why", not just the "what".

## Development Notes

- Components are standalone and signals-first; favor `computed` / `signal` / `effect`. Angular 22 uses OnPush by default, so do not set `changeDetection` explicitly.
- WAW services power guards, CRUD helpers, store/http access, and meta tags. Update `environment.meta` when changing branding.
- Dynamic form templates must be registered through `src/app/app.formcomponents.ts` so schemas can reference them by name.
- Reusable package APIs are imported from `@wawjs/ngx-bos`, never from package-internal source paths.

## Component Structure

Keep component classes consistent in this order:

1. Injections (via `inject()`)
2. Inputs / outputs / view queries
3. Variables (readonly/public first, then private)
4. Constructor (only when needed)
5. Lifecycle hooks (`ngOnInit`, `ngOnDestroy`, etc.)
6. Functions (public, then private)

Private variables and functions start with an underscore (`_`).

## Contributing

1. Create a feature branch.
2. Keep changes aligned with the standalone + signals pattern.
3. Open a pull request for review.
