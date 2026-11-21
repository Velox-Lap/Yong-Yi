# 12 — Environment Configuration

**Status:** Template only. No real credentials are stored in this repository.

## Environment separation
Use separate development, preview, and production environments where feasible. Never point local tests at production data by default.

## Variable template
Create a local .env.local and fill it only with values from the approved project. Do not commit the file.

    NEXT_PUBLIC_SITE_URL=http://localhost:3000
    NEXT_PUBLIC_SUPABASE_URL=
    NEXT_PUBLIC_SUPABASE_ANON_KEY=

    # Server-only; do not create/use without a reviewed requirement.
    SUPABASE_SERVICE_ROLE_KEY=

The service-role variable is shown as a warning for possible future server operations only. Do not create, copy, or use it unless a concrete need and least-privilege design are reviewed. Ordinary user access should use a publishable/anon client key with RLS.

## Rules
- Never commit actual values.
- Do not paste credentials into issues, PRs, chat, screenshots, or logs.
- Never expose privileged keys with NEXT_PUBLIC_ prefix.
- Validate required variables at startup with safe error messages.
- Document variables required per environment.
- Rotate credentials after suspected exposure; deleting a commit is insufficient.
- Use Vercel environment variables or managed secret store for deployed environments.

## Future setup checklist
- [ ] Owner selects Supabase project.
- [ ] Owner approves dev/preview/production separation.
- [ ] Auth providers and redirect URLs reviewed.
- [ ] RLS and Storage policies approved before content access.
- [ ] Vercel project and Git connection verified.
- [ ] Preview variables configured without production secrets.
- [ ] Production variables configured only after production gate.
- [ ] Secret scanning enabled.

## Key naming
Provider terminology can change. At implementation time, verify current Supabase guidance and prefer the current publishable-key model where available. Legacy anon/service_role terminology may exist in older projects. Privileged credentials remain server-only regardless of name.
