# 05 — Security & Privacy Baseline

**Posture:** Private by default, least privilege, defense in depth.

## Data classification
| Class | Examples | Handling |
|---|---|---|
| Public | Owner-approved landing content | Public only when explicitly enabled |
| Private personal | Letters, memories, photographs, drafts | Authenticated and explicitly authorized |
| Sensitive operational | Access grants, audit/security events | Restricted owner/server access |
| Secrets | API keys, DB credentials, signing keys | Secret manager/environment only |
| Telemetry | Minimal performance/error data | Minimize; never include private content |

## Threat model
Protect relationship memories, letters, photographs, sessions, access grants, storage objects, database records, and deployment secrets. Consider unauthenticated access attempts, viewer-to-creator privilege escalation, malicious clients, IDOR, signed URL replay, malicious uploads, XSS, CSRF, exposed secrets, upload abuse, and accidental publication/deletion.

## Authentication and authorization
- Use Supabase Auth subject to approved sign-in design.
- Validate sessions server-side for protected routes and mutations.
- Enforce ownership and viewer grants in application services and PostgreSQL RLS.
- Deny by default when access state is missing or ambiguous.
- Separate creator and viewer capabilities.
- Never trust client-provided role claims.
- Use least-privilege credentials.
- Test denied access across route, API, database, and storage layers.

## Database and storage
- Enable RLS for every user-content table before exposure.
- Define SELECT/INSERT/UPDATE/DELETE policies explicitly.
- Keep private buckets private.
- Verify parent-content access before issuing signed media URLs.
- Keep service-role/secret keys server-only.
- Restrict CORS to required origins.
- Do not use public buckets for relationship content.

## Application security
- Validate input at server boundaries, including length and type constraints.
- Render text as text; sanitize intentionally supported rich text.
- Avoid unsafe HTML injection and dynamic code evaluation.
- Use secure cookie and framework defaults.
- Apply CSRF protections appropriate to mutation mechanism.
- Rate-limit sign-in, invitation, upload, and expensive operations.
- Restrict upload type, size, and count; inspect file signature when practical.
- Validate external redirect destinations.
- Keep dependencies updated and scan them.
- Avoid revealing private resource existence via error differences.

## Secrets
- Commit only variable names and safe placeholders.
- Never commit env files, keys, passwords, tokens, or signing secrets.
- Never expose privileged keys with a public prefix.
- Rotate credentials if exposed; deleting a commit is insufficient.
- Separate dev, preview, and production credentials/resources.

## Privacy and controls
- Collect only data needed for approved experience.
- Explain access and visibility to the owner.
- Provide export/deletion workflow with consequences for derivatives, backups, audit events, and third parties.
- Keep private content out of analytics.
- External AI processing requires explicit approval and disclosure.
- Do not index private routes or generate public social previews for them.

## Audit logging
Record relevant viewer grants/revocations, publication/visibility changes, high-impact deletion, admin actions, and migration approvals. Capture actor, action, target reference, timestamp, outcome, and request ID—not content bodies or credentials. Define retention and read access before implementation.

## Backup and incident readiness
Before production, document backup/retention, test restoration in non-production, set RPO/RTO with owner, define credential rotation and access revocation, define how to disable public access, and document incidents without copying sensitive content into public issue trackers.

## Security release gate
No production launch until RLS and Storage are reviewed/tested, no secrets reach client/repository, auth tests pass, upload controls and rate limits are verified, dependency/build checks pass, backup/recovery is documented, and owner approves exposure/deployment.

Changes to auth providers, RLS, security policy, secrets, public exposure, retention, or production settings require explicit owner approval. This document does not change Supabase or Vercel configuration.
