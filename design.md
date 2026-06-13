---
version: alpha
name: Crescent Rating
description: A bold, high-contrast B2B travel authority system built around vivid blue surfaces, white type, and gold call-to-action accents.
colors:
  primary: "#453CFF"
  primary-hover: "#3A31E6"
  secondary: "#E4E4E7"
  tertiary: "#FFC300"
  neutral: "#121212"
  surface: "#1B1B1B"
  surface-2: "#2A2A6E"
  on-surface: "#FFFFFF"
  on-surface-muted: "#CFCFE8"
  border: "#374151"
  border-strong: "#FFFFFF"
  success: "#22C55E"
  error: "#EF4444"
typography:
  headline-display:
    fontFamily: Lato
    fontSize: 64px
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Lato
    fontSize: 41px
    fontWeight: 900
    lineHeight: 1.04
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Lato
    fontSize: 35px
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: -0.03em
  headline-sm:
    fontFamily: Lato
    fontSize: 28px
    fontWeight: 900
    lineHeight: 1.06
    letterSpacing: -0.03em
  title-lg:
    fontFamily: Lato
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: 0
  body-lg:
    fontFamily: Lato
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.55
    letterSpacing: 0
  body-md:
    fontFamily: Lato
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Lato
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  label-lg:
    fontFamily: Lato
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.06em
  label-md:
    fontFamily: Lato
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0.12em
  caption:
    fontFamily: Lato
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0.02em
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 12px
  xl: 16px
  full: 9999px
spacing:
  xs: 6px
  sm: 16px
  md: 28px
  lg: 40px
  xl: 112px
  gutter: 32px
  section: 64px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "17px 32px"
    height: "50px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "17px 32px"
    height: "50px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "17px 32px"
    height: "50px"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "16px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.none}"
    padding: "8px 12px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
---

# Crescent Rating

## Overview
Crescent Rating feels authoritative, energetic, and internationally focused. The visual tone is professional and editorial rather than playful, with high-contrast blue fields, crisp white typography, and a bright gold accent that signals urgency and growth. The layout is spacious but information-dense, balancing a strong hero narrative with metrics and utility content for a B2B audience.

