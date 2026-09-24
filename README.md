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

## Deploy — Cloudflare Pages (when built)
1. Pages → Create → Connect to Git → `ZeroiJ/personal-blogs`
2. Framework preset: **None**. Build command: **(empty)**. Output directory: **`/`**
3. Custom domain: `blog.zeroij.dev` → Enforce HTTPS
