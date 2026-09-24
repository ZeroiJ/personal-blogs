# zeroij/notes

Personal developer blog — separate from the portfolio. Static HTML/CSS, no build,
no JS, deployed as a Cloudflare Worker serving static assets.

Live: **https://personal-blogs.zeroij.workers.dev**

`AGENTS.md` is the rulebook: voice, visual direction, content rules. Read it
before writing anything here.

## The site

```
/                                  blog homepage (identity + current work + writing)
/projects/opencode-warp-tui/       OWT project journal (five sections)
/feed.xml                          RSS (real posts only)
/sitemap.xml
```

- Design language: editorial notebook with the portfolio's DNA — cobalt
  `#0038FF`, 1px hairlines, Geist + Geist Mono, 32px grid, grain, pixel glyph.
- Tokens and shared components live in `assets/css/site.css`. Page-specific CSS
  sits next to its page (`assets/css/home.css`, `projects/*/project.css`).
- Dark only, zero JavaScript, no theme toggle, no build step.

## Content rules that actually matter here

- No invented projects, benchmarks, dates, or stories. If the material doesn't
  exist yet, either link nothing or ask.
- The writing voice is in `AGENTS.md` §2. If a sentence sounds like a company
  wrote it, rewrite it.
- One real post beats five placeholder ones.

## Deploy

Git-connected Worker; `wrangler.jsonc` binds the repo root as static assets
(`not_found_handling: 404-page`) and `.assetsignore` keeps repo-only files
(`AGENTS.md`, `README.md`, `.git`) out of the deploy.

Deploy from the laptop:
```sh
npx wrangler deploy
```

Build settings in the dashboard: build command `npx wrangler deploy`,
deploy command `npx wrangler deploy`. Custom domain (`blog.zeroij.dev`) can be
attached in Worker settings — when that happens, update the canonical URLs in
`index.html`, `projects/opencode-warp-tui/index.html`, `feed.xml`, `robots.txt`
and `sitemap.xml`.

Note: don't add long `immutable` caching in `_headers` — filenames aren't
content-hashed without a build step.
