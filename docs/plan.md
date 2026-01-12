# Micii Campioni Website Rebuild Plan

## Tech Stack

| Technology | Choice | Rationale |
|------------|--------|-----------|
| Framework | Next.js 14+ (App Router) | SSG/ISR, excellent DX, Vercel integration |
| CMS | Contentful | Flexible content modeling, great API |
| Styling | Tailwind CSS | Rapid development, utility-first |
| Language | TypeScript | Type safety, better DX |
| Deployment | Vercel | Optimal for Next.js, edge network |
| Email | Resend | Modern, developer-friendly email API |
| Analytics | Vercel Analytics + GA4 | Performance + marketing analytics |
| Maps | Google Maps Embed API | Free tier sufficient for single location |

---

## Phase 1: Project Setup & Infrastructure

### 1.1 Initialize Next.js Project
```bash
npx create-next-app@latest micii-campioni --typescript --tailwind --eslint --app --src-dir
```

### 1.2 Install Dependencies
```bash
# Core
npm install contentful @contentful/rich-text-react-renderer @contentful/rich-text-types

# UI Components
npm install embla-carousel-react          # Lightweight carousel (better than react-slick)
npm install yet-another-react-lightbox    # Gallery lightbox
npm install react-hook-form zod @hookform/resolvers  # Forms with validation
npm install lucide-react                  # Icons
npm install clsx tailwind-merge           # Utility for className merging

# Optional enhancements
npm install framer-motion                 # Animations
npm install @vercel/analytics             # Analytics
npm install resend                        # Email service
```

### 1.3 Environment Variables
```env
# Contentful
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_PREVIEW_TOKEN=
CONTENTFUL_MANAGEMENT_TOKEN=
CONTENTFUL_ENVIRONMENT=master

# Services
RESEND_API_KEY=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=

# Site
NEXT_PUBLIC_SITE_URL=https://miciicampioni.ro
```

---

## Phase 2: Contentful Content Models

> **Reference:** See `/docs/contentful-setup.md` for complete field-by-field setup instructions including:
> - Exact field IDs and types
> - Validation rules
> - Appearance settings
> - Help text for editors
> - Content model creation order

### Summary of 19 Content Models

| # | Content Type | Purpose | Key Fields |
|---|--------------|---------|------------|
| 1 | SiteSettings | Global config (singleton) | siteName, logo, contact info, schedule |
| 2 | Navigation | Menu structure | location (header/footer), items (JSON) |
| 3 | CarouselSlide | Hero carousel | title, subtitle, backgroundImage, CTA |
| 4 | Testimonial | Parent quotes | authorName, authorTitle, quote |
| 5 | TeamMember | Staff profiles | name, role, bio, photo, certifications |
| 6 | Widget | Sidebar blocks | title, content, widgetType |
| 7 | Page | Generic pages | title, slug, content, sidebarWidgets |
| 8 | Service | Service offerings | title, slug, content, tabs, ageGroups |
| 9 | ServiceTab | Tabbed content | title, content, order |
| 10 | AgeGroup | Age programs | name, ageRange, objectives |
| 11 | CourseModule | Parent school | title, sessions, instructor, content |
| 12 | TimelineEvent | History events | year, description |
| 13 | Conference | Conferences | title, year, location |
| 14 | Project | Association projects | title, description, status |
| 15 | Certificate | Awards/certs | title, issuingBody, image |
| 16 | PressClipping | Media coverage | publication, image, link |
| 17 | Gallery | Photo galleries | title, slug, images |
| 18 | FAQ | Questions | question, answer, category |
| 19 | Partner | Partners/sponsors | name, logo, partnerType |

### Detailed Field Specifications

> **Note:** The following specifications are a summary. See `/docs/contentful-setup.md` for complete implementation details.

### 2.1 Page
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required, max 100 | Page title |
| slug | Short text | Required, unique, URL-safe | URL path |
| metaTitle | Short text | Max 60 | SEO title (fallback to title) |
| metaDescription | Long text | Max 160 | SEO description |
| heroImage | Media | Image only | Optional hero |
| content | Rich text | - | Main content body |
| sidebarWidgets | Reference[] → Widget | - | Sidebar content |
| parent | Reference → Page | - | Parent page for breadcrumbs |

