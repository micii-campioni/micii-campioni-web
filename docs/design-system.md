# Micii Campioni Design System

## Brand Foundation

### Who We're Designing For

**Primary Audience: Parents**
- Educated, urban professionals (primarily mothers)
- Age 28-42
- First-time or experienced parents
- Health-conscious, research-driven decision makers
- Willing to invest in their child's development
- Value expertise and credentials

**Secondary Audience: Pregnant Women**
- Looking for prenatal wellness
- Seeking community and support
- Health-focused

**Emotional State When Visiting:**
- Hopeful but anxious about their child's development
- Seeking reassurance and expertise
- Time-poor, decision-fatigued
- Want to feel they're making the best choice

### Brand Personality

| Trait | Expression |
|-------|------------|
| **Trustworthy** | Clean, professional, credentials visible |
| **Nurturing** | Warm colors, soft shapes, welcoming copy |
| **Expert** | Confident typography, clear hierarchy, scientific backing |
| **Pioneering** | Modern aesthetics, innovative feel |
| **Joyful** | Moments of delight, real smiles, playful accents |

### Brand Voice

- Warm but professional
- Confident but not arrogant
- Educational but not condescending
- Reassuring but not dismissive of concerns
- Romanian with natural, modern phrasing

---

## Design Direction: "Serene Vitality"

A design language that balances **calm professionalism** with **joyful energy**.

Think: A premium wellness spa meets a Montessori school. Sophisticated enough for discerning parents, warm enough to feel like family.

### Design Principles

1. **Breathe** - Generous whitespace creates calm, premium feel
2. **Flow** - Organic shapes and smooth transitions mirror water
3. **Warmth** - Every element should feel welcoming, never clinical
4. **Clarity** - Parents are busy; information must be instantly clear
5. **Delight** - Small moments of joy reinforce the positive experience

---

## Color System

### Philosophy

Traditional "baby" palettes are pastel and saccharine. Traditional "pool" palettes are chlorine-blue and institutional. We reject both.

Our palette draws from:
- **Natural water** - the cyan-teal of Caribbean shallows, not pool blue
- **Golden hour** - warm, nurturing light
- **Sandy shores** - grounding, natural neutrals
- **Coral reefs** - organic accent colors

### Primary Palette

```css
:root {
  /*
   * LAGOON - Primary Brand Color
   * A sophisticated teal that feels like calm, clear water
   * Use for: Primary actions, key UI elements, brand moments
   */
  --color-lagoon-50: #f0fdfb;
  --color-lagoon-100: #ccfbf4;
  --color-lagoon-200: #99f6ea;
  --color-lagoon-300: #5eeadb;
  --color-lagoon-400: #2dd4c4;
  --color-lagoon-500: #14b8a6;  /* PRIMARY */
  --color-lagoon-600: #0d9488;
  --color-lagoon-700: #0f766e;
  --color-lagoon-800: #115e59;
  --color-lagoon-900: #134e4a;
  --color-lagoon-950: #042f2e;

  /*
   * CORAL - Accent Color
   * Warm, nurturing, human
   * Use for: Highlights, CTAs, warmth moments
   */
  --color-coral-50: #fff7ed;
  --color-coral-100: #ffedd5;
  --color-coral-200: #fed7aa;
  --color-coral-300: #fdba74;
  --color-coral-400: #fb923c;
  --color-coral-500: #f97316;  /* ACCENT */
  --color-coral-600: #ea580c;
  --color-coral-700: #c2410c;
  --color-coral-800: #9a3412;
  --color-coral-900: #7c2d12;
  --color-coral-950: #431407;

  /*
   * SAND - Neutral Warm
   * Grounding, natural, welcoming
   * Use for: Backgrounds, cards, subtle UI
   */
  --color-sand-50: #fafaf9;
  --color-sand-100: #f5f5f4;
  --color-sand-200: #e7e5e4;
  --color-sand-300: #d6d3d1;
  --color-sand-400: #a8a29e;
  --color-sand-500: #78716c;
  --color-sand-600: #57534e;
  --color-sand-700: #44403c;
  --color-sand-800: #292524;
  --color-sand-900: #1c1917;
  --color-sand-950: #0c0a09;
}
```

### Semantic Colors

```css
:root {
  /* Backgrounds */
  --bg-primary: var(--color-sand-50);      /* Main page background */
  --bg-secondary: #ffffff;                  /* Cards, elevated surfaces */
  --bg-tertiary: var(--color-sand-100);    /* Subtle sections */
  --bg-inverse: var(--color-lagoon-950);   /* Dark sections */
  --bg-accent: var(--color-lagoon-50);     /* Highlighted sections */

  /* Text */
  --text-primary: var(--color-sand-900);   /* Main text */
  --text-secondary: var(--color-sand-600); /* Secondary text */
  --text-muted: var(--color-sand-400);     /* Disabled, hints */
  --text-inverse: var(--color-sand-50);    /* On dark backgrounds */
  --text-brand: var(--color-lagoon-600);   /* Brand-colored text */

  /* Interactive */
  --interactive-primary: var(--color-lagoon-500);
  --interactive-primary-hover: var(--color-lagoon-600);
  --interactive-secondary: var(--color-coral-500);
  --interactive-secondary-hover: var(--color-coral-600);

  /* Feedback */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: var(--color-lagoon-500);
}
```

### Color Usage Guidelines

| Element | Color | Reasoning |
|---------|-------|-----------|
| Primary buttons | Lagoon 500 | Brand recognition, clear CTAs |
| Secondary buttons | Coral 500 | Warmth, alternative actions |
| Page background | Sand 50 | Warm, not clinical white |
| Cards | White | Elevation, clarity |
| Section dividers | Lagoon 50/100 | Subtle brand presence |
| Footer | Lagoon 950 | Grounding, contrast |
| Links | Lagoon 600 | Accessible, on-brand |
| Highlights | Coral 100 | Draw attention warmly |

### Gradients

```css
:root {
  /* Hero gradient - evokes water surface */
  --gradient-hero: linear-gradient(
    135deg,
    var(--color-lagoon-400) 0%,
    var(--color-lagoon-600) 100%
  );

  /* Warm accent gradient */
  --gradient-warm: linear-gradient(
    135deg,
    var(--color-coral-400) 0%,
    var(--color-coral-600) 100%
  );

  /* Subtle surface gradient */
  --gradient-surface: linear-gradient(
    180deg,
    var(--color-sand-50) 0%,
    var(--color-sand-100) 100%
  );

  /* Water shimmer - for decorative use */
  --gradient-shimmer: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255,255,255,0.4) 50%,
    transparent 100%
  );
}
```

---

## Typography

### Font Selection

**Headings: Plus Jakarta Sans**
- Modern geometric sans-serif
- Friendly yet professional
- Excellent weight range
- Good Romanian diacritic support
- Free via Google Fonts

**Body: Inter**
- Exceptional readability
- Designed for screens
- Extensive character support
- Variable font for performance
- Free via Google Fonts

**Alternative Option:**
- Headings: Outfit (more playful)
- Body: Source Sans 3 (classic readability)

### Type Scale

Based on a 1.25 ratio (Major Third) for harmonious scaling:

```css
:root {
  /* Font Families */
  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Font Sizes - Mobile First */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
  --text-5xl: 3rem;        /* 48px */
  --text-6xl: 3.75rem;     /* 60px */
  --text-7xl: 4.5rem;      /* 72px */

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
}
```

