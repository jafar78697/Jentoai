# JentoAI Website Agent Guide

Read this first if you are an AI coding agent working in this folder.

## Purpose

This repository contains the public JentoAI marketing website and a separate alt-text backend scaffold.
It is connected to a second repository that holds the production CRM/API stack and the current Vertex AI configuration.

## Folder Map

- `website/`
  - Main public frontend for `jentoai.com`
  - React + Vite
  - Public tool route includes `tool/image-alt-text-generator`
- `alt-text-api/`
  - Standalone backend scaffold for the image alt text tool
  - Node + Express + TypeScript
  - AWS deployment notes live in `alt-text-api/DEPLOY_AWS.md`
- `old_data/`
  - Historical notes only

## Frontend Source Of Truth

The public website frontend lives in:

- `website/App.tsx`
- `website/Navbar.tsx`
- `website/ImageAltTextGeneratorPage.tsx`
- `website/altTextApi.ts`
- `website/types.ts`

Build commands:

- `cd website && npm run dev`
- `cd website && npm run build`

## Website Route Notes

The image alt text tool page is served from:

- `/tool/image-alt-text-generator`

Supporting route/prerender/sitemap files:

- `website/App.tsx`
- `website/scripts/prerender.js`
- `website/scripts/prerender-html.js`
- `website/public/sitemap.xml`

## Backend Reality

There are two backend contexts:

1. `alt-text-api/` in this repo
   - standalone scaffold for the alt text tool
   - useful for isolated development

2. Production AWS backend actually lives in another repo:
   - `/home/jafar-tayyar-siddiqi/Downloads/email app/.kiro/specs/enrichment-saas`

That second repo is the important production source for:

- AWS VM deployment flow
- PM2 process management
- nginx routing
- Vertex AI credentials conventions
- existing Google credentials file

## Production AWS VM

Primary production server noted in the linked repo:

- VM IP: `13.61.8.100`
- SSH user: `ubuntu`
- SSH key path on local machine: `~/Downloads/aws-enrichment-key.pem`

Before touching the VM, read:

- `/home/jafar-tayyar-siddiqi/Downloads/email app/.kiro/specs/enrichment-saas/AI_GUIDE.md`

That file documents:

- deployment expectations
- PM2 services
- hotfix workflow
- database constraints

## Vertex / Google Cloud Source Of Truth

Do not guess Vertex settings from this repo alone.
Use the linked enrichment repo as the source of truth.

Important files there:

- `/home/jafar-tayyar-siddiqi/Downloads/email app/.kiro/specs/enrichment-saas/apps/api/src/voice-agent/config/env.js`
- `/home/jafar-tayyar-siddiqi/Downloads/email app/.kiro/specs/enrichment-saas/apps/api/src/voice-agent/services/llm/vertex-ai.service.js`
- `/home/jafar-tayyar-siddiqi/Downloads/email app/.kiro/specs/enrichment-saas/apps/api/google-credentials.json`

Current known conventions from that repo:

- `GOOGLE_APPLICATION_CREDENTIALS`
- `VERTEX_AI_PROJECT`
- `VERTEX_AI_LOCATION`
- model family around `gemini-1.5-flash`

## Credential Handling

Do not print or commit raw secrets.

Useful places to inspect configuration paths:

- `website/.env.example`
- `.env.aws.local`
- linked enrichment repo `.env`
- linked enrichment repo `apps/api/google-credentials.json`

If you need to understand where values come from, document file paths and env variable names, not secret contents.

## Tool Provenance

The image alt text tool in `website/` was assembled from three sources:

1. Product/spec requirements:
   - `/home/jafar-tayyar-siddiqi/Downloads/email app/.kiro/specs/enrichment-saas/docs/specs/AI_IMAGE_ALT_TEXT_GENERATOR_SYSTEM_DESIGN.md`
2. Frontend integration patterns from this repo's `website/`
3. Vertex/backend conventions from the linked enrichment repo

## Read Order For New Agents

1. `AGENTS.md` in this folder
2. `SYSTEM_CONNECTIONS.md` in this folder
3. `website/package.json`
4. `website/App.tsx`
5. linked repo `AI_GUIDE.md` if deployment/backend work is needed

## Safety

- Do not assume `alt-text-api/` is the live production backend without checking
- Do not modify unrelated AWS services
- Do not expose credentials in commits or docs
- Prefer documenting where config lives rather than copying secret values
