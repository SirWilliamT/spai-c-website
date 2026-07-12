# SpAi-C Official Website

A modern, elegant static website for the digital AI music artist SpAi-C, built with **Astro** and **Tailwind CSS**, optimized for GitHub Pages deployment.

## Features

- **Sticky Navigation**: Always-accessible menu bar with smooth scrolling
- **Modern Design**: Dark space-themed aesthetic with purple accents
- **Responsive Layout**: Fully responsive design for mobile, tablet, and desktop
- **Fast Performance**: Static site generation with optimized images
- **Custom Typography**: AudioWide font for artist name, Oxanium for UI elements
- **Album Showcase**: Dedicated pages for album details and tracklists
- **News Section**: Latest Transmission blog for announcements
- **Discography Grid**: Expandable album grid layout
- **Contact Form**: Integrated with Formspree for email submissions
- **Social Links**: Quick access to TikTok, Instagram, YouTube, X, and Threads

## Pages

- **Home**: Featured album with tracklist and listen links
- **Latest Transmission**: News and announcements
- **Discography**: Album grid with detail pages
- **About**: Artist bio with social media links
- **Contact**: Licensing info, press kit, and contact form

## Tech Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS 4.x
- **Fonts**: Google Fonts (Audiowide, Oxanium, Inter)
- **Image Optimization**: Sharp
- **Deployment**: GitHub Pages
- **Package Manager**: pnpm

## Local Development

### Prerequisites

- Node.js 18+ (recommended 20+)
- pnpm 9+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Open http://localhost:4321 in your browser
```

### Build

```bash
# Create production build
pnpm build

# Preview production build locally
pnpm preview
```

## GitHub Pages Deployment

### Initial Setup

1. Create a new repository named `spai-c-website` on GitHub
2. Clone this project into your repository
3. Update `astro.config.mjs` with your GitHub username:
   ```javascript
   site: 'https://yourusername.github.io',
   base: '/spai-c-website',
   ```

### Deployment Steps

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

2. Go to your repository settings → Pages
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
   - The workflow will automatically run on push

4. Your site will be live at: `https://yourusername.github.io/spai-c-website`

## Configuration

### Formspree Integration (Contact Form)

The contact form uses Formspree for email handling. To enable it:

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a new form
3. Copy your form ID
4. Update the form action in `src/pages/contact.astro`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Social Media Links

Update social media links in:
- `src/layouts/Layout.astro` (footer links)
- `src/pages/about.astro` (About page social icons)

Replace `#` with actual URLs:
- TikTok: `https://tiktok.com/@yourusername`
- Instagram: `https://instagram.com/yourusername`
- YouTube: `https://youtube.com/@yourusername`
- X (Twitter): `https://x.com/yourusername`
- Threads: `https://threads.net/@yourusername`

### Album Links

Update "Listen Now" button and platform links:
- `src/pages/index.astro` - Home page listen link
- `src/pages/discography/[id].astro` - Album detail page links

Replace with actual streaming platform URLs:
- Spotify
- Apple Music
- Bandcamp
- YouTube Music

## Customization

### Colors & Theme

Edit `src/styles/global.css` to customize:
- Background colors (space black, deep space)
- Accent colors (currently purple)
- Font families

### Album Information

Edit `src/pages/index.astro` to update:
- Album title and description
- Tracklist
- Album artwork (replace `src/assets/escape-velocity.jpg`)

### News/Blog Posts

Add new news items in `src/pages/news.astro` by editing the `news` array.

### Artist Bio

Update the biography in `src/pages/about.astro` with actual content.

## File Structure

```
spai-c-website/
├── src/
│   ├── assets/          # Images and media
│   ├── components/      # Reusable components
│   ├── layouts/         # Layout templates
│   ├── pages/           # Page routes
│   │   ├── index.astro  # Home page
│   │   ├── about.astro  # About page
│   │   ├── contact.astro # Contact page
│   │   ├── news.astro   # News page
│   │   └── discography/ # Discography pages
│   └── styles/          # Global styles
├── .github/
│   └── workflows/       # GitHub Actions
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind configuration
└── package.json         # Dependencies
```

## Performance Optimization

- Images are automatically optimized to WebP format
- CSS is minified and tree-shaken
- JavaScript is minimal (mostly static HTML)
- Fonts are loaded from Google Fonts CDN
- Build output is highly cacheable

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Build fails with image optimization error
```bash
# Ensure Sharp is installed
pnpm add sharp
```

### CSS warnings about @import
This is a minor warning and doesn't affect functionality. To suppress, move font imports to HTML head.

### GitHub Pages showing 404
- Verify repository name matches `base` in `astro.config.mjs`
- Check GitHub Pages settings point to GitHub Actions
- Ensure workflow file exists in `.github/workflows/`

## Future Enhancements

- [ ] Add more albums to discography
- [ ] Create press kit download
- [ ] Add artist photos to About page
- [ ] Implement blog post system for news
- [ ] Add music player widget
- [ ] Analytics integration
- [ ] Newsletter signup

## License

© 2026 SpAi-C. All rights reserved.

## Support

For questions or issues, please contact: licensing@spai-c.com