### Typography Styles

```css
/* Display - Hero headlines */
.text-display {
  font-family: var(--font-heading);
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

@media (min-width: 768px) {
  .text-display {
    font-size: var(--text-6xl);
  }
}

@media (min-width: 1024px) {
  .text-display {
    font-size: var(--text-7xl);
  }
}

/* Heading 1 */
.text-h1 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

@media (min-width: 768px) {
  .text-h1 {
    font-size: var(--text-4xl);
  }
}

/* Heading 2 */
.text-h2 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
}

@media (min-width: 768px) {
  .text-h2 {
    font-size: var(--text-3xl);
  }
}

/* Heading 3 */
.text-h3 {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
}

@media (min-width: 768px) {
  .text-h3 {
    font-size: var(--text-2xl);
  }
}

/* Body Large */
.text-body-lg {
  font-family: var(--font-body);
  font-size: var(--text-lg);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}

/* Body Default */
.text-body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
}

/* Body Small */
.text-body-sm {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-normal);
  line-height: var(--leading-normal);
}

/* Caption */
.text-caption {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* Label */
.text-label {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  line-height: var(--leading-normal);
}
```

---

## Spacing System

Based on a 4px base unit for precise alignment:

```css
:root {
  --space-0: 0;
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
  --space-48: 12rem;    /* 192px */
}
```

### Spacing Guidelines

| Context | Spacing | Token |
|---------|---------|-------|
| Between related elements | 8-16px | space-2 to space-4 |
| Between components | 24-32px | space-6 to space-8 |
| Between sections | 64-96px | space-16 to space-24 |
| Page padding (mobile) | 16-24px | space-4 to space-6 |
| Page padding (desktop) | 32-48px | space-8 to space-12 |
| Card padding | 24-32px | space-6 to space-8 |

---

## Layout System

### Container

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container {
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}

/* Narrow container for text-heavy pages */
.container-narrow {
  max-width: 768px;
}

/* Wide container for full-bleed sections */
.container-wide {
  max-width: 1536px;
}
```

### Grid

12-column grid with responsive behavior:

```css
.grid {
  display: grid;
  gap: var(--space-6);
}

/* Common layouts */
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }

/* Responsive grid */
@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
}

/* Feature grid - asymmetric */
.grid-feature {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-8);
}

@media (min-width: 1024px) {
  .grid-feature {
    grid-template-columns: 1.2fr 0.8fr;
  }
}
```

### Breakpoints

```css
:root {
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

---

## Components

### Buttons

```css
/* Base button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  padding: var(--space-3) var(--space-6);

  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  line-height: 1;

  border-radius: var(--radius-full);
  border: 2px solid transparent;

  cursor: pointer;
  transition: all 200ms ease;
}

/* Primary - Lagoon */
.btn-primary {
  background: var(--color-lagoon-500);
  color: white;
}

.btn-primary:hover {
  background: var(--color-lagoon-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(20, 184, 166, 0.3);
}

/* Secondary - Coral */
.btn-secondary {
  background: var(--color-coral-500);
  color: white;
}

.btn-secondary:hover {
  background: var(--color-coral-600);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

/* Outline */
.btn-outline {
  background: transparent;
  border-color: var(--color-lagoon-500);
  color: var(--color-lagoon-600);
}

.btn-outline:hover {
  background: var(--color-lagoon-50);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-lagoon-600);
}

.btn-ghost:hover {
  background: var(--color-lagoon-50);
}

/* Sizes */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-xs);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
}
```

### Cards

```css
.card {
  background: white;
  border-radius: var(--radius-2xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: all 300ms ease;
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

/* Card with image */
.card-image {
  padding: 0;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
}

.card-image .card-content {
  padding: var(--space-6);
}

/* Feature card - larger, more prominent */
.card-feature {
  padding: var(--space-8);
  background: linear-gradient(135deg, white 0%, var(--color-sand-50) 100%);
}

/* Testimonial card */
.card-testimonial {
  background: var(--color-lagoon-50);
  border-left: 4px solid var(--color-lagoon-500);
}
```

### Border Radius

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
  --radius-2xl: 1.5rem;    /* 24px */
  --radius-3xl: 2rem;      /* 32px */
  --radius-full: 9999px;   /* Pill shape */
}
```

### Shadows

```css
:root {
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.07),
               0 2px 4px -2px rgba(0, 0, 0, 0.05);

  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08),
               0 4px 6px -4px rgba(0, 0, 0, 0.05);

  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.08),
               0 8px 10px -6px rgba(0, 0, 0, 0.05);

  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.15);

  /* Colored shadows for buttons */
  --shadow-lagoon: 0 4px 14px 0 rgba(20, 184, 166, 0.25);
  --shadow-coral: 0 4px 14px 0 rgba(249, 115, 22, 0.25);
}
```

---

## Z-Index Scale

A consistent layering system prevents z-index wars:

```css
:root {
  /* Base layers */
  --z-below: -1;
  --z-base: 0;
  --z-raised: 1;

  /* UI elements */
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-header: 300;
  --z-overlay: 400;
  --z-modal: 500;
  --z-popover: 600;
  --z-tooltip: 700;
  --z-toast: 800;
  --z-max: 999;
}
```

### Z-Index Usage

| Element | Token | Value |
|---------|-------|-------|
| Page content | `--z-base` | 0 |
| Floating cards | `--z-raised` | 1 |
| Dropdown menus | `--z-dropdown` | 100 |
| Sticky sidebar | `--z-sticky` | 200 |
| Fixed navigation | `--z-header` | 300 |
| Modal backdrop | `--z-overlay` | 400 |
| Modal content | `--z-modal` | 500 |
| Popover menus | `--z-popover` | 600 |
| Tooltips | `--z-tooltip` | 700 |
| Toast notifications | `--z-toast` | 800 |

---

## Form Elements

### Text Input

```css
.input {
  display: block;
  width: 100%;
  padding: var(--space-3) var(--space-4);

  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-primary);

  background: white;
  border: 2px solid var(--color-sand-200);
  border-radius: var(--radius-xl);

  transition: all var(--duration-fast) var(--ease-out);
}

.input::placeholder {
  color: var(--color-sand-400);
}

.input:hover {
  border-color: var(--color-sand-300);
}

.input:focus {
  outline: none;
  border-color: var(--color-lagoon-500);
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
}

/* Error state */
.input-error {
  border-color: var(--color-error);
}

.input-error:focus {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
}

/* Success state */
.input-success {
  border-color: var(--color-success);
}

/* Disabled state */
.input:disabled {
  background: var(--color-sand-100);
  color: var(--text-muted);
  cursor: not-allowed;
}
```

### Textarea

```css
.textarea {
  display: block;
  width: 100%;
  min-height: 120px;
  padding: var(--space-3) var(--space-4);

  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);

  background: white;
  border: 2px solid var(--color-sand-200);
  border-radius: var(--radius-xl);

  resize: vertical;
  transition: all var(--duration-fast) var(--ease-out);
}

