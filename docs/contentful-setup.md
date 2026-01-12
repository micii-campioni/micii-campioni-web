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

---

### 3.1 SiteSettings (Create First - Singleton)

**Content Type ID:** `siteSettings`
**Name:** `Site Settings`
**Description:** Global site configuration. Only create ONE entry.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `internalName` | Internal Name | Symbol | Yes | Single line | - | Internal identifier (e.g., "Main Site Settings") |
| `siteName` | Site Name | Symbol | Yes | Single line | Max 50 chars | Display name of the website |
| `tagline` | Tagline | Symbol | No | Single line | Max 100 chars | Site subtitle/tagline |
| `logo` | Logo | Asset | Yes | Asset card | Image only | Main logo (color version) |
| `logoWhite` | Logo (White) | Asset | No | Asset card | Image only | White/inverted logo for dark backgrounds |
| `favicon` | Favicon | Asset | No | Asset card | Image only | Site favicon (32x32 PNG or ICO) |
| `anniversaryText` | Anniversary Text | Symbol | No | Single line | Max 50 chars | e.g., "17 ani de Micii Campioni" |
| `anniversaryActive` | Show Anniversary Banner | Boolean | Yes | Boolean | Default: false | Toggle anniversary banner visibility |
| `phone` | Phone Number | Symbol | Yes | Single line | Regex: `^[0-9\-\+\s]+$` | Contact phone (e.g., "0756-119-119") |
| `email` | Email Address | Symbol | Yes | Single line | Email format | Contact email address |
| `address` | Address | Text | Yes | Markdown | - | Full street address |
| `gpsLatitude` | GPS Latitude | Number | No | Number | -90 to 90 | Map marker latitude |
| `gpsLongitude` | GPS Longitude | Number | No | Number | -180 to 180 | Map marker longitude |
| `facebookUrl` | Facebook URL | Symbol | No | Single line | URL format | Facebook page URL |
| `twitterUrl` | Twitter URL | Symbol | No | Single line | URL format | Twitter/X profile URL |
| `instagramUrl` | Instagram URL | Symbol | No | Single line | URL format | Instagram profile URL |
| `scheduleWeekdays` | Schedule (Weekdays) | Symbol | No | Single line | Max 30 chars | e.g., "10:00 - 20:00" |
| `scheduleSaturday` | Schedule (Saturday) | Symbol | No | Single line | Max 30 chars | e.g., "09:00 - 14:00" |
| `scheduleSunday` | Schedule (Sunday) | Symbol | No | Single line | Max 30 chars | e.g., "Închis" |
| `footerCopyright` | Footer Copyright | Symbol | No | Single line | Max 100 chars | Copyright text (year auto-updates in code) |
| `defaultMetaDescription` | Default Meta Description | Text | No | Multi-line | Max 160 chars | Fallback SEO description |

---

### 3.2 Navigation

**Content Type ID:** `navigation`
**Name:** `Navigation`
**Description:** Menu structure for header and footer.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `internalName` | Internal Name | Symbol | Yes | Single line | Unique | e.g., "Header Navigation", "Footer Navigation" |
| `location` | Location | Symbol | Yes | Dropdown | Values: `header`, `footer` | Where this menu appears |
| `items` | Menu Items | JSON | Yes | JSON editor | - | Menu structure (see JSON schema below) |

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

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `internalName` | Internal Name | Symbol | Yes | Single line | - | Internal identifier (e.g., "Slide 1 - Metoda Sultana") |
| `badge` | Badge Text | Symbol | No | Single line | Max 30 chars | Small text above title (e.g., "DIN 2001") |
| `title` | Title | Symbol | Yes | Single line | Max 80 chars | Main headline |
| `subtitle` | Subtitle | Text | No | Multi-line (3 rows) | Max 200 chars | Description text below title |
| `backgroundImage` | Background Image | Asset | Yes | Asset card | Image only, min 1920x800 | Full-width background (recommend 1920x1080) |
| `ctaText` | Button Text | Symbol | No | Single line | Max 30 chars | Call-to-action button text |
| `ctaLink` | Button Link | Symbol | No | Single line | URL path | Internal link (e.g., "/servicii/metoda-sultana") |
| `order` | Display Order | Integer | Yes | Number | 1-10 | Order in carousel (1 = first) |
| `active` | Active | Boolean | Yes | Boolean | Default: true | Show/hide this slide |

---

### 3.4 Testimonial

