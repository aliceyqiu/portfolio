# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Alice Qiu's personal design portfolio — a static website with no build step, package manager, or test suite. Open any `.html` file directly in a browser to preview.

## Development

**To preview locally:** Open `index.html` (or any project page) in a browser. No server or build step required.

**To deploy:** Push to the `main` branch of `origin` (https://github.com/aliceyqiu/portfolio.git).

## Architecture

### File Layout

- **`index.html`** — Landing page with project grid and navigation
- **`about.html`** — About page
- **`*.html`** (all other files) — Individual project case study pages (walkytalky, studyspace, snoozehood, etc.)
- **`style.css`** — Primary stylesheet; defines the design system (colors, typography, layout)
- **`archivestyle.css`** — Alternate/archive styles for older project pages
- **`fonts.css`** — Font-face declarations
- **`scripts/`** — All JS files:
  - `myscripts.js` — Drag-and-drop interaction for `.draggable` elements (mouse events + z-index management)
  - `salvattore.js` — Vendored masonry layout library used on gallery/photography pages
  - `loadgradual.js`, `cursortrail.js`, `labled-items-hotspots.js` — Per-page interaction scripts
- **`images/`** — All assets: project images, icons, and photography (`images/fotos/`)
- **`bootstrap-5.3.3/`** — Vendored Bootstrap (not actively used in main pages)

### Design System (style.css)

CSS variables and class conventions to follow when editing:

| Token | Value |
|-------|-------|
| Blue | `#0038ff` |
| Black | `#15151c` |
| Pink | `#ff22b4` |
| Body font | Fustat (Google Fonts) |
| Heading font | Syne (Google Fonts) |
| Mono font | Sometype Mono (Google Fonts) |

### Project Page Structure

Each case study page follows this consistent structure:
1. Sticky navigation header (work / resume / about links)
2. Project hero (title, subtitle, metadata: role, timeline, tools)
3. In-page section nav (overview, research, process, outcome)
4. Content sections with images
5. Footer with social links

When adding or editing a project page, mirror this structure from an existing page (e.g., `walkytalky.html`).
