# 04 — Proposed API Contracts

**Status:** Interface design only; no endpoint is implemented by this document.

## Principles
- Use server actions or route handlers according to interaction and caching needs.
- Never expose privileged database operations to the browser.
- Validate mutations with Zod or an equivalent reviewed server-side schema.
- Treat identifiers, paths, and client-reported game results as untrusted.
- Authorize before reading or mutating protected resources.
- Return only fields needed by the client.
- Use consistent errors and request IDs.
- Avoid confirming existence of private resources to unauthorized callers.

## Proposed resource families
| Resource | Operations | Access |
|---|---|---|
| Session/access | Current session, viewer grant check | Authenticated, minimal public state |
| Letters | Authorized read, creator CRUD, preview | Viewer read; creator write |
| Memories | List/detail, create/update/archive | Visibility-scoped read; creator write |
| Collections | List/detail and creator CRUD | Visibility-scoped read; creator write |
| Journey | Ordered milestones and creator CRUD | Visibility-scoped read; creator write |
| Assets | Upload intent, metadata, authorized URL, delete | Owner or explicit access |
| Preferences | Read/update own preferences | Authenticated owner |
| Creator preview | Preview draft without publication | Creator only |
| Audit | Read permitted audit metadata | Owner/admin only |

## Illustrative routes
    GET    /api/v1/session
    GET    /api/v1/letters
    POST   /api/v1/creator/letters
    PATCH  /api/v1/creator/letters/:id
    POST   /api/v1/creator/letters/:id/publish
    GET    /api/v1/memories
    GET    /api/v1/memories/:id
    POST   /api/v1/creator/memories
    PATCH  /api/v1/creator/memories/:id
    POST   /api/v1/creator/assets/upload-intent
    DELETE /api/v1/creator/assets/:id
    GET    /api/v1/journey
    PUT    /api/v1/preferences

Do not implement empty routes just because they are listed. Implement only when a journey needs them.

## Conventions
- JSON for application data.
- ISO 8601 UTC timestamps.
- Stable IDs, never array index as persistent ID.
- Cursor pagination for potentially large collections.
- Mutations return canonical persisted representation.
- Use idempotency keys for retriable side effects.
- Keep private bodies out of generic list responses.

## Error semantics
| Status | Meaning |
|---|---|
| 400 | Malformed request |
| 401 | Authentication required |
| 403 | Authenticated but unauthorized |
| 404 | Not found or intentionally indistinguishable from inaccessible |
| 409 | Conflict or duplicate operation |
| 413 | Request/upload too large |
| 422 | Validation failure |
| 429 | Rate limit |
| 500 | Unexpected server failure |
| 503 | Dependency unavailable |

Never return raw database errors, stack traces, environment values, or policy internals.

## Content lifecycle
Draft → validation → preview → explicit owner publication → published → optional unpublish/archive. Saving a draft must never publish it. Define whether edits to published content immediately affect viewers or require a separate publish action.

## Upload contract decisions
Before implementation, define allowed formats, size/count limits, client-direct vs server-mediated upload, signed upload expiry, object path format, duplicate detection, metadata stripping, malware/provider controls, abandoned-upload cleanup, and RLS tests.

## Acceptance
Every implemented operation has typed input/output, validation, authorization, error semantics, tests, and documentation. API surface remains minimal and journey-driven.