### 2.2 Service
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | Service name |
| slug | Short text | Required, unique | URL segment |
| shortDescription | Long text | Max 200 | Card preview text |
| icon | Media | Image/SVG | Service icon |
| content | Rich text | - | Main content |
| tabs | Reference[] → ServiceTab | - | Tabbed content sections |
| ageGroups | Reference[] → AgeGroup | - | For Educatie Acvatica only |
| sidebarWidgets | Reference[] → Widget | - | Page sidebar |
| order | Integer | 1-100 | Display order |

### 2.3 ServiceTab
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | Tab label |
| content | Rich text | Required | Tab content |
| order | Integer | 1-10 | Tab order |

### 2.4 AgeGroup
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| name | Short text | Required | e.g., "PRO-BEBE" |
| ageRange | Short text | Required | e.g., "4/6 luni - 1 an" |
| duration | Short text | Required | e.g., "Maximum 35 minute" |
| description | Rich text | - | Program description |
| psychologicalDevelopment | Rich text | - | Development info |
| objectives | Rich text | - | Bullet list of objectives |
| order | Integer | 1-10 | Display order |

### 2.5 Widget (Sidebar)
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | Widget heading |
| icon | Media | Image only | Optional icon |
| content | Rich text | - | Widget body |
| type | Short text | Enum: info, highlight, cta | Widget style |

### 2.6 Testimonial
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| authorName | Short text | Required | Person's name |
| authorTitle | Short text | - | Role/affiliation |
| quote | Long text | Required | The testimonial text |
| photo | Media | Image only | Optional headshot |
| featured | Boolean | Default: false | Show on homepage |
| order | Integer | 1-100 | Display order |

### 2.7 TeamMember
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| name | Short text | Required | Full name |
| role | Short text | Required | Job title |
| bio | Rich text | - | Biography |
| photo | Media | Image only | Profile photo |
| certifications | Short text[] | - | List of certifications |
| isFounder | Boolean | Default: false | Highlight as founder |
| order | Integer | 1-100 | Display order |

### 2.8 Gallery
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | Gallery/event name |
| slug | Short text | Required, unique | URL segment |
| description | Long text | - | Event description |
| date | Date | - | Event date |
| images | Media[] | Images only | Gallery photos |
| featured | Boolean | Default: false | Show on homepage |
| order | Integer | 1-100 | Display order |

### 2.9 PressClipping
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | - | Article title (if known) |
| publication | Short text | - | Publication name |
| date | Date | - | Publication date |
| image | Media | Image only | Clipping scan/screenshot |
| link | Short text | URL format | Original article link |
| order | Integer | 1-100 | Display order |

### 2.10 Certificate
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | Certificate name |
| issuingBody | Short text | - | Issuing organization |
| date | Date | - | Issue date |
| image | Media | Image only | Certificate image |
| description | Long text | - | What it certifies |
| order | Integer | 1-100 | Display order |

### 2.11 TimelineEvent
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| year | Short text | Required | e.g., "1981", "2000" |
| title | Short text | - | Event title |
| description | Long text | Required | What happened |
| order | Integer | 1-100 | Display order |

### 2.12 Conference
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | Conference name |
| year | Short text | Required | Year |
| location | Short text | - | City/Country |
| description | Long text | - | Details |
| isInternational | Boolean | Default: false | International flag |

### 2.13 Project
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | Project name |
| description | Rich text | Required | Full description |
| objectives | Rich text | - | Project goals |
| results | Rich text | - | Outcomes achieved |
| status | Short text | Enum: active, completed | Project status |
| order | Integer | 1-10 | Display order |

### 2.14 CourseModule (for Scoala Parintilor)
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| title | Short text | Required | e.g., "Lamaze" |
| subtitle | Short text | - | Brief descriptor |
| sessions | Short text | - | e.g., "6 sesiuni x 2 ore" |
| instructor | Reference → TeamMember | - | Course instructor |
| content | Rich text | Required | Full module content |
| order | Integer | 1-10 | Tab order |

### 2.15 FAQ
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| question | Short text | Required | The question |
| answer | Rich text | Required | The answer |
| category | Short text | - | For grouping |
| order | Integer | 1-100 | Display order |

