# Portfolio Website — Fix Plan & AI Prompt

## 1. Diagnosis (root causes)

| Issue seen | Likely root cause |
|---|---|
| "Machine Lea..." text runs behind/off the profile image | Animated hero text has no max-width/font-size cap — it's using large `vw`-based or unclamped font sizing, so long words (like "Machine Learning") overflow their container instead of shrinking or wrapping |
| About page feels congested | Cards have small/no gap between them, low internal padding, and section padding-top/bottom is too tight — no vertical breathing room |
| Navbar looks flat | No glassmorphism applied — needs backdrop-blur + semi-transparent background + subtle border |
| Text feels "too big and stretched" everywhere | No defined type scale — headings likely use one giant unclamped font-size instead of a proper h1→h6 hierarchy with sane line-height/letter-spacing |
| All text looks same weight/size — no variety | Missing hierarchy: no distinction between eyebrow labels, headings, subheadings, body copy, captions |
| Email overflows its card on Contact page | Fixed font-size + no `overflow-wrap`/`text-overflow` handling on a long string in a fixed-width card |
| Theme feels flat/low-contrast | Olive-green (`#7A8450`-ish) on cream background is low contrast and reads muddy, not premium |

## 2. New Theme Recommendation

Current theme: cream/beige background + navy text + olive-green accent. The olive-on-cream combo is the main reason it looks dated and low-contrast.

**Recommended: Dark developer theme** (most common for professional dev portfolios, easiest to make the glassmorphic navbar pop, best contrast):

- Background: `#0B0F19` (near-black navy) with a subtle radial gradient/noise texture
- Surface/cards: `#141925` with `1px solid rgba(255,255,255,0.08)` border
- Primary text: `#F5F5F7` (off-white, not pure white — softer on eyes)
- Secondary text: `#9CA3AF` (cool gray)
- Accent (pick ONE): `#6EE7B7` (emerald) or `#818CF8` (indigo) — used only for highlights, animated word, links, active nav state
- Keep the navy (`#1E2333`) as a secondary accent for buttons if you want continuity with current branding

**Alternative if you want to keep it light:** Off-white (`#FAFAF7`) background, charcoal (`#1A1A2E`) text, single accent = teal (`#14B8A6`) instead of olive — much better contrast and feels more premium than the current cream+olive combo.

## 3. Fix Priority List

1. **Fix text overflow bugs first** (hero animated word, contact email) — these are functional bugs, not style.
2. **Establish a proper type scale** — fixes the "too big/stretched" feeling site-wide in one pass.
3. **Fix spacing system** — About page congestion, consistent section/card padding.
4. **Apply new theme** — colors, contrast.
5. **Add glassmorphism to navbar.**
6. **Add typographic variety** — eyebrow labels, weight/size hierarchy.

## 4. Ready-to-Use Prompt (paste this into your AI tool)

Copy everything below the line into your AI coding tool as one prompt. It's written in plain English (not Hinglish) since AI tools follow precise English instructions more reliably.

---

**PROMPT:**

I need you to fix several design and layout bugs in my portfolio website. Apply ALL of the following changes:

**1. Fix hero section animated text overflow (critical bug)**
The rotating word in "I am a [Machine Learning / MERN & APIs / ...] Developer" is overflowing outside its container and rendering behind the profile image when the word is long (e.g. "Machine Learning"). Fix this by:
- Giving the animated text container a `max-width` that never exceeds the available space before the profile image, with proper `z-index` so text is never hidden behind the image.
- Using a responsive `font-size` with `clamp(1.75rem, 4vw, 3rem)` (adjust values to match design) instead of a fixed large size, so long words shrink to fit.
- Adding `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` as a fallback IF the word still doesn't fit, OR better — allow the text to wrap to a second line within its own container instead of overlapping the image.
- Test with the longest word in the rotation list ("Machine Learning") to confirm it never overlaps the image at any screen width.