**Content Type ID:** `testimonial`
**Name:** `Testimonial`
**Description:** Parent testimonials and endorsements.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `authorName` | Author Name | Symbol | Yes | Single line | Max 100 chars | Full name of the person |
| `authorTitle` | Author Title | Symbol | No | Single line | Max 150 chars | Role/affiliation (e.g., "Președinte Federația Română de Gimnastică Ritmică") |
| `quote` | Quote | Text | Yes | Multi-line (6 rows) | Min 20, Max 1000 chars | The testimonial text |
| `photo` | Photo | Asset | No | Asset card | Image only | Optional headshot (square recommended) |
| `featured` | Featured | Boolean | Yes | Boolean | Default: false | Show on homepage carousel |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Order in list (1 = first) |

---

### 3.5 TeamMember

**Content Type ID:** `teamMember`
**Name:** `Team Member`
**Description:** Staff and instructors.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `name` | Full Name | Symbol | Yes | Single line | Max 100 chars | Person's full name |
| `role` | Role/Title | Symbol | Yes | Single line | Max 100 chars | Job title (e.g., "Fondator și Director") |
| `bio` | Biography | Rich Text | No | Rich text | Enable: headings, bold, italic, lists, links | Full biography |
| `shortBio` | Short Bio | Text | No | Multi-line (3 rows) | Max 200 chars | Brief description for cards |
| `photo` | Photo | Asset | Yes | Asset card | Image only | Profile photo (square, min 400x400) |
| `certifications` | Certifications | Array of Symbols | No | Tags | - | List of certifications/qualifications |
| `isFounder` | Founder | Boolean | Yes | Boolean | Default: false | Highlight as founder |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Order in team list (1 = first) |

---

### 3.6 Widget

**Content Type ID:** `widget`
**Name:** `Widget`
**Description:** Sidebar content blocks.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `internalName` | Internal Name | Symbol | Yes | Single line | Unique | e.g., "Safety Highlight Widget" |
| `title` | Title | Symbol | Yes | Single line | Max 60 chars | Widget heading |
| `icon` | Icon | Asset | No | Asset card | Image only | Optional icon/image |
| `content` | Content | Rich Text | No | Rich text | Enable: bold, italic, lists, links | Widget body content |
| `widgetType` | Widget Type | Symbol | Yes | Dropdown | Values: `info`, `highlight`, `cta`, `contact` | Styling variant |
| `ctaText` | CTA Button Text | Symbol | No | Single line | Max 30 chars | Optional button text |
| `ctaLink` | CTA Button Link | Symbol | No | Single line | URL path | Optional button link |

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

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Page Title | Symbol | Yes | Single line | Max 100 chars | Page heading (H1) |
| `slug` | URL Slug | Symbol | Yes | Slug | Unique, URL-safe | URL path segment (e.g., "istoric") |
| `metaTitle` | SEO Title | Symbol | No | Single line | Max 60 chars | Browser tab title (falls back to title) |
| `metaDescription` | SEO Description | Text | No | Multi-line (2 rows) | Max 160 chars | Search result description |
| `heroImage` | Hero Image | Asset | No | Asset card | Image only | Optional page header image |
| `heroImageAlt` | Hero Image Alt | Symbol | No | Single line | Max 125 chars | Accessibility description for hero |
| `content` | Main Content | Rich Text | Yes | Rich text | Enable: all formatting, embedded assets | Page body content |
| `sidebarWidgets` | Sidebar Widgets | Array of References | No | Entry links list | Link to: Widget | Widgets to display in sidebar |
| `parentPage` | Parent Page | Reference | No | Entry link | Link to: Page | Parent for breadcrumb navigation |
| `showInSitemap` | Show in Sitemap | Boolean | Yes | Boolean | Default: true | Include in HTML sitemap |
| `publishedAt` | Publish Date | Date | No | Date only | - | For ordering/display purposes |

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

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Service Name | Symbol | Yes | Single line | Max 80 chars | Service title |
| `slug` | URL Slug | Symbol | Yes | Slug | Unique, URL-safe | URL segment (e.g., "metoda-sultana") |
| `shortDescription` | Short Description | Text | Yes | Multi-line (3 rows) | Max 200 chars | Card preview text |
| `icon` | Icon | Asset | No | Asset card | Image/SVG | Service icon for cards |
| `heroImage` | Hero Image | Asset | No | Asset card | Image only | Service page header image |
| `content` | Main Content | Rich Text | Yes | Rich text | Enable: all | Full service description |
| `metaTitle` | SEO Title | Symbol | No | Single line | Max 60 chars | Browser tab title |
| `metaDescription` | SEO Description | Text | No | Multi-line (2 rows) | Max 160 chars | Search result description |
| `tabs` | Content Tabs | Array of References | No | Entry links list | Link to: ServiceTab | Tabbed content sections |
| `ageGroups` | Age Groups | Array of References | No | Entry links list | Link to: AgeGroup | For Educație Acvatică only |
| `sidebarWidgets` | Sidebar Widgets | Array of References | No | Entry links list | Link to: Widget | Sidebar content |
| `relatedServices` | Related Services | Array of References | No | Entry links list | Link to: Service | Cross-promotion |
| `order` | Display Order | Integer | Yes | Number | 1-20 | Order in service lists |
| `featured` | Featured | Boolean | Yes | Boolean | Default: false | Show on homepage |