### 2.16 Partner
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| name | Short text | Required | Company name |
| logo | Media | Image only | Company logo |
| website | Short text | URL format | Company website |
| type | Short text | Enum: partner, sponsor | Relationship type |
| active | Boolean | Default: true | Currently active |
| order | Integer | 1-100 | Display order |

### 2.17 CarouselSlide
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| badge | Short text | - | Top badge text |
| title | Short text | Required | Main heading |
| subtitle | Long text | - | Description text |
| backgroundImage | Media | Image only | Slide background |
| ctaText | Short text | - | Button text |
| ctaLink | Short text | - | Button link |
| order | Integer | 1-10 | Slide order |

### 2.18 SiteSettings (Singleton)
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| siteName | Short text | Required | "Micii Campioni" |
| tagline | Short text | - | Site tagline |
| logo | Media | Image only | Main logo |
| logoAlt | Media | Image only | Alternative logo (white) |
| anniversaryText | Short text | - | e.g., "17 ani de Micii Campioni" |
| anniversaryActive | Boolean | Default: true | Show anniversary banner |
| phone | Short text | Required | Contact phone |
| email | Short text | Required, email | Contact email |
| address | Long text | Required | Full address |
| gpsLat | Number | - | Latitude |
| gpsLng | Number | - | Longitude |
| facebookUrl | Short text | URL | Facebook page |
| twitterUrl | Short text | URL | Twitter/X profile |
| scheduleWeekday | Short text | - | e.g., "10:00 - 20:00" |
| scheduleSaturday | Short text | - | e.g., "09:00 - 14:00" |
| scheduleSunday | Short text | - | e.g., "Inchis" |
| footerCopyright | Short text | - | Copyright text |

### 2.19 Navigation
| Field | Type | Validation | Notes |
|-------|------|------------|-------|
| name | Short text | Required | Menu identifier |
| location | Short text | Enum: header, footer | Where it appears |
| items | JSON | Required | Menu structure (see below) |

**Navigation Items JSON Structure:**
```json
[
  {
    "label": "DESPRE NOI",
    "href": "/despre-noi",
    "children": [
      { "label": "Istoric", "href": "/despre-noi/istoric" },
      { "label": "Siguranta si securitate", "href": "/despre-noi/siguranta-si-securitate-pentru-copilul-tau" }
    ]
  }
]
```

---

## Phase 3: Next.js Application Structure

