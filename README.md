# Midhula Farm Hut — Shopify Storefront

An immersive, editorial, storytelling-driven e-commerce experience for an ornamental fish farm in Kerala, India.

## Project Overview

This is not a generic aquarium store. This is a highly art-directed, playful, visually immersive Shopify storefront that makes visitors feel as though they are entering the living world of an ornamental fish farm.

**Competition Entry:** This homepage is designed to win the ₹35,000 website development project for Midhula Farm Hut.

## Core Concept

**"A Little World of Living Colour"**

The visitor enters a vibrant aquatic world filled with ornamental fish, flowing plants, water textures, bubbles, illustrated creatures, organic shapes, and playful transitions.

## Tech Stack

- **Storefront:** Shopify Liquid
- **Development:** Shopify CLI 4.9.4
- **Theme Architecture:** Online Store 2.0
- **Animation:** CSS animations + GSAP (to be added)
- **Product Management:** Shopify Admin
- **Version Control:** Git

## Project Structure

```
midhula-farm-hut/
├── layout/
│   └── theme.liquid
├── templates/
│   └── index.json
├── sections/
│   ├── header.liquid
│   ├── immersive-hero.liquid
│   ├── lifecycle-story.liquid
│   └── [more sections]
├── snippets/
│   └── meta-tags.liquid
├── assets/
│   ├── custom.css
│   ├── header.css
│   ├── hero.css
│   └── lifecycle.css
├── config/
│   └── settings_schema.json
└── locales/
```

## Installation & Development

### Prerequisites

- Shopify CLI (4.9.4 or higher)
- Shopify Partner account
- Development store

### Setup

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   cd fish
   ```

2. **Navigate to theme directory:**
   ```bash
   cd midhula-farm-hut
   ```

3. **Connect to your Shopify store:**
   ```bash
   shopify theme dev --store=[your-store-name]
   ```

4. **Open the preview URL** provided by Shopify CLI

### Deployment

1. **Push theme to Shopify:**
   ```bash
   shopify theme push
   ```

2. **Publish the theme** from your Shopify Admin

## Homepage Structure

1. **Immersive Hero** — "Small worlds. Extraordinary colours."
2. **Farm Introduction** — "More than fish. A little ecosystem."
3. **Lifecycle Story** — From egg → fry → juvenile → adult
4. **Featured Collections** — Meet the little stars
5. **Care & Trust** — Hand holding fish moment
6. **Farm Diary** — Behind-the-scenes
7. **Wednesday Dispatch** — Journey storytelling
8. **Final CTA** — Ready to bring home a little colour?

## Design System

### Colors
```css
--color-water: #7BC8D9       /* Aquatic blue */
--color-deep-water: #174D59  /* Deep teal */
--color-leaf: #7CA66A        /* Leaf green */
--color-coral: #F16B4E       /* Vibrant coral-orange */
--color-paper: #F7F2E8       /* Warm off-white background */
--color-ink: #243A35         /* Deep text colour */
```

### Typography
- Display headlines: Bold, oversized, editorial
- Body text: Clean, readable
- Mobile-first responsive scaling

### Animation Principles
- Subtle floating elements
- Organic transitions
- Scroll-driven reveals
- Respects `prefers-reduced-motion`

## Key Features

- ✅ Sticky custom navigation
- ✅ Mobile-responsive menu
- ✅ Immersive hero with floating elements
- ✅ Scroll-driven lifecycle storytelling
- ✅ Shopify theme editor compatible
- ✅ WhatsApp integration ready
- ✅ Accessibility-focused
- ✅ Performance-optimized

## Image Asset Guide

See `IMAGE_ASSET_GUIDE.md` for complete asset requirements and generation prompts.

**Critical Assets Needed:**
- Hero background (2400x1350px)
- Hero fish cutout (1200x1200px transparent)
- Lifecycle stages (4 images, 800x800px)
- Species collection (6-7 transparent cutouts)
- Farm photography (real)
- Dispatch sequence (3 images)

## Brand Information

**Instagram:** https://www.instagram.com/midhula_farm_hut/

**WhatsApp:** 8129120437 (provisional - requires confirmation)

**Species:**
- Guppies (multiple strains)
- Bettas
- Swordtails
- Platies
- Cichlids
- Crayfish
- Crabs

See `BRAND_INFORMATION.md` for complete details and confirmation checklist.

## Development Status

### ✅ Completed
- Project structure and documentation
- Design system and CSS architecture
- Theme layout and settings
- Custom header with navigation
- Immersive hero section
- Lifecycle story section
- Git initialization

### 🚧 In Progress
- Farm introduction section
- Featured collections section
- Care & trust section
- Wednesday dispatch section
- Footer

### 📋 To Do
- Farm diary section
- Final CTA section
- JavaScript interactions
- GSAP animations
- Product templates
- Collection templates
- WhatsApp integration
- Image asset generation
- Testing & optimization
- Deployment

## Documentation

- `CREATIVE_DIRECTION.md` — Visual personality and design philosophy
- `BRAND_INFORMATION.md` — Confirmed and unconfirmed business details
- `IMAGE_ASSET_GUIDE.md` — Complete image requirements and prompts
- `DESIGN_SYSTEM.md` — Colors, typography, spacing, components
- `HOMEPAGE_STRUCTURE.md` — Section-by-section breakdown

## Contributing

This is a competition entry. After winning, the repository will be maintained for the complete project.

## Competition Deliverables

1. ✅ Homepage design and development
2. ✅ Shopify theme architecture
3. ⏳ Image asset integration (pending generation)
4. ⏳ Live deployment URL
5. ✅ Documentation

## Contact

For questions about this project:
- Review the documentation files
- Check the Shopify theme settings
- Refer to the IMAGE_ASSET_GUIDE for asset requirements

---

**Built with care for Midhula Farm Hut**

*"Small worlds. Extraordinary colours."*
