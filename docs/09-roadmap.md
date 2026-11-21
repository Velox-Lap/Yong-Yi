# 09 — Development Roadmap

Phases are sequential by default. Each has bounded outcomes, acceptance criteria, and approval gates.

## Phase 0 — Requirements & Architecture
Deliverables: charter, PRD, architecture, draft data model/API contracts, UX tokens, accessibility/performance, security/privacy, QA, roadmap, governance, coding standards, environment guide, decision log.
Acceptance: MVP/non-goals clear; boundaries documented; proposals marked unapproved; open decisions recorded; owner accepts Phase 1.
DoD: documents exist and cross-reference; no application code/schema migration required.

## Phase 1 — Foundation & Design System
Deliverables: Next.js/React/TypeScript scaffold, Tailwind token mapping, shell/routes/navigation, error/loading states, validation, Supabase client boundaries, CI checks.
Acceptance: build and CI pass; responsive keyboard-operable layouts; no privileged key in client; themes/reduced motion work.
Gate: approve scaffold, dependency versions, Supabase environment, and preview deployment.

## Phase 2 — Core Experience
Deliverables: secure access, digital letter, memory museum/assets, journey, creator authoring workflow.
Acceptance: creator can draft/edit/preview/publish/unpublish/archive; viewer sees only authorized published content; RLS/storage tests pass; content is authentic; core E2E/accessibility tests pass.
Gate: approve schema, migrations, RLS, storage policies.

## Phase 3 — Narrative & Interactive Systems
Deliverables: chapters/nodes, quests, achievements, collectibles, persistent progress.
Acceptance: progress rules documented; rewards server-validated and idempotent; viewer cannot spoof completion; alternatives are keyboard accessible.
Gate: approve each persistence/security expansion.

## Phase 4 — Creator Studio
Deliverables: dashboard, editing, media library, preview/publishing, audit view, lifecycle tools.
Acceptance: actions access-controlled/auditable; no accidental publication; media visibility/deletion semantics tested.
Gate: approve role, audit retention, or storage lifecycle changes.

## Phase 5 — Advanced 3D & AI
Deliverables: optimized world, scene/asset management, optional AI assistance.
Acceptance: WebGL fallback, accessible alternative, lazy load, reduced motion; AI output labeled and owner-reviewed; external processing disclosed.
Gate: approve new providers, external data sharing, architecture, GPU/AI costs, recurring costs.

## Phase 6 — Integration & Optimization
Deliverables: cross-module integration, profiling, observability, export/deletion.
Acceptance: cross-feature flows work; performance measured; telemetry avoids private content; export/deletion verified.

## Phase 7 — QA & Security Audit
Deliverables: regression/E2E, auth/RLS/storage review, accessibility and responsive audit, dependency/secret scan, backup restore test.
Acceptance: no unresolved critical/high security issue; no critical accessibility blocker; denial tests pass; restore succeeds in non-production; owner signs off.

## Phase 8 — Production Deployment
Deliverables: approved production environment, domain/secrets/monitoring/backup, release and post-deploy verification.
Acceptance: explicit owner approval; smoke tests pass; rollback understood; privacy/indexing/access settings verified.

## Phase implementation prompts

### Phase 1
"Implement Phase 1 only. Inspect this documentation and repository. Propose exact scaffold, dependency versions, route structure, environment variables, and CI checks. Do not modify Supabase schema/security/production settings or create paid resources. Wait for owner approval before scaffold changes. Add accessible responsive shell, tokens, themes, validation foundation, tests, and docs. Run build, lint, typecheck, tests; report changed files and risks."

### Phase 2
"Implement approved Phase 2 scope using only owner-approved schema/access model. Verify migrations, RLS, storage policies, and tests before data-access code. Build letter, memory museum, journey, and creator lifecycle. Use placeholders for missing personal content. Test anonymous, invited, and creator access. Do not publish private content or deploy production."

### Phase 3
"Implement approved narrative, quest, achievement, and collectible requirements. Make eligibility and reward calculations server-authoritative and idempotent. Test replay, spoofing, revoked access, and duplicate requests. Do not add persistence or change schema without approval."

### Phase 4
"Implement Creator Studio for approved content types: safe editing, preview, explicit publication, media management, visibility, and audit. Test authorization, validation, upload abuse, and deletion. Do not change roles or storage policy without approval."

### Phase 5
"Implement 3D/AI only after approval of feature, architecture impact, external processing, and cost. Lazy-load heavy code, preserve accessible non-3D alternatives, honor reduced motion, and require human review. Never fabricate memories or publish autonomously."

### Phase 6
"Integrate modules and profile representative devices/networks. Optimize based on measurements. Complete export/deletion and verify telemetry excludes private content. Record before/after measurements and regressions."

### Phase 7
"Audit authorization, RLS/storage, dependencies, secrets, keyboard/screen reader, reduced-motion/WebGL fallback, mobile performance, regression, and non-production restore. Do not deploy production. Report findings by severity."

### Phase 8
"Deploy only after explicit written owner approval in the current task. Verify project, environment, domain, secrets, restrictions, backups, rollback, and target. Run post-deploy smoke/security checks. Do not change visibility or indexing without approval."

## Change control
Architecture, schema, security policy, recurring costs, production deployment, destructive operations, and public/private visibility changes require explicit approval. A roadmap phase is not blanket authorization for these actions.