## Colors
- **Primary (#453CFF):** The signature electric blue used for key brand surfaces, links, and active UI moments. It gives the interface a confident, modern, high-recognition feel.
- **Secondary (#E4E4E7):** A light border and divider tone used to soften outlines without losing clarity. It works well for subtle UI separation in the white header and outlined controls.
- **Tertiary (#FFC300):** The gold/yellow accent used for major CTAs, highlighted headlines, and metric emphasis. It adds urgency and business momentum against the blue background.
- **Neutral (#121212):** A deep inky base that anchors dark sections and supports strong contrast. It should be used for grounded panels, footer-like regions, and dark card foundations.
- **Surface (#1B1B1B):** A slightly lifted dark surface tone for layered containers and card-like regions when a softer step above the base is needed.
- **Surface-2 (#2A2A6E):** A richer blue-violet surface used for secondary panels and the cooler tonal depth visible in the hero and transition bands.
- **On-surface (#FFFFFF):** The main text color on dark and saturated backgrounds. It carries the brand’s high-contrast, legible presentation.
- **On-surface-muted (#CFCFE8):** A muted off-white used for supporting copy and secondary labels to reduce visual weight without sacrificing readability.
- **Border (#374151):** A subdued dark border tone for boxed components and card edges where a slightly stronger delimiter is needed.
- **Border-strong (#FFFFFF):** Used for thin rules and vertical dividers on saturated surfaces when a clean, sharp separation is needed.
- **Success (#22C55E):** Reserved for confirmation states or positive status indicators; keep usage minimal so it doesn’t dilute the blue/gold system.
- **Error (#EF4444):** Reserved for validation and destructive states only.

## Typography
Crescent Rating uses Lato throughout, giving the system a contemporary sans-serif voice that feels accessible and businesslike. Headings are extremely bold, using 900 weight and tight negative letter spacing to create a powerful, compressed editorial impact in large sizes. Body copy uses 600 or 400 weight depending on emphasis, while labels and navigation rely on uppercase, tracked text for a precise, institutional tone.

- **Headlines:** Use `headline-display`, `headline-lg`, `headline-md`, and `headline-sm` for the hero and section hierarchy. These styles should be bold, compact, and tightly tracked, especially when placed over saturated blue surfaces.
- **Body:** Use `body-lg`, `body-md`, and `body-sm` for paragraphs, supporting descriptions, and navigation-adjacent explanatory text. Body text stays highly legible with generous line height.
- **Labels:** Use `label-lg`, `label-md`, and `label-sm` for tags, chips, nav items, metric headers, and utility text. Uppercase styling and wider letter spacing are central to the brand’s polished, data-led feel.
- **Caption:** Use `caption` for subtle metadata, dates, and helper text where a quieter reading voice is needed.

## Layout & Spacing
The layout is built on a wide, fixed-max-width editorial grid with large horizontal breathing room and strong vertical sections. Hero content is split into a dominant left narrative column and a narrower right metrics column, separated by a thin vertical rule that reinforces structure. Spacing follows a coarse rhythm based on 6px, 16px, 28px, 40px, and 112px increments, producing a sense of disciplined spacing rather than soft organic rhythm.

Use generous section padding, especially around the hero and footer bands, and keep card interiors compact with 16px padding when content is meant to feel dense and functional. Navigation and filter rows should stay aligned to a strict baseline, with repeated small gaps rather than irregular spacing. Buttons and chips should sit with clear separation, using medium spacing for clusters and larger spacing for section breaks.

## Elevation & Depth
The UI is mostly flat, relying on color contrast, borders, and panel segmentation rather than shadows. Depth is created through tonal layering: white header above a saturated blue hero, a darker bottom band, and outlined content blocks with crisp divider lines. Shadow usage should remain minimal to preserve the clean, authoritative aesthetic.

## Shapes
The shape language is architectural and sharp. Interactive elements are predominantly square-cornered, with `rounded.none` used for primary buttons, chips, and most surfaces. When a softer container is needed, `rounded.md` can be used sparingly for cards, but the overall system should feel precise and geometric rather than friendly or pill-shaped.

## Components
- **Primary buttons (`button-primary`):** Large, rectangular CTAs with gold backgrounds, dark text, and strong visual priority. Use 17px vertical and 32px horizontal padding with a 50px height target. Hover states should deepen toward `button-primary-hover` without changing the square silhouette.
- **Secondary buttons (`button-secondary`):** Transparent or lightly outlined actions with white text for dark surfaces. They should match primary sizing but feel lighter and more restrained than the gold CTA.
- **Link buttons (`button-link`):** Text-only actions for secondary navigation, such as “View Services.” Keep them understated, inline, and minimally padded.
- **Cards (`card`):** Dark containers with a 1px border and 16px padding. Cards should feel content-forward and not rely on shadow; use them for metric blocks, feature tiles, and utility content.
- **Inputs (`input`):** Dark surfaces with white text and square corners. Maintain clear contrast and a compact internal padding rhythm; borders should be subtle and precise.
- **Chips:** Small uppercase tags with thin outlines or transparent fills. They are used to segment audiences and categories, so keep them visually light and evenly spaced.
- **Nav items:** Top navigation should be text-first, compact, and high-clarity, with small dropdown indicators and no heavy framing.
- **Metric blocks:** Large numerals should use the gold accent, paired with muted explanatory text and thin rules to reinforce a data-dashboard feel.
- **Dividers:** Use thin white or near-white rules on saturated backgrounds to split columns and stack KPI content cleanly.

## Do's and Don'ts
- Do use the gold tertiary color for the primary conversion action and the most important numeric highlights.
- Do keep layouts spacious, grid-aligned, and editorial rather than card-heavy or playful.
- Do set headlines in very bold Lato with tight negative tracking for a commanding, modern look.
- Do preserve square corners for buttons, chips, and most interactive elements.
- Do rely on contrast and borders more than shadows to create hierarchy.
- Don't introduce rounded pills, soft gradients, or decorative shadows that weaken the brand’s sharpness.
- Don't overuse the gold accent outside of CTAs and key metrics.
- Don't make body text too light or too small; readability should stay strong on dark backgrounds.