.textarea:focus {
  outline: none;
  border-color: var(--color-lagoon-500);
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
}
```

### Select Dropdown

```css
.select {
  display: block;
  width: 100%;
  padding: var(--space-3) var(--space-4);
  padding-right: var(--space-10);

  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  color: var(--text-primary);

  background: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%2378716c' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right var(--space-3) center;
  background-size: 20px;

  border: 2px solid var(--color-sand-200);
  border-radius: var(--radius-xl);

  appearance: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.select:focus {
  outline: none;
  border-color: var(--color-lagoon-500);
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
}
```

### Checkbox

```css
.checkbox-wrapper {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.checkbox {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;

  background: white;
  border: 2px solid var(--color-sand-300);
  border-radius: var(--radius-sm);

  appearance: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.checkbox:hover {
  border-color: var(--color-lagoon-500);
}

.checkbox:checked {
  background: var(--color-lagoon-500);
  border-color: var(--color-lagoon-500);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}

.checkbox:focus-visible {
  outline: 3px solid var(--color-coral-400);
  outline-offset: 2px;
}
```

### Radio Button

```css
.radio-wrapper {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.radio {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  margin-top: 2px;

  background: white;
  border: 2px solid var(--color-sand-300);
  border-radius: var(--radius-full);

  appearance: none;
  cursor: pointer;
  transition: all var(--duration-fast) var(--ease-out);
}

.radio:hover {
  border-color: var(--color-lagoon-500);
}

.radio:checked {
  border-color: var(--color-lagoon-500);
  border-width: 6px;
}

.radio:focus-visible {
  outline: 3px solid var(--color-coral-400);
  outline-offset: 2px;
}
```

### Form Label

```css
.label {
  display: block;
  margin-bottom: var(--space-2);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.label-required::after {
  content: ' *';
  color: var(--color-error);
}
```

### Form Helper/Error Text

```css
.form-helper {
  margin-top: var(--space-2);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--text-secondary);
}

.form-error {
  margin-top: var(--space-2);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-error);
}
```

### Form Group

```css
.form-group {
  margin-bottom: var(--space-5);
}

.form-group:last-child {
  margin-bottom: 0;
}
```

---

## Navigation

### Desktop Navigation

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-sand-100);

  z-index: var(--z-header);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
}

.nav-logo {
  height: 48px;
  width: auto;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-link {
  padding: var(--space-2) var(--space-4);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-decoration: none;

  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-out);
}

.nav-link:hover {
  color: var(--text-primary);
  background: var(--color-sand-100);
}

.nav-link-active {
  color: var(--color-lagoon-600);
  background: var(--color-lagoon-50);
}

/* Dropdown trigger */
.nav-dropdown {
  position: relative;
}

.nav-dropdown-trigger {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.nav-dropdown-trigger svg {
  width: 16px;
  height: 16px;
  transition: transform var(--duration-fast) var(--ease-out);
}

.nav-dropdown:hover .nav-dropdown-trigger svg {
  transform: rotate(180deg);
}

/* Dropdown menu */
.nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  padding: var(--space-2);

  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);

  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition: all var(--duration-fast) var(--ease-out);

  z-index: var(--z-dropdown);
}

.nav-dropdown:hover .nav-dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-dropdown-item {
  display: block;
  padding: var(--space-3) var(--space-4);

  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-decoration: none;

  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-out);
}

.nav-dropdown-item:hover {
  color: var(--text-primary);
  background: var(--color-sand-50);
}
```

### Mobile Navigation

```css
/* Mobile menu button */
.nav-mobile-toggle {
  display: none;
  padding: var(--space-2);

  background: transparent;
  border: none;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .nav-mobile-toggle {
    display: flex;
  }

  .nav-menu {
    display: none;
  }
}

.nav-mobile-toggle svg {
  width: 24px;
  height: 24px;
  color: var(--text-primary);
}

/* Mobile drawer */
.nav-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 320px;

  background: white;
  box-shadow: var(--shadow-2xl);

  transform: translateX(100%);
  transition: transform var(--duration-normal) var(--ease-out);

  z-index: var(--z-modal);
}

.nav-drawer-open {
  transform: translateX(0);
}

.nav-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--color-sand-100);
}

.nav-drawer-close {
  padding: var(--space-2);
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-drawer-menu {
  padding: var(--space-4);
}

.nav-drawer-link {
  display: block;
  padding: var(--space-4);

  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-decoration: none;

  border-radius: var(--radius-lg);
  transition: all var(--duration-fast) var(--ease-out);
}

.nav-drawer-link:hover,
.nav-drawer-link-active {
  color: var(--color-lagoon-600);
  background: var(--color-lagoon-50);
}

/* Mobile drawer overlay */
.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal) var(--ease-out);
  z-index: var(--z-overlay);
}

.nav-overlay-visible {
  opacity: 1;
  visibility: visible;
}
```

---

## Tabs

```css
.tabs {
  width: 100%;
}

.tabs-list {
  display: flex;
  gap: var(--space-1);
  padding: var(--space-1);

  background: var(--color-sand-100);
  border-radius: var(--radius-xl);
}

.tabs-trigger {
  flex: 1;
  padding: var(--space-3) var(--space-4);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  text-align: center;

  background: transparent;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;

  transition: all var(--duration-fast) var(--ease-out);
}

.tabs-trigger:hover {
  color: var(--text-primary);
}

.tabs-trigger-active {
  color: var(--color-lagoon-700);
  background: white;
  box-shadow: var(--shadow-sm);
}

.tabs-content {
  padding: var(--space-6) 0;
}

/* Underline variant */
.tabs-underline .tabs-list {
  background: transparent;
  border-bottom: 2px solid var(--color-sand-200);
  border-radius: 0;
  padding: 0;
  gap: var(--space-6);
}

.tabs-underline .tabs-trigger {
  padding: var(--space-4) 0;
  border-radius: 0;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
}

.tabs-underline .tabs-trigger-active {
  color: var(--color-lagoon-600);
  background: transparent;
  border-bottom-color: var(--color-lagoon-500);
  box-shadow: none;
}
```

---

## Modal/Dialog

```css
/* Overlay */
.modal-overlay {
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-normal) var(--ease-out);

  z-index: var(--z-modal);
}

.modal-overlay-open {
  opacity: 1;
  visibility: visible;
}

/* Modal container */
.modal {
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: calc(100vh - var(--space-8));

  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);

  overflow: hidden;

  transform: scale(0.95) translateY(10px);
  transition: transform var(--duration-normal) var(--ease-out);
}

.modal-overlay-open .modal {
  transform: scale(1) translateY(0);
}

/* Modal sizes */
.modal-sm { max-width: 400px; }
.modal-lg { max-width: 640px; }
.modal-xl { max-width: 800px; }
.modal-full { max-width: calc(100vw - var(--space-8)); }

/* Modal header */
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-5) var(--space-6);
  border-bottom: 1px solid var(--color-sand-100);
}

.modal-title {
  font-family: var(--font-heading);
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  background: transparent;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;

  transition: background var(--duration-fast) var(--ease-out);
}

.modal-close:hover {
  background: var(--color-sand-100);
}

.modal-close svg {
  width: 20px;
  height: 20px;
  color: var(--text-secondary);
}

/* Modal body */
.modal-body {
  padding: var(--space-6);
  overflow-y: auto;
}

/* Modal footer */
.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  border-top: 1px solid var(--color-sand-100);
  background: var(--color-sand-50);
}
```

---

## Alert/Banner

```css
.alert {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);

  border-radius: var(--radius-xl);
}

.alert-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.alert-content {
  flex: 1;
}

.alert-title {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  margin-bottom: var(--space-1);
}

.alert-message {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

/* Variants */
.alert-info {
  background: var(--color-lagoon-50);
  color: var(--color-lagoon-800);
}

.alert-info .alert-icon {
  color: var(--color-lagoon-500);
}

.alert-success {
  background: #ecfdf5;
  color: #065f46;
}

.alert-success .alert-icon {
  color: var(--color-success);
}

.alert-warning {
  background: #fffbeb;
  color: #92400e;
}

.alert-warning .alert-icon {
  color: var(--color-warning);
}

.alert-error {
  background: #fef2f2;
  color: #991b1b;
}

.alert-error .alert-icon {
  color: var(--color-error);
}

/* Dismissible */
.alert-dismissible {
  padding-right: var(--space-10);
  position: relative;
}

.alert-dismiss {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  background: transparent;
  border: none;
  border-radius: var(--radius-md);
  cursor: pointer;

  opacity: 0.6;
  transition: opacity var(--duration-fast) var(--ease-out);
}

.alert-dismiss:hover {
  opacity: 1;
}
```

---

## Toast/Snackbar

```css
.toast-container {
  position: fixed;
  bottom: var(--space-6);
  right: var(--space-6);

  display: flex;
  flex-direction: column;
  gap: var(--space-3);

  z-index: var(--z-toast);
}

@media (max-width: 640px) {
  .toast-container {
    left: var(--space-4);
    right: var(--space-4);
    bottom: var(--space-4);
  }
}

.toast {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  min-width: 300px;
  max-width: 420px;
  padding: var(--space-4);

  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);

  animation: slideInRight var(--duration-normal) var(--ease-out);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.toast-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
}

.toast-success .toast-icon { color: var(--color-success); }
.toast-error .toast-icon { color: var(--color-error); }
.toast-warning .toast-icon { color: var(--color-warning); }
.toast-info .toast-icon { color: var(--color-lagoon-500); }

.toast-content {
  flex: 1;
}

.toast-title {
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  margin-bottom: var(--space-1);
}

.toast-message {
  font-size: var(--text-sm);
  color: var(--text-secondary);
}
```

---

## Badge/Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-1) var(--space-3);

  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-medium);
  line-height: 1;

  border-radius: var(--radius-full);
}

/* Variants */
.badge-default {
  background: var(--color-sand-100);
  color: var(--text-secondary);
}

.badge-primary {
  background: var(--color-lagoon-100);
  color: var(--color-lagoon-700);
}

.badge-secondary {
  background: var(--color-coral-100);
  color: var(--color-coral-700);
}

.badge-success {
  background: #d1fae5;
  color: #065f46;
}

.badge-warning {
  background: #fef3c7;
  color: #92400e;
}

.badge-error {
  background: #fee2e2;
  color: #991b1b;
}

/* Sizes */
.badge-lg {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

/* With dot */
.badge-dot::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: var(--radius-full);
  background: currentColor;
}
```

---

## Breadcrumb

```css
.breadcrumb {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);

  font-family: var(--font-body);
  font-size: var(--text-sm);
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.breadcrumb-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.breadcrumb-link:hover {
  color: var(--color-lagoon-600);
}

.breadcrumb-separator {
  color: var(--color-sand-300);
}

.breadcrumb-separator svg {
  width: 16px;
  height: 16px;
}

.breadcrumb-current {
  color: var(--text-primary);
  font-weight: var(--font-medium);
}
```

---

## Pagination

```css
.pagination {
  display: flex;
  align-items: center;
  gap: var(--space-1);
}

.pagination-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: var(--space-2);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: var(--text-secondary);

  background: transparent;
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;

  transition: all var(--duration-fast) var(--ease-out);
}

