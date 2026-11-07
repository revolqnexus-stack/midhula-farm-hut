# HOMEPAGE STRUCTURE — MIDHULA FARM HUT

## Storytelling Sequence

---

## 01. IMMERSIVE HERO

**Visual Treatment:** Full viewport, layered composition  
**Background:** Beautiful aquatic environment  
**Hero Subject:** Large transparent guppy or betta cutout  
**Decorative:** Floating bubbles, subtle plants, organic shapes  

**Content:**
- Logo/Brand name
- Hero headline: "Small worlds. Extraordinary colours."
- Supporting line: "Ornamental fish bred with care in Kerala"
- Primary CTA: "Shop Fish"
- Secondary CTA: "Discover Our Farm"

**Interaction:**
- Gentle fish drift animation
- Floating bubbles
- Subtle parallax on scroll
- Cursor-responsive movement (desktop)
- Smooth scroll indicator

**Mobile:** Recompose to portrait, maintain readability, keep CTAs prominent

---

## 02. FARM INTRODUCTION

**Visual Treatment:** Wide panoramic farm photograph with organic shape mask  
**Transition:** Smooth from hero into farm environment  

**Content:**
- Section headline: "More than fish. A little ecosystem."
- Body: "Behind every beautiful fish is a place where it grows. At Midhula Farm Hut in Kerala, we breed ornamental fish in carefully maintained environments—from tarpaulin ponds to breeding tanks."
- Visual: Large farm photograph, layered with illustrated aquatic plants

**Interaction:**
- Images reveal on scroll
- Organic shape transitions
- Subtle zoom on farm image

---

## 03. LIFECYCLE STORY

**Visual Treatment:** Horizontal or vertical timeline with connected stages  
**Signature Section:** This is a unique storytelling opportunity  

**Content:**
- Section headline: "From tiny beginnings to beautiful little swimmers"
- Four stages with imagery and labels:
  1. **Egg** — "Life begins"
  2. **Fry** — "First swim"
  3. **Juvenile** — "Growing strong"
  4. **Adult** — "Ready for a new home"

**Interaction:**
- Scroll-driven progress indicator
- Each stage reveals as visitor scrolls
- Connecting line animates
- Images fade in sequentially
- Mobile: Vertical stack with scroll reveals

---

## 04. FEATURED COLLECTIONS

**Visual Treatment:** Asymmetric editorial layout, not standard grid  
**Purpose:** Transition from storytelling to commerce  

**Content:**
- Section headline: "Meet the little stars"
- Species categories with visual hierarchy:
  - **Featured:** Guppies (large hero treatment)
  - **Supporting:** Bettas, Swordtails, Platies
  - **Additional:** Cichlids, Crayfish, Crabs

**Each collection card:**
- Large species image (transparent cutout preferred)
- Species name
- Short editorial description
- "Explore collection" CTA
- Hover interaction (subtle movement, colour shift)

**Layout:**
- Avoid four-column grid
- Use different image sizes
- Overlap permitted
- Colour-coded by species type
- Ensure mobile stack is logical

**Data:** Dynamically sourced from Shopify collections

---

## 05. CARE & TRUST

**Visual Treatment:** Large hero image, split composition  
**Signature Visual:** Human hand holding ornamental fish  

**Content:**
- Section headline: "A little care goes a long way"
- Body: "Every fish is raised with attention, from breeding to feeding to preparation for its journey to your home."
- Large photograph: Hand holding fish
- Supporting details about care practices

**Purpose:** Humanize the brand, establish trust, show scale

---

## 06. FARM DIARIES

**Visual Treatment:** Editorial gallery or masonry layout  
**Content:** Behind-the-scenes farm life  

**Content:**
- Section headline: "Life around the ponds"
- Curated selection of farm photography:
  - Breeding tanks
  - Tarpaulin ponds
  - Fish feeding
  - Live-food cultures
  - Various fish species
  - Farm activities

**Layout:** Large image tiles, not generic Instagram widget  
**Option:** Link to Instagram for more content  
**Data:** Curated selection, not auto-feed unless it's high quality

---

## 07. WEDNESDAY DISPATCH

**Visual Treatment:** Sequential visual narrative  
**Signature Brand Moment:** This is a key differentiator  

**Content:**
- Section headline: "Wednesday is journey day"
- Supporting: "Packed with care. Sent with love."
- Three visual stages:
  1. **Selection** — "Your fish is carefully chosen"
  2. **Packaging** — "Prepared for a safe journey"
  3. **Dispatch** — "On its way to you"

**Visual Sequence:**
- Three connected images or illustrated journey
- Animated progress line
- Optional: animated parcel illustration

**Purpose:** Make shipping transparent and special, not transactional

**Mobile:** Vertical stack, maintain narrative flow

---

## 08. FEATURED PRODUCTS

**Visual Treatment:** Product showcase with personality  
**Data:** Dynamically sourced from Shopify  

**Content:**
- Section headline: "New arrivals" or "Available now"
- 4-6 featured products
- Product card with:
  - Product image
  - Name
  - Price (if confirmed)
  - Quick view or Add to cart
  - WhatsApp enquiry option

**If no products exist:** Show elegant empty state or hide section

---

## 09. FINAL CONVERSION

**Visual Treatment:** Beautiful closing composition  
**Visual:** Collage of colourful fish or single stunning hero fish  

**Content:**
- Headline: "Ready to bring home a little colour?"
- Primary CTA: "Explore the Collection"
- Secondary CTA: "Chat with us on WhatsApp"

**Purpose:** Natural conclusion to the story, clear call to action

---

## PERSISTENT ELEMENTS

### Custom Navigation
- Logo (left)
- Discover
- Our Farm
- The Fish
- Dispatch
- Contact
- Shopping bag icon
- Prominent "Shop" CTA button

**Behaviour:**
- Sticky/fixed
- Transparent-to-solid transition on scroll
- Custom mobile menu (hamburger)
- Functional cart indicator

### Footer
- About Midhula Farm Hut
- Quick links (Shop, Collections, Contact)
- Social media (Instagram)
- WhatsApp contact
- Newsletter signup (optional)
- Legal (Privacy, Terms)

---

## Technical Implementation

**Shopify Structure:**
- `templates/index.json` — Homepage template
- Individual sections for each chapter
- Reusable components as snippets
- Theme settings for easy editing
- Dynamic data from Shopify collections/products

**All sections must be:**
- Independently editable via theme editor
- Reorderable
- Show/hide toggle
- Configurable images, text, colours
- Responsive by default

---

## Mobile-First Considerations

- Hero: Portrait composition, large headline remains impactful
- Farm: Single column, maintain image quality
- Lifecycle: Vertical timeline with scroll reveals
- Collections: Stack with clear visual hierarchy
- Care: Image above content, maintain emotional impact
- Farm Diaries: 2-column grid or single column
- Dispatch: Vertical sequence
- Products: 2-column grid
- Final CTA: Full width, prominent buttons

---

## Performance Requirements

- Fast loading on 3G networks
- Lazy loading below fold
- Optimized images (WebP with fallbacks)
- Minimal JavaScript
- No layout shifts
- Progressive enhancement
- Works with reduced motion preferences

---

## Accessibility Requirements

- Semantic HTML
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation
- Focus states
- Sufficient colour contrast
- ARIA labels where appropriate
- Skip to main content link
