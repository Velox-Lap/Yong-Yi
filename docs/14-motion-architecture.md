# 14 — Motion Architecture

**Status:** Proposed UI architecture; implement incrementally.

## 1. Purpose
Motion should communicate state, continuity, focus, and atmosphere. It must not delay reading, block navigation, trigger discomfort, or become the only way to understand an interaction.

## 2. Ownership
- **CSS transitions:** simple hover, focus, color, and opacity changes.
- **Framer Motion:** ordinary component enter/exit, layout transitions, and interaction feedback.
- **GSAP:** selected complex timeline-driven cinematic sequences only.
- Never let multiple animation systems control the same property on the same element.
- Keep motion definitions in reusable tokens/presets rather than scattered magic numbers.

## 3. Motion categories
| Category | Examples | Default behavior |
|---|---|---|
| Micro-interaction | Button feedback, toggle state | Fast, subtle |
| Navigation | Page/section transitions | Brief, does not block input |
| Content reveal | Letter/section entrance | Minimal and skippable |
| Cinematic sequence | World introduction, story scene | Opt-in or skippable |
| Ambient motion | Particles, stars, gentle environment movement | Low intensity; pauseable |
| Gameplay | Quest/game feedback | Clear, nonessential, accessible equivalent |

## 4. Initial timing guidance
Starting values for design exploration, not fixed engineering requirements:
- Micro feedback: approximately 100–180 ms.
- Standard UI transition: approximately 160–240 ms.
- Larger panel transition: approximately 220–350 ms.
- Cinematic sequences may be longer but must be skippable and must not hold essential content hostage.

Use restrained easing. Avoid excessive bounce, continuous movement behind text, and large parallax offsets.

## 5. Reduced motion
- Honor system reduced-motion preference.
- Provide in-app preference if appropriate.
- Replace spatial/continuous movement with opacity or immediate state changes.
- Stop nonessential ambient loops.
- Do not autoplay cinematic sequences.
- Never require animation to reveal essential controls or information.

## 6. Performance and lifecycle
- Avoid expensive layout thrashing.
- Prefer transform and opacity for motion where appropriate.
- Cancel animation and dispose subscriptions on unmount.
- Avoid dozens of simultaneous animated DOM nodes.
- Pause background effects when the page is hidden or the experience is inactive.
- Profile on representative mobile devices.

## 7. Accessibility
- Motion does not replace focus indication or state text.
- Transitions do not reorder keyboard focus unexpectedly.
- Provide pause/stop control for nonessential continuous movement.
- Avoid flashing and unsafe rapid repetition.
- Test keyboard, screen-reader, and reduced-motion behavior.

## 8. Acceptance
Motion is consistent, purposeful, skippable where extended, disabled/reduced when requested, does not block essential interaction, and introduces no material performance regression.
