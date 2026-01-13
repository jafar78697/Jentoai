# Jento AI - Setup Guide

## 🔐 Security Configuration

This project uses environment variables to protect sensitive API keys and webhook URLs from being exposed in the public repository.

## 📋 Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your actual values:

```env
# Gemini API Key for AI features
GEMINI_API_KEY=your_actual_gemini_api_key_here

# n8n Webhook URLs
VITE_BOOKING_WEBHOOK_URL=your_actual_booking_webhook_url
VITE_CHAT_WEBHOOK_URL=your_actual_chat_webhook_url
```

### 4. Get Your API Keys

#### Gemini API Key:
1. Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy and paste it into `.env.local`

#### n8n Webhook URLs:
1. Set up your n8n workflows
2. Get the webhook URLs from your n8n instance
3. Add them to `.env.local`

### 5. Run the Development Server

```bash
npm run dev
```

Your app will be available at `http://localhost:3000`

## 🚀 Deployment

### GitHub Pages / Vercel / Netlify

When deploying, make sure to add your environment variables in the platform's settings:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Build & Deploy → Environment
- **GitHub Pages**: Use GitHub Secrets for Actions

## ⚠️ Important Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Never share your API keys** publicly
3. **Use different keys** for development and production
4. **Rotate keys regularly** if they're exposed

## 📁 Files Protected

The following sensitive data has been moved to environment variables:

- ✅ Gemini API Key
- ✅ n8n Booking Webhook URL
- ✅ n8n Chat Webhook URL

## 🛠️ Troubleshooting

### "API Key not found" error
- Make sure `.env.local` exists in the root directory
- Verify the variable names match exactly (case-sensitive)
- Restart the dev server after changing `.env.local`

### Webhooks not working
- Check that your n8n workflows are active
- Verify the webhook URLs are correct
- Ensure CORS is enabled on your n8n instance

## 📞 Support

For issues or questions, contact: info@jentoai.com