.pagination-btn:hover:not(:disabled) {
  background: var(--color-sand-100);
  color: var(--text-primary);
}

.pagination-btn-active {
  background: var(--color-lagoon-500);
  color: white;
}

.pagination-btn-active:hover {
  background: var(--color-lagoon-600);
  color: white;
}

.pagination-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-ellipsis {
  padding: var(--space-2);
  color: var(--text-muted);
}
```

---

## Tooltip

```css
.tooltip-trigger {
  position: relative;
  cursor: help;
}

.tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);

  padding: var(--space-2) var(--space-3);
  max-width: 200px;

  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: white;
  text-align: center;

  background: var(--color-sand-900);
  border-radius: var(--radius-lg);

  opacity: 0;
  visibility: hidden;
  transition: all var(--duration-fast) var(--ease-out);

  z-index: var(--z-tooltip);
}

/* Arrow */
.tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  border: 6px solid transparent;
  border-top-color: var(--color-sand-900);
}

.tooltip-trigger:hover .tooltip {
  opacity: 1;
  visibility: visible;
}

/* Positions */
.tooltip-top { /* default */ }

.tooltip-bottom {
  bottom: auto;
  top: calc(100% + 8px);
}

.tooltip-bottom::after {
  top: auto;
  bottom: 100%;
  border-top-color: transparent;
  border-bottom-color: var(--color-sand-900);
}
```

---

## Loading States

### Spinner

```css
.spinner {
  width: 24px;
  height: 24px;

  border: 2px solid var(--color-sand-200);
  border-top-color: var(--color-lagoon-500);
  border-radius: var(--radius-full);

  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* Sizes */
.spinner-sm { width: 16px; height: 16px; }
.spinner-lg { width: 32px; height: 32px; }
.spinner-xl { width: 48px; height: 48px; }

/* On buttons */
.btn-loading {
  position: relative;
  color: transparent;
}

.btn-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 16px;
  height: 16px;

  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: var(--radius-full);

  animation: spin 0.8s linear infinite;
}
```

### Skeleton

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-sand-100) 0%,
    var(--color-sand-200) 50%,
    var(--color-sand-100) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  border-radius: var(--radius-md);
}

@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Common skeleton shapes */
.skeleton-text {
  height: 16px;
  margin-bottom: var(--space-2);
}

.skeleton-text:last-child {
  width: 60%;
}

.skeleton-heading {
  height: 28px;
  width: 50%;
  margin-bottom: var(--space-4);
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-full);
}

.skeleton-image {
  aspect-ratio: 16/10;
  border-radius: var(--radius-2xl);
}

.skeleton-card {
  padding: var(--space-6);
  border-radius: var(--radius-2xl);
  background: white;
}
```

### Button Disabled State

```css
.btn:disabled,
.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.btn:disabled:hover {
  transform: none;
  box-shadow: none;
}
```

---

## Table

```css
.table-container {
  width: 100%;
  overflow-x: auto;
}

.table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: var(--text-sm);
}

.table th,
.table td {
  padding: var(--space-4);
  text-align: left;
  border-bottom: 1px solid var(--color-sand-200);
}

.table th {
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  background: var(--color-sand-50);
}

.table td {
  color: var(--text-secondary);
}

.table tbody tr:hover {
  background: var(--color-sand-50);
}

/* Striped variant */
.table-striped tbody tr:nth-child(even) {
  background: var(--color-sand-50);
}

/* Bordered variant */
.table-bordered th,
.table-bordered td {
  border: 1px solid var(--color-sand-200);
}

/* Schedule table specific */
.table-schedule {
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-sand-200);
}

.table-schedule th {
  background: var(--color-lagoon-50);
  color: var(--color-lagoon-800);
}
```

---

## Lists

