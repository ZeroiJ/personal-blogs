## Variant: Bare Document

### Design stance
Disappear. Plain document, no cards, no hero — like Bear Blog / Muan.
### Key choices
- Layout: single 68ch column, dotted-list home, prev/next article footer
- Typography: system sans body 15-16px, ui-monospace for dates/tags/meta
- Color: paper #FBFBF9 / ink #1a1a1a, dark via prefers-color-scheme
- Interaction: home↔article toggle, theme toggle
### Trade-offs
- Strong at: fastest, most readable, cheapest to maintain
- Weak at: builds/experiments all look same, no visual hierarchy for featured work
### Best for
- Writing-first blog where code is the star.
