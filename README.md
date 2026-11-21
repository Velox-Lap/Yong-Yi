# YONG-YI — Ultimate Interactive Digital Experience

> A private-by-default, personalized digital world for stories, memories, fantasy environments, and shared experiences.

## Project status

- **Current phase:** Phase 0 — Requirements & Architecture
- **Specification baseline:** Master Project Specification v1.0
- **Repository:** `Velox-Lap/Yong-Yi`
- **Default branch:** `main`
- **Implementation status:** Documentation baseline only; application code has not started.
- **Data integrity:** No real memories, dates, messages, photographs, or relationship events are to be fabricated.

## Product pillars

1. Digital Love Letter
2. Interactive Memory Museum
3. Personal Fantasy World
4. Interactive Relationship Journey

Supporting capabilities are introduced incrementally: memory gallery, narrative and quest systems, achievements and collectibles, mini-games, audio ambience, optional 3D environments, and personalization.

## Documentation map

| Document | Purpose |
|---|---|
| [Project Charter](docs/00-project-charter.md) | Vision, goals, scope, non-goals, and principles |
| [Product Requirements](docs/01-prd.md) | Personas, user journeys, functional and non-functional requirements |
| [Architecture](docs/02-architecture.md) | System boundaries, modules, runtime flow, and technology decisions |
| [Data Model Proposal](docs/03-data-model-proposal.md) | Draft entities and relationships; not yet approved or migrated |
| [API Contracts](docs/04-api-contracts.md) | Proposed application interfaces and validation rules |
| [Security & Privacy](docs/05-security-privacy.md) | Threat model, access control, data handling, and operational controls |
| [UX & Design System](docs/06-ux-design-system.md) | Visual language, design tokens, components, and responsive rules |
| [Accessibility & Performance](docs/07-accessibility-performance.md) | WCAG 2.2 AA target and performance strategy |
| [QA & Release](docs/08-qa-release.md) | Test strategy, release gates, acceptance criteria, and Definition of Done |
| [Roadmap](docs/09-roadmap.md) | Phases, deliverables, approval gates, and implementation prompts |
| [AI Agent Governance](docs/10-ai-agent-governance.md) | Autonomous Developer permissions and escalation rules |
| [Coding Standards](docs/11-coding-standards.md) | Code quality, repository hygiene, and review conventions |
| [Environment Configuration](docs/12-environment.md) | Environment variables and secret-handling rules |
| [Decision Log](docs/decisions/0001-initial-architecture.md) | Initial architecture decisions and unresolved decisions |

## Operating principles

- Build a meaningful, usable core before adding advanced 3D or AI features.
- Keep private content private by default and enforce authorization on the server and database.
- Treat the database model in Phase 0 as a proposal only. No schema migration may be applied without owner approval.
- Use placeholders for missing personal content and label them clearly.
- Prefer progressive enhancement: the core experience must remain usable without WebGL, audio, or motion.
- Keep modules independently understandable, but begin with a maintainable modular monolith rather than premature microservices.
- Every phase must have measurable acceptance criteria and a documented Definition of Done.

## Current limitations and cautions

This repository is currently public. Do not commit real personal content, private photographs, access tokens, service-role keys, passwords, or other secrets. The repository visibility has not been changed. Make it private before authentic private content or sensitive project configuration is added.

Phase 0 creates documentation only. It does not create a deployed application, provision Supabase resources, change authentication settings, create database tables, or incur new recurring costs.

## Getting started

Read the Project Charter, PRD, Architecture, Security & Privacy, and Roadmap in that order. Resolve the open owner decisions before Phase 1 implementation.

## Change control

Changes to architecture, database schema, security policy, production deployment, destructive data operations, and recurring-cost services require explicit approval from the Project Owner (Velox). Routine documentation updates and non-destructive tests may be performed by the Autonomous Developer within the approved scope.
