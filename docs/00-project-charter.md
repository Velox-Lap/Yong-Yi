# 00 — Project Charter

**Project:** YONG-YI — Ultimate Interactive Digital Experience  
**Owner:** Velox  
**Baseline:** Master Project Specification v1.0  
**Status:** Phase 0 draft for owner review

## Vision
YONG-YI is a personalized digital world combining authentic relationship memories, editorial storytelling, interactive environments, and shared experiences. It must be meaningful and visually coherent without sacrificing usability, privacy, accessibility, or reliability.

## Outcomes
- Read a personally authored digital letter.
- Explore a curated museum of authentic memories and media.
- Experience an optional fantasy world.
- Follow an owner-curated relationship journey.
- Discover optional quests, collectibles, achievements, mini-games, audio ambience, and personalization.
- Use the experience across desktop, tablet, and mobile.

Success is measured by core journey completion, content integrity, privacy correctness, accessibility, and performance—not by effect count or 3D complexity.

## Roles
| Role | Capabilities |
|---|---|
| Project Owner / Creator | Authenticate, create/edit content, manage assets and visibility, preview, review audit events |
| Invited Viewer | Read only content explicitly shared with them |
| Anonymous Visitor | No private access; public entry only if explicitly enabled |
| Autonomous Developer | Implement approved work, test, document, and create Git checkpoints; cannot approve privileged changes |

## Scope
Product scope includes the four pillars; responsive shell and navigation; onboarding; memory and media management; narrative, quest and reward systems; mini-games; optional 3D and audio; Creator Studio; personalization; security and data controls.

Initial release prioritizes secure access, letter, memory collection/detail, journey, creator content workflow, and accessible responsive presentation.

## Non-goals for initial release
- Public social network or open user-generated content.
- Public discovery/search indexing by default.
- Real-time messaging or social feeds.
- Multi-tenant organization management.
- Microservices.
- Always-on AI or autonomous publishing.
- 3D as a prerequisite for reading or navigation.
- Fabricated personal facts or imported private content without consent.

## Principles
1. Authenticity: never invent memories, messages, photos, dates, or events.
2. Privacy by default: new content is private unless visibility is deliberately changed by an authorized creator.
3. Meaning before spectacle.
4. Progressive enhancement: core journeys work without WebGL, audio, or motion.
5. Accessibility is a first-class requirement.
6. Load expensive experiences only when needed.
7. Maintain clear module boundaries, typed contracts, tests, and documentation.
8. Prefer reversible, reviewable changes.

## Constraints and assumptions
- Intended stack: Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel, optional Three.js/R3F/Drei, Framer Motion, GSAP.
- Repository is public; no private relationship content or secrets may be committed.
- Supabase project, auth configuration, domain, access model, and production settings are not yet verified or approved.
- Phase 0 data model is conceptual only.
- No new paid service or recurring cost is approved.

## Risks
| Risk | Mitigation |
|---|---|
| Private memories become public | Private-by-default, RLS and storage authorization, explicit sharing |
| 3D harms mobile performance | Lazy-load, quality tiers, static fallback |
| Scope becomes unmanageable | MVP-first roadmap and acceptance criteria |
| AI fabricates personal content | Placeholders only; owner confirmation required |
| UI-only authorization | Server and database enforcement |
| Schema changes damage data | Reviewed migration, backup, rollback, explicit approval |
| Unexpected cost | Approval before recurring-cost services |

## Success definition
The first usable release lets the owner securely manage authentic content and an invited viewer complete the letter, memory, and journey experiences on mobile and desktop—with no unauthorized data exposure and accessible non-3D alternatives.
