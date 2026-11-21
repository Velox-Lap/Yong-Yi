# 02 — System Architecture

**Status:** Proposed architecture; material changes require Project Owner approval.  
**Style:** Modular monolith with explicit module boundaries.

## Technology baseline
| Concern | Technology | Notes |
|---|---|---|
| Web application | Next.js + React | App Router preferred; version set at scaffold time |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS | Semantic CSS-variable tokens |
| Backend | Supabase | Auth, PostgreSQL, Storage |
| Validation | Zod | Trust boundaries |
| 3D | Three.js, React Three Fiber, Drei | Optional, dynamically loaded |
| Motion | Framer Motion; GSAP selectively | Avoid dual ownership of one animation |
| Unit/component tests | Vitest | Testing Library as appropriate |
| E2E | Playwright | Critical journeys and access |
| Deployment | Vercel | Preview first; production needs approval |

Versions are not pinned here; select supported stable versions at scaffold and record them in the lockfile.

## High-level architecture
Browser → Next.js routes/layouts → feature modules → server-side application services → Supabase Auth / PostgreSQL / Storage. Optional client-only modules provide 3D and motion. Monitoring receives minimal operational metadata.

The browser is untrusted. Client checks improve UX but never replace server authorization or database RLS.

## Principles
- Start with one deployable app, not distributed services.
- Keep feature modules isolated behind typed interfaces.
- Keep secrets and privileged operations on the server.
- Prefer server components for read-oriented composition; use client components only where interaction requires them.
- Lazy-load 3D, games, and optional audio.
- Validate storage paths and identifiers as untrusted input.
- Separate content/domain rules from presentation and world rendering.
- Prevent private data leakage through metadata, errors, analytics, cache keys, and public assets.

## Module responsibilities
| Module | Responsibility |
|---|---|
| Application Shell | Root layout, providers, global error boundaries |
| Design System | Tokens, accessible primitives, shared components |
| Navigation | Route structure, breadcrumbs, access-aware links |
| Onboarding | First-run and access-state guidance |
| Memory Management | Memory CRUD, collections, tags, media relations |
| Narrative Engine | Ordered stories, chapters, nodes, branching |
| Quest Engine | Quest definitions, eligibility, progress |
| Reward Engine | Achievement/collectible rules and idempotent grants |
| Mini-game Framework | Game lifecycle and validated result contract |
| 3D World Engine | Scene composition, interaction adapters, fallback |
| Audio Manager | User-initiated playback and controls |
| Notification Center | In-app notices and read state |
| Personalization | Theme and user preferences |
| Creator Studio | Protected authoring and preview |
| Asset Management | Upload validation, storage access, derivatives |
| AI Integration | Optional assistive generation with human review |
| Analytics | Minimal product telemetry |
| Security & Privacy | Access checks, policy tests, audit, data controls |

## Suggested structure
    src/
      app/ (public)/ (auth)/ (viewer)/ (creator)/ api/
      components/ ui/ layout/
      features/ letter/ memories/ journey/ world/ narrative/
                quests/ rewards/ games/ creator-studio/ assets/
                personalization/
      lib/ supabase/ auth/ validation/ security/ observability/
      server/ services/ repositories/
      styles/ types/ test/
    docs/ decisions/ phase-prompts/
    supabase/ migrations/ tests/

This is a target structure, not a requirement to create empty folders in Phase 0.

## Request and data flow
1. Browser requests route.
2. Next.js resolves route and access state.
3. Server service verifies session and authorization.
4. Data-access layer executes a narrowly scoped query.
5. Supabase RLS independently enforces row access.
6. Response returns only fields needed by the page.
7. Mutations validate input, authorize, persist, and record relevant audit metadata.

## Data-access rules
- Never import service-role/secret keys into client bundles.
- Do not use admin clients for ordinary viewer requests.
- Centralize server-side Supabase clients.
- Use narrow typed repositories and explicit select lists.
- Use atomic operations for multi-step changes and idempotency for rewards.

## 3D and motion
- Dynamically import canvas and scene bundles.
- Provide static/DOM fallback when WebGL is unavailable.
- Provide keyboard controls and list-based interaction.
- Respect reduced motion; cap pixel ratio and adjust quality.
- Dispose GPU resources and listeners on unmount.
- Use Framer Motion for standard UI transitions; GSAP only for complex timeline sequences. Do not animate the same property with both.

## Errors and observability
Distinguish validation, auth, authorization, not-found, rate-limit, and provider failures. Return safe messages; keep stack traces server-side. Use request IDs. Never log private memories, message bodies, tokens, or uploaded contents.

## Acceptance
Module boundaries, trust boundaries, data flow, fallback strategy, and proposed structure are explicit before app scaffold begins.