### 3.1 Directory Structure
```
src/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage
│   ├── not-found.tsx                 # 404 page
│   ├── error.tsx                     # Error boundary
│   ├── loading.tsx                   # Global loading state
│   │
│   ├── despre-noi/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   ├── istoric/page.tsx
│   │   ├── siguranta-si-securitate-pentru-copilul-tau/page.tsx  # EXACT original URL
│   │   ├── echipa-micii-campioni/page.tsx
│   │   ├── press-info/page.tsx
│   │   └── distinctii-si-certificari/page.tsx
│   │
│   ├── concept/
│   │   ├── page.tsx
│   │   ├── micii-campioni-si-faael/page.tsx
│   │   └── viziune-si-obiective/page.tsx
│   │
│   ├── asociatia/
│   │   ├── page.tsx
│   │   ├── misiune/page.tsx
│   │   ├── proiecte-si-programe/page.tsx
│   │   ├── conferinte-si-congrese/page.tsx
│   │   └── sponsorizari/page.tsx
│   │
│   ├── servicii/
│   │   ├── page.tsx                  # Services overview (if needed)
│   │   ├── metoda-sultana/page.tsx
│   │   ├── educatie-acvatica/page.tsx
│   │   ├── scoala-parintilor-de-campioni/page.tsx
│   │   ├── activitate-acvatica-gravide/page.tsx
│   │   ├── kinetoterapie/page.tsx
│   │   └── intrebari-frecvente/page.tsx
│   │
│   ├── galerie/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx           # Individual gallery pages
│   │
│   ├── contact/page.tsx
│   ├── harta-site/page.tsx
│   │
│   └── api/
│       ├── contact/route.ts          # Contact form submission
│       ├── revalidate/route.ts       # Contentful webhook handler
│       └── preview/route.ts          # Preview mode toggle
│
├── components/
│   ├── layout/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   ├── DesktopNav.tsx        # Left-right split nav
│   │   │   ├── TabletNav.tsx         # Center nav
│   │   │   ├── MobileNav.tsx         # Dropdown nav
│   │   │   └── AnniversaryBanner.tsx
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── FooterNav.tsx
│   │   ├── Sidebar.tsx
│   │   └── PageLayout.tsx            # Two-column layout wrapper
│   │
│   ├── home/
│   │   ├── HeroCarousel.tsx
│   │   ├── WelcomeSection.tsx
│   │   ├── FeatureCards.tsx          # The 3 icon widgets
│   │   └── PartnersStrip.tsx
│   │
│   ├── content/
│   │   ├── RichText.tsx              # Contentful rich text renderer
│   │   ├── Testimonials.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── Lightbox.tsx
│   │   ├── Tabs.tsx
│   │   ├── Accordion.tsx             # For FAQ
│   │   ├── Timeline.tsx
│   │   ├── TeamGrid.tsx
│   │   └── CertificatesGrid.tsx
│   │
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   └── FormField.tsx
│   │
│   ├── maps/
│   │   └── GoogleMap.tsx
│   │
│   ├── animations/
│   │   └── SeaCreatures.tsx          # Floating whale, crab, etc.
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Separator.tsx             # Wave dividers
│       ├── Skeleton.tsx              # Loading skeletons
│       └── index.ts
│
├── lib/
│   ├── contentful/
│   │   ├── client.ts                 # Contentful client setup
│   │   ├── queries.ts                # All content fetching functions
│   │   ├── types.ts                  # Generated/manual types
│   │   └── rich-text.tsx             # Rich text rendering config
│   ├── email/
│   │   └── send.ts                   # Resend email utility
│   ├── utils/
│   │   ├── cn.ts                     # className utility
│   │   └── format.ts                 # Date/text formatting
│   └── constants.ts                  # Site-wide constants
│
├── hooks/
│   ├── useMediaQuery.ts
│   └── useScrollPosition.ts
│
├── styles/
│   └── globals.css
│
└── types/
    ├── contentful.ts                 # Contentful response types
    └── index.ts
```

### 3.2 URL Structure (Preserving Original URLs)
```
/                                                    → Homepage
/despre-noi                                          → About overview
/despre-noi/istoric                                  → History
/despre-noi/siguranta-si-securitate-pentru-copilul-tau → Safety
/despre-noi/echipa-micii-campioni                    → Team
/despre-noi/press-info                               → Press
/despre-noi/distinctii-si-certificari                → Certifications
/concept                                             → Concept overview
/concept/micii-campioni-si-faael                     → FAAEL partnership
/concept/viziune-si-obiective                        → Vision
/asociatia                                           → Association overview
/asociatia/misiune                                   → Mission
/asociatia/proiecte-si-programe                      → Projects
/asociatia/conferinte-si-congrese                    → Conferences
/asociatia/sponsorizari                              → Sponsorships
/servicii/metoda-sultana                             → Sultana Method
/servicii/educatie-acvatica                          → Aquatic Education
/servicii/scoala-parintilor-de-campioni              → Parents School
/servicii/activitate-acvatica-gravide                → Prenatal
/servicii/kinetoterapie                              → Physiotherapy
/servicii/intrebari-frecvente                        → FAQ
/galerie                                             → Gallery overview
/galerie/[slug]                                      → Individual gallery
/contact                                             → Contact
/harta-site                                          → Sitemap
```

---

## Phase 4: Key Components Specifications

### 4.1 Header Component
**Behavior:**
- **Desktop (≥1200px):** Split navigation - left menu (Home, Despre Noi, Concept, Asociatia) | Center Logo | right menu (Servicii, Galerie, Contact)
- **Tablet (768-1199px):** Centered navigation with logo above
- **Mobile (<768px):** Hamburger menu with dropdown, centered logo

**Features:**
- Sticky on scroll (optional)
- Anniversary banner above (configurable via CMS)
- Social icons (email, Twitter, Facebook)
- Dropdown submenus on hover (desktop) / tap (mobile)

### 4.2 Hero Carousel
**Library:** embla-carousel-react
**Features:**
- 5 slides from CMS
- Auto-play (5s interval)
- Pause on hover
- Dot navigation
- Swipe on mobile
- Badge + Title + Subtitle per slide
- Lazy load images

