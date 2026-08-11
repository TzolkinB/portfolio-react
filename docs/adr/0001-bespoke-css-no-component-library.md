# Bespoke CSS instead of a component library for the visual redesign

The redesign was originally scoped as "switch to a more lightweight UI design library" to replace MDB React UI Kit. We considered Tailwind CSS (utility scaffolding) and Jelly UI (a framework-agnostic Web Components library with a pre-styled "soft, tactile" aesthetic). Both were rejected: Tailwind would still require hand-written CSS for the design's bespoke effects (glitch-on-hover, terminal typewriter animation, animated commit-graph rail), so it saves little for this particular design; Jelly UI's default visual identity directly conflicts with the terminal/monospace direction, and as Web Components it introduces a new React/TypeScript integration surface (manual property binding, custom event listeners, hand-written `.d.ts` declarations) this repo doesn't currently have.

Decided: build with plain CSS and CSS custom properties, matching the approach already used in the approved visual prototype, replacing MDB React UI Kit entirely rather than swapping it for another component library.

## Consequences

- Removes the `mdb-react-ui-kit` dependency and its bundled CSS/JS.
- No built-in accessible component behaviors (focus trapping, roving tabindex, etc.) — evaluated as low risk: the app's actual interactive surface is a nav disclosure toggle, a dismiss button, and links/buttons, none of which need those patterns. Accessibility (correct ARIA on the nav toggle, verified color contrast, keyboard nav, `prefers-reduced-motion` support) is carried forward as an explicit acceptance criterion rather than assumed from a library.
- The existing `AppBar.tsx` bug where `aria-expanded` is hardcoded to `"false"` instead of reflecting toggle state should be fixed as part of this work, not preserved.
