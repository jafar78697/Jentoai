# 📦 Install Dependencies

The TypeScript errors you're seeing are because the React type definitions aren't installed yet.

## Quick Fix

Run this command in your project folder:

```bash
npm install
```

This will install all the required dependencies including:
- `react` and `react-dom` (the actual React libraries)
- `@types/react` and `@types/react-dom` (TypeScript type definitions)
- `@types/node` (Node.js type definitions)
- `vite` (build tool)
- `typescript` (TypeScript compiler)

## After Installation

The TypeScript errors will disappear and you can:

1. **Run locally:**
   ```bash
   npm run dev
   ```
   Visit: `http://localhost:3000`

2. **Build for production:**
   ```bash
   npm run build
   ```
   Creates optimized files in the `dist` folder

3. **Deploy to GitHub Pages:**
   ```bash
   git add .
   git commit -m "Add React types and deploy"
   git push origin main
   ```

## What I Fixed

✅ Added `@types/react` and `@types/react-dom` to package.json  
✅ Removed unused `@google/genai` dependency  
✅ Removed unused imports from App.tsx  
✅ All API dependencies removed  

The errors are just TypeScript complaining about missing type definitions. Once you run `npm install`, everything will work perfectly!
