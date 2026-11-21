# 11 — Coding Standards

## General
- TypeScript strict mode; avoid any. If unavoidable, isolate and explain it.
- Prefer small composable functions and explicit interfaces.
- Keep components focused on presentation; put business rules in domain/service layers.
- Avoid premature abstraction and unnecessary dependencies.
- Centralize typed configuration.

## React and Next.js
- Prefer server components where appropriate.
- Use client components only for interactivity, browser APIs, or client state.
- Never import secrets or privileged clients into client components.
- Avoid duplicate data fetching.
- Define loading, error, empty, and not-found states.
- Client-side hiding is not authorization.
- Keep private content out of metadata.

## Data and validation
- Validate untrusted mutations at server boundary.
- Use explicit select lists and typed return values.
- Centralize Supabase clients by runtime and privilege.
- Use migrations for schema changes; never manually edit production schema outside approved plan.
- Handle date/time values explicitly and serialize consistently.
- Make retriable side effects idempotent.

## UI and accessibility
- Prefer semantic HTML and shared accessible primitives.
- Buttons perform actions; links navigate.
- Icon-only controls have accessible names.
- Use visible focus and logical heading hierarchy.
- Support reduced motion and keyboard.
- Do not rely on color alone for state.
- Supply suitable image alt text.

## Errors and logging
- Handle expected failures at correct boundaries.
- Show user-safe messages.
- Log enough metadata to debug, without secrets/private content.
- Never return raw stack traces or provider internals.
- Use request IDs for correlation.

## Testing
- Unit-test rules and validation.
- Component-test accessible interactions.
- Integration-test auth/persistence boundaries.
- E2E-test critical journeys.
- Include negative authorization tests.
- Avoid snapshots as sole behavior test.
- Use deterministic synthetic fixtures.

## Repository hygiene
- Commit source, docs, lockfiles, safe examples.
- Ignore local env, build artifacts, logs, caches, and generated secrets.
- Never commit real private media or memories.
- Update docs when behavior/interfaces/env/operations change.
- Use descriptive commit prefixes: feat, fix, docs, test, refactor, chore.

## Pull request checklist
- [ ] Scope and acceptance criteria clear.
- [ ] No unrelated changes.
- [ ] Types, lint, and tests pass.
- [ ] Server authorization and RLS are in place where applicable.
- [ ] Keyboard, focus, contrast, reduced motion reviewed.
- [ ] Loading, empty, and error states covered.
- [ ] No secrets or real private content.
- [ ] Docs updated.
- [ ] Cost, architecture, schema, security, and deployment impacts disclosed.
