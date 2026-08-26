# Showcase Agent Guide

Showcase is the ngx-prime demo/documentation app: an Angular 22 standalone, zoneless, OnPush,
signals-based SPA under `projects/showcase/`.

## Page prompt contract

The topbar has a "Create page with AI" button (sparkles icon, `src/app/layout/topbar/`). It opens a
dialog that generates a prompt telling an AI agent to clone the current page into a new one. The button
is disabled whenever the active page has not registered itself.

**Every routed page component must configure this dialog.** When you create a new page, or change the
layout of an existing one, you must add or update its `PagePromptConfig`:

- Types and service: `src/app/shared/page-prompt/page-prompt.types.ts`,
  `src/app/shared/page-prompt/page-prompt.service.ts`.
- In the page component: `inject(PagePromptService)`, call `setConfig(PAGE_PROMPT_CONFIG)` in the
  constructor, and `clearConfig(PAGE_PROMPT_CONFIG)` in `ngOnDestroy`.
- `PagePromptConfig` fields:
  - `pageTitle` — human-readable name of the page.
  - `sourcePath` — repo-relative path to the page's folder (e.g.
    `projects/showcase/src/app/pages/dashboards/default`).
  - `routePath` — the route path as registered in `src/app/app.routes.ts`.
  - `description` — one sentence summarizing what the page is for.
  - `elements` — one entry per visually distinct section/block on the page (e.g. a stat-card row, a
    data table, a form, a chart). Each has `id`, `label`, `description` (specific enough that an agent
    could recreate just that block), and `selectedByDefault`.
- When you add, remove, or materially change a section of a page, update its `elements` list to match —
  this list is what the generated prompt offers the user to include/exclude.
- Reference implementation: `src/app/pages/dashboards/default/dashboard.ts`.

A page shipped with the sparkles button disabled (no config registered) is an incomplete page, not an
acceptable end state.
