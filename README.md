# zeroij/blog

Minimal developer blog — separate from portfolio. Workbench-dense theme: sidebar + dense filterable log. Static, no build.

## Local
Open `index.html`, or:
```
npx serve .
```

## Deploy — Cloudflare Pages
1. Pages → Create → Connect to Git → `ZeroiJ/personal-blogs`
2. Framework preset: **None**. Build command: **(empty)**. Output directory: **`/`**
3. Custom domain: `blog.zeroij.dev` → Enforce HTTPS
4. Done. `_headers`, `_redirects`, `404.html`, `robots.txt` are already at root.

## Add a post
1. Copy `posts/tiny-kv.html` → `posts/my-post.html`
2. Add one `.item` row in `index.html` + one `<item>` in `feed.xml`
3. Commit small, push — Pages auto-deploys.

## Structure
```
index.html posts/ assets/css/site.css assets/js/app.js
feed.xml sitemap.xml _headers _redirects 404.html
sketches/ (design history, noindex)
```
