# 06 — UX & Design System

**Direction:** Soft Romantic · Elegant Luxury · Dreamy Fantasy · Modern Minimal  
**Typography:** Playfair Display for editorial headings; Inter for UI/body.

## Principles
- Refined hierarchy; avoid competing decorations.
- Editorial typography for emotional content, readable UI typography for controls.
- Consistent whitespace and rhythm.
- Purposeful, short, interruptible motion.
- Core content remains easy to find and read.
- Responsive behavior is intentionally designed.
- Themes preserve semantic meaning and contrast.

## Proposed palette
Values are starting points only; test actual text/background combinations before release.

| Token | Value | Use |
|---|---|---|
| --color-sage | #A8B5A0 | Decorative sage |
| --color-soft-blue | #B7C9D6 | Decorative blue |
| --color-cream | #F5F0E7 | Warm background |
| --color-white | #FFFFFF | Elevated surface |
| --color-warm-brown | #765B4B | Warm accent |
| --color-dusty-pink | #D9B8B5 | Soft accent |
| --color-forest | #20382F | Dark forest surface |
| --color-midnight | #121820 | Dark background |
| --color-text | #282A27 | Primary light-theme text |
| --color-muted | #666B65 | Secondary text candidate |
| --color-border | #DDD8CF | Dividers/outlines |

Semantic tokens: background, surface, raised surface, foreground, muted foreground, primary, accent, border, focus ring, destructive, and success. Pastels must not be used for small text unless contrast is verified. Text pairs must meet WCAG 2.2 AA.

## Typography
- Playfair Display: hero titles and selected editorial headings.
- Inter: navigation, forms, metadata, paragraphs, and controls.
- Use consistent responsive type scale and line heights.
- Letter content gets comfortable reading width and line length.
- Provide system fallbacks and avoid layout shift from font loading.

## Spacing and shape
Initial spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80 px.  
Radius: 8 px control, 12 px card, 20 px feature panel, pill only when meaningful.  
Use subtle elevation; never rely on shadow alone for state.

## Responsive behavior
Test small and large phone, tablet, laptop, and wide desktop. Prevent normal-content horizontal overflow; keep navigation discoverable; preserve media aspect ratios; maintain keyboard access in galleries; keep 3D controls away from essential navigation; ensure touch targets meet WCAG 2.2 AA criteria or a permitted exception.

## Shared components
Button, IconButton, Link, TextField, TextArea, Select, Checkbox, Switch, Dialog, Drawer, Dropdown, Tooltip, Toast/Alert, Card, Badge, Tabs, Breadcrumbs, Pagination, EmptyState, LoadingState, ErrorState, Skeleton, MediaFrame, MemoryCard, TimelineItem, AudioControl, skip link, and accessible navigation.

Each interactive component needs visible focus, disabled/loading/error behavior, and accessible naming.

## Themes and interactions
Support light and dark themes. Respect system preference initially unless a saved preference exists. Theme does not affect content visibility. Audio is off by default and user-initiated. Provide pause/stop controls for nonessential motion/sound. Avoid forced intro sequences. Clearly label demo placeholders. Confirm destructive actions and explain consequences.

## Review acceptance
Core screens have hierarchy/responsive states; palette pairs are contrast-tested; components are keyboard accessible; light/dark themes reviewed; motion and 3D have alternatives.