---

### 3.9 ServiceTab

**Content Type ID:** `serviceTab`
**Name:** `Service Tab`
**Description:** Tabbed content sections within services.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Tab Title | Symbol | Yes | Single line | Max 40 chars | Tab label text |
| `content` | Tab Content | Rich Text | Yes | Rich text | Enable: all | Content displayed when tab is active |
| `order` | Display Order | Integer | Yes | Number | 1-10 | Order of tabs (1 = first) |

---

### 3.10 AgeGroup

**Content Type ID:** `ageGroup`
**Name:** `Age Group`
**Description:** Aquatic education programs by age.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `name` | Program Name | Symbol | Yes | Single line | Max 50 chars | e.g., "PRO-BEBE", "JUNIORI" |
| `ageRange` | Age Range | Symbol | Yes | Single line | Max 30 chars | e.g., "4/6 luni - 1 an" |
| `duration` | Session Duration | Symbol | No | Single line | Max 40 chars | e.g., "Maximum 35 minute" |
| `description` | Description | Rich Text | No | Rich text | Enable: paragraphs, bold, italic, lists | General program description |
| `psychologicalDevelopment` | Psychological Development | Rich Text | No | Rich text | Enable: paragraphs, lists | Child development information |
| `objectives` | Objectives | Rich Text | No | Rich text | Enable: lists | Learning objectives bullet points |
| `icon` | Icon | Asset | No | Asset card | Image/SVG | Age group icon |
| `color` | Accent Color | Symbol | No | Single line | Hex format | e.g., "#14b8a6" for styling |
| `order` | Display Order | Integer | Yes | Number | 1-10 | Order in program list |

---

### 3.11 CourseModule

**Content Type ID:** `courseModule`
**Name:** `Course Module`
**Description:** Școala Părinților course modules.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Module Title | Symbol | Yes | Single line | Max 60 chars | e.g., "Lamaze", "Neonatologie" |
| `subtitle` | Subtitle | Symbol | No | Single line | Max 100 chars | Brief descriptor |
| `sessions` | Sessions Info | Symbol | No | Single line | Max 40 chars | e.g., "6 sesiuni x 2 ore" |
| `instructor` | Instructor | Reference | No | Entry link | Link to: TeamMember | Course instructor |
| `content` | Full Content | Rich Text | Yes | Rich text | Enable: all | Complete module content |
| `objectives` | Learning Objectives | Rich Text | No | Rich text | Enable: lists | What participants will learn |
| `order` | Display Order | Integer | Yes | Number | 1-10 | Order in course tabs |

---

### 3.12 TimelineEvent

**Content Type ID:** `timelineEvent`
**Name:** `Timeline Event`
**Description:** Historical milestones for Istoric page.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `year` | Year | Symbol | Yes | Single line | Max 10 chars | e.g., "1981", "2000-2001" |
| `title` | Event Title | Symbol | No | Single line | Max 100 chars | Brief event title (optional) |
| `description` | Description | Text | Yes | Multi-line (4 rows) | Max 500 chars | What happened |
| `image` | Image | Asset | No | Asset card | Image only | Optional event photo |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Chronological order |

---

### 3.13 Conference

**Content Type ID:** `conference`
**Name:** `Conference`
**Description:** Conferences and congresses attended.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Conference Name | Symbol | Yes | Single line | Max 150 chars | Full conference title |
| `year` | Year | Symbol | Yes | Single line | Max 10 chars | Year attended |
| `location` | Location | Symbol | No | Single line | Max 80 chars | City, Country |
| `description` | Description | Text | No | Multi-line (3 rows) | Max 300 chars | Additional details |
| `isInternational` | International | Boolean | Yes | Boolean | Default: false | Flag for filtering |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Display order |

---

### 3.14 Project

**Content Type ID:** `project`
**Name:** `Project`
**Description:** Association projects and programs.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Project Name | Symbol | Yes | Single line | Max 100 chars | Project title |
| `slug` | URL Slug | Symbol | No | Slug | Unique | For individual project pages (optional) |
| `description` | Description | Rich Text | Yes | Rich text | Enable: all | Full project description |
| `objectives` | Objectives | Rich Text | No | Rich text | Enable: lists | Project goals |
| `results` | Results | Rich Text | No | Rich text | Enable: all | Outcomes achieved |
| `image` | Featured Image | Asset | No | Asset card | Image only | Project image |
| `status` | Status | Symbol | Yes | Dropdown | Values: `active`, `completed`, `upcoming` | Current status |
| `order` | Display Order | Integer | Yes | Number | 1-20 | Order in project list |

