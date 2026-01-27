# Contentful Setup Guide

Complete step-by-step guide to setting up the Contentful CMS for Micii Campioni.

---

## Table of Contents

1. [Space Setup](#1-space-setup)
2. [Locales](#2-locales)
3. [Content Models](#3-content-models)
4. [Webhooks](#4-webhooks)
5. [API Keys](#5-api-keys)
6. [Media Settings](#6-media-settings)
7. [Roles & Permissions](#7-roles--permissions)

---

## 1. Space Setup

### Create New Space

1. Log in to [Contentful](https://app.contentful.com)
2. Click **"Add space"** in the sidebar
3. Select **"Create an empty space"**
4. Configure:
   - **Name:** `Micii Campioni`
   - **Space ID:** Will be auto-generated (save this for `.env`)
   - **Plan:** Choose appropriate plan (Free tier works for development)

### Environment

Use the default `master` environment for production. Optionally create:
- `development` - For testing content model changes
- `staging` - For content preview before publish

---

## 2. Locales

### Primary Locale: Romanian

1. Go to **Settings → Locales**
2. Edit the default locale:
   - **Name:** `Romanian`
   - **Code:** `ro`
   - **Fallback:** None
   - **Default:** Yes
   - **Optional for publishing:** No

### Content Delivery

All content will be served in Romanian. No multi-language support needed for v1.

---

## 3. Content Models

Create these content models in the exact order listed (due to reference dependencies).

### Naming Conventions

| Contentful Term | Our Convention |
|-----------------|----------------|
| Content Type ID | PascalCase (e.g., `SiteSettings`) |
| Field ID | camelCase (e.g., `metaTitle`) |
| Field Name | Title Case (e.g., "Meta Title") |

### Field Type Reference

When adding fields in the Contentful UI, use this mapping:

| This doc says | In UI, click | Then select/configure |
|---------------|--------------|----------------------|
| **Short text** | Text | Short text |
| **Long text** | Text | Long text |
| **Long text (Markdown)** | Text | Long text → Appearance: **Markdown** |
| **Number** | Number | Decimal or Integer |
| **Media** | Media | One file |
| **Media (many)** | Media | Many files |
| **Rich text** | Rich text | - |
| **Boolean** | Boolean | - |
| **Date** | Date and time | Date only |
| **JSON** | JSON object | - |
| **Reference** | Reference | One reference |
| **Reference (many)** | Reference | Many references |
| **Location** | Location | - |

**Note:** For dropdown fields (like `widgetType`), use **Text → Short text** and add validation with "Accept only specified values".

### Important: Markdown vs Rich Text Fields

This schema uses **two approaches** for formatted text content:

| Field Type | Format | When to Use | Content Population |
|------------|--------|-------------|-------------------|
| **Long text (Markdown)** | Plain text with Markdown syntax | Simple content: FAQs, descriptions, bios | Copy-paste directly from `content-population.md` |
| **Rich text** | Contentful JSON Document | Complex content needing embedded assets | Use WYSIWYG editor in Contentful |

**Markdown fields** (most content): You can copy-paste content directly from `content-population.md`. The Markdown syntax (`**bold**`, `- lists`, etc.) will render correctly.

**Rich text fields** (only `Page.content` and `Service.content`): Use Contentful's visual editor. The content in `content-population.md` shows the structure, but you'll format using the toolbar buttons.

To set Markdown appearance: Field settings → Appearance tab → Select **Markdown**.

---

### 3.1 SiteSettings (Create First - Singleton)

**Content Type ID:** `siteSettings`
**Name:** `Site Settings`
**Description:** Global site configuration. Only create ONE entry.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `internalName` | Internal Name | Short text | Yes | - | Internal identifier (e.g., "Main Site Settings") |
| `siteName` | Site Name | Short text | Yes | Max 50 chars | Display name of the website |
| `tagline` | Tagline | Short text | No | Max 100 chars | Site subtitle/tagline |
| `logo` | Logo | Media | Yes | Image only | Main logo (color version) |
| `logoWhite` | Logo (White) | Media | No | Image only | White/inverted logo for dark backgrounds |
| `favicon` | Favicon | Media | No | Image only | Site favicon (32x32 PNG or ICO) |
| `anniversaryText` | Anniversary Text | Short text | No | Max 50 chars | e.g., "17 ani de Micii Campioni" |
| `anniversaryActive` | Show Anniversary Banner | Boolean | Yes | Default: false | Toggle anniversary banner visibility |
| `phone` | Phone Number | Short text | Yes | Regex: `^[0-9\-\+\s]+$` | Contact phone (e.g., "0756-119-119") |
| `email` | Email Address | Short text | Yes | Email format | Contact email address |
| `address` | Address | Long text | Yes | - | Full street address |
| `location` | Location | Location | No | - | Map marker (latitude/longitude) |
| `facebookUrl` | Facebook URL | Short text | No | URL format | Facebook page URL |
| `twitterUrl` | Twitter URL | Short text | No | URL format | Twitter/X profile URL |
| `instagramUrl` | Instagram URL | Short text | No | URL format | Instagram profile URL |
| `scheduleWeekdays` | Schedule (Weekdays) | Short text | No | Max 30 chars | e.g., "10:00 - 20:00" |
| `scheduleSaturday` | Schedule (Saturday) | Short text | No | Max 30 chars | e.g., "09:00 - 14:00" |
| `scheduleSunday` | Schedule (Sunday) | Short text | No | Max 30 chars | e.g., "Închis" |
| `footerCopyright` | Footer Copyright | Short text | No | Max 100 chars | Copyright text (year auto-updates in code) |
| `defaultMetaDescription` | Default Meta Description | Long text | No | Max 160 chars | Fallback SEO description |

---

### 3.2 Navigation

**Content Type ID:** `navigation`
**Name:** `Navigation`
**Description:** Menu structure for header and footer.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `internalName` | Internal Name | Short text | Yes | Unique | e.g., "Header Navigation", "Footer Navigation" |
| `location` | Location | Short text | Yes | Accept only: `header`, `footer` | Where this menu appears |
| `items` | Menu Items | JSON | Yes | - | Menu structure (see JSON schema below) |

**Menu Items JSON Schema:**
```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "label": { "type": "string", "description": "Display text" },
      "href": { "type": "string", "description": "URL path" },
      "children": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "label": { "type": "string" },
            "href": { "type": "string" }
          }
        }
      }
    }
  }
}
```

**Example Menu Items Value:**
```json
[
  {
    "label": "ACASĂ",
    "href": "/"
  },
  {
    "label": "DESPRE NOI",
    "href": "/despre-noi",
    "children": [
      { "label": "Istoric", "href": "/despre-noi/istoric" },
      { "label": "Siguranță și Securitate", "href": "/despre-noi/siguranta-si-securitate-pentru-copilul-tau" },
      { "label": "Echipa", "href": "/despre-noi/echipa-micii-campioni" },
      { "label": "Press Info", "href": "/despre-noi/press-info" },
      { "label": "Distincții și Certificări", "href": "/despre-noi/distinctii-si-certificari" }
    ]
  },
  {
    "label": "CONCEPT",
    "href": "/concept",
    "children": [
      { "label": "Micii Campioni și FAAEL", "href": "/concept/micii-campioni-si-faael" },
      { "label": "Viziune și Obiective", "href": "/concept/viziune-si-obiective" }
    ]
  },
  {
    "label": "ASOCIAȚIA",
    "href": "/asociatia",
    "children": [
      { "label": "Misiune", "href": "/asociatia/misiune" },
      { "label": "Proiecte și Programe", "href": "/asociatia/proiecte-si-programe" },
      { "label": "Conferințe și Congrese", "href": "/asociatia/conferinte-si-congrese" },
      { "label": "Sponsorizări", "href": "/asociatia/sponsorizari" }
    ]
  },
  {
    "label": "SERVICII",
    "href": "/servicii",
    "children": [
      { "label": "Metoda Sultana", "href": "/servicii/metoda-sultana" },
      { "label": "Educație Acvatică", "href": "/servicii/educatie-acvatica" },
      { "label": "Școala Părinților", "href": "/servicii/scoala-parintilor-de-campioni" },
      { "label": "Activitate Gravide", "href": "/servicii/activitate-acvatica-gravide" },
      { "label": "Kinetoterapie", "href": "/servicii/kinetoterapie" },
      { "label": "Întrebări Frecvente", "href": "/servicii/intrebari-frecvente" }
    ]
  },
  {
    "label": "GALERIE",
    "href": "/galerie"
  },
  {
    "label": "CONTACT",
    "href": "/contact"
  }
]
```

---

### 3.3 CarouselSlide

**Content Type ID:** `carouselSlide`
**Name:** `Carousel Slide`
**Description:** Homepage hero carousel slides.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `internalName` | Internal Name | Short text | Yes | - | Internal identifier (e.g., "Slide 1 - Metoda Sultana") |
| `badge` | Badge Text | Short text | No | Max 30 chars | Small text above title (e.g., "DIN 2001") |
| `title` | Title | Short text | Yes | Max 80 chars | Main headline |
| `subtitle` | Subtitle | Long text | No | Max 200 chars | Description text below title |
| `backgroundImage` | Background Image | Media | Yes | Image only, min 1920x800 | Full-width background (recommend 1920x1080) |
| `ctaText` | Button Text | Short text | No | Max 30 chars | Call-to-action button text |
| `ctaLink` | Button Link | Short text | No | URL path | Internal link (e.g., "/servicii/metoda-sultana") |
| `order` | Display Order | Number | Yes | Integer, 1-10 | Order in carousel (1 = first) |
| `active` | Active | Boolean | Yes | Default: true | Show/hide this slide |

---

### 3.4 Testimonial

**Content Type ID:** `testimonial`
**Name:** `Testimonial`
**Description:** Parent testimonials and endorsements.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `authorName` | Author Name | Short text | Yes | Max 100 chars | Full name of the person |
| `authorTitle` | Author Title | Short text | No | Max 150 chars | Role/affiliation (e.g., "Președinte Federația Română de Gimnastică Ritmică") |
| `quote` | Quote | Long text | Yes | Min 20, Max 1000 chars | The testimonial text |
| `photo` | Photo | Media | No | Image only | Optional headshot (square recommended) |
| `featured` | Featured | Boolean | Yes | Default: false | Show on homepage carousel |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Order in list (1 = first) |

---

### 3.5 TeamMember

**Content Type ID:** `teamMember`
**Name:** `Team Member`
**Description:** Staff and instructors.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `name` | Full Name | Short text | Yes | Max 100 chars | Person's full name |
| `role` | Role/Title | Short text | Yes | Max 100 chars | Job title (e.g., "Fondator și Director") |
| `bio` | Biography | Long text | No | Appearance: Markdown | Full biography (supports Markdown) |
| `shortBio` | Short Bio | Long text | No | Max 200 chars | Brief description for cards |
| `photo` | Photo | Media | Yes | Image only | Profile photo (square, min 400x400) |
| `certifications` | Certifications | Short text (list) | No | - | List of certifications/qualifications (enable "List" option) |
| `isFounder` | Founder | Boolean | Yes | Default: false | Highlight as founder |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Order in team list (1 = first) |

---

### 3.6 Widget

**Content Type ID:** `widget`
**Name:** `Widget`
**Description:** Sidebar content blocks.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `internalName` | Internal Name | Short text | Yes | Unique | e.g., "Safety Highlight Widget" |
| `title` | Title | Short text | Yes | Max 60 chars | Widget heading |
| `icon` | Icon | Media | No | Image only | Optional icon/image |
| `content` | Content | Long text | No | Appearance: Markdown | Widget body content (supports Markdown) |
| `widgetType` | Widget Type | Short text | Yes | Accept only: `info`, `highlight`, `cta`, `contact` | Styling variant |
| `ctaText` | CTA Button Text | Short text | No | Max 30 chars | Optional button text |
| `ctaLink` | CTA Button Link | Short text | No | URL path | Optional button link |

**Widget Types:**
- `info` - Standard informational sidebar box
- `highlight` - Accented/emphasized content (coral background)
- `cta` - Call-to-action with prominent button
- `contact` - Contact information display

---

### 3.7 Page

**Content Type ID:** `page`
**Name:** `Page`
**Description:** Generic content pages.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Page Title | Short text | Yes | Max 100 chars | Page heading (H1) |
| `slug` | URL Slug | Short text | Yes | Unique, URL-safe | URL path segment (e.g., "istoric") |
| `metaTitle` | SEO Title | Short text | No | Max 60 chars | Browser tab title (falls back to title) |
| `metaDescription` | SEO Description | Long text | No | Max 160 chars | Search result description |
| `heroImage` | Hero Image | Media | No | Image only | Optional page header image |
| `heroImageAlt` | Hero Image Alt | Short text | No | Max 125 chars | Accessibility description for hero |
| `content` | Main Content | Rich text | Yes | Enable: all formatting, embedded assets | Page body content |
| `sidebarWidgets` | Sidebar Widgets | Reference (many) | No | Link to: Widget | Widgets to display in sidebar |
| `parentPage` | Parent Page | Reference | No | Link to: Page | Parent for breadcrumb navigation |
| `showInSitemap` | Show in Sitemap | Boolean | Yes | Default: true | Include in HTML sitemap |
| `publishedAt` | Publish Date | Date | No | - | For ordering/display purposes |

**Rich Text Configuration:**
Enable these node types:
- Headings (H2, H3, H4)
- Bold, Italic, Underline
- Ordered List, Unordered List
- Blockquote
- Hyperlink
- Embedded Asset (images)
- Embedded Entry (for custom components)
- Table
- Horizontal Rule

---

### 3.8 Service

**Content Type ID:** `service`
**Name:** `Service`
**Description:** Main service offerings.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Service Name | Short text | Yes | Max 80 chars | Service title |
| `slug` | URL Slug | Short text | Yes | Unique, URL-safe | URL segment (e.g., "metoda-sultana") |
| `shortDescription` | Short Description | Long text | Yes | Max 200 chars | Card preview text |
| `icon` | Icon | Media | No | Image/SVG | Service icon for cards |
| `heroImage` | Hero Image | Media | No | Image only | Service page header image |
| `content` | Main Content | Rich text | Yes | Enable: all | Full service description |
| `metaTitle` | SEO Title | Short text | No | Max 60 chars | Browser tab title |
| `metaDescription` | SEO Description | Long text | No | Max 160 chars | Search result description |
| `tabs` | Content Tabs | Reference (many) | No | Link to: ServiceTab | Tabbed content sections |
| `ageGroups` | Age Groups | Reference (many) | No | Link to: AgeGroup | For Educație Acvatică only |
| `sidebarWidgets` | Sidebar Widgets | Reference (many) | No | Link to: Widget | Sidebar content |
| `relatedServices` | Related Services | Reference (many) | No | Link to: Service | Cross-promotion |
| `order` | Display Order | Number | Yes | Integer, 1-20 | Order in service lists |
| `featured` | Featured | Boolean | Yes | Default: false | Show on homepage |

---

### 3.9 ServiceTab

**Content Type ID:** `serviceTab`
**Name:** `Service Tab`
**Description:** Tabbed content sections within services.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Tab Title | Short text | Yes | Max 40 chars | Tab label text |
| `content` | Tab Content | Long text | Yes | Appearance: Markdown | Content displayed when tab is active (supports Markdown) |
| `order` | Display Order | Number | Yes | Integer, 1-10 | Order of tabs (1 = first) |

---

### 3.10 AgeGroup

**Content Type ID:** `ageGroup`
**Name:** `Age Group`
**Description:** Aquatic education programs by age.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `name` | Program Name | Short text | Yes | Max 50 chars | e.g., "PRO-BEBE", "JUNIORI" |
| `ageRange` | Age Range | Short text | Yes | Max 30 chars | e.g., "4/6 luni - 1 an" |
| `duration` | Session Duration | Short text | No | Max 40 chars | e.g., "Maximum 35 minute" |
| `description` | Description | Long text | No | Appearance: Markdown | General program description (supports Markdown) |
| `psychologicalDevelopment` | Psychological Development | Long text | No | Appearance: Markdown | Child development information (supports Markdown) |
| `objectives` | Objectives | Long text | No | Appearance: Markdown | Learning objectives bullet points (supports Markdown) |
| `icon` | Icon | Media | No | Image/SVG | Age group icon |
| `color` | Accent Color | Short text | No | Hex format | e.g., "#14b8a6" for styling |
| `order` | Display Order | Number | Yes | Integer, 1-10 | Order in program list |

---

### 3.11 CourseModule

**Content Type ID:** `courseModule`
**Name:** `Course Module`
**Description:** Școala Părinților course modules.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Module Title | Short text | Yes | Max 60 chars | e.g., "Lamaze", "Neonatologie" |
| `subtitle` | Subtitle | Short text | No | Max 100 chars | Brief descriptor |
| `sessions` | Sessions Info | Short text | No | Max 40 chars | e.g., "6 sesiuni x 2 ore" |
| `instructor` | Instructor | Reference | No | Link to: TeamMember | Course instructor |
| `content` | Full Content | Long text | Yes | Appearance: Markdown | Complete module content (supports Markdown) |
| `objectives` | Learning Objectives | Long text | No | Appearance: Markdown | What participants will learn (supports Markdown) |
| `order` | Display Order | Number | Yes | Integer, 1-10 | Order in course tabs |

---

### 3.12 TimelineEvent

**Content Type ID:** `timelineEvent`
**Name:** `Timeline Event`
**Description:** Historical milestones for Istoric page.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `year` | Year | Short text | Yes | Max 10 chars | e.g., "1981", "2000-2001" |
| `title` | Event Title | Short text | No | Max 100 chars | Brief event title (optional) |
| `description` | Description | Long text | Yes | Max 500 chars | What happened |
| `image` | Image | Media | No | Image only | Optional event photo |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Chronological order |

---

### 3.13 Conference

**Content Type ID:** `conference`
**Name:** `Conference`
**Description:** Conferences and congresses attended.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Conference Name | Short text | Yes | Max 150 chars | Full conference title |
| `year` | Year | Short text | Yes | Max 10 chars | Year attended |
| `location` | Location | Short text | No | Max 80 chars | City, Country |
| `description` | Description | Long text | No | Max 300 chars | Additional details |
| `isInternational` | International | Boolean | Yes | Default: false | Flag for filtering |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Display order |

---

### 3.14 Project

**Content Type ID:** `project`
**Name:** `Project`
**Description:** Association projects and programs.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Project Name | Short text | Yes | Max 100 chars | Project title |
| `slug` | URL Slug | Short text | No | Unique | For individual project pages (optional) |
| `description` | Description | Long text | Yes | Appearance: Markdown | Full project description (supports Markdown) |
| `objectives` | Objectives | Long text | No | Appearance: Markdown | Project goals (supports Markdown) |
| `results` | Results | Long text | No | Appearance: Markdown | Outcomes achieved (supports Markdown) |
| `image` | Featured Image | Media | No | Image only | Project image |
| `status` | Status | Short text | Yes | Accept only: `active`, `completed`, `upcoming` | Current status |
| `order` | Display Order | Number | Yes | Integer, 1-20 | Order in project list |

---

### 3.15 Certificate

**Content Type ID:** `certificate`
**Name:** `Certificate`
**Description:** Awards, certificates, and distinctions.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Certificate Name | Short text | Yes | Max 150 chars | Name of award/certificate |
| `issuingBody` | Issuing Organization | Short text | No | Max 100 chars | Who issued it |
| `date` | Date Issued | Date | No | - | When it was awarded |
| `image` | Certificate Image | Media | Yes | Image only | Scan/photo of certificate |
| `description` | Description | Long text | No | Max 300 chars | What it certifies |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Gallery order |

---

### 3.16 PressClipping

**Content Type ID:** `pressClipping`
**Name:** `Press Clipping`
**Description:** Media coverage and press mentions.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Article Title | Short text | No | Max 150 chars | Article headline (if known) |
| `publication` | Publication | Short text | No | Max 80 chars | Magazine/newspaper name |
| `date` | Publication Date | Date | No | - | When published |
| `image` | Clipping Image | Media | Yes | Image only | Scan of the article |
| `link` | Original Link | Short text | No | URL format | Link to online version |
| `excerpt` | Excerpt | Long text | No | Max 300 chars | Brief summary or quote |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Gallery order |

---

### 3.17 Gallery

**Content Type ID:** `gallery`
**Name:** `Gallery`
**Description:** Photo galleries and events.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Gallery Title | Short text | Yes | Max 100 chars | Event/gallery name |
| `slug` | URL Slug | Short text | Yes | Unique | URL segment (e.g., "petrecere-2013") |
| `description` | Description | Long text | No | Max 300 chars | Event description |
| `date` | Event Date | Date | No | - | When the event occurred |
| `coverImage` | Cover Image | Media | Yes | Image only | Thumbnail for gallery list |
| `images` | Gallery Images | Media (many) | Yes | Images only | All photos in gallery |
| `featured` | Featured | Boolean | Yes | Default: false | Show on homepage/gallery overview |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Order in gallery list |

---

### 3.18 FAQ

**Content Type ID:** `faq`
**Name:** `FAQ`
**Description:** Frequently asked questions.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `question` | Question | Short text | Yes | Max 200 chars | The question |
| `answer` | Answer | Long text | Yes | Appearance: Markdown | The answer (supports Markdown) |
| `category` | Category | Short text | No | Accept only: `general`, `programs`, `safety`, `pricing`, `other` | For grouping |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Order within category |

---

### 3.19 Partner

**Content Type ID:** `partner`
**Name:** `Partner`
**Description:** Partners and sponsors.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `name` | Company Name | Short text | Yes | Max 80 chars | Partner/sponsor name |
| `logo` | Logo | Media | Yes | Image only | Company logo (transparent PNG preferred) |
| `website` | Website | Short text | No | URL format | Company website |
| `partnerType` | Type | Short text | Yes | Accept only: `partner`, `sponsor`, `endorsement` | Relationship type |
| `description` | Description | Long text | No | Max 200 chars | Brief description of partnership |
| `active` | Active | Boolean | Yes | Default: true | Currently active partnership |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Display order |

---

### 3.20 PricingTier

**Content Type ID:** `pricingTier`
**Name:** `Pricing Tier`
**Description:** Service pricing options by frequency and time slot.

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `internalName` | Internal Name | Short text | Yes | - | e.g., "Monthly 1x/week Morning" |
| `period` | Period | Short text | Yes | Accept only: `monthly`, `semester`, `annual`, `single` | Billing period |
| `frequency` | Frequency | Short text | Yes | Accept only: `1x/week`, `2x/week`, `single` | Sessions per week |
| `timeSlot` | Time Slot | Short text | No | Accept only: `morning`, `afternoon`, `any` | Morning (09-16) or Afternoon (16-20) |
| `price` | Price (EUR) | Number | Yes | Decimal, min 0 | Price in Euros |
| `description` | Description | Short text | No | Max 100 chars | Optional description (e.g., "Best value") |
| `service` | Service | Reference | No | Link to: Service | Which service this pricing applies to |
| `highlighted` | Highlighted | Boolean | Yes | Default: false | Feature this tier prominently |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Order in pricing table |

---

### 3.21 SpecialPricing

**Content Type ID:** `specialPricing`
**Name:** `Special Pricing`
**Description:** Special services with custom pricing (e.g., home visits).

| Field ID | Field Name | Type | Required | Validation | Help Text |
|----------|------------|------|----------|------------|-----------|
| `title` | Title | Short text | Yes | Max 80 chars | e.g., "Metoda Sultana - Deplasare la domiciliu" |
| `price` | Price (EUR) | Number | Yes | Decimal, min 0 | Price in Euros |
| `unit` | Unit | Short text | Yes | Max 30 chars | e.g., "per ședință", "per oră" |
| `notes` | Notes | Long text | No | Max 200 chars | Additional info (e.g., "+ transport") |
| `service` | Service | Reference | No | Link to: Service | Related service |
| `order` | Display Order | Number | Yes | Integer, 1-100 | Order in list |

---

## Content Model Creation Order

Create in this exact order to handle references:

1. **SiteSettings** (no dependencies)
2. **Navigation** (no dependencies)
3. **CarouselSlide** (no dependencies)
4. **Testimonial** (no dependencies)
5. **TeamMember** (no dependencies)
6. **Widget** (no dependencies)
7. **ServiceTab** (no dependencies)
8. **AgeGroup** (no dependencies)
9. **CourseModule** (references TeamMember)
10. **TimelineEvent** (no dependencies)
11. **Conference** (no dependencies)
12. **Project** (no dependencies)
13. **Certificate** (no dependencies)
14. **PressClipping** (no dependencies)
15. **Gallery** (no dependencies)
16. **FAQ** (no dependencies)
17. **Partner** (no dependencies)
18. **PricingTier** (references Service - create after Service exists, or leave reference empty initially)
19. **SpecialPricing** (references Service - create after Service exists, or leave reference empty initially)
20. **Page** (references Widget, self-reference)
21. **Service** (references Widget, ServiceTab, AgeGroup, self-reference)

---

## 4. Webhooks

### ISR Revalidation Webhook

Configure webhook to trigger Next.js revalidation on content publish:

1. Go to **Settings → Webhooks**
2. Click **"Add Webhook"**
3. Configure:
   - **Name:** `Next.js Revalidation`
   - **URL:** `https://miciicampioni.ro/api/revalidate`
   - **Triggers:**
     - Entry: Publish, Unpublish
     - Asset: Publish, Unpublish
   - **Filters:** All content types
   - **Headers:**
     ```
     x-revalidate-secret: [YOUR_SECRET_KEY]
     ```
   - **Content Type:** `application/json`
   - **Payload:** Default (include sys and fields)

### Webhook Secret

Generate a secure secret:
```bash
openssl rand -hex 32
```

Add to both Contentful webhook headers and Next.js `.env.local`:
```env
REVALIDATE_SECRET=your_generated_secret
```

---

## 5. API Keys

### Content Delivery API (Production)

1. Go to **Settings → API Keys**
2. Click **"Add API Key"**
3. Configure:
   - **Name:** `Production Website`
   - **Description:** `Read-only access for production site`
   - **Environments:** `master`
4. Save and copy:
   - **Space ID:** For `CONTENTFUL_SPACE_ID`
   - **Content Delivery API - access token:** For `CONTENTFUL_ACCESS_TOKEN`

### Content Preview API (Draft Content)

Use the same API key, but copy:
- **Content Preview API - access token:** For `CONTENTFUL_PREVIEW_TOKEN`

### Content Management API (Migrations/Scripts)

1. Go to **Settings → CMA Tokens**
2. Click **"Generate personal token"**
3. Configure:
   - **Name:** `Migration Scripts`
   - **Description:** `For content migrations and scripts`
4. Copy token for `CONTENTFUL_MANAGEMENT_TOKEN`

**Security Note:** Never expose CMA tokens in client-side code.

---

## 6. Media Settings

### Image Processing

Go to **Settings → Media** and configure:

1. **Default Quality:** 80 (good balance of quality/size)
2. **Default Format:** Auto (serves WebP where supported)
3. **Maximum File Size:** 20MB

### Recommended Image Dimensions

| Usage | Dimensions | Format |
|-------|------------|--------|
| Hero/Carousel | 1920 x 1080 | JPG/WebP |
| Service Cards | 800 x 500 | JPG/WebP |
| Team Photos | 400 x 400 | JPG/WebP |
| Gallery | 1600 x 1200 | JPG/WebP |
| Thumbnails | 400 x 300 | JPG/WebP |
| Logos | Variable | PNG/SVG |
| Icons | 64 x 64 | SVG/PNG |
| Certificates | 1200 x 900 | JPG |

### Asset Organization

Create folders in Media:
```
/logos
/carousel
/team
/galleries
  /event-2013
  /event-2014
/certificates
/press
/icons
/decorative
```

---

## 7. Roles & Permissions

### Editor Role

For content team members:

**Allowed Actions:**
- Create, edit, publish entries (all content types)
- Upload and manage media
- View webhooks (no edit)

**Restricted:**
- No content model changes
- No API key access
- No webhook configuration
- No role management

### Admin Role

For developers/administrators:

**Allowed Actions:**
- Full access to all features
- Content model editing
- API key management
- Webhook configuration
- Role management

---

## Environment Variables Summary

```env
# Contentful
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token
CONTENTFUL_ENVIRONMENT=master

# Webhook secret for ISR revalidation (must match Contentful webhook header)
REVALIDATE_SECRET=your_webhook_secret

# For local preview mode
CONTENTFUL_PREVIEW_SECRET=your_preview_secret
```

---

## Quick Start Checklist

- [ ] Create Contentful space
- [ ] Configure Romanian locale
- [ ] Create all 21 content models (in order)
- [ ] Generate API keys
- [ ] Configure revalidation webhook
- [ ] Upload logo and essential media
- [ ] Create SiteSettings entry
- [ ] Create Navigation entries (header, footer)
- [ ] Test API access with simple fetch
- [ ] Set up preview mode

---

## Troubleshooting

### Common Issues

**"Circular reference" error:**
- Create content types without references first
- Add reference fields after all types exist

**"Validation failed" on publish:**
- Check required fields are filled
- Verify URL slugs are unique
- Ensure referenced entries are published

**Images not displaying:**
- Publish the asset first
- Check image URL includes protocol
- Verify `next.config.js` has Contentful domain in images

**Webhook not triggering:**
- Verify webhook URL is publicly accessible
- Check webhook secret matches
- Review webhook activity log in Contentful
