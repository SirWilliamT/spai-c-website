# SpAi-C Website - Deployment Guide

## Quick Start for GitHub Pages

This guide walks you through deploying the SpAi-C website to GitHub Pages.

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `spai-c-website`
3. Choose "Public" (required for free GitHub Pages)
4. Do NOT initialize with README (we already have one)

### Step 2: Configure the Project

1. Open `astro.config.mjs` in your text editor
2. Replace `yourusername` with your actual GitHub username:
   ```javascript
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/spai-c-website',
     // ... rest of config
   });
   ```

**Important Note on Local Testing:**
Because the project is configured with `base: '/spai-c-website'`, the local development server will serve the site at:
`http://localhost:4321/spai-c-website/`

If you try to access `http://localhost:4321/`, you will see a 404. Always use the full path including `/spai-c-website/` for local testing.

### Step 3: Push to GitHub

```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: SpAi-C website"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/spai-c-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. The deployment workflow will start automatically

### Step 5: Access Your Site

Your website will be live at:
```
https://yourusername.github.io/spai-c-website
```

---

## Troubleshooting Deployment Errors

### "Deprecated actions/upload-artifact: v3"
If you see this error, ensure your `.github/workflows/deploy.yml` uses `actions/upload-pages-artifact@v3` and `actions/deploy-pages@v4`. The latest version of this project already includes these fixes.

### "404 Not Found" on Links
If links aren't working:
1. Ensure you are using `import.meta.env.BASE_URL` in your Astro files for all internal links.
2. Check that the `base` in `astro.config.mjs` matches your GitHub repository name exactly.

---

## Configuration Before Deployment

### 1. Update Social Media Links
**File**: `src/layouts/Layout.astro` (footer) and `src/pages/about.astro`

### 2. Set Up Contact Form (Formspree)
**File**: `src/pages/contact.astro`

### 3. Add Streaming Links
**File**: `src/pages/index.astro` and `src/pages/discography/[id].astro`

---

## Local Development

```bash
pnpm install
pnpm dev
# Open http://localhost:4321/spai-c-website/
```
