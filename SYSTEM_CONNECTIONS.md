# JentoAI System Connections

This file explains how the `jentoai website` folder connects to the wider JentoAI setup.

## 1. Frontend Location

Public marketing frontend:

- [website/](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website)

Key files:

- [website/App.tsx](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/App.tsx)
- [website/Navbar.tsx](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/Navbar.tsx)
- [website/ImageAltTextGeneratorPage.tsx](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/ImageAltTextGeneratorPage.tsx)
- [website/altTextApi.ts](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/altTextApi.ts)
- [website/types.ts](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/types.ts)

Route in the public site:

- `jentoai.com/tool/image-alt-text-generator`

## 2. Frontend Deploy Surface

This website is intended for Cloudflare Pages style deployment.

Useful local files:

- [website/package.json](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/package.json)
- [website/scripts/prerender.js](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/scripts/prerender.js)
- [website/scripts/prerender-html.js](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/scripts/prerender-html.js)
- [website/public/sitemap.xml](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/public/sitemap.xml)

## 3. Alt Text Backend In This Folder

Standalone scaffold:

- [alt-text-api/](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/alt-text-api)

Important files:

- [alt-text-api/src/server.ts](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/alt-text-api/src/server.ts)
- [alt-text-api/src/routes/alt-text.ts](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/alt-text-api/src/routes/alt-text.ts)
- [alt-text-api/src/services/gemini.service.ts](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/alt-text-api/src/services/gemini.service.ts)
- [alt-text-api/src/services/usage.service.ts](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/alt-text-api/src/services/usage.service.ts)
- [alt-text-api/DEPLOY_AWS.md](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/alt-text-api/DEPLOY_AWS.md)

This backend scaffold is useful, but the broader production deployment knowledge currently lives in a separate repo.

## 4. Linked Production Repo

Production backend + AWS/PM2/nginx/Vertex conventions:

- [/home/jafar-tayyar-siddiqi/Downloads/email app/.kiro/specs/enrichment-saas](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas)

Use this repo when you need:

- AWS VM knowledge
- PM2 process names
- nginx behavior
- current Google credentials usage
- Vertex environment naming

Important files in that repo:

- [AI_GUIDE.md](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas/AI_GUIDE.md)
- [apps/api/src/voice-agent/config/env.js](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas/apps/api/src/voice-agent/config/env.js)
- [apps/api/src/voice-agent/services/llm/vertex-ai.service.js](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas/apps/api/src/voice-agent/services/llm/vertex-ai.service.js)
- [apps/api/google-credentials.json](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas/apps/api/google-credentials.json)
- [docs/specs/AI_IMAGE_ALT_TEXT_GENERATOR_SYSTEM_DESIGN.md](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas/docs/specs/AI_IMAGE_ALT_TEXT_GENERATOR_SYSTEM_DESIGN.md)

## 5. VM / Server Info

Known production VM from the linked repo:

- IP: `13.61.8.100`
- user: `ubuntu`
- SSH key path on local machine: `~/Downloads/aws-enrichment-key.pem`

These details are documented in:

- [AI_GUIDE.md](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas/AI_GUIDE.md)

## 6. Vertex / GCP Data

Current Vertex conventions come from the linked repo, not from guesswork:

- credentials env: `GOOGLE_APPLICATION_CREDENTIALS`
- project env: `VERTEX_AI_PROJECT`
- location env: `VERTEX_AI_LOCATION`
- common model: `gemini-1.5-flash`

The credential JSON path used in the linked repo is:

- [apps/api/google-credentials.json](/home/jafar-tayyar-siddiqi/Downloads/email%20app/.kiro/specs/enrichment-saas/apps/api/google-credentials.json)

Do not copy secret values into documentation.

## 7. What Was Borrowed From Where

For the image alt text tool:

- UI requirements and page structure:
  - from the spec doc in the linked repo
- frontend route integration:
  - from this repo's own `website/` routing/navigation/prerender patterns
- Vertex env naming and credential conventions:
  - from the linked enrichment repo

## 8. Quick Onboarding For Another Agent

If another coding agent gets only `/home/jafar-tayyar-siddiqi/Downloads/jentoai website`, they should read:

1. [AGENTS.md](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/AGENTS.md)
2. [SYSTEM_CONNECTIONS.md](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/SYSTEM_CONNECTIONS.md)
3. [website/App.tsx](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/App.tsx)
4. [website/ImageAltTextGeneratorPage.tsx](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/website/ImageAltTextGeneratorPage.tsx)
5. [alt-text-api/DEPLOY_AWS.md](/home/jafar-tayyar-siddiqi/Downloads/jentoai%20website/alt-text-api/DEPLOY_AWS.md)

That should make the overall system much easier to understand quickly.