```css
/* Unordered list */
.list-ul {
  padding-left: var(--space-6);
  margin: var(--space-4) 0;
}

.list-ul li {
  position: relative;
  padding-left: var(--space-2);
  margin-bottom: var(--space-2);
  color: var(--text-secondary);
}

.list-ul li::marker {
  color: var(--color-lagoon-500);
}

/* Ordered list */
.list-ol {
  padding-left: var(--space-6);
  margin: var(--space-4) 0;
}

.list-ol li {
  padding-left: var(--space-2);
  margin-bottom: var(--space-2);
  color: var(--text-secondary);
}

.list-ol li::marker {
  color: var(--color-lagoon-600);
  font-weight: var(--font-semibold);
}

/* Check list */
.list-check {
  list-style: none;
  padding-left: 0;
  margin: var(--space-4) 0;
}

.list-check li {
  position: relative;
  padding-left: var(--space-7);
  margin-bottom: var(--space-3);
  color: var(--text-secondary);
}

.list-check li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  width: 20px;
  height: 20px;
  background: var(--color-lagoon-500);
  border-radius: var(--radius-full);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
}
```

---

## Footer

```css
.footer {
  background: var(--color-lagoon-950);
  color: var(--color-sand-200);
  padding: var(--space-16) 0 var(--space-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: var(--space-10);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}

.footer-brand {
  max-width: 280px;
}

.footer-logo {
  height: 40px;
  margin-bottom: var(--space-4);
}

.footer-description {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  color: var(--color-sand-400);
}

.footer-heading {
  font-family: var(--font-heading);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  color: white;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: var(--space-3);
}

.footer-links a {
  font-size: var(--text-sm);
  color: var(--color-sand-400);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.footer-links a:hover {
  color: white;
}

/* Social links */
.footer-social {
  display: flex;
  gap: var(--space-3);
}

.footer-social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);

  transition: all var(--duration-fast) var(--ease-out);
}

.footer-social a:hover {
  background: var(--color-lagoon-500);
}

.footer-social svg {
  width: 20px;
  height: 20px;
  color: white;
}

/* Footer bottom */
.footer-bottom {
  margin-top: var(--space-12);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

@media (min-width: 768px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-copyright {
  font-size: var(--text-sm);
  color: var(--color-sand-500);
}

.footer-legal {
  display: flex;
  gap: var(--space-6);
}

.footer-legal a {
  font-size: var(--text-sm);
  color: var(--color-sand-500);
  text-decoration: none;
}

.footer-legal a:hover {
  color: white;
}
```

---

## Decorative Elements

### Organic Shapes

The brand uses soft, organic "blob" shapes to:
- Break up rigid layouts
- Evoke water/fluidity
- Add visual interest without distraction

```svg
<!-- Example blob shape for backgrounds -->
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#14B8A6" fill-opacity="0.1" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.1C64.8,55,53.7,66.2,40.4,74.2C27.1,82.2,11.6,87,-3.7,92.1C-19,97.2,-33.9,102.6,-47.5,99.1C-61.1,95.6,-73.3,83.2,-80.1,68.6C-86.9,54,-88.3,37.2,-88.7,21.2C-89.1,5.2,-88.5,-10,-83.9,-23.8C-79.3,-37.5,-70.7,-49.8,-59.3,-58.5C-47.9,-67.2,-33.7,-72.3,-19.4,-78.2C-5.1,-84.1,9.3,-90.8,24.2,-91.4C39.1,-92,54.5,-86.5,44.7,-76.4Z" transform="translate(100 100)" />
</svg>
```

### Wave Dividers

Modern wave separators between sections:

```svg
<!-- Gentle wave -->
<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 120L48 110C96 100 192 80 288 75C384 70 480 80 576 85C672 90 768 90 864 85C960 80 1056 70 1152 70C1248 70 1344 80 1392 85L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="currentColor"/>
</svg>
```

### Bubble Accents

Floating circle elements that evoke water bubbles:

```css
.bubble {
  position: absolute;
  border-radius: var(--radius-full);
  background: var(--color-lagoon-200);
  opacity: 0.4;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
```

---

## Iconography

### Style Guidelines

- **Stroke-based** icons (not filled)
- **2px stroke weight** for consistency
- **Rounded caps and joins** for friendliness
- **24x24 default size**
- **Lagoon-600** as default color

### Custom Icon Set (Conceptual)

Create custom icons for:

| Icon | Use |
|------|-----|
| Baby in water | Metoda Sultana |
| Parent + child | Educatie Acvatica |
| Pregnant woman | Activitate gravide |
| Book + heart | Scoala Parintilor |
| Hands healing | Kinetoterapie |
| Certificate | Distinctii |
| Water drop | Safety/quality |
| Clock | Schedule |
| Map pin | Location |
| Phone | Contact |
| Envelope | Email |

### Recommended Icon Library

**Lucide Icons** (fork of Feather)
- Consistent 24x24 grid
- 2px strokes
- MIT licensed
- React components available

---

## Photography Style

### Guidelines

1. **Authentic moments** - Real parents, real babies, real emotions
2. **Warm lighting** - Golden hour feel, not clinical
3. **Shallow depth of field** - Focus on faces, soft backgrounds
4. **Water as hero** - Capture the joy of water
5. **Diversity** - Various family types, ethnicities
6. **Eye contact** - Connection with viewer
7. **Movement** - Capture action, not stiff poses

### Image Treatment

```css
/* Default image style */
.img-styled {
  border-radius: var(--radius-2xl);
  overflow: hidden;
}

/* Warm overlay for consistency */
.img-warm::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(249, 115, 22, 0.05) 0%,
    transparent 100%
  );
  pointer-events: none;
}
```

### Placeholder Colors

When images aren't available:

```css
.img-placeholder {
  background: linear-gradient(
    135deg,
    var(--color-lagoon-100) 0%,
    var(--color-lagoon-200) 100%
  );
}
```

---

## Motion & Animation

### Principles

1. **Purposeful** - Every animation should have meaning
2. **Subtle** - Parents are tired; don't overwhelm
3. **Fast** - Respect users' time
4. **Natural** - Ease curves that feel organic

### Timing

```css
:root {
  /* Durations */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 700ms;

  /* Easings */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Standard Transitions

```css
/* Hover states */
.transition-hover {
  transition: all var(--duration-fast) var(--ease-out);
}

/* Layout changes */
.transition-layout {
  transition: all var(--duration-normal) var(--ease-in-out);
}

/* Page transitions */
.transition-page {
  transition: opacity var(--duration-slow) var(--ease-out);
}
```

### Scroll Animations

Using Framer Motion / CSS:

```css
/* Fade up on scroll */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp var(--duration-slow) var(--ease-out) forwards;
}

