# Sketch 005 — Portfolio DNA × Editorial Blog

Primary reference: **portfolio.zeroij.workers.dev** (extracted tokens), structure &
hierarchy inspired by **steipete.me**. Not a clone of either.

## Design stance
The portfolio's little brother: same ink, calmer voice. Cobalt blue, hairline
rules, Geist, mono micro-labels, 32px technical grid, grain, pixel glyph — but
laid out for reading: spacious measure, generous whitespace, content first.

## Portfolio → blog mapping

| Portfolio token | Blog use |
|---|---|
| `--bg:#0038FF` full-bleed blue | **fills only**: selection, blockquote bar, pixel glyph, section square. Dark base `#0A0C12` (blue-black) for reading |
| `#fff3` hairlines | `rgba(255,255,255,.14)` rules, blueprint column edges ≥900px |
| Geist / Geist Mono | same fonts — sans for everything, mono only for metadata/code |
| 14px compact body | compact **chrome** (13px nav, 11px mono labels), spacious **content** (17px/1.75 prose, 40rem measure) |
| mono uppercase labels (`skills-label`) | article meta table (date/stack/status/src), hero-meta strip, section labels |
| square 1px pills | topic tags |
| pixel stamp editor | 8×8 hero glyph (cobalt + orange ink), favicon |
| grain overlay @0.2 | grain @0.055 (present but quiet) |
| underline-grow links | all footer/nav/prev-next links |
| hover row shift + bg | entry rows |

## Typography
- **Geist** 400/500/600 — headlines (tight −0.03em), body 17px
- **Geist Mono** 400/500 — dates, labels, kickers, code
- Hierarchy: kicker (mono cobalt) → h1 → meta table → standfirst → h2 with
  mono `01` index → prose

## Decisions
- **Dark only, zero JS.** No theme toggle, no build step.
- **Accent split:** `#0038FF` fails contrast as text on near-black (≈2.8:1), so
  text/links use `#4E7BFF` (same hue, ≈5.1:1). Pure cobalt stays for fills.
- No cards, gradients, glassmorphism, or animation beyond hover transitions.

## Files
`index.html` homepage · `article.html` article · `site.css` system · `article.css` reading
