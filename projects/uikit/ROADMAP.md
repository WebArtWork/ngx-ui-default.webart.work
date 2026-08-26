# uikit Roadmap

Goal: turn `uikit` from a small sample gallery (Button, Input, Select, Table, Dialog,
Card) into a full ngx-prime component reference plus a live design-token configurator
that developers can use to tune a project's theme and hand the result to a human or an
AI to apply in code.

## 1. Full component coverage — DONE

All categories (Form, Data, Button, Overlay, Navigation, Feedback, Layout, Media,
Misc) now have a demo page for every ngx-prime component/directive they list below.
Navigation, Feedback, Media, and Misc were added as new sidebar sections during this
pass. `chart.js` was added as an explicit dependency (required transitively by
ngx-prime's chart component, was missing from package.json).

New pages follow the established `*-demo.ts`/`.html` pattern (see `pages/form/checkbox`
or `pages/form/radiobutton` for reference) and are registered in `app.routes.ts` +
`uikit-sidebar.ts`. Full list covered, for reference:

- **Form**: autocomplete, cascadeselect, checkbox, colorpicker, datepicker, editor,
  fieldset, floatlabel, iconfield, inputgroup, inputmask, inputnumber, inputotp,
  inputtext (done), keyfilter, listbox, multiselect, password, radiobutton, rating,
  select (done), selectbutton, slider, textarea, togglebutton, toggleswitch,
  treeselect, fileupload
- **Data**: dataview, orderlist, organizationchart, paginator, picklist, table (done),
  timeline, tree, treetable
- **Button**: button (done), buttongroup, splitbutton, speeddial
- **Overlay**: dialog (done), dynamicdialog, drawer, popover, confirmdialog,
  confirmpopup, contextmenu, tooltip, blockui
- **Navigation**: breadcrumb, menu, menubar, megamenu, panelmenu, steps, stepper, tabs,
  tieredmenu, dock
- **Feedback**: message, toast, progressbar, progressspinner, skeleton, badge, tag,
  metergroup
- **Layout**: accordion, card (done), divider, panel, scrollpanel, splitter, toolbar,
  inplace
- **Media**: avatar, avatargroup, carousel, chart, galleria, image, imagecompare
- **Misc**: chip, knob, terminal, animateonscroll

Each new page follows the existing `*-demo.ts` pattern (basic → sizes → states →
variants → icons, single file per component).

## 1b. Composite "in-context" pages — DONE

All ten composite pages exist, each alongside its category's atomic pages: Form
Layout (`form/form-layout`), File (`form/file-composite`), List
(`data/list-composite`), Tree (`data/tree-composite`), Timeline
(`data/timeline-composite`), Menu in Context (`navigation/menu-in-context`),
Message/Toast Stack (`feedback/message-toast-stack`), Panel
(`layout/panel-composite`), Media Gallery (`media/media-gallery`), Chart Dashboard
(`media/chart-dashboard`).

Atomic per-component pages (above) show a control in isolation. Also add a small set
of composite pages that show several components assembled into a real usage pattern —
mirroring Sakai's own UI Kit section (Form Layout, List, Tree, Panel, Overlay, Media,
Menu, Message, File, Chart, Timeline, Misc): each of those is a single page combining
multiple related components/fields into one realistic block, not an isolated control.
Concretely for uikit:

- **Form Layout**: a full form assembled from several Form-category components
  together (labels, grid layout, validation states) — the thing a template consumer
  actually copies, not just a lone `p-select`.
- **List**: a realistic data-list pattern (e.g. DataView or OrderList) with
  images/actions, not just the bare component defaults.
- **Menu-in-context**: menubar/panelmenu/breadcrumb shown together as real nav, not
  isolated.
- A few more candidates worth one composite page each once the atomic pages exist:
  Tree, Panel, Media (gallery), Message/Toast (stacked notifications), File (upload +
  list), Chart (dashboard-style multi-chart), Timeline, Misc.

