# AGENTS.md

# ZeroIJ Blog: Agent Instructions

## 0. Purpose

This repository is the personal blog for **Sujal Birwadkar / ZeroIJ**.

The blog is connected to the portfolio site and exists for a different purpose:

- Portfolio: **who I am and what I have built**
- Blog: **what I am currently doing, experimenting with, learning, breaking, and figuring out**

The blog should feel like a personal engineering notebook that happens to be well designed.

It is NOT:
- a corporate engineering blog
- a SaaS landing page
- a generic developer portfolio
- a documentation website
- an AI-generated "thought leadership" publication
- a terminal emulator disguised as a website
- a collection of polished marketing case studies

The core idea is:

> **"I build random things, experiment with AI and software, run into problems, and write down what actually happened."**

Everything in this repository should reinforce that idea.

---

# 1. Non-Negotiable Rules

These rules take priority over convenience, trends, or an agent's personal design preferences.

### 1.1 Do not redesign the visual direction without a reason

The approved visual direction is:

**Editorial developer notebook + technical minimalism + personal character.**

The current homepage design is the baseline.

Do not suddenly introduce:
- glassmorphism
- gradients everywhere
- giant rounded cards
- floating SaaS dashboards
- excessive shadows
- animated backgrounds
- neon cyberpunk styling
- excessive terminal UI
- huge decorative illustrations
- generic AI landing-page aesthetics

If a change is not clearly improving readability, personality, or consistency, do not make it.

### 1.2 Do not invent personal experiences

This is a personal blog.

Never invent:
- projects Sujal did not mention
- experiences that did not happen
- opinions attributed to Sujal
- technical results
- benchmarks
- failures
- timelines
- employers
- education details
- personal stories
- quotes
- statistics

If source material is unavailable, leave a placeholder or ask for the information.

Never manufacture a believable story simply to make an article sound interesting.

### 1.3 Preserve the author's voice

AI-generated writing tends to sound polished, generic, and lifeless.

That is specifically undesirable here.

The writing should sound like **Sujal talking to a technically interested friend**.

---

# 2. Writing Voice

## 2.1 Core voice

The voice is:

- nonchalant
- goofy
- friendly
- casual
- curious
- technically competent without trying to prove it
- occasionally self-deprecating
- direct
- conversational
- honest about mistakes
- comfortable saying "I don't know"
- comfortable saying "this was probably a stupid idea"
- interested in explaining the actual reasoning

The desired feeling:

> "Here's the weird thing I messed around with this week."

Not:

> "In today's rapidly evolving technological landscape, I embarked on an innovative journey..."

Absolutely avoid the second style.

---

## 2.2 Write like a friend explaining the project

The writing should naturally answer:

1. What was I trying to do?
2. Why did I want to do it?
3. What did I think would happen?
4. What actually happened?
5. What broke?
6. What did I try?
7. Why did I choose the final approach?
8. What did I learn?
9. What would I do differently next time?

The article does not need to answer all nine questions explicitly.

They should simply shape the story.

---

## 2.3 Sentence style

Prefer:

> I wanted the TUI to talk to OpenCode without tying the entire UI to OpenCode's implementation.

Over:

> The objective of this implementation was to establish a decoupled architectural abstraction layer between the presentation and backend domains.

Prefer:

> This worked. Then reconnecting happened.

Over:

> The implementation was subsequently validated under reconnection scenarios.

Prefer:

> I thought this would take a day. It did not.

Over:

> The development timeline exceeded the initial estimation.

---

## 2.4 Humor

Humor is welcome, but it should come from the situation.

Good:

> I added one more feature. This was the beginning of the problem.

> The first version worked, which was unfortunate because it encouraged me.

> Docker failed six times, so naturally I blamed the model.

Bad:

- forced jokes every paragraph
- meme-speak everywhere
- trying to sound like a comedian
- excessive "lol", "lmao", etc.
- jokes that distract from technical information

The blog should be **casually funny**, not a comedy blog.

---

## 2.5 Technical explanations

Explain technical concepts in plain language first.

Example:

> A WAL is basically the database keeping a little "I was about to do this" notebook before changing the actual data.

Then explain the technical details.

Do not assume the reader knows every library, protocol, or acronym.

However, do not over-explain basic programming concepts either.

The intended reader is another developer who is curious about how things were built.

---

# 3. Article Philosophy

Articles should document **process**, not just outcomes.

A project that failed can be a better article than a project that worked perfectly.

Preferred structure:

