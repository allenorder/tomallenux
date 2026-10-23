# tomallenux

Tom Allen's portfolio: Vue 3 + Vuetify 4, prerendered to static HTML by vite-ssg, hosted on Netlify. Scripts are in `package.json`.

## Done means

A change is done when all four pass:

```
npm run typecheck && npm test && npm run build && npm run test:content
```

`test:content` checks the built `dist/` against `tests/content-baseline.json`: every original paragraph, heading, list item, caption and image (src + alt) must still be on its page. Keep copy and alt text verbatim, typos included. When a copy or image change is intended, re-record with `node scripts/content-parity.mjs snapshot` after a build and call it out in the PR.

## Project goal

Integrate TinaCMS so Tom can manage site content through a CMS interface instead of code changes. This is the focus of the next development phase.

## Code style

- ESLint for static analysis, Prettier for formatting, with the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript) as the reference. Where Airbnb conflicts with this file or memory rules, this file and memory win.
- Prefer named exports. Use default exports sparingly, e.g. for page components where the framework expects them.
- Keep a component's types next to it: one folder holding the component, its `.test.ts` and its `.types.ts`. Shared and domain types go in `src/types/`, grouped logically with barrel `index.ts` exports where useful.

## Pages

- Case studies live in `src/pages/work/<slug>.vue` and are routed at `/<slug>` automatically. Add each one to `src/data/projects.ts`, or to `unlistedCaseStudies` if it stays off My work; `projects.test.ts` enforces this.
- Build pages from the globally registered blocks in `src/components/index.ts` (no imports needed) inside Vuetify's `v-row`/`v-col`. A case study runs `CaseHero` → `ProjectFacts` → `Section`s → `NextProject`; `confused-pet-insurance.vue` is the reference.
- `Section` tones: `muted` alternates with default for rhythm; `inverse`/`accent` switch Vuetify to the dark `brandInverse` theme.
- New images go in `public/images/`, then `npm run images` to make the responsive variants and the manifest `imageInfo` reads.

## Styling

- Write site CSS inside `@layer site { … }`. `index.html` orders it between Vuetify's component styles and its utility classes, so site rules override Vuetify components while utilities like `mt-8` still override site rules.
- Put `v-html` on plain elements. On a component it is dropped during prerendering, so the text never reaches the built page.
- Vuetify 4 uses Material 3 type classes (`text-headline-medium`, not `text-h4`). Colours come from the theme in `src/plugins/vuetify.ts` and the CSS tokens in `src/styles/tokens.css`; keep the two in step.

## Tests

Unit tests sit next to the code (`*.test.ts`) and mount through `renderWithApp` in `src/test/mount.ts`: real Vuetify, real router. Mock only the network (`fetch`), so a Vuetify upgrade that changes markup fails the tests. Agree new test seams with the user before writing them (see the `tdd` skill). Treat real-library testing on critical paths as the default rather than an absolute rule. E2E tests use Playwright (`npm run test:e2e`).

The contact form posts to Netlify Forms, which stores fields by their `name`. Keep `name="contact"`, `data-netlify`, the honeypot and the field names as they are; `ContactPage.test.ts` guards them.

## Git

The repo is `theallens/tomallenux`. The SSH key is passphrase-protected; before an agent can push, load it from a normal terminal with `ssh-add --apple-use-keychain ~/.ssh/id_ed25519_allenorder`.
