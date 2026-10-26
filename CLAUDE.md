# CLAUDE.md — niwav-web

> **Runs:** owned by the Niwav project (class 2). Work on this repo starts in a Claude cloud thread on it; nothing here needs the Mac mini. Read this file first; work on a branch and open a PR.
> **Golden dir:** none (no host). The repo on GitHub is the master copy of the site.
> **Host-bound steps:** none.
> **Outputs:** the public site https://niwav.in, built by GitHub Actions on merge to `main`. Rohit merges.
> **Infra:** GitHub Pages, custom domain `niwav.in` (`s2a/web/public/CNAME`); DNS at Cloudflare. Registry row: `rohitdubey19/Niwav-DevOps` `01-project-map.md`.

## Goal
The public website of Niwav: who the company is, what it offers, and the privacy policy and terms of service.

## Source of truth
- This file holds the rules. The Niwav project instructions point here; if they disagree, this file wins and the instructions get fixed.
- Company facts (structure, offers, policies) come from the Niwav project's private repo and are copied here only as public wording Rohit approves.
- `scpro-project.yaml`: CyPhyS (SCPro) project descriptor, stage s2a only.

## Working rules
- **This repo is public. Everything merged here is published.** Never copy internal company documents, client names or engagement details, or anything from the private repos.
- Branch + PR to `main`; Rohit merges. Never push to `main`.
- Docs-only commits (this file, README) carry `[skip ci]` in the commit and the squash title.
- The privacy policy and terms are legal text: change them only with Rohit's wording.
- No analytics, trackers or third-party scripts without Rohit's decision.

## Secrets
None. Pages deploys with the workflow's own token.

## Must not break
- `s2a/web/public/CNAME` (`niwav.in`) and the Pages custom domain; dropping either opens a takeover gap.
- The `/privacy` and `/terms` routes stay at those paths (published policy URLs may be registered with outside services).

## CI quick reference
`deploy-pages.yml`: push to `main` that touches `s2a/web/src`, `public`, `index.html`, `package*.json`, `vite.config.ts`, `tailwind.config.js` or the workflow builds and deploys; manual run via workflow_dispatch. Local: `cd s2a/web && npm ci && npm run build`.
