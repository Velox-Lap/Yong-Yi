# 08 — QA Strategy, Acceptance Criteria & Definition of Done

## Principles
Test where failures matter; test both allowed and denied authorization; use deterministic synthetic fixtures; never place real private memories in test data; treat accessibility, privacy, performance, and content integrity as release quality.

## Test layers
| Layer | Approach | Coverage |
|---|---|---|
| Static analysis | TypeScript, ESLint, formatting | Types and hygiene |
| Unit | Vitest | Utilities, schemas, business rules |
| Component | Vitest + Testing Library | Accessible state/interaction |
| Integration | Test Supabase environment | Data access, validation, storage, RLS |
| E2E | Playwright | Sign-in, viewer journeys, creator workflows |
| Security | Manual and automated checks | Auth bypass, RLS, storage, secrets, input |
| Accessibility | Automated + manual review | WCAG 2.2 AA target |
| Performance | Lighthouse/browser profiling/device checks | Core Web Vitals and bundle behavior |
| Recovery | Non-production restore exercise | Backup assumptions |

## Required scenarios
**Access control**
- Anonymous user cannot read private content or media.
- Invited viewer reads only explicitly shared published items.
- Viewer cannot create/edit/publish/archive/delete creator content.
- Revoked access is effective for subsequent requests and media access according to approved expiry.
- Creator scope matches approved owner model.

**Content lifecycle**
- Draft is invisible to viewers; preview is creator-only.
- Publish is explicit; archive/unpublish behavior is consistent.
- Unknown dates remain unknown; no fabricated date appears.

**Media**
- Invalid type, excessive size, unauthorized upload/download are rejected.
- Private media is not in public bucket/shared cache.
- Missing/expired URL gives graceful fallback.

**Experience**
- Letter, museum, and journey work on mobile and desktop.
- 3D has no-WebGL and keyboard-accessible alternative.
- Audio remains off until initiated.
- Reduced-motion mode disables nonessential motion.

## Acceptance criteria
**Foundation:** app builds, routes render, tokens/shared accessible primitives exist, loading/error/not-found states exist, lint/typecheck/unit pass.

**MVP:** viewer reads only authorized published content; creator creates and previews drafts; publishing is explicit; RLS/storage denial tests pass; no fabricated content; critical E2E/accessibility/responsive tests pass.

**Advanced:** reward operations server-validated/idempotent; client cannot spoof completion; 3D/motion fallbacks tested; performance budgets measured and met or documented exception approved.

## Definition of Done
- Acceptance criteria met.
- TypeScript, lint, and relevant tests pass.
- Relevant authorization paths tested.
- Loading, empty, error, and responsive states included as applicable.
- Keyboard, focus, semantics, and reduced-motion behavior reviewed.
- No secrets or real private content committed.
- Docs/environment examples updated.
- Meaningful Git checkpoint exists.
- Limitations and follow-up work recorded.

A phase is done only when its deliverables and criteria are met, approvals are recorded, and no critical security/privacy/accessibility issue remains.

## Release gates
1. Local: build, typecheck, lint, unit/integration tests.
2. Preview: deployment, smoke tests, authorization tests, visual review.
3. Security: secret scan, dependency review, RLS/storage review, no unresolved critical/high issue.
4. Accessibility: critical journeys pass keyboard and assistive-tech review.
5. Production: explicit owner approval, backup/recovery readiness, domain/environment verification.

A successful preview does not authorize production deployment.