**2. Fix email overflow on Contact page**
The email address `ayushydvo71@gmail.com` is being cut off/overflowing its card. Fix by:
- Adding `overflow-wrap: break-word; word-break: break-all;` to the email text element, OR
- Reducing font-size specifically for long email strings using `clamp()`, OR
- Truncating with `text-overflow: ellipsis` + `white-space: nowrap` + showing the full email in a tooltip/title attribute on hover.
Pick whichever keeps the email fully readable without breaking the card layout at all screen sizes (mobile included).

**3. Establish a proper typography scale**
Currently all text feels oversized and stretched. Replace with this hierarchy (adjust values proportionally to fit the design, but keep the relative scale):
- H1 (hero heading): `clamp(2rem, 5vw, 3.5rem)`, font-weight 800, line-height 1.1
- H2 (section titles like "About", "Skills", "Projects"): `clamp(1.75rem, 3.5vw, 2.5rem)`, font-weight 700, line-height 1.2
- H3 (card titles): `1.25rem–1.5rem`, font-weight 700, line-height 1.3
- Eyebrow/label text (e.g. "SOFTWARE ENGINEER // AYUSH YADAV", "// GET TO KNOW ME"): `0.75rem–0.85rem`, font-weight 600, letter-spacing `0.1em`, uppercase, muted color
- Body text: `1rem–1.125rem`, font-weight 400, line-height 1.6
- Small/caption text (stats labels, tags): `0.8rem–0.875rem`, font-weight 500
Do NOT let any heading exceed the viewport width or wrap awkwardly — always test at 1280px, 768px, and 375px widths.

**4. Fix spacing and "congested" feeling on the About page**
- Increase gap between the 4 feature cards (DSA & Problem Solving, Full-Stack Development, Machine Learning, Workflow Automation) to at least `24px–32px` in both row and column directions.
- Increase internal card padding to at least `28px–32px` on all sides.
- Increase vertical spacing between major sections (About heading block, feature cards, bio text, stats row) to at least `48px–64px`.
- Add consistent `padding: 80px 24px` (top/bottom, left/right) at the section container level for ALL sections (Home, About, Skills, Projects, Contact) — not just some.
- Make sure the stats row (100+ DSA PROBLEMS, 10+ PROJECTS DELIVERED, etc.) has clear separation from the checklist items above it (add a visible divider or extra margin).

**5. Apply a new color theme (replace current cream + olive-green)**
Switch to this dark theme:
- Background: `#0B0F19`
- Card/surface background: `#141925` with `1px solid rgba(255,255,255,0.08)` border and `border-radius: 16px`
- Primary text: `#F5F5F7`
- Secondary/muted text: `#9CA3AF`
- Accent color (use ONLY for the animated word, active nav link, key highlights, and primary button): `#6EE7B7`
- Keep buttons using a solid dark navy (`#1E2333`) background with the accent color as text/icon color, OR use the accent color as solid button background with dark text — pick whichever gives better contrast, test both.
- Ensure ALL text meets WCAG AA contrast (4.5:1 minimum) against its background — check the accent color against both the dark background and any light card backgrounds.

**6. Add glassmorphism effect to the navbar**
Apply this to the fixed/sticky navbar:
```css
background: rgba(20, 25, 37, 0.65);
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.08);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.24);
```
Make sure the navbar stays legible when scrolling over different background sections (test over the hero image and over text-heavy sections).

**7. Add typographic variety throughout**
Every section should mix at minimum: one eyebrow/label (small, uppercase, letter-spaced, accent or muted color), one bold heading, and regular-weight body text — don't let two consecutive text blocks use the same size/weight. Specifically add/keep:
- Eyebrow tags above section headings (already present in some sections like "// GET TO KNOW ME", "// MY PORTFOLIO SHOWCASE" — apply this pattern consistently to ALL sections including Home and Contact).
- Vary font-weight between 400 (body), 600 (subheadings/labels), 700–800 (headings) — don't use only one or two weights across the whole site.

After making these changes, review the site at desktop (1280px+), tablet (768px), and mobile (375px) widths to confirm nothing overflows, overlaps, or looks cramped at any breakpoint.

---

## 5. After You Apply This

Send me new screenshots once your AI tool applies these changes — I'll do another pass to catch anything it missed (AI tools often fix the described bug but introduce a new spacing issue elsewhere, so a second review round is normal).