### 4.3 Page Layout (Inner Pages)
**Structure:**
```
┌─────────────────────────────────────────────┐
│ Anniversary Banner                          │
├─────────────────────────────────────────────┤
│ Header                                      │
├─────────────────────────────────────────────┤
│ Wave Separator Top                          │
├──────────────────────┬──────────────────────┤
│                      │                      │
│   Main Content       │   Sidebar            │
│   (7 columns)        │   (5 columns)        │
│                      │   - Widgets          │
│                      │   - Testimonials     │
│                      │                      │
├──────────────────────┴──────────────────────┤
│ Wave Separator Bottom                       │
├─────────────────────────────────────────────┤
│ Footer                                      │
└─────────────────────────────────────────────┘
```

### 4.4 Testimonials Carousel
- Auto-rotating (8s interval)
- Manual navigation arrows
- Fade transition
- Quote styling with decorative marks
- Author name + title below

### 4.5 Sea Creatures Animation
**Elements:** Whale, Crab, Seahorse, Tortoise, Fish
**Behavior:**
- Random creature appears every 4-6 seconds
- Moves horizontally across screen
- Sine wave vertical motion
- Pauses and "wiggles" on hover
- CSS animations (no heavy JS)

---

## Phase 5: Styling System

> **Reference:** See `/docs/design-system.md` for complete design system documentation.

### 5.1 Design Philosophy: "Serene Vitality"

A design language balancing **calm professionalism** with **joyful energy**.
- Premium wellness spa meets Montessori school
- Sophisticated enough for discerning parents, warm enough to feel like family

### 5.2 Color Palette

```css
:root {
  /*
   * LAGOON - Primary Brand Color
   * Sophisticated teal that feels like calm, clear water
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
   */
  --color-sand-50: #fafaf9;   /* Page background */
  --color-sand-100: #f5f5f4;
  --color-sand-200: #e7e5e4;
  --color-sand-300: #d6d3d1;
  --color-sand-400: #a8a29e;
  --color-sand-500: #78716c;
  --color-sand-600: #57534e;
  --color-sand-700: #44403c;
  --color-sand-800: #292524;
  --color-sand-900: #1c1917;  /* Primary text */
  --color-sand-950: #0c0a09;

  /* Semantic */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;
  --color-info: var(--color-lagoon-500);
}
```

### 5.3 Typography

**Fonts:**
- **Headings:** Plus Jakarta Sans (Google Fonts) - modern, friendly, professional
- **Body:** Inter (Google Fonts) - exceptional readability, variable font

**Romanian Diacritics:** Both fonts have full support for ă, â, î, ș, ț

```css
:root {
  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;

  /* Type Scale (1.25 Major Third) */
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
}
```

### 5.4 Design Tokens (Tailwind Config)

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
        '2xl': '1.5rem',  /* 24px - default for cards */
        '3xl': '2rem',    /* 32px */
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

### 5.5 Key Design Decisions

| Element | Decision | Notes |
|---------|----------|-------|
| Page Background | Sand-50 | Warm cream, not clinical white |
| Cards | White with 24px radius | Elevated, soft corners |
| Primary Buttons | Lagoon-500, pill shape | Friendly, accessible |
| Secondary Buttons | Coral-500, pill shape | Warm CTAs |
| Footer | Lagoon-950 | Dark, grounding |
| Body Text | Sand-900 | High contrast, warm |
| Links | Lagoon-600 | Accessible, branded |

---

## Phase 6: SEO & Performance