```text
Title

Short description

Date · tags · reading time

Why I started this

What I expected

What I actually built

The weird/problematic part

What I changed

What finally worked

What I learned

What I would do differently
```

This is a guideline, not a rigid template.

Do not force every article into identical sections.

---

# 4. Titles

Titles should sound like something a developer would actually say.

Good:

- I Tried Building a Better OpenCode TUI
- My TUI Got Out of Hand
- I Built a Tiny Memory System Instead of Using a Vector Database
- Why Reconnect Logic Is Annoying
- I Deleted an Entire Screen From My Android App
- I Thought This Database Would Be Simple
- Teaching an Agent to Debug SQL
- The Bug Only Happened When Everything Was Fine

Avoid:

- Revolutionizing AI-Powered Developer Workflows
- A Comprehensive Guide to Next-Generation Agent Architecture
- Building the Future of Intelligent Database Systems
- How We Leveraged Cutting-Edge AI to Transform...
- 10 Ways AI Will Change Software Development

No clickbait unless the title genuinely reflects the article.

---

# 5. Visual Philosophy

## 5.1 Relationship with the portfolio

The blog should feel like it belongs to the same person as:

`portfolio.zeroij.workers.dev`

The portfolio has:
- strong cobalt/electric blue
- thin technical lines
- grid structure
- compact typography
- large negative space
- subtle pixel-art / experimental details
- restrained UI

The blog should inherit this **visual DNA**, not duplicate the portfolio.

Think:

> **Portfolio = experimental technical identity**
>
> **Blog = editorial technical notebook**

---

## 5.2 Approved visual direction

The current homepage direction is the reference.

Core characteristics:

- dark near-black background
- subtle grid
- cobalt/electric blue accent
- occasional warm accent such as orange
- thin 1px borders
- restrained metadata
- strong typographic hierarchy
- generous whitespace
- narrow readable content column
- simple navigation
- editorial article lists
- small technical labels
- subtle pixel/graphic elements

The design should feel precise without feeling sterile.

---

## 5.3 Do not turn the blog into a terminal

Terminal-inspired details are allowed.

The entire site should NOT look like:

```text
~/blog
$ ls
$ cat post.md
$ grep ...
```

Filesystem metaphors should be used sparingly.

The reader should feel like they are reading a personal publication, not operating a CLI.

---

# 6. Typography

Typography should prioritize readability.

The visual system may use:
- JetBrains Mono
- IBM Plex Mono
- Inter
- Geist
- another clean technical/editorial pairing

Do not automatically use monospace for every character simply because the site is technical.

A good solution can use:
- proportional font for article body and major headings
- monospace for metadata, tags, dates, labels, code, and small technical UI

If JetBrains Mono is used heavily, make sure long-form reading remains comfortable.

Avoid:
- five or more font families
- decorative display fonts
- novelty fonts
- excessively tiny body text

---

# 7. Color

Primary background:

- near-black / very dark charcoal

Primary text:

- soft white, not pure white everywhere

Secondary text:

- muted gray

Primary accent:

- cobalt/electric blue matching the portfolio

Secondary accent:

- restrained warm orange may be used for small highlights

Colors should be consistent.

Do not introduce a new accent color for every component.

Avoid:
- rainbow gradients
- excessive neon
- colored shadows
- glowing text
- gradient text unless there is a very specific reason

---

# 8. Layout

The layout should have a strong central reading column.

Large screens may have significant empty space.

This is intentional.

Do not fill every available pixel.

The website should breathe.

Recommended hierarchy:

```text
Header
↓
Identity / introduction
↓
Featured or current project
↓
Recent writing
↓
Projects / experiments if needed
↓
Footer
```

The homepage should not become a dashboard containing:
- statistics
- analytics
- skill percentages
- progress bars
- dozens of cards
- unnecessary widgets

---

# 9. Homepage

The homepage should immediately communicate:

**Who is this?**
**What does this person write about?**
**What are they currently building?**

A good conceptual structure:

```text
ZEROIJ / NOTES

I build things, break them,
and write down what actually happened.

AI · Rust · TypeScript · databases · tools

-----------------------------------

CURRENTLY / FEATURED

OpenCode Warp TUI

Short explanation.

-----------------------------------

RECENT WRITING

Date
Title
Short description
Tags

Date
Title
Short description
Tags

...

-----------------------------------

Footer
```

The exact copy can evolve.

The hierarchy should remain.

---

# 10. Article Pages

Article pages are the most important part of the blog.

They should be quieter than the homepage.

Prioritize:

