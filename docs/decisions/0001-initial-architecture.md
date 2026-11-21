# ADR 0001 — Initial Architecture Baseline

- **Status:** Proposed; owner review required for material changes
- **Date:** 2026-11-21
- **Owner:** Velox
- **Context:** YONG-YI Master Project Specification v1.0

## Context
The product combines private content management, media, narrative/game systems, and optional 3D. It needs a maintainable foundation that can grow without premature complexity.

## Decisions
1. **Modular monolith initially.** One Next.js application with explicit feature boundaries is simpler to build and operate than microservices at this stage.
2. **Supabase is the proposed backend.** Auth, PostgreSQL, and Storage are intended; project selection, environments, schema, RLS, and bucket policies remain unapproved implementation decisions.
3. **3D is progressive enhancement.** Three.js/R3F/Drei are optional; core content remains usable without WebGL.
4. **Server-side authorization is authoritative.** Client UI state is not a security boundary.
5. **Documentation-first delivery.** Phase 0 establishes scope, acceptance criteria, and approval gates before data and production changes.
6. **Authentic content only.** Personal memories/events must be owner-provided or confirmed; demo data is labeled.

## Consequences
Benefits: lower operational complexity, clear module boundaries, strong privacy/content integrity, ability to defer expensive 3D/AI.

Trade-offs: requires discipline to keep modular boundaries clean; RLS/storage require careful tests; Creator Studio/rewards need further schema and workflow decisions.

## Open decisions
- Invited viewer identity and access model.
- Whether anonymous public content is permitted.
- MVP schema and publication lifecycle.
- Supabase project and environment separation.
- Asset formats, upload limits, and retention.
- Whether viewer progress is persisted.
- Domain, deployment target, production launch criteria.

## Approval rule
This ADR records a proposed baseline only. Material architecture, schema, security, recurring-cost, or production changes require explicit Project Owner approval and a subsequent ADR.
