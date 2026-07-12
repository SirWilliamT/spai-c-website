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

It may take 1-2 minutes for the first deployment. Refresh after a minute if you see a 404.

---

## Configuration Before Deployment

### 1. Update Social Media Links

**File**: `src/layouts/Layout.astro` (footer)

Replace the `#` placeholders with actual URLs:
```html
<a href="https://tiktok.com/@spai_c">TikTok</a>
<a href="https://threads.net/@spai_c">Threads</a>
<a href="https://youtube.com/@spai_c">YouTube</a>
<a href="https://x.com/spai_c">X</a>
<a href="https://instagram.com/spai_c">Instagram</a>
```

**File**: `src/pages/about.astro` (social icons)

Update the `href="#"` values in the social media links section.

### 2. Set Up Contact Form (Formspree)

1. Visit [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form ID (looks like: `f/abc123xyz`)
5. Open `src/pages/contact.astro`
6. Find the form tag and update:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### 3. Add Streaming Links

**File**: `src/pages/index.astro` (Home page)

Update the "Listen Now" button:
```html
<a href="https://spotify.com/album/..." class="...">
  Listen Now
</a>
```

**File**: `src/pages/discography/[id].astro` (Album detail)

Update the platform links array:
```javascript
const album = {
  // ...
  links: [
    { name: "Spotify", url: "https://spotify.com/album/..." },
    { name: "Apple Music", url: "https://music.apple.com/..." },
    { name: "Bandcamp", url: "https://bandcamp.com/..." },
    { name: "YouTube Music", url: "https://music.youtube.com/..." }
  ]
};
```

---

## Updating Content After Deployment

### Add News/Announcements

Edit `src/pages/news.astro` and add to the `news` array:
```javascript
const news = [
  {
    date: "July 20, 2026",
    title: "New Single Released",
    excerpt: "Check out the latest track...",
    category: "Release"
  },
  // ... existing news
];
```

Then push to GitHub:
```bash
git add .
git commit -m "Add new news post"
git push
```

The site will automatically rebuild and deploy.

### Update Album Information

Edit `src/pages/index.astro` to change:
- Album title and description
- Tracklist
- Album artwork (replace the image file)

### Update Artist Bio

Edit `src/pages/about.astro` to replace the Lorem Ipsum with actual biography.

---

## Troubleshooting

### Site shows 404 after deployment

**Cause**: Incorrect `base` path in `astro.config.mjs`

**Solution**: 
1. Verify your repository name is `spai-c-website`
2. Verify `base: '/spai-c-website'` in `astro.config.mjs`
3. Redeploy by pushing a commit

### Changes not showing up

**Cause**: GitHub Pages cache or workflow still running

**Solution**:
1. Wait 2-3 minutes for the workflow to complete
2. Check the "Actions" tab in your repository
3. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)

### Contact form not working

**Cause**: Formspree ID not set or incorrect

**Solution**:
1. Verify your form ID in `src/pages/contact.astro`
2. Test at [formspree.io](https://formspree.io) dashboard
3. Make sure form ID is correct format: `f/abc123xyz`

### Images not loading

**Cause**: Image path issues

**Solution**:
1. Ensure album art is at `src/assets/escape-velocity.jpg`
2. Run `pnpm build` locally to test
3. Check browser console for 404 errors

---

## Local Development

To test changes before pushing to GitHub:

```bash
# Install dependencies (first time only)
pnpm install

# Start development server
pnpm dev

# Open http://localhost:4321/spai-c-website
```

To build for production:
```bash
pnpm build
pnpm preview
```

---

## Custom Domain (Optional)

To use a custom domain instead of `yourusername.github.io/spai-c-website`:

1. Purchase a domain (e.g., `spai-c.com`)
2. In your repository Settings → Pages
3. Add your custom domain
4. Follow DNS configuration instructions
5. Update `site` in `astro.config.mjs` to your domain

---

## Performance Tips

- Images are automatically optimized to WebP
- CSS and JS are minified
- Static hosting is extremely fast
- Use GitHub Pages CDN for global distribution

---

## Support

For issues or questions:
- Check [Astro docs](https://docs.astro.build)
- Review [GitHub Pages docs](https://docs.github.com/en/pages)
- Contact: licensing@spai-c.com

---

**You're all set!** 🚀 Your SpAi-C website is ready to launch.
