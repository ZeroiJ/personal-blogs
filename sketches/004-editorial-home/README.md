# Sketch 004 — Editorial home (steipete-inspired)

Reference: layout philosophy of steipete.me — centered column, personal hero,
editorial post list, simple nav/footer. **Not a clone**: own typography, own
colors, own content.

## Design stance
"Personal dev notebook that happens to be a website." Dark but warm — no
terminal-green, no mono-everything, no cards/gradients/glow.

## System
- **Layout:** centered `46rem` frame, header row + thin rule, hero, feed, footer
- **Type:** Fraunces (serif) for headlines/wordmark · Public Sans (humanist sans)
  for body/meta · mono only inside `code`
- **Color (dark):** bg `#141316`, fg `#E9E6DF`, muted `#9A958C`, line `#2C2A30`,
  accent amber `#E2A63D`. Light theme: warm paper `#FAF8F4`.
- **Spacing:** 4px base scale; entry = `1.5rem` pad + hairline `#2C2A30` divider
- **Interactive:** theme pill toggle (persisted), hover states

## Trade-offs
- Strong at: reads mature and personal, zero maintenance, easy to write in
- Weak at: no build-time filtering — categories come later if ever