---

### 3.15 Certificate

**Content Type ID:** `certificate`
**Name:** `Certificate`
**Description:** Awards, certificates, and distinctions.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Certificate Name | Symbol | Yes | Single line | Max 150 chars | Name of award/certificate |
| `issuingBody` | Issuing Organization | Symbol | No | Single line | Max 100 chars | Who issued it |
| `date` | Date Issued | Date | No | Date only | - | When it was awarded |
| `image` | Certificate Image | Asset | Yes | Asset card | Image only | Scan/photo of certificate |
| `description` | Description | Text | No | Multi-line (3 rows) | Max 300 chars | What it certifies |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Gallery order |

---

### 3.16 PressClipping

**Content Type ID:** `pressClipping`
**Name:** `Press Clipping`
**Description:** Media coverage and press mentions.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Article Title | Symbol | No | Single line | Max 150 chars | Article headline (if known) |
| `publication` | Publication | Symbol | No | Single line | Max 80 chars | Magazine/newspaper name |
| `date` | Publication Date | Date | No | Date only | - | When published |
| `image` | Clipping Image | Asset | Yes | Asset card | Image only | Scan of the article |
| `link` | Original Link | Symbol | No | Single line | URL format | Link to online version |
| `excerpt` | Excerpt | Text | No | Multi-line (3 rows) | Max 300 chars | Brief summary or quote |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Gallery order |

---

### 3.17 Gallery

**Content Type ID:** `gallery`
**Name:** `Gallery`
**Description:** Photo galleries and events.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `title` | Gallery Title | Symbol | Yes | Single line | Max 100 chars | Event/gallery name |
| `slug` | URL Slug | Symbol | Yes | Slug | Unique | URL segment (e.g., "petrecere-2013") |
| `description` | Description | Text | No | Multi-line (3 rows) | Max 300 chars | Event description |
| `date` | Event Date | Date | No | Date only | - | When the event occurred |
| `coverImage` | Cover Image | Asset | Yes | Asset card | Image only | Thumbnail for gallery list |
| `images` | Gallery Images | Array of Assets | Yes | Asset gallery | Images only | All photos in gallery |
| `featured` | Featured | Boolean | Yes | Boolean | Default: false | Show on homepage/gallery overview |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Order in gallery list |

---

### 3.18 FAQ

**Content Type ID:** `faq`
**Name:** `FAQ`
**Description:** Frequently asked questions.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `question` | Question | Symbol | Yes | Single line | Max 200 chars | The question |
| `answer` | Answer | Rich Text | Yes | Rich text | Enable: paragraphs, bold, italic, lists, links | The answer |
| `category` | Category | Symbol | No | Dropdown | Values: `general`, `programs`, `safety`, `pricing`, `other` | For grouping |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Order within category |

---

### 3.19 Partner

**Content Type ID:** `partner`
**Name:** `Partner`
**Description:** Partners and sponsors.

| Field ID | Field Name | Type | Required | Appearance | Validation | Help Text |
|----------|------------|------|----------|------------|------------|-----------|
| `name` | Company Name | Symbol | Yes | Single line | Max 80 chars | Partner/sponsor name |
| `logo` | Logo | Asset | Yes | Asset card | Image only | Company logo (transparent PNG preferred) |
| `website` | Website | Symbol | No | Single line | URL format | Company website |
| `partnerType` | Type | Symbol | Yes | Dropdown | Values: `partner`, `sponsor`, `endorsement` | Relationship type |
| `description` | Description | Text | No | Multi-line (2 rows) | Max 200 chars | Brief description of partnership |
| `active` | Active | Boolean | Yes | Boolean | Default: true | Currently active partnership |
| `order` | Display Order | Integer | Yes | Number | 1-100 | Display order |

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
18. **Page** (references Widget, self-reference)
19. **Service** (references Widget, ServiceTab, AgeGroup, self-reference)

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

Add to both Contentful webhook headers and Next.js `.env`:
```env
CONTENTFUL_WEBHOOK_SECRET=your_generated_secret
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
CONTENTFUL_WEBHOOK_SECRET=your_webhook_secret

# For local preview mode
CONTENTFUL_PREVIEW_SECRET=your_preview_secret
```

---

## Quick Start Checklist

- [ ] Create Contentful space
- [ ] Configure Romanian locale
- [ ] Create all 19 content models (in order)
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
