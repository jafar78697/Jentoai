# AWS Deployment Notes

This tool is designed for:

- Frontend: Cloudflare Pages
- Backend: AWS VM or EC2 with Node.js, PM2, and Nginx
- AI provider: Google Vertex AI only

## Recommended production shape

1. Cloudflare Pages serves `jentoai.com`
2. Tool page lives at `https://jentoai.com/tool/image-alt-text-generator`
3. API runs on AWS at either:
   - `https://api.jentoai.com/api/alt-text`
   - or a reverse proxy path from the same domain
4. Vertex AI is called from the AWS backend using a Google service account

## Required environment variables on AWS

```bash
PORT=8080
NODE_ENV=production
GOOGLE_CLOUD_PROJECT=your-google-cloud-project
GOOGLE_CLOUD_LOCATION=global
GOOGLE_GENAI_USE_ENTERPRISE=true
GOOGLE_APPLICATION_CREDENTIALS=/opt/jentoai/secrets/google-service-account.json
VERTEX_MODEL=gemini-2.5-flash
IP_HASH_SALT=replace-with-random-secret
ALLOWED_ORIGINS=https://jentoai.com,https://www.jentoai.com
DISABLE_FIRESTORE=false
```

## PM2

```bash
npm install
npm run build
pm2 start dist/server.js --name alt-text-api
pm2 save
```

## Nginx reverse proxy example

```nginx
server {
  server_name api.jentoai.com;

  location / {
    proxy_pass http://127.0.0.1:8080;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

## Frontend config

Set this in Cloudflare Pages:

```bash
VITE_ALT_TEXT_API_URL=https://api.jentoai.com/api/alt-text
```

## Google auth on AWS

Use a Google service account with Vertex AI access and Firestore access. On AWS, this usually means storing the JSON key file securely on the VM and pointing `GOOGLE_APPLICATION_CREDENTIALS` to it.

Because the AWS access keys were previously exposed in chat, rotate them before production use.