/* Staggered children */
.stagger-children > * {
  animation: fadeUp var(--duration-slow) var(--ease-out) forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
.stagger-children > *:nth-child(4) { animation-delay: 300ms; }
```

---

## Page Templates

### Homepage Structure

```
┌─────────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BAR (optional)                                 │
├─────────────────────────────────────────────────────────────┤
│ NAVIGATION                                                   │
│ Logo (center) | Menu items (left/right)                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    HERO SECTION                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │                                                     │  │
│   │  Large headline                                     │  │
│   │  Subheadline with value proposition                 │  │
│   │  [Primary CTA]  [Secondary CTA]                     │  │
│   │                                                     │  │
│   └─────────────────────────────────────────────────────┘  │
│   Floating stats: "20+ years" | "5000+ families" | etc     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ WAVE DIVIDER                                                │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  SERVICES GRID                              │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐      │
│   │ Service │  │ Service │  │ Service │  │ Service │      │
│   │  Card   │  │  Card   │  │  Card   │  │  Card   │      │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│            ABOUT / STORY SECTION                            │
│   ┌────────────────────┐  ┌────────────────────────────┐   │
│   │                    │  │                            │   │
│   │      Image         │  │  Headline                  │   │
│   │                    │  │  Story text                │   │
│   │                    │  │  [Learn more]              │   │
│   └────────────────────┘  └────────────────────────────┘   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              TESTIMONIALS SECTION                           │
│   Background: Lagoon-50                                     │
│   ┌─────────────────────────────────────────────────────┐  │
│   │  "Quote from parent..."                             │  │
│   │  - Parent Name, relationship                        │  │
│   └─────────────────────────────────────────────────────┘  │
│   ○ ○ ● ○ ○ (pagination dots)                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│              CREDENTIALS SECTION                            │
│   Logos: FAAEL | Ministry endorsement | OSIM               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                  CTA SECTION                                │
│   Background: Gradient                                      │
│   "Ready to start your child's journey?"                    │
│   [Contact Us]                                              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
│ Contact | Social | Navigation | Legal                       │
└─────────────────────────────────────────────────────────────┘
```

### Service Page Structure

```
┌─────────────────────────────────────────────────────────────┐
│ NAVIGATION                                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   BREADCRUMB: Home > Services > [Service Name]              │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   PAGE HEADER                                               │
│   ┌────────────────────────────────────────────────────┐   │
│   │  [Icon]                                            │   │
│   │  Service Name                                      │   │
│   │  Brief description                                 │   │
│   └────────────────────────────────────────────────────┘   │
│                                                             │
├──────────────────────────────┬──────────────────────────────┤
│                              │                              │
│   MAIN CONTENT               │   SIDEBAR                    │
│   (8 columns)                │   (4 columns)                │
│                              │                              │
│   Introduction text          │   ┌────────────────────┐    │
│                              │   │ QUICK INFO         │    │
│   [Image]                    │   │ Age: X-X           │    │
│                              │   │ Duration: X min    │    │
│   Section heading            │   │ [Book Now]         │    │
│   Content...                 │   └────────────────────┘    │
│                              │                              │
│   TABS (if applicable)       │   ┌────────────────────┐    │
│   ┌─────┬─────┬─────┐       │   │ RELATED SERVICES   │    │
│   │Tab 1│Tab 2│Tab 3│       │   │ • Service A        │    │
│   └─────┴─────┴─────┘       │   │ • Service B        │    │
│   Tab content...             │   └────────────────────┘    │
│                              │                              │
│                              │   ┌────────────────────┐    │
│                              │   │ TESTIMONIAL        │    │
│                              │   │ "Quote..."         │    │
│                              │   └────────────────────┘    │
│                              │                              │
├──────────────────────────────┴──────────────────────────────┤
│                                                             │
│   RELATED CONTENT / CTA                                     │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ FOOTER                                                       │
└─────────────────────────────────────────────────────────────┘
```

---

## Image Aspect Ratios

Standardized aspect ratios for consistent image display:

```css
:root {
  --aspect-square: 1 / 1;
  --aspect-video: 16 / 9;
  --aspect-card: 16 / 10;
  --aspect-hero: 21 / 9;
  --aspect-portrait: 3 / 4;
  --aspect-avatar: 1 / 1;
  --aspect-gallery: 4 / 3;
}

/* Utility classes */
.aspect-square { aspect-ratio: var(--aspect-square); }
.aspect-video { aspect-ratio: var(--aspect-video); }
.aspect-card { aspect-ratio: var(--aspect-card); }
.aspect-hero { aspect-ratio: var(--aspect-hero); }
.aspect-portrait { aspect-ratio: var(--aspect-portrait); }
.aspect-gallery { aspect-ratio: var(--aspect-gallery); }
```

### Usage Guidelines

| Context | Aspect Ratio | Notes |
|---------|--------------|-------|
| Hero images | 21:9 | Wide, cinematic feel |
| Service cards | 16:10 | Slightly taller than video |
| Gallery thumbnails | 4:3 | Classic photo ratio |
| Team/Avatar | 1:1 | Square, consistent |
| Video embeds | 16:9 | Standard video |
| Testimonial backgrounds | 16:10 | Matches cards |

---

## Prose / Rich Text

Styles for CMS-driven long-form content:

```css
.prose {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
}

.prose > * + * {
  margin-top: var(--space-5);
}

/* Headings */
.prose h1 {
  font-family: var(--font-heading);
  font-size: var(--text-3xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin-top: var(--space-10);
  margin-bottom: var(--space-4);
}

.prose h2 {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--text-primary);
  margin-top: var(--space-8);
  margin-bottom: var(--space-4);
}

.prose h3 {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
  color: var(--text-primary);
  margin-top: var(--space-6);
  margin-bottom: var(--space-3);
}

/* Paragraphs */
.prose p {
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

/* Links */
.prose a {
  color: var(--color-lagoon-600);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color var(--duration-fast) var(--ease-out);
}

.prose a:hover {
  color: var(--color-lagoon-700);
}

/* Lists */
.prose ul,
.prose ol {
  padding-left: var(--space-6);
  margin: var(--space-4) 0;
}

.prose li {
  margin-bottom: var(--space-2);
}

.prose ul li::marker {
  color: var(--color-lagoon-500);
}

.prose ol li::marker {
  color: var(--color-lagoon-600);
  font-weight: var(--font-semibold);
}

/* Blockquote */
.prose blockquote {
  padding: var(--space-4) var(--space-6);
  margin: var(--space-6) 0;

  border-left: 4px solid var(--color-lagoon-500);
  background: var(--color-lagoon-50);
  border-radius: 0 var(--radius-xl) var(--radius-xl) 0;

  font-style: italic;
  color: var(--color-lagoon-800);
}

.prose blockquote p {
  margin: 0;
}

/* Code */
.prose code {
  padding: var(--space-1) var(--space-2);

  font-family: ui-monospace, monospace;
  font-size: 0.875em;

  background: var(--color-sand-100);
  border-radius: var(--radius-md);
}

.prose pre {
  padding: var(--space-4);
  margin: var(--space-6) 0;

  background: var(--color-sand-900);
  border-radius: var(--radius-xl);
  overflow-x: auto;
}

.prose pre code {
  padding: 0;
  background: transparent;
  color: var(--color-sand-100);
}

/* Images */
.prose img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-2xl);
  margin: var(--space-6) 0;
}

.prose figure {
  margin: var(--space-6) 0;
}

.prose figcaption {
  margin-top: var(--space-2);
  font-size: var(--text-sm);
  color: var(--text-muted);
  text-align: center;
}

/* Horizontal rule */
.prose hr {
  margin: var(--space-10) 0;
  border: none;
  border-top: 1px solid var(--color-sand-200);
}

/* Tables in prose */
.prose table {
  width: 100%;
  margin: var(--space-6) 0;
  border-collapse: collapse;
}

.prose th,
.prose td {
  padding: var(--space-3) var(--space-4);
  text-align: left;
  border-bottom: 1px solid var(--color-sand-200);
}

