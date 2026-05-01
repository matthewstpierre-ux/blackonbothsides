# Design

## Overview

Dark cinematic identity. Deep black field, burnt orange as the sole accent — used structurally, not decoratively. All-caps condensed typography that matches the logo's visual weight. Motion is purposeful and film-title-card in feel: entrance sequences, stagger reveals, nothing gratuitous.

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--orange` | `#C44A1A` | Primary accent: buttons, section dividers, active states, borders on hover |
| `--orange-light` | `#E8612B` | Hover state for filled orange elements |
| `--black` | `#0A0A0A` | Page background, button text on orange fill |
| `--surface` | `#141414` | Elevated backgrounds: cards, form fields |
| `--offwhite` | `#F0EDE8` | Primary text — warm tint connects to orange brand |
| `--muted` | `#888888` | Secondary text: bios, metadata, sublabels |
| `--border-color` | `#2E2E2E` | Card borders, field borders, dividers |

Do not introduce gold, purple, or blue. These are not in the BOBS palette.

## Typography

### Fonts

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | Bebas Neue | 400 | Hero headline, section titles, team names, large pull-quotes |
| UI / Labels | Barlow Condensed | 600, 700 | Nav links, button text, tags, role labels, section eyebrows |
| Body | Syne | 400, 600 | Bio text, About copy, form labels, footer |

### Scale (Desktop)

| Level | Size | Font | Tracking |
|-------|------|------|----------|
| Hero title | `clamp(52px, 10vw, 140px)` | Bebas Neue | `0.03em` |
| Section title | `clamp(56px, 8vw, 112px)` | Bebas Neue | `0.02em` |
| Pull-quote | `clamp(36px, 6vw, 80px)` | Bebas Neue | `0.02em` |
| Card title | `24px` | Bebas Neue | `0.04em` |
| Body | `17–19px` | Syne | `0` |
| Label / eyebrow | `13–14px` | Barlow Condensed | `0.15–0.20em` |
| Button | `14px` | Barlow Condensed 600 | `0.10–0.12em` |

Body line length: max 65–75ch.

### Rejected fonts

Cormorant Garamond, DM Mono, Inter, Roboto, Playfair Display — explicitly rejected. Too delicate, too generic, or mismatched with the logo's condensed weight.

## Components

### Buttons

Two variants, both using Barlow Condensed SemiBold, all-caps, wide tracking.

**Solid (primary CTA):** `background: #C44A1A`, `color: #0A0A0A`. Hover: `background: #E8612B`. Transition: `200ms ease`. No border-radius.

**Outline (secondary CTA):** `border: 1px solid #C44A1A`, `color: #C44A1A`, `background: transparent`. Hover: fills to `#C44A1A` with `color: #0A0A0A`. Transition: `200ms ease`. No border-radius.

### Cards (Work + Team)

Background: `#141414`. Border: `1px solid #2E2E2E`. Hover: `border-color: #C44A1A`. No border-radius — the brand is angular, not rounded.

### Form Fields

Background: `#141414`. Border: `1px solid #2E2E2E`. Focus: `border-color: #C44A1A`. Font: Syne 16px. No border-radius.

### Section Dividers

1px horizontal line: `linear-gradient(90deg, transparent, #C44A1A, transparent)`. Applied top and bottom of each section.

### Scroll Indicator

Thin vertical line (1px, `#2E2E2E` background) with an orange traveling dot. Bottom-center of hero. Disappears on first scroll.

## Layout

Single-page scroll. Full-bleed sections. Navigation anchors.

- Desktop: `max-w-7xl` (1280px) content container, `px-6` padding.
- Section vertical rhythm: `py-24 md:py-36`.
- About: 2-column grid (photo left, copy right), stacks on mobile.
- Team: 3-column on desktop, 2-column tablet, 1-column mobile.
- Work: Full-bleed horizontal drag carousel, `pl-6` with fade edge on right.
- Contact form: `max-width: 600px`, centered.

## Motion

Easing: `[0.25, 0.46, 0.45, 0.94]` (cubic bezier) — used on all transitions.

Standard scroll variant:
```ts
fadeUp: { hidden: { opacity: 0, y: 48 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65 } } }
```

- Trigger: `whileInView` with `once: true`
- Viewport threshold: `0.15–0.20`
- Stagger: `0.08–0.10s` between children
- Section titles enter first, then body, then CTA

Hero sequence: logo spin entrance (0.9s) → tagline clip-path reveal (staggered) → sub-tagline fade → CTA fade. Total: ~2s.

All animations respect `prefers-reduced-motion`.
