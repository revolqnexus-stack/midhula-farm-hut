# DESIGN SYSTEM — MIDHULA FARM HUT

## Colour Palette

**Note:** These are provisional values derived from visual analysis. Final palette should be confirmed against actual brand assets.

```css
:root {
  /* Primary Palette */
  --color-water: #7BC8D9;        /* Aquatic blue */
  --color-deep-water: #174D59;   /* Deep teal */
  --color-leaf: #7CA66A;         /* Leaf green */
  --color-coral: #F16B4E;        /* Vibrant coral-orange */
  
  /* Neutrals */
  --color-paper: #F7F2E8;        /* Warm off-white background */
  --color-sand: #D8C4A3;         /* Natural kraft tone */
  --color-ink: #243A35;          /* Deep text colour */
  --color-white: #FFFFFF;
  
  /* Functional */
  --color-success: #7CA66A;
  --color-error: #E74C3C;
  --color-warning: #F39C12;
  
  /* Opacity variants */
  --color-water-light: rgba(123, 200, 217, 0.1);
  --color-leaf-light: rgba(124, 166, 106, 0.1);
  --color-ink-light: rgba(36, 58, 53, 0.7);
}
```

---

## Typography

### Font Stack (to be finalized with actual brand fonts)

```css
:root {
  /* Display - for headlines */
  --font-display: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  
  /* Body - for content */
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
```

### Type Scale

```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  --text-7xl: 4.5rem;    /* 72px */
  --text-8xl: 6rem;      /* 96px */
}
```

### Line Heights

```css
:root {
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  --leading-loose: 2;
}
```

### Font Weights

```css
:root {
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}
```

---

## Spacing Scale

Based on 4px baseline grid.

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  --space-40: 10rem;    /* 160px */
}
```

---

## Border Radius

Organic, soft shapes throughout.

```css
:root {
  --radius-sm: 4px;
  --radius-base: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;
}
```

---

## Shadows

Subtle, natural elevation.

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
                 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
               0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
               0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
               0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
```

---

## Transitions

Smooth, organic motion.

```css
:root {
  --duration-fast: 150ms;
  --duration-base: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
  
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-organic: cubic-bezier(0.33, 1, 0.68, 1);
}
```

---

## Breakpoints

Mobile-first responsive design.

```css
:root {
  --bp-sm: 640px;   /* Small devices */
  --bp-md: 768px;   /* Tablets */
  --bp-lg: 1024px;  /* Laptops */
  --bp-xl: 1280px;  /* Desktops */
  --bp-2xl: 1536px; /* Large desktops */
}
```

---

## Z-Index Scale

Organized layering system.

```css
:root {
  --z-base: 1;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}
```

---

## Component Patterns

### Buttons

```css
.btn-primary {
  background: var(--color-coral);
  color: var(--color-white);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  transition: all var(--duration-base) var(--ease-out);
}

.btn-primary:hover {
  background: #E05A3E;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: transparent;
  color: var(--color-ink);
  border: 2px solid var(--color-ink);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-full);
  font-weight: var(--font-semibold);
  transition: all var(--duration-base) var(--ease-out);
}

.btn-secondary:hover {
  background: var(--color-ink);
  color: var(--color-white);
}
```

### Cards

```css
.card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: transform var(--duration-base) var(--ease-out),
              box-shadow var(--duration-base) var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### Organic Shapes

Use for section dividers and visual interest.

```css
.organic-shape {
  clip-path: ellipse(100% 55% at 50% 45%);
}
```

---

## Motion Design

### Animation Keyframes

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes drift {
  0% { transform: translateX(0px); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0px); }
}

@keyframes bubble-rise {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.7;
  }
  100% {
    transform: translateY(-100vh) scale(0.5);
    opacity: 0;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Accessibility

### Focus States

```css
:focus-visible {
  outline: 3px solid var(--color-coral);
  outline-offset: 2px;
}
```

### Minimum Contrast Ratios

- Normal text: 4.5:1
- Large text: 3:1
- UI components: 3:1

---

## Grid System

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-4);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 0 var(--space-8);
  }
}
```

---

## Image Treatment

### Aspect Ratios

```css
.aspect-square { aspect-ratio: 1 / 1; }
.aspect-video { aspect-ratio: 16 / 9; }
.aspect-portrait { aspect-ratio: 3 / 4; }
.aspect-wide { aspect-ratio: 21 / 9; }
```

### Object Fit

```css
.img-cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.img-contain {
  object-fit: contain;
  width: 100%;
  height: 100%;
}
```

---

## Usage Guidelines

1. **Use CSS custom properties** for all design tokens
2. **Maintain consistency** across components
3. **Test responsiveness** at all breakpoints
4. **Verify accessibility** with automated tools and manual testing
5. **Respect motion preferences** with prefers-reduced-motion
6. **Use organic shapes** to reinforce brand personality
7. **Maintain visual hierarchy** through typography and spacing
8. **Test colour contrast** for WCAG AA compliance minimum
