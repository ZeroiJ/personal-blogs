# zeroij/blog

Minimal developer blog — separate from portfolio. Static, no build, Cloudflare Pages.

## Design baseline

`AGENTS.md` is the rulebook (voice, visual direction, content rules).

Approved direction: **`sketches/005-portfolio-editorial/`** — editorial notebook
with the portfolio's visual DNA (cobalt, hairlines, Geist, grid, pixel glyph).

Preview:
```
xdg-open sketches/005-portfolio-editorial/index.html
xdg-open sketches/005-portfolio-editorial/article.html
```

## Repo state

```
AGENTS.md              rulebook
assets/css/site.css    shared design system (from sketch 005)
projects/              project pages (OWT so far)
sketches/005-...       approved homepage + article design
_headers _redirects    cloudflare config
404.html robots.txt favicon.svg
```

Pages in progress:
- `projects/opencode-warp-tui/` — project journal page (five sections)

The blog homepage and article pages are not built yet — per AGENTS.md,
real content only from real material.

## Deploy — Cloudflare Workers (static assets)
Connected: `personal-blogs.zeroij.workers.dev` (Git integration).

`wrangler.jsonc` binds the repo root as static assets with `404.html` as the
not-found handler. The next build picks it up automatically:

- Build command: `npx wrangler deploy` (Workers Builds default)
- Deploy command: `npx wrangler deploy`
- Custom domain (optional, when wanted): attach `blog.zeroij.dev` in Worker settings

Root `/` has no `index.html` yet, so it serves the styled 404 until the blog
homepage is built. The OWT project page lives at `/projects/opencode-warp-tui/`.
