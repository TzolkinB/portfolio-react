# Code Conventions

How `src/` is actually written, so new code (in particular the terminal redesign on `feature/terminal-redesign`) reads as if it belongs next to the rest of the codebase rather than as agent output.

## Formatting

Enforced by `.prettierrc`, not a matter of taste: no semicolons, double quotes, trailing commas, 2-space indent, 80-char print width.

## Components

- Default export at the bottom (`export default ComponentName`), not inline on the declaration.
- Props are destructured directly in the function signature and typed via an interface imported from `src/types/types.ts` — never inlined as an anonymous type at the call site.
- Both `const X = (props) => {}` and `function X(props) {}` are in active use (`About.tsx`/`Footer.tsx`/`CardContainer.tsx` vs. `Home.tsx`/`Skills.tsx`/`Projects.tsx`). No lint rule picks one — either is fine, but stay consistent within a set of related new files rather than alternating file to file.
- Section-level components (`About`, `Skills`, `Projects`, and any new terminal-redesign sections) take a `SectionProps` (`{ id }`) and render `<div id={id} data-testid={id}>` as the root — this is what the nav anchor links and Cypress tests key off of. Keep it for any new section.

## Imports

`eslint.config.cjs`'s `import/order` rule enforces this, so it'll fail lint otherwise:

1. external packages (`react`, `mdb-react-ui-kit`, ...)
2. internal (`../constants/...`, `../utils/...`)
3. sibling component imports (`./About`, `./shared/CardContainer`)
4. `import type { ... } from "../types/types"` — always last, always a separate `import type`, never mixed into a value import

Each group alphabetized, blank line between groups.

## Types

All shared interfaces live in `src/types/types.ts`, PascalCase, `*Props` suffix for component prop types (`SectionProps`, `SocialLinksProps`). Don't declare a one-off `interface`/`type` inline in a component file for anything that isn't purely local to that file.

## Content vs. markup

Real copy (bios, project descriptions, stats, skills) lives in `src/constants/appData.ts` / `projectsData.ts`, never hardcoded as JSX string literals in a component — components map over the constant. This matters specifically for the redesign: the reference mockup's placeholder copy (fake stats, `hello@example.com`) is structure/visual-language only, not content to inline — see [[project_terminal_redesign]].

**Exception: multi-sentence prose paragraphs.** Prettier wraps JSX text children (it collapses whitespace like HTML does, so breaking at word boundaries doesn't change what renders) but never wraps a plain string literal — the string would need an inserted newline, which changes the value. A paragraph-length string as an `appData.ts` constant ends up as one unreadable 400+ character line. For prose this long, keep it inline as JSX text in the component instead, and accept the convention break — short fields (titles, labels, single short sentences) don't hit this and stay in `appData.ts` as usual. See `About.tsx`'s intro/notCoding/contact paragraphs for the pattern.

## Accessibility

Treated as a first-class convention, not an afterthought — `role`, `aria-label`, `aria-hidden="true"` on decorative icons, and `data-testid` are present throughout `About.tsx`, `Home.tsx`, `utils.tsx`. Match this density in new components. Note `AppBar.tsx`'s `aria-expanded="false"` is a known bug (hardcoded instead of reflecting `openNav`) — per `docs/adr/0001-bespoke-css-no-component-library.md`, fix it as part of the redesign rather than carrying it forward.

## CSS

Single stylesheet, `src/assets/css/new.css`, mobile-first (base styles unqualified, breakpoints layered on top), organized under `/* ===== SECTION ===== */` banner comments (`TYPOGRAPHY & COLORS`, `COMPONENTS`, per-component `/* ---- Name ---- */` subsections). Palette and repeated values are CSS custom properties on `body`/`:root` (`--amber`, `--radius-sm`, `--space-md`), not hardcoded hex scattered through rules.

**Breakpoints**: base/unqualified rules = mobile (0–767px). Tablet = `@media screen and (min-width: 768px)`. Desktop = `@media screen and (min-width: 1100px)`. Both live consolidated in one `/* ===== RESPONSIVE DESIGN ===== */` section near the bottom of the file (further split into `/* TABLET (...) */` and `/* DESKTOP (...) */` comment blocks), overriding specific selectors — not as a `@media` block inline next to each component's own rules. Every new component/ticket should get base styles written mobile-first in its own section, then any tablet/desktop overrides added as selectors in that shared bottom section.

**Redesign-specific**: per ADR 0001, the redesign removes `mdb-react-ui-kit` entirely. Existing components (`About.tsx`, `CardContainer.tsx`, `Footer.tsx`, etc.) still import `MDBTypography`/`MDBCard`/`MDBIcon`/etc. — that's the *old* pattern being replaced, not one to copy into new redesign components. New/redesigned components should use plain HTML elements with classes styled in `new.css`, matching the approved prototype's approach, even though older sibling files in the same directory still show MDB imports.