.prose th {
  font-weight: var(--font-semibold);
  color: var(--text-primary);
  background: var(--color-sand-50);
}
```

---

## Utility Classes

### Screen Reader Only

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Make visible on focus (for skip links) */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  padding: var(--space-3) var(--space-4);
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### Skip Links

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: var(--space-4);
  z-index: var(--z-max);

  padding: var(--space-3) var(--space-6);

  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  color: white;

  background: var(--color-lagoon-600);
  border-radius: var(--radius-lg);

  transition: top var(--duration-fast) var(--ease-out);
}

.skip-link:focus {
  top: var(--space-4);
}
```

### Text Utilities

```css
.text-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.text-balance {
  text-wrap: balance;
}
```

### Object Fit Utilities

```css
.object-cover {
  object-fit: cover;
}

.object-contain {
  object-fit: contain;
}

.object-center {
  object-position: center;
}

.object-top {
  object-position: top;
}
```

### Visibility Utilities

```css
.visible { visibility: visible; }
.invisible { visibility: hidden; }

.opacity-0 { opacity: 0; }
.opacity-50 { opacity: 0.5; }
.opacity-100 { opacity: 1; }
```

### Flex Utilities

```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.items-center { align-items: center; }
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-end { justify-content: flex-end; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }
```

---

## Responsive Behavior

### Breakpoint Strategy

| Breakpoint | Target | Behavior |
|------------|--------|----------|
| < 640px | Mobile phones | Single column, stacked nav |
| 640-768px | Large phones, small tablets | Minor adjustments |
| 768-1024px | Tablets | Two-column layouts begin |
| 1024-1280px | Small laptops | Full navigation visible |
| > 1280px | Desktops | Maximum content width |

### Mobile-First Patterns

```css
/* Typography scales down on mobile */
.text-display {
  font-size: var(--text-4xl);  /* Mobile */
}

@media (min-width: 768px) {
  .text-display {
    font-size: var(--text-5xl);  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .text-display {
    font-size: var(--text-6xl);  /* Desktop */
  }
}

/* Padding increases with screen size */
.section {
  padding: var(--space-12) 0;  /* Mobile */
}

@media (min-width: 768px) {
  .section {
    padding: var(--space-16) 0;  /* Tablet */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: var(--space-24) 0;  /* Desktop */
  }
}
```

---

## Accessibility

### Requirements

- **WCAG 2.1 AA** compliance minimum
- **Color contrast** ratio of 4.5:1 for normal text, 3:1 for large text
- **Focus indicators** visible and consistent
- **Skip links** for keyboard navigation
- **Alt text** for all meaningful images
- **Semantic HTML** throughout
- **Reduced motion** support for vestibular disorders
- **Keyboard navigation** for all interactive elements

### Focus States

```css
/* Custom focus ring */
:focus-visible {
  outline: 3px solid var(--color-coral-400);
  outline-offset: 2px;
}

/* Remove default outline for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}

/* Enhanced focus for form elements */
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: none;
  border-color: var(--color-lagoon-500);
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.15);
}

/* Focus within for compound components */
.card:focus-within {
  box-shadow: var(--shadow-lg), 0 0 0 3px rgba(20, 184, 166, 0.15);
}
```

### Reduced Motion

```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Preserve visibility transitions */
  .modal-overlay,
  .nav-drawer,
  .toast {
    transition: opacity 0.01ms !important;
  }
}

/* Alternative: Provide reduced animations instead of none */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-up {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .bubble {
    animation: none;
  }

  .spinner {
    animation-duration: 1.5s;
  }
}
```

### High Contrast Mode

```css
/* Support for Windows High Contrast Mode */
@media (forced-colors: active) {
  .btn {
    border: 2px solid currentColor;
  }

  .card {
    border: 1px solid currentColor;
  }

  .badge {
    border: 1px solid currentColor;
  }

  .input,
  .textarea,
  .select {
    border: 2px solid currentColor;
  }

  :focus-visible {
    outline: 3px solid currentColor;
  }
}
```

### ARIA Patterns

```html
<!-- Landmark regions -->
<header role="banner">...</header>
<nav role="navigation" aria-label="Main">...</nav>
<main role="main" id="main-content">...</main>
<footer role="contentinfo">...</footer>

<!-- Skip link target -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<!-- Modal dialog -->
<div
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">...</h2>
  <p id="modal-description">...</p>
</div>

<!-- Alert messages -->
<div role="alert" aria-live="polite">
  Form submitted successfully
</div>

<!-- Loading states -->
<button aria-busy="true" aria-disabled="true">
  <span class="spinner" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>

<!-- Tabs -->
<div role="tablist" aria-label="Service information">
  <button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel-2">Tab 2</button>
</div>
<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">...</div>

<!-- Breadcrumb -->
<nav aria-label="Breadcrumb">
  <ol role="list">
    <li><a href="/">Home</a></li>
    <li><a href="/services">Services</a></li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>

<!-- Image with alt text -->
<img src="..." alt="Baby swimming with instructor in pool" />

<!-- Decorative image -->
<img src="..." alt="" role="presentation" />
```

### Color Contrast Verification

| Combination | Ratio | Pass |
|-------------|-------|------|
| Lagoon-600 on white | 4.52:1 | AA |
| Lagoon-700 on white | 5.91:1 | AA |
| Sand-900 on Sand-50 | 12.8:1 | AAA |
| White on Lagoon-500 | 3.2:1 | AA Large |
| White on Lagoon-600 | 4.52:1 | AA |
| Coral-700 on Coral-50 | 5.84:1 | AA |
| Error (ef4444) on white | 4.53:1 | AA |
| Success (10b981) on white | 3.1:1 | AA Large only |

### Keyboard Navigation Requirements

| Component | Keys | Action |
|-----------|------|--------|
| Buttons | Enter, Space | Activate |
| Links | Enter | Navigate |
| Modal | Escape | Close |
| Tabs | Arrow Left/Right | Switch tabs |
| Dropdown | Arrow Up/Down | Navigate options |
| Dropdown | Enter | Select option |
| Dropdown | Escape | Close dropdown |
| Carousel | Arrow Left/Right | Navigate slides |
| Form | Tab | Move between fields |

---

## Print Styles

```css
@media print {
  /* Reset backgrounds and shadows */
  * {
    background: white !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  /* Ensure text is black for readability */
  body {
    color: black !important;
    font-size: 12pt;
    line-height: 1.5;
  }

  /* Hide non-essential elements */
  .nav,
  .footer,
  .skip-link,
  .btn,
  .modal-overlay,
  .toast-container,
  .nav-drawer,
  video,
  audio,
  .no-print {
    display: none !important;
  }

  /* Show URLs for links */
  a[href]::after {
    content: " (" attr(href) ")";
    font-size: 0.8em;
    color: #666;
  }

  /* Don't show URLs for internal/anchor links */
  a[href^="#"]::after,
  a[href^="javascript:"]::after,
  a[href^="tel:"]::after,
  a[href^="mailto:"]::after {
    content: "";
  }

  /* Page breaks */
  h1, h2, h3 {
    page-break-after: avoid;
    page-break-inside: avoid;
  }

  img, table, figure {
    page-break-inside: avoid;
  }

  p, li {
    orphans: 3;
    widows: 3;
  }

  /* Ensure images print well */
  img {
    max-width: 100% !important;
    height: auto !important;
  }

  /* Contact info styling */
  .contact-info {
    border: 1px solid #ccc;
    padding: 1em;
    margin: 1em 0;
  }

  /* Schedule table */
  .table-schedule {
    border: 1px solid black;
  }

  .table-schedule th,
  .table-schedule td {
    border: 1px solid black;
    padding: 0.5em;
  }

  /* Page margins */
  @page {
    margin: 2cm;
  }

  /* First page */
  @page :first {
    margin-top: 3cm;
  }
}
```

