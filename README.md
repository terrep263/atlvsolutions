# ATLV Solutions

Company site for ATLV Solutions LLC — atlvsolutions.net

AI and automation for small business, built into software that actually runs it.

## Stack

- Next.js 15 (App Router, JavaScript)
- No CSS framework — a single design-token stylesheet in `app/globals.css`
- Deployed on Coolify from this repo, Docker build, standalone output

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, services, work, scope, intake agent |
| `/about` | Background and method |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_AGENT_URL` | yes, for intake | Hosted URL of the Release0 intake agent. Inlined at build time — a change requires a redeploy. |

Without it the intake panel falls back to an email prompt rather than breaking.

## Local

```bash
npm install
npm run dev
```

## Brand

The wordmark is inlined as a data URI in `lib/brand.js` and the favicon is an SVG in `public/`, so the repo stays text-only.
