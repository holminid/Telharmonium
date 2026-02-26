# Telharmonium Labs — Static Site

This repository is a static GitHub Pages site served from the repository root.

## Developer map
- Site root: `/`
- Entry file: `index.html`
- Styles: `assets/css/styles.css`
- Images: `assets/img/`
- JavaScript: none for the site runtime
- Generated output folder: none (no build step)

## Pages expectations
- Keep `index.html` in the root.
- Keep `CNAME` in the root when using the custom domain.
- GitHub Pages source should be `main` branch, `/ (root)`.

## Local preview
- Simplest: open `index.html` directly in a browser.
- Better: run a local static server from repo root:
  - `python3 -m http.server 8000`
  - Open `http://localhost:8000`

## What to edit
- Logo size/position: `.logo-combined` in `assets/css/styles.css`
- Heading/text wrapping: `.brand` and `.tagline` in `assets/css/styles.css`
- Contact/CTA line: `.signup` in `assets/css/styles.css`
- Background tile behavior: `body` + media queries in `assets/css/styles.css`

## Asset notes
- Current active logo file: `assets/img/logo-combined.png`
- Current tile files: `assets/img/tile512.*` and `assets/img/tile1024.*`
- Ensure image path case matches exactly (GitHub Pages is case-sensitive).
