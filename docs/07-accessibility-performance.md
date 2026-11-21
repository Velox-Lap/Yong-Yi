# 07 — Accessibility & Performance

**Accessibility target:** WCAG 2.2 AA.  
**Performance approach:** Core experience first; progressive enhancement for expensive modules.

## Accessibility
- Use semantic landmarks, logical heading order, labels, lists, and correct link/button semantics.
- Provide skip link, meaningful page titles, and screen-reader announcements for important async state.
- Dialogs manage focus and return it to the invoking control.
- All essential navigation/interactions work by keyboard; visible focus; no keyboard traps; logical focus order.
- Meet AA contrast; do not convey state by color alone; support zoom/text resize.
- Respect prefers-reduced-motion and provide an app preference where appropriate.
- Avoid flashing and unnecessary parallax.
- Audio is opt-in and controllable; meaningful audio/video has captions or text alternative.
- Informative images have meaningful alt text; decorative images have empty alt.
- 3D information/interactions have DOM/text/list equivalents.
- Form controls have labels; errors are linked to fields and summarized where useful; preserve input after recoverable failure.

## 3D fallback
3D must never be the only access path to core content. Each point of interest is also available in an accessible list/card/route. Support keyboard controls, accessible names/state, reduced motion, static fallback, exit path, and alternatives to color/spatial/animation-only information.

## Performance strategy
- Server-render/stream where useful.
- Dynamically import 3D, game, and heavy code.
- Lazy-load offscreen media.
- Use responsive image sizes and modern formats.
- Reserve layout space to reduce CLS.
- Limit third-party scripts.
- Cache only where visibility/freshness are understood; never shared-cache private content.
- Dispose GPU resources and listeners.

## Suggested objectives
These are goals, not current measurements:
- Core routes usable on mid-range mobile hardware and ordinary mobile network.
- Target good Core Web Vitals at 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1.
- Initial routes do not pay 3D bundle cost unless they need the world.
- Establish route-level JS/media budgets after measuring a baseline.
- Provide understandable loading state for deferred content.

## Verification
Run automated accessibility checks, manual keyboard walkthroughs, screen-reader spot checks, contrast review for both themes, reduced-motion/no-WebGL tests, mobile profiling, network throttling, and failed-asset scenarios. Automated checks do not alone prove WCAG conformance.

## Acceptance
Core journeys work without a mouse, with assistive technology, with reduced motion, and without WebGL. Critical accessibility issues block release. Performance is measured on representative devices.
