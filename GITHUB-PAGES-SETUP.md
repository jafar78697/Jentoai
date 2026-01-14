# 🚀 GitHub Pages Deployment Guide

## Why Your Site Isn't Showing

Your site uses React + TypeScript + Vite, which needs to be **built** before deployment. GitHub Pages was serving your raw source files instead of the compiled website.

## ✅ What I Fixed

1. **Updated `vite.config.ts`** - Added `base: '/Jentoai/'` for correct GitHub Pages paths
2. **Created `.github/workflows/deploy.yml`** - Automated build and deployment

## 📋 Setup Steps

### Step 1: Add Your Secrets to GitHub

Your site needs API keys to work. Add them as GitHub Secrets:

1. Go to your repository: `https://github.com/jafar78697/Jentoai`
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

| Secret Name | Value |
|-------------|-------|
| `GEMINI_API_KEY` | Your Gemini API key |
| `VITE_BOOKING_WEBHOOK_URL` | Your n8n booking webhook URL |
| `VITE_CHAT_WEBHOOK_URL` | Your n8n chat webhook URL |

### Step 2: Enable GitHub Pages

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Save

### Step 3: Push Your Changes

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow run
3. Once complete (green checkmark), your site will be live!

## 🌐 Your Site URL

After deployment completes:
**https://jafar78697.github.io/Jentoai/**

## 🔄 How It Works Now

Every time you push to the `main` branch:
1. GitHub Actions automatically runs
2. Installs dependencies (`npm ci`)
3. Builds your React app (`npm run build`)
4. Deploys the `dist` folder to GitHub Pages

## 🛠️ Manual Build (Optional)

If you want to build locally first:

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Preview the build
npm run preview
```

The built files will be in the `dist` folder.

## ⚠️ Important Notes

1. **Don't commit the `dist` folder** - It's auto-generated and already in `.gitignore`
2. **Secrets are required** - Without them, the build will work but features won't function
3. **First deployment takes 2-5 minutes** - Be patient!

## 🐛 Troubleshooting

### Build fails in GitHub Actions
- Check the Actions tab for error messages
- Verify all three secrets are added correctly
- Make sure secret names match exactly (case-sensitive)

### Site shows but features don't work
- Verify your API keys and webhook URLs are correct in GitHub Secrets
- Check browser console for errors (F12)

### 404 errors on page refresh
- This is normal for single-page apps on GitHub Pages
- Users should navigate using the site's navigation, not direct URLs

## ✨ Next Steps

1. Add the three secrets to GitHub
2. Push these changes
3. Wait for the Actions workflow to complete
4. Visit your live site!

Your site will automatically rebuild and redeploy every time you push changes to the `main` branch.