- title
- subtitle/description
- date
- tags
- reading time
- readable body width
- comfortable line height
- clear headings
- code blocks
- images/diagrams
- links
- quotes when appropriate

Avoid putting UI between every paragraph.

The reader should be able to forget they are using a website.

---

# 11. Code

Code blocks should be treated as part of the article, not decoration.

Requirements:

- readable
- horizontally scrollable on small screens
- language label where useful
- copy button only if it improves usability
- syntax highlighting should remain restrained
- no giant glowing code blocks

Code should be accompanied by explanation when the context matters.

Do not dump huge code listings into articles when a focused snippet communicates the point.

---

# 12. Images and Diagrams

Use visuals when they explain something.

Good:
- architecture diagrams
- screenshots of the actual project
- benchmark charts
- terminal output
- before/after UI
- small illustrations
- relevant project screenshots

Bad:
- generic AI stock images
- random Unsplash images
- decorative images that add nothing
- giant hero images on every article

A technical article does not need an image just because the page has empty space.

---

# 13. Navigation

Keep navigation small.

Possible:

```text
Writing
Projects
About
RSS
Portfolio ↗
```

Do not create navigation for things that do not need their own page.

The portfolio should remain easy to reach.

The blog should feel connected to the portfolio, not like a completely unrelated site.

---

# 14. Tags

Tags should be useful.

Examples:

```text
RUST
AI
TYPESCRIPT
DATABASES
LINUX
DEBUGGING
OPEN-SOURCE
TOOLS
```

Do not create tags such as:

```text
cool
interesting
random
thoughts
stuff
technology
coding
```

unless they genuinely serve navigation.

Avoid tag explosion.

---

# 15. Responsiveness

Mobile is not an afterthought.

The blog must work well at:

- desktop
- laptop
- tablet
- mobile

On mobile:

- remove unnecessary decorative structure
- preserve readable margins
- keep titles readable
- prevent horizontal overflow
- make navigation accessible
- keep code scrollable
- preserve the visual identity

Do not simply shrink the desktop layout.

---

# 16. Accessibility

Always maintain:

- sufficient text contrast
- visible focus states
- semantic HTML
- keyboard navigation
- alt text for meaningful images
- proper heading hierarchy
- usable link states
- reduced-motion support

Do not sacrifice accessibility for visual effects.

---

# 17. Animation

Animation is optional.

Use it only when it communicates state or improves interaction.

Good:
- subtle hover transitions
- small link transitions
- restrained page transitions
- gentle appearance of content

Bad:
- animated grid backgrounds
- constant floating elements
- cursor-following effects
- excessive parallax
- bouncing cards
- scroll-jacking
- animations on every element

The site should still feel good with animations disabled.

---

# 18. Content Authenticity

When creating an article from project material:

1. Inspect the actual source material.
2. Understand what happened.
3. Separate facts from interpretation.
4. Do not invent missing details.
5. Preserve real failures and uncertainty.
6. Prefer specific details over generic claims.
7. Explain decisions and tradeoffs.
8. Keep the author's casual voice.

If a project has a changelog, commits, research notes, or README, use those as evidence.

Do not turn a messy development process into a fake perfect success story.

---

# 19. AI-Assisted Writing

AI may help with:

- outlining
- restructuring
- grammar
- identifying unclear sections
- summarizing actual notes
- suggesting titles
- improving transitions

AI must NOT turn the writing into generic professional content.

Never automatically add phrases such as:

- "In today's rapidly evolving landscape"
- "This transformative journey"
- "Leveraging cutting-edge technology"
- "A paradigm shift"
- "Robust and scalable solution"
- "Seamlessly integrates"
- "Revolutionary"

Unless those words genuinely belong in a quoted technical context.

If an AI rewrite sounds more polished but less like a human developer talking, prefer the original.

---

# 20. Project Writing

When documenting a project, focus on decisions.

For example:

```text
I had three options.

1. SQLite
2. Postgres
3. A tiny custom store

I picked SQLite because...

Then six hours later...
```

This is better than:

```text
After evaluating multiple database technologies,
SQLite was selected due to its robust feature set...
```

Explain the reasoning behind decisions.

Readers care about:

- why
- tradeoffs
- mistakes
- constraints
- surprises
- results

Not just the final architecture diagram.

---

# 21. "Currently Building" Section

The homepage may show one current project.

This should be genuinely current.

Examples:

```text
CURRENTLY BUILDING

OpenCode Warp TUI

A terminal interface around OpenCode
that somehow became an entire project.

Rust · OpenCode · AI
```

