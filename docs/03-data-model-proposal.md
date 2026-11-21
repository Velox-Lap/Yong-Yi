# 03 — Data Model Proposal

> **Approval gate:** This is conceptual only. No Supabase schema, migration, RLS policy, bucket, or production data has been created. Explicit Project Owner approval is required before implementation.

## Design goals
- Creator-owned content is private by default.
- Separate content records from binary assets.
- Represent authentic events without inventing details.
- Support draft, published, invited visibility, and archive states.
- Define audit and deletion behavior.
- Keep MVP schema smaller than the long-term feature set.

## Proposed MVP entities
| Entity | Purpose |
|---|---|
| profiles | App profile and role metadata linked to Auth user |
| letters | Digital letter content and presentation metadata |
| memory_collections | Curated memory groups |
| memories | Authored memory title, description, date metadata, verification state, visibility |
| assets | Storage object metadata, MIME type, dimensions, checksum, visibility |
| memory_assets | Many-to-many memory/asset relation |
| journey_milestones | Owner-approved ordered milestones |
| viewer_access | Explicit viewer grants and access status |
| user_preferences | Theme and accessibility preferences |
| audit_events | Sensitive creator and access-management actions |

A generic content_items table versus separate typed tables is an open design choice. Prefer the simpler model unless the abstraction has a concrete benefit.

## Proposed extensions (not MVP)
- story_chapters, story_nodes, story_edges: ordered/branching narrative.
- quest_definitions, quest_progress: quest rules and viewer progress.
- achievement_definitions, user_achievements: achievements and idempotent unlocks.
- collectible_definitions, user_collectibles: collectible catalog and earned items.
- game_sessions, game_results: mini-game session and validated results.
- notifications: in-app notifications and read state.
- consent_records: versioned consent and sharing choices.

Do not create extension tables until feature lifecycle, authorization, and deletion behavior are approved.

## Field conventions
- UUID primary keys unless justified otherwise.
- Timezone-aware UTC timestamps; display in the user's locale.
- Explicit owner_id linked to authenticated identity.
- Constrained status and visibility values.
- Unknown dates remain unknown; never invent values to satisfy required fields.
- Store opaque asset paths, not assumed-public URLs.
- Document soft-delete/hard-delete and cascading effects per entity.

## Conceptual relationships
Auth user → profile → collections → memories → memory-assets → assets. Profile owns milestones, viewer grants, preferences, and audit events. Final foreign-key layout remains to be reviewed.

## RLS and storage requirements
- Enable RLS on each user-content table before exposing it.
- Creator reads/writes only owned records.
- Invited viewers read only published records explicitly shared with them.
- Anonymous users read no private/invited rows.
- Viewers cannot mutate creator content.
- Audit rows are not editable by ordinary viewers.
- Storage access follows parent content visibility.
- Test allowed and denied operations separately.

Unpredictable UUIDs are not access controls. UI filtering is not access control.

## Media storage proposal
Use private buckets for private/invited media; validate MIME, extension, size, and signature where practical; use short-lived signed URLs; create derivatives safely; strip sensitive metadata where appropriate; define cleanup of abandoned uploads. Bucket names, size limits, formats, and URL expiry remain open decisions.

## Migration workflow
1. Present schema diff and data impact.
2. Explain RLS and storage policy changes.
3. Provide forward migration and rollback/recovery plan.
4. Verify backup assumptions.
5. Obtain explicit owner approval.
6. Apply to non-production first.
7. Run schema, RLS, and regression tests.
8. Record migration and approval.

## Owner decisions
- Single creator or multiple creators?
- Exact invited-viewer identity and sign-in method?
- Can viewers see all published memories or selected collections only?
- Is any public content allowed?
- Do dates support approximate ranges or unknown values?
- Does deleting a memory delete assets or detach them?
- Are viewer progress, scores, and collectibles persistent?
- What audit retention period is required?

## Acceptance
Final schema supports approved journeys, enforces least privilege in RLS/Storage, defines deletion semantics, and passes positive and negative authorization tests. This proposal authorizes no migration.
