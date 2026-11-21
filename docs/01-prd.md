# 01 — Product Requirements Document

**Status:** Phase 0 baseline; owner review required before implementation.

## Problem and goals
A static page does not fully express curated letters, shared memories, milestones, and a personalized fantasy setting. YONG-YI unifies those experiences while retaining creator control of content, visibility, and presentation.

Goals:
- Deliver the four pillars: Digital Love Letter, Interactive Memory Museum, Personal Fantasy World, Interactive Relationship Journey.
- Give the owner a secure authoring workflow.
- Make core journeys intuitive on mobile and desktop.
- Protect private content at every layer.
- Add advanced features only when they improve the experience.

## Personas
**Creator:** writes and curates content, uploads media, organizes memories, controls visibility, and previews the viewer experience.

**Invited Viewer:** explores a coherent experience with simple navigation, readable content, fast media, and optional interactions. Read-only unless a future approved requirement says otherwise.

**Anonymous Visitor:** cannot see private content. Public landing behavior remains disabled until explicitly approved.

## Core journeys
1. Entry and access: user sees a clear access state and authenticates or proceeds only into an explicitly public experience.
2. Digital letter: viewer reads comfortably and navigates back without losing context.
3. Memory museum: viewer browses collections, opens a memory, views authorized media, and returns.
4. Fantasy world: viewer enters an optional environment and can use an accessible list/page alternative.
5. Relationship journey: viewer follows owner-curated milestones; only verified, approved facts and dates appear.
6. Creator workflow: owner signs in, creates a draft, validates, previews, sets visibility, publishes, and edits or archives later.
7. Data control: owner can follow an export or deletion workflow with clear consequences.

## Functional requirements
Priority: P0 release blocker, P1 important, P2 optional enhancement.

| ID | Requirement | Priority |
|---|---|---|
| FR-001 | Responsive shell and consistent navigation | P0 |
| FR-002 | Private routes/data require valid authorization | P0 |
| FR-003 | Distinguish public, private, and draft content | P0 |
| FR-004 | Creator can create, edit, preview, publish, unpublish, archive | P0 |
| FR-005 | Digital letter supports accessible long-form reading | P0 |
| FR-006 | Memory museum has collection and detail views | P0 |
| FR-007 | Journey shows ordered owner-approved milestones | P0 |
| FR-008 | Fantasy world has functional non-3D alternative | P1 |
| FR-009 | Controlled asset storage and delivery | P0 |
| FR-010 | Validate untrusted input on the server | P0 |
| FR-011 | Audit relevant creator actions | P1 |
| FR-012 | Owner-approved quests and mini-games | P2 |
| FR-013 | Achievements and collectibles have explicit rules | P2 |
| FR-014 | Theme and accessibility preferences | P1 |
| FR-015 | Audio is opt-in and off by default | P1 |
| FR-016 | Owner export and deletion procedure | P1 |
| FR-017 | Graceful WebGL fallback | P0 |

## Content rules
Content may include stable ID, title, body, status, visibility, creator, timestamps, ordering, tags, cover media, and related assets. Where dates/facts matter, record whether the owner confirmed them.

No item may be presented as a real memory unless supplied or confirmed by the owner. Demo content must be visibly labeled.

## Visibility model (proposed)
States: draft, published, archived. Visibility: private, invited, public.
- Drafts and private items are creator-only.
- Invited items are for authenticated, explicitly authorized viewers.
- Public content is available anonymously only if the owner enables public access.
- UI hiding is not authorization.
- Private content must not leak through metadata, indexing, previews, or shared caches.

Invitation identity and verification design remain open decisions.

## MVP boundary
1. Secure entry and shell.
2. Creator access and protected content management.
3. Digital letter.
4. Memory collection and detail pages.
5. Relationship journey.
6. Responsive and accessibility baseline.
7. Tests, monitoring, and preview readiness.

Defer advanced 3D, AI, achievements, complex quests, and mini-games until the MVP is stable.

## Acceptance
Personas, journeys, requirements, visibility rules, content integrity, MVP boundary, non-goals, and unresolved decisions are documented and reviewable.