### 6.1 Metadata Strategy
```tsx
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://miciicampioni.ro'),
  title: {
    default: 'Micii Campioni - Primul club de educatie acvatica din Romania',
    template: '%s | Micii Campioni',
  },
  description: 'Clubul Micii Campioni - educatie acvatica pentru bebelusi si copii, Metoda Sultana, cursuri prenatale Lamaze din 2001.',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Micii Campioni',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### 6.2 Structured Data (JSON-LD)
```tsx
// LocalBusiness schema for Contact page
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Clubul Micii Campioni",
  "description": "Primul club de educatie acvatica din Romania",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Str. Lt. Victor Manu Nr.45",
    "addressLocality": "Bucuresti",
    "addressRegion": "Sector 2",
    "addressCountry": "RO"
  },
  "telephone": "+40756119119",
  "email": "info@miciicampioni.ro",
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.482485,
    "longitude": 26.037626
  },
  "openingHours": ["Mo-Fr 10:00-20:00", "Sa 09:00-14:00"]
}
```

### 6.3 Performance Targets
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| Lighthouse Performance | > 90 |

### 6.4 Optimization Techniques
- **Images:** next/image with WebP, proper sizing, lazy loading
- **Fonts:** next/font with font-display: swap
- **Static Generation:** All pages SSG with ISR (revalidate: 3600)
- **Bundle:** Dynamic imports for heavy components (Lightbox, Map)

---

## Phase 7: Forms & Email

### 7.1 Contact Form
**Fields:**
- Nume (Name) - required
- Email - required, validated
- Telefon (Phone) - optional
- Mesaj (Message) - required, min 10 chars

**Validation:** Zod schema with react-hook-form

### 7.2 Email Service (Resend)
```tsx
// lib/email/send.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactFormData) {
  return resend.emails.send({
    from: 'website@miciicampioni.ro',
    to: 'info@miciicampioni.ro',
    subject: `Mesaj nou de la ${data.name}`,
    html: `...`,
  });
}
```

---

## Phase 8: Compliance & Security

### 8.1 GDPR/Cookie Consent
- Cookie banner component
- Analytics only after consent
- Privacy policy page (to be created)
- Contact form consent checkbox

### 8.2 Security Headers
```tsx
// next.config.js
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];
```

---

## Phase 9: Content Migration

### 9.1 Migration Checklist

**Text Content:**
- [ ] All 21 pages from markdown documentation
- [ ] 6 testimonials
- [ ] 12+ FAQ entries
- [ ] Team member bios
- [ ] Timeline events (Istoric)
- [ ] Conference list
- [ ] Project descriptions

**Media Assets:**
- [ ] Logo and variations
- [ ] 5 carousel background images
- [ ] 3 feature card icons
- [ ] 18 press clipping images
- [ ] 15 certificate images
- [ ] Gallery images (100+ photos)
- [ ] Sea creature animation sprites (5)
- [ ] Wave separator SVGs
- [ ] Background patterns

### 9.2 Image Migration Script
```bash
# Download all images from Web Archive
# Optimize with sharp or squoosh
# Convert to WebP
# Upload to Contentful via Management API
```

---

## Phase 10: Testing

### 10.1 Testing Matrix

| Test Type | Tools | Coverage |
|-----------|-------|----------|
| Unit | Vitest | Utility functions |
| Component | Testing Library | Key components |
| E2E | Playwright | Critical user flows |
| Visual | Percy/Chromatic | UI regression |
| Accessibility | axe-core | WCAG 2.1 AA |
| Performance | Lighthouse CI | Core Web Vitals |

### 10.2 Browser Support
- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### 10.3 Testing Checklist
- [ ] All pages render correctly
- [ ] Navigation works at all breakpoints
- [ ] Forms validate and submit
- [ ] Carousels function properly
- [ ] Galleries open in lightbox
- [ ] Maps load and display marker
- [ ] Email sending works
- [ ] Romanian diacritics display correctly
- [ ] SEO metadata renders
- [ ] Social sharing works

---

## Phase 11: Deployment

### 11.1 Vercel Setup
1. Connect GitHub repository
2. Configure environment variables
3. Set up preview deployments
4. Configure custom domain

### 11.2 Domain Configuration
```
DNS Records:
A     @      76.76.21.21
CNAME www    cname.vercel-dns.com
```

### 11.3 Contentful Webhooks
- Trigger revalidation on publish
- Endpoint: `/api/revalidate`
- Secret validation

### 11.4 Post-Launch Checklist
- [ ] SSL certificate active
- [ ] www redirect configured
- [ ] Analytics tracking verified
- [ ] Search Console submitted
- [ ] Uptime monitoring enabled
- [ ] Error tracking (Sentry) configured
- [ ] Backup strategy documented
- [ ] Client CMS training completed

---

## Phase 12: Documentation for Client

### 12.1 CMS User Guide
- How to edit page content
- How to add testimonials
- How to manage galleries
- How to update contact info
- How to add FAQs

### 12.2 Technical Documentation
- Environment setup
- Deployment process
- Content model reference
- API documentation

---

## Asset Inventory

### Images to Download from Web Archive

**Theme Images:**
```
/wp-content/themes/miciicampioni-v1.0/images/
├── logo-micii-campioni.png
├── micii-logo.png
├── bkg-header.png
├── inner-bkg.png
├── flag-de-17-ani.png
├── flag-de-17-ani-inner.png
├── separator-to-top.png
├── separator-to-bottom.png
├── home-ico-1.png
├── home-ico-2.png
├── home-ico-3.png
├── animation-whale.png
├── animation-crab.png
├── animation-seahorse.png
├── animation-tortoise.png
├── animation-fish.png
└── inner-blur.png
```

**Carousel Slides:**
```
/wp-content/uploads/
├── slide-1.jpg
├── slide-2.jpg
├── slide-3.jpg
├── slide-4.jpg
└── slide-5.jpg
```

**Press Clippings:**
```
/wp-content/uploads/
├── presssss-1.jpg through presssss-18.jpg
```

**Certificates:**
```
/wp-content/uploads/
├── distinctii-1.jpg through distinctii-15.jpg
```

**Gallery Photos:**
```
/wp-content/uploads/2013/10/
├── DSC_5030.jpg through DSC_6788.jpg (and more)
```

---

## Estimated Content Model Count

| Content Type | Estimated Entries |
|--------------|-------------------|
| Page | 15-20 |
| Service | 6 |
| ServiceTab | 15-20 |
| AgeGroup | 4 |
| Widget | 10-15 |
| Testimonial | 6 |
| TeamMember | 3-5 |
| Gallery | 5-10 |
| PressClipping | 18 |
| Certificate | 15 |
| TimelineEvent | 10 |
| Conference | 15 |
| Project | 3 |
| CourseModule | 4 |
| FAQ | 12 |
| Partner | 5-10 |
| CarouselSlide | 5 |
| SiteSettings | 1 |
| Navigation | 2 |

---

## Documentation Reference

| Document | Purpose |
|----------|---------|
| `/docs/plan.md` | This file - overall implementation plan |
| `/docs/design-system.md` | Complete design system (colors, typography, components) |
| `/docs/design-concepts.md` | Visual mockups and layout concepts |
| `/docs/contentful-setup.md` | Step-by-step Contentful setup with exact field specs |
| `/docs/content/` | All page content extracted from original site |
| `/docs/content/site-structure.md` | Navigation hierarchy and sitemap |
| `/docs/content/testimonials.md` | Extracted testimonials |
| `/docs/content/pages/*.md` | Individual page content (21 files) |

---

## Next Steps (Immediate Actions)

### Phase A: Contentful Setup (Day 1)
1. **Create Contentful space** - Follow `/docs/contentful-setup.md`
2. **Configure Romanian locale** - Set as default
3. **Create content models** - All 19 models in specified order
4. **Generate API keys** - Delivery, Preview, Management
5. **Set up webhook** - For ISR revalidation

### Phase B: Project Initialization (Day 1-2)
1. **Initialize Next.js project** - With TypeScript and Tailwind
2. **Configure Tailwind** - Using design system tokens from `/docs/design-system.md`
3. **Set up fonts** - Plus Jakarta Sans + Inter via next/font
4. **Create global styles** - CSS custom properties
5. **Set environment variables** - Contentful credentials

### Phase C: Core Development (Days 2-5)
1. **Build Contentful client** - With type definitions
2. **Create layout components** - Header, Footer, PageLayout
3. **Implement UI components** - Following design system specs
4. **Build homepage** - Carousel, services, testimonials
5. **Create page templates** - Service page, generic page

### Phase D: Content & Pages (Days 5-8)
1. **Migrate content to Contentful** - From `/docs/content/` files
2. **Upload media assets** - Images, logos, icons
3. **Build all 21 pages** - Using templates
4. **Implement contact form** - With Resend email

### Phase E: Polish & Launch (Days 8-10)
1. **Add animations** - Following motion guidelines
2. **Accessibility audit** - WCAG 2.1 AA compliance
3. **Performance optimization** - Core Web Vitals
4. **Configure Vercel** - Custom domain, analytics
5. **Final testing** - Cross-browser, mobile
6. **Launch** - DNS switch, monitoring setup
