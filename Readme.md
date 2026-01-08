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

Push to GitHub and enable Pages in repository settings:
- Settings → Pages
- Source: Deploy from a branch (main)

Your site will be live at `https://wickedstereo.github.io/Portfolio/`

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
