# 13 — Deployment Architecture

**Status:** Proposed; no Vercel project or deployment has been created by this document.  
**Target platform:** Vercel for the Next.js app; Supabase for Auth, PostgreSQL, and Storage.

## 1. Environment topology

| Environment | Purpose | Data | Deployment |
|---|---|---|---|
| Local | Development and automated local checks | Synthetic/local data or dedicated dev Supabase | Developer machine |
| Preview | Branch/PR verification | Dedicated preview Supabase project or isolated preview data | Vercel preview deployment |
| Production | Real owner-approved experience | Production Supabase project | Vercel production deployment |

Do not point preview deployments at production content by default. If separate Supabase projects are not available, define and test strict isolation before preview is used with any real content.

## 2. Delivery flow

1. Developer creates a scoped branch and commit.
2. Automated checks run: install, lint, typecheck, unit tests, and build.
3. Preview deployment may be created after project/environment approval.
4. Preview smoke tests and access-control checks run.
5. Owner reviews content, behavior, accessibility, and security evidence.
6. Production deployment occurs only after explicit approval.
7. Post-deployment smoke checks run and deployment/rollback references are recorded.

Production must never be triggered solely because a build passes.

## 3. Configuration and secrets

- Configure environment variables in the appropriate Vercel environment.
- Keep public configuration separate from server-only secrets.
- Use distinct credentials for local, preview, and production.
- Never put service-role or secret keys in client-visible variables.
- Do not print values in build logs.
- Verify redirect URLs, CORS, allowed origins, and cookie behavior for each environment.
- Rotate credentials suspected of exposure.

## 4. Build and runtime

- Use framework auto-detection unless there is a documented reason to override it.
- Pin dependencies using a committed lockfile.
- Run build-time type/lint/test gates in CI.
- Confirm Node/runtime compatibility at implementation time.
- Ensure server-only modules are not imported into client bundles.
- Use image optimization and caching only where access and privacy rules are preserved.

## 5. Domains, caching, and indexing

- Domain selection is an owner decision.
- Private routes must not be publicly indexed.
- Use explicit noindex behavior for private/authenticated areas and verify generated metadata.
- Do not cache private HTML, JSON, or media in shared public caches.
- Cache public static assets with immutable versioned paths where appropriate.
- Test that logout, access revocation, and visibility changes do not leave sensitive cached responses accessible.

## 6. Observability

Monitor deployment health, server errors, route failures, asset failures, and Core Web Vitals. Avoid logging private letters, memory bodies, viewer tokens, file contents, or secrets. Restrict access to logs and define retention before production.

## 7. Rollback and recovery

- Keep prior deployment available for rollback.
- Treat application rollback and database migration rollback as separate operations.
- Do not reverse a database migration automatically unless the recovery plan proves it safe.
- Before schema changes, record backup state and recovery steps.
- Define owner-approved RPO/RTO and restoration process before production.
- After rollback, verify auth, RLS, storage, and core viewer flows.

## 8. Cost and approval

Vercel plan usage, Supabase project usage, storage/bandwidth, AI APIs, email, analytics, and other paid integrations may incur recurring or metered costs. No new paid resource or plan upgrade is authorized by this document. Get owner approval before enabling one.

## 9. Production readiness checklist

- [ ] Owner approved production project and deployment target.
- [ ] Production and preview data are appropriately isolated.
- [ ] Production environment variables verified without exposing values.
- [ ] Auth redirects, CORS, and allowed origins verified.
- [ ] RLS and storage authorization tests pass.
- [ ] Private routes and content are not indexed or publicly cached.
- [ ] Backup and restore approach documented and tested.
- [ ] Monitoring and incident response are ready.
- [ ] Rollback path is understood.
- [ ] Owner gave explicit production deployment approval.

## 10. Acceptance

Deployment flow is repeatable, secrets are environment-scoped, previews do not expose production content, private content is not shared-cached or indexed, and production release requires explicit owner approval.
