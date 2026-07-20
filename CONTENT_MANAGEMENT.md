# SpAi-C Website - Content Management Guide

This guide explains how to update the content of your website. Most updates are centralized to make management as easy as possible.

## 1. Updating Albums & Tracklists
All album information is stored in a single "Source of Truth" file.

**File**: `src/data/albums.ts`

To update a tracklist or add a new album:
1. Open the file.
2. Find the `albums` array.
3. Edit the `tracklist` strings or add a new album object to the array.
4. The **Home Page** and **Discography** will update automatically.

```typescript
// Example: Adding a track
tracklist: [
  "SpAi-C Station",
  "Gravi-tea",
  "Connected",
  // Add new tracks here...
],
```

## 2. Posting News (Latest Transmission)
News items are managed directly in the news page.

**File**: `src/pages/news.astro`

To add a new transmission:
1. Find the `news` array at the top of the file.
2. Add a new object to the top of the list:
```javascript
{
  date: "July 20, 2026",
  title: "New Transmission Title",
  excerpt: "A brief summary of the news...",
  category: "Announcement"
},
```

## 3. Updating Bio & Social Media
The artist biography and social links are located in two places.

**Biography**: `src/pages/about.astro`
- Replace the Lorem Ipsum text in the `<p>` tags with SpAi-C's actual story.

**Social Media Links**: 
- **Footer (All pages)**: `src/layouts/Layout.astro`
- **About Page Icons**: `src/pages/about.astro`
- Search for `href="#"` and replace the `#` with your actual URLs (TikTok, X, Instagram, etc.).

## 4. Changing Images
- **Album Art**: Replace `src/assets/escape-velocity.jpg` with a new image of the same name, or add a new image and update the import in `src/data/albums.ts`.
- **Artist Photos**: Add images to `src/assets/` and reference them in `src/pages/about.astro`.

## 5. Deployment Workflow
Once you've made your changes:
1. Save the files.
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update tracklist and bio"
   git push
   ```
3. GitHub Actions will automatically build and deploy the changes within 1-2 minutes.

---

**Tip**: Always test locally first using `pnpm dev` and visiting `http://localhost:4321/spai-c-website/` to ensure everything looks perfect before pushing!