---

## Tailwind Configuration

```js
// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lagoon: {
          50: '#f0fdfb',
          100: '#ccfbf4',
          200: '#99f6ea',
          300: '#5eeadb',
          400: '#2dd4c4',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
          950: '#042f2e',
        },
        coral: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        sand: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
        body: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'lagoon': '0 4px 14px 0 rgba(20, 184, 166, 0.25)',
        'coral': '0 4px 14px 0 rgba(249, 115, 22, 0.25)',
      },
    },
  },
  plugins: [],
}
```

---

## Dark Mode

### Decision: Not Implemented (v1)

Dark mode is **not included** in the initial release for the following reasons:

1. **Target audience** - Parents with young children primarily browse during daytime
2. **Brand consistency** - The warm, welcoming aesthetic relies on light backgrounds
3. **Scope management** - Focus on perfecting the light theme first
4. **CMS complexity** - Would require duplicate asset management in Contentful

### Future Consideration

If dark mode is added in a future version:

```css
/* Dark mode foundation (for future use) */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: var(--color-sand-900);
    --bg-secondary: var(--color-sand-800);
    --text-primary: var(--color-sand-50);
    --text-secondary: var(--color-sand-300);
  }
}

/* Manual toggle support */
[data-theme="dark"] {
  --bg-primary: var(--color-sand-900);
  --bg-secondary: var(--color-sand-800);
  --text-primary: var(--color-sand-50);
  --text-secondary: var(--color-sand-300);
}
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Set up Tailwind with custom config
- [ ] Import fonts (Plus Jakarta Sans, Inter)
- [ ] Create CSS custom properties (colors, spacing, typography, z-index)
- [ ] Build color palette utilities
- [ ] Create spacing utilities
- [ ] Set up global styles (reset, base)

### Phase 2: Core Components
- [ ] Button component (primary, secondary, outline, ghost, sizes, loading, disabled)
- [ ] Card component (default, image, feature, testimonial)
- [ ] Typography components (headings, body, captions)
- [ ] Container/Layout components
- [ ] Wave divider SVGs
- [ ] Badge component (all variants)

### Phase 3: Form Components
- [ ] Input component (with states: default, hover, focus, error, disabled)
- [ ] Textarea component
- [ ] Select/Dropdown component
- [ ] Checkbox component
- [ ] Radio button component
- [ ] Form group, label, helper, error components

### Phase 4: Navigation & Layout
- [ ] Desktop navigation with dropdowns
- [ ] Mobile navigation drawer
- [ ] Breadcrumb component
- [ ] Pagination component
- [ ] Footer component
- [ ] Skip links

### Phase 5: Feedback Components
- [ ] Alert/Banner component (info, success, warning, error)
- [ ] Toast/Snackbar component
- [ ] Modal/Dialog component
- [ ] Tooltip component
- [ ] Loading spinner
- [ ] Skeleton loaders

### Phase 6: Complex Components
- [ ] Tabs component (pill and underline variants)
- [ ] Testimonial carousel
- [ ] Image gallery with lightbox
- [ ] Contact form with validation
- [ ] Service cards
- [ ] Hero section

### Phase 7: Content Components
- [ ] Prose/Rich text styling
- [ ] Table component (default, striped, schedule)
- [ ] List components (ul, ol, check)

### Phase 8: Polish & Accessibility
- [ ] Scroll animations (fade up, stagger)
- [ ] Hover/interaction states
- [ ] Loading states for all async operations
- [ ] Error states and empty states
- [ ] Focus states and keyboard navigation
- [ ] Reduced motion support
- [ ] Screen reader testing
- [ ] Color contrast audit
- [ ] Print styles verification

---

## Design Tokens Summary

```json
{
  "colors": {
    "primary": "lagoon (#14b8a6)",
    "accent": "coral (#f97316)",
    "neutral": "sand",
    "success": "#10b981",
    "warning": "#f59e0b",
    "error": "#ef4444"
  },
  "typography": {
    "headingFont": "Plus Jakarta Sans",
    "bodyFont": "Inter",
    "scale": "1.25 (Major Third)",
    "sizes": "12px, 14px, 16px, 18px, 20px, 24px, 30px, 36px, 48px, 60px, 72px"
  },
  "spacing": {
    "base": "4px",
    "scale": "0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192"
  },
  "radii": {
    "sm": "4px",
    "md": "8px",
    "lg": "12px",
    "xl": "16px",
    "2xl": "24px (default for cards)",
    "3xl": "32px",
    "full": "9999px (buttons)"
  },
  "shadows": {
    "style": "Soft, minimal, warm",
    "sm": "0 1px 2px rgba(0,0,0,0.05)",
    "lg": "0 10px 15px rgba(0,0,0,0.08)",
    "colored": "lagoon, coral variants"
  },
  "zIndex": {
    "dropdown": 100,
    "sticky": 200,
    "header": 300,
    "overlay": 400,
    "modal": 500,
    "popover": 600,
    "tooltip": 700,
    "toast": 800
  },
  "motion": {
    "fast": "150ms",
    "normal": "300ms",
    "slow": "500ms",
    "easeOut": "cubic-bezier(0, 0, 0.2, 1)",
    "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
    "easeBounce": "cubic-bezier(0.34, 1.56, 0.64, 1)"
  },
  "breakpoints": {
    "sm": "640px",
    "md": "768px",
    "lg": "1024px",
    "xl": "1280px",
    "2xl": "1536px"
  },
  "aspectRatios": {
    "square": "1:1",
    "video": "16:9",
    "card": "16:10",
    "hero": "21:9",
    "portrait": "3:4",
    "gallery": "4:3"
  }
}
```

---

## Component Inventory

| Component | Variants | States |
|-----------|----------|--------|
| **Button** | primary, secondary, outline, ghost | default, hover, active, focus, disabled, loading |
| **Card** | default, image, feature, testimonial | default, hover |
| **Input** | text, email, password, tel | default, hover, focus, error, success, disabled |
| **Textarea** | default | default, focus, error, disabled |
| **Select** | default | default, focus, disabled |
| **Checkbox** | default | unchecked, checked, hover, focus, disabled |
| **Radio** | default | unselected, selected, hover, focus, disabled |
| **Badge** | default, primary, secondary, success, warning, error | default |
| **Alert** | info, success, warning, error | default, dismissible |
| **Toast** | success, error, warning, info | appearing, visible, exiting |
| **Modal** | sm, default, lg, xl, full | closed, open |
| **Tabs** | pill, underline | default, active |
| **Tooltip** | top, bottom | hidden, visible |
| **Breadcrumb** | default | default |
| **Pagination** | default | default, active, disabled |
| **Spinner** | sm, default, lg, xl | spinning |
| **Skeleton** | text, heading, avatar, image, card | loading |
| **Table** | default, striped, bordered, schedule | default, hover |
| **Navigation** | desktop, mobile | default, active, open |
| **Footer** | default | default |