Do not fabricate status.

If there is no current project, hide the section rather than inventing one.

---

# 22. Portfolio Integration

The blog and portfolio should cross-link naturally.

Portfolio → Blog:

```text
Read the build log →
```

Blog → Portfolio:

```text
Portfolio ↗
```

Do not duplicate the entire portfolio inside the blog.

The two sites should have different jobs.

---

# 23. Technical Implementation Rules

Before adding a dependency, ask:

> Does this actually solve a problem?

Prefer:
- existing project utilities
- platform APIs
- simple CSS
- semantic HTML
- small components
- straightforward data structures

Avoid dependencies that exist only to create:
- fancy animations
- unnecessary UI primitives
- elaborate design systems
- excessive client-side state
- unnecessary CMS complexity

The blog is content-first.

Do not build a NASA control panel to render five articles.

---

# 24. Performance

The blog should be fast.

Priorities:

1. HTML/content
2. typography
3. layout
4. images
5. optional interaction

Avoid shipping large JavaScript for interactions that CSS/HTML can handle.

Images should be optimized.

Do not load a library just to implement a simple interaction.

---

# 25. SEO and Metadata

Every article should have:

- meaningful title
- description
- canonical URL
- publication date
- tags
- Open Graph metadata
- Twitter/X card metadata where appropriate
- sensible structured metadata where appropriate

Use real article information.

Do not generate keyword-stuffed descriptions.

---

# 26. RSS

The blog should support RSS if practical.

RSS should expose actual posts with:
- title
- URL
- publication date
- description/content as appropriate

RSS is a feature, not a reason to add unnecessary UI.

---

# 27. File and Content Organization

Keep content easy to understand.

Prefer a structure where a future version of Sujal can open the repository and immediately understand:

```text
src/
content/
public/
styles/
...
```

Avoid mysterious abstractions.

Names should describe what things are.

---

# 28. Agent Workflow

When asked to make a change:

### Step 1: Understand

Inspect the relevant files before changing them.

### Step 2: Check existing design

Ask:

- Does this already have an established pattern?
- Can the existing pattern solve the problem?
- Does this change fit the portfolio/blog visual language?

### Step 3: Make the smallest sensible change

Do not refactor unrelated code.

Do not redesign unrelated components.

Do not introduce a new visual language.

### Step 4: Verify

Check:

- desktop
- mobile
- typography
- spacing
- links
- keyboard behavior
- console errors
- build
- accessibility where relevant

### Step 5: Report

Briefly explain:

- what changed
- why
- what was verified
- anything still unfinished

Do not claim something was tested if it was not tested.

---

# 29. Design Decision Test

Before approving a new component, ask:

### Does it improve:
- readability?
- navigation?
- storytelling?
- technical clarity?
- personality?
- consistency?

If the answer is no, do not add it.

Before adding an animation, ask:

> Would the page be worse if this animation did not exist?

If no, skip it.

Before adding a card, ask:

> Does this information actually need to be separated into a card?

If no, use whitespace and typography instead.

---

# 30. Anti-Patterns

Never let the site drift toward:

### Generic SaaS

```text
Huge gradient hero
Get Started button
Three feature cards
Testimonials
Pricing
Glowing blobs
```

Not this.

### Generic AI website

```text
AI-powered
Next-generation
Intelligent
Revolutionary
Automated
```

Not this.

### Fake terminal

```text
$ whoami
$ cat about.txt
$ ls projects
```

Everywhere.

Not this.

### Generic developer portfolio

```text
Skills
Experience
Projects
Contact

[12 cards]
[20 badges]
[GitHub stars]
[Skill percentages]
```

Not this.

### Over-designed editorial site

Huge images, oversized typography, experimental scrolling, and animations that make reading harder.

Not this either.

---

# 31. The Desired Feeling

When someone visits the blog, the reaction should be roughly:

> "This person clearly builds a lot of weird technical stuff."

Then:

> "The site is clean."

Then:

> "This article actually sounds like a person wrote it."

Then:

> "Wait, how did they build that?"

That is the target.

---

# 32. Final Rule

When choosing between:

**more features**

and

**better writing + better spacing + better typography**

choose the latter.

When choosing between:

**impressive-looking**

and

**honest + useful + personal**

choose the latter.

When choosing between:

**what an AI thinks a developer blog should look like**

and

**what feels natural for Sujal's actual work**

choose the latter.

The blog should not try to look impressive.

It should look like **someone who builds things actually lives here.**
