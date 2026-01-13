# Anish Miryala - Portfolio

A minimalist Jekyll-powered portfolio and blog focused on computer architecture, ASIC design, and hardware engineering.

## Tech Stack

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting
- **Markdown** - Content format
- **Minimal CSS** - No frameworks, custom styling

## Local Development

### Prerequisites

- Ruby (3.0+)
- Bundler
- Jekyll

### Setup

```bash
# Install dependencies
bundle install

# Run local server
bundle exec jekyll serve --baseurl ""

# Visit http://localhost:4000
```

## Adding Blog Posts

Create a new file in `_posts/` with the format `YYYY-MM-DD-title.md`:

```markdown
---
layout: default
title: "Your Post Title"
date: 2026-01-15 12:00:00 -0600
---

Your content here in Markdown...
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions.

### Automated Deployment

- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Workflow**: `.github/workflows/jekyll.yml`
- **Live URL**: `https://wickedstereo.github.io/Portfolio/`

### Setup GitHub Pages (One-time)

1. Go to repository Settings → Pages
2. Set **Source** to "GitHub Actions"
3. The site will automatically build and deploy on each push to main

### Manual Deployment

You can manually trigger a deployment from the Actions tab:
1. Go to Actions → Deploy Jekyll site to Pages
2. Click "Run workflow"

## Project Structure

```
Portfolio/
├── _config.yml          # Jekyll configuration
├── _layouts/
│   └── default.html     # Main template
├── _posts/              # Blog posts
├── assets/
│   ├── main.css        # Styles
│   ├── img/            # Images
│   └── project/        # Project thumbnails
├── index.md            # Home page
├── blog.html           # Blog archive
├── Gemfile             # Ruby dependencies
└── README.md           # This file
```

## License

Personal portfolio site. Content and code © 2026 Anish Miryala
