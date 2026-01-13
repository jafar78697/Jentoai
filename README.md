<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Jento AI - The Autonomous Workflow Engine

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1gFWt20WhFKVA62oZNdGHES2dWe9jdkoH

## 🔐 Security First

This project uses environment variables to protect sensitive API keys and webhook URLs. **Never commit your `.env.local` file!**

## 🚀 Quick Start

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your actual API keys and webhook URLs.

3. **Run the app:**
   ```bash
   npm run dev
   ```

## 📖 Detailed Setup

For complete setup instructions including how to get API keys and configure webhooks, see [SETUP.md](SETUP.md)

## 🛡️ What's Protected

- ✅ Gemini API Key
- ✅ n8n Webhook URLs
- ✅ All sensitive configuration

## 📁 Important Files

- `.env.local` - Your actual secrets (never commit this!)
- `.env.example` - Template for environment variables
- `.gitignore` - Ensures sensitive files aren't committed

## 🌐 Deployment

When deploying to production, add your environment variables in your hosting platform's settings (Vercel, Netlify, etc.)