These live alongside the atomic pages (same sidebar categories), not instead of them.

## 2. Design Lab — full ngx-prime configuration surface — DONE

Baseline controls exist at `/design-lab` (new top-level sidebar entry), each wired
live: preset switcher (Aura/Lara/Nora) via `usePreset`, primary color swatches
(green/lime/orange/amber/yellow/teal/cyan/blue/indigo/violet/purple/pink/rose) via
`updatePrimaryPalette`, surface color swatches (slate/gray/zinc/neutral/stone) via
`updateSurfacePalette`, menu mode (Static/Overlay) as a uikit-shell-only setting
backed by `layout/design-lab-state.ts` (read by `uikit-shell` to change sidebar
behavior, not routed through the preset system), and a dark mode toggle grouped on
the same page. Implemented as a dedicated page rather than a topbar popover.

Remaining subsections are now also done, added directly to `pages/design-lab/`:

- **Primitive tokens**: a border radius scale editor (`none`/`xs`/`sm`/`md`/`lg`/`xl`)
  applied via `updatePreset({ primitive: { borderRadius } })`. Full 50-950 color
  scale editing per hue was *not* built beyond what the primary/surface swatch
  pickers already give (those call `updatePrimaryPalette`/`updateSurfacePalette`,
  which already regenerate the full scale from one seed color) — a from-scratch
  per-step hue editor was judged out of proportion to the value it'd add on top of
  the swatch pickers, and is called out here rather than silently skipped.
- **Semantic tokens**: focus ring (width + style) and form-field padding (X/Y),
  applied via `updatePreset({ semantic: { focusRing, formField } })`, with a live
  preview input field.
- **Component tokens**: a searchable token tree, deliberately scoped to three
  representative components (Button, Card, Table/`datatable`) rather than all
  ~90 — documents the pattern (search/filter, path-based override, `updatePreset`
  with `{ components: { <name>: {...} } }`) without claiming full coverage that
  doesn't exist. Verified the real preset shape first by reading
  `node_modules/@wawjs/css-prime-themes/dist/aura/{button,card,base}/index.mjs`
  (preset = `{ primitive, semantic, components: { button, card, datatable, ... } }`).
- **Global config**: ripple on/off and inputVariant (outlined/filled) via the
  injected `NgxPrime` service's writable signals (`ripple`, `inputVariant`,
  confirmed in `@wawjs/ngx-prime/config`'s `wawjs-ngx-prime-config.d.ts`), a dark
  mode selector text field, an RTL toggle (toggles `document.documentElement`'s
  `dir` attribute), and a zIndex.modal number field (sets `ngxPrime.zIndex.modal`
  directly, since `ZIndex` isn't a signal). `overlayAppendTo` was left out of the
  UI — it takes an element/template ref, not a simple value a text field can hold.
- **Pass-through (pt) preview**: one worked example — a toggle applies a `pt`
  object (`{ root: {...}, label: {...} }`) to a demo button, with the object's
  source shown inline, documenting the pattern per the task's minimum bar.

## 3. Download Config button — DONE

A "Download Config" button lives in `uikit-topbar.ts`/`.html` next to the dark-mode
toggle. It reads `DesignLabState` and downloads a diff-only JSON of everything the
user has actually changed — preset/primary/surface (baseline) plus the section 2
additions: `primitive.borderRadius`, `semantic.focusRing`/`formField`,
`components.<name>` overrides, and `globalConfig` (ripple/inputVariant/
darkModeSelector/rtl/zIndex.modal) — disabled until at least one change has been
made. Live preview stays fully separate from the download, as specified.

## Continuation notes for the next session

uikit sections 1, 1b, 2, and 3 are all done and build clean (`npx ng build uikit`).
Next: `projects/ROADMAP.md` sections 2 and 3 (translator, showcase expansion), and
the root README last, per that file's own ordering.
