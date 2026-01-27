# Contentful Content Population Guide

**Complete guide to populate all content in Contentful for Micii Campioni website.**

> **Instructions:** Work through this document section by section. Each section corresponds to a Content Type in Contentful. Copy the content directly into Contentful's entry editor.

---

## Image Assets Reference

All images have been extracted from the WordPress backup and organized in `public/images/`. Upload these to Contentful's Media library first.

### Directory Structure

```
public/images/
├── logos/                    (2 files)
│   ├── logo-micii-campioni.png    → Site logo (color)
│   └── micii-logo.png             → Site logo (alternate)
│
├── icons/                    (19 files)
│   ├── home-ico-1.png             → Homepage widget icon 1
│   ├── home-ico-2.png             → Homepage widget icon 2
│   ├── home-ico-3.png             → Homepage widget icon 3
│   ├── flag-de-17-ani-homepage.png → Anniversary banner (homepage)
│   ├── flag-de-17-ani-inner.png   → Anniversary banner (inner pages)
│   ├── flag-de-12-ani-homepage.png → Legacy anniversary banner
│   ├── flag-de-12-ani-inner.png   → Legacy anniversary banner
│   └── ico-*.png                  → Social media icons
│
├── animations/               (5 files)
│   ├── animation-whale.png        → Swimming whale animation
│   ├── animation-crab.png         → Crab animation
│   ├── animation-seahorse.png     → Seahorse animation
│   ├── animation-tortoise.png     → Tortoise animation
│   └── animation-fish.png         → Fish animation
│
├── separators/               (2 files)
│   ├── separator-to-top.png       → Wave separator (top direction)
│   └── separator-to-bottom.png    → Wave separator (bottom direction)
│
├── backgrounds/              (4 files)
│   ├── bkg-header.png             → Header background pattern
│   ├── inner-bkg.png              → Inner page background
│   ├── inner-blur.png             → Blur effect overlay
│   └── home-blur.jpg              → Homepage blur background
│
├── carousel/                 (8 files)
│   ├── slice1.jpg                 → Carousel slide 1 background
│   ├── slice2.jpg                 → Carousel slide 2 background
│   ├── slice3.jpg                 → Carousel slide 3 background
│   ├── slice4.jpg                 → Carousel slide 4 background
│   ├── slice5.jpg                 → Carousel slide 5 background
│   ├── slice6.jpg                 → Carousel slide 6 background
│   ├── bkg-prima-scoala.png       → "Prima Scoala" background
│   └── carte.jpg                  → Book/Guide image
│
├── certificates/             (14 files)
│   ├── img004.jpg                 → Certificate 1
│   ├── img005.jpg                 → Certificate 2
│   ├── img006.jpg                 → Certificate 3
│   ├── img007.jpg                 → Certificate 4
│   ├── img008.jpg                 → Certificate 5
│   ├── img009.jpg                 → Certificate 6
│   ├── img010.jpg                 → Certificate 7
│   ├── img011.jpg                 → Certificate 8
│   ├── img012.jpg                 → Certificate 9
│   ├── img013.jpg                 → Certificate 10
│   ├── img014.jpg                 → Certificate 11
│   ├── img015.jpg                 → Certificate 12
│   ├── img016.jpg                 → Certificate 13
│   └── img176.jpg                 → Certificate 14
│
├── press/                    (20 files)
│   ├── Aquatica.jpg               → Press clipping 1
│   ├── Aquatica2.jpg              → Press clipping 2
│   ├── Aquatica3.jpg              → Press clipping 3
│   ├── Bebelusii-campioni.jpg     → Press clipping 4
│   ├── Bebelusii-inotatori.jpg    → Press clipping 5
│   ├── Clubul-micilor-inotatori.jpg → Press clipping 6
│   ├── Inotatori-de-la-2-zile.jpg → Press clipping 7
│   ├── Interviu.jpg               → Press clipping 8
│   ├── Interviu2.jpg              → Press clipping 9
│   ├── Interviu3.jpg              → Press clipping 10
│   ├── Interviu4.jpg              → Press clipping 11
│   ├── Masajul-subacvatic.jpg     → Press clipping 12
│   ├── Metoda-MG.jpg              → Press clipping 13
│   ├── Prima-scoala-de-inot.jpg   → Press clipping 14
│   ├── Scoala-micilor-campioni.jpg → Press clipping 15
│   ├── Terapia-acvatica.jpg       → Press clipping 16
│   ├── Terapia-acvatica2.jpg      → Press clipping 17
│   ├── Terapia-acvatica3.jpg      → Press clipping 18
│   ├── brevet-inventie.jpg        → Patent/invention document
│   └── metoda-MG2.jpg             → Press clipping 20
│
├── partners/                 (14 files)
│   ├── partener-fael.jpg          → FAAEL partner logo
│   ├── partener-chicco.jpg        → Chicco partner logo
│   ├── partener-modelier.png      → Modelier partner logo
│   ├── partener-orthoexclusive.jpg → Ortho Exclusive partner logo
│   ├── partener_kitoto.png        → Kitoto partner logo
│   ├── partener-mag-piticilor.jpg → Mag Piticilor partner logo
│   ├── partener-sfintiiarhangheli.png → Sfintii Arhangheli partner logo
│   ├── brd.gif                    → BRD sponsor logo
│   └── ... (more partner logos)
│
├── team/                     (1 file)
│   └── georgeta-sultana.jpg       → Founder photo
│
└── gallery/                  (7 subdirectories, 216+ files)
    ├── 10-ani/                    → 10 Years Anniversary (20 images)
    ├── bebelusi-inotatori/        → Baby Swimmers (11 images)
    ├── filip-stan/                → Filip Stan Success Story (2 images)
    ├── peste-4-ani/               → Over 4 Years Program (10 images)
    ├── sarbatoarea-invingatorilor-2012/ → Winners Celebration 2012 (20 images)
    ├── sarbatoarea-invingatorilor-2013/ → Winners Celebration 2013 (143 images)
    └── ziua-copilului/            → Children's Day (10 images)
```

### Quick Upload Guide

1. **First, upload to Contentful Media:**
   - Go to Media → Add asset → Upload
   - Upload all files from each directory
   - Tag them appropriately (e.g., "logo", "carousel", "certificate")

2. **Image paths in this document:**
   - When you see `→ /images/logos/logo-micii-campioni.png`, upload that file
   - Reference it in the Contentful entry by selecting from uploaded media

---

## ⚠️ Content Review Notes

**Important:** The WordPress backup is from **February 2014**. Some content may be outdated. Review the items below before populating Contentful.

### Content Types Requiring Fresh Input

These content types need **NEW content** - the WordPress data is placeholder/test data or missing:

| Content Type | Issue | Action Required |
|--------------|-------|-----------------|
| **Testimonials** | WordPress has Lorem ipsum placeholders | ✏️ Collect real testimonials from parents |
| **TeamMembers** | No team database in WordPress | ✏️ Create entries with current staff info and photos |
| **FAQs** | WordPress has test questions only | ✏️ Write real Q&A based on common inquiries |

### Content Types Requiring Verification

These content types have WordPress data but **may be outdated**:

| Content Type | WordPress Value | Action Required |
|--------------|-----------------|-----------------|
| **SiteSettings.phone** | `0722 587868` / `0722 310052` | ✅ Verify current phone number |
| **SiteSettings.address** | `Strada Strabuna nr. 26, sector 1` | ✅ Verify current address |
| **SiteSettings.anniversaryText** | `17 ani` (from 2017 snapshot) | ✅ Update to current year (24 ani in 2025) |
| **PricingTier** | Euro pricing from 2014 | ✅ Verify current pricing |

### Content Types Ready to Use

These have good WordPress data and can be populated directly:

- ✅ **Navigation** - Menu structure is solid
- ✅ **CarouselSlides** - Images extracted, content ready
- ✅ **Widgets** - Homepage widgets documented
- ✅ **Partners** - 12 partner logos extracted
- ✅ **AgeGroups** - 4 age programs well documented
- ✅ **ServiceTabs** - Service content complete
- ✅ **CourseModules** - Școala Părinților curriculum documented
- ✅ **TimelineEvents** - Historical milestones documented
- ✅ **Conferences** - 17 conferences listed
- ✅ **Projects** - 3 projects documented
- ✅ **Certificates** - 14 certificate images extracted
- ✅ **PressClippings** - 20 press images extracted
- ✅ **Services** - 6 services fully documented
- ✅ **Pages** - 16 pages with full content
- ✅ **Galleries** - 7 galleries with 216+ images

### New Content Types to Create in Contentful

These content types need to be **created in Contentful first** (see `contentful-setup.md`):

| Content Type | Description |
|--------------|-------------|
| **PricingTier** | Service pricing by period/frequency |
| **SpecialPricing** | Custom pricing (home visits, etc.) |

---

## Table of Contents

1. [SiteSettings](#1-sitesettings-1-entry)
2. [Navigation](#2-navigation-2-entries)
3. [Testimonials](#3-testimonials-6-entries)
4. [CarouselSlides](#4-carouselslides-5-entries)
5. [Widgets](#5-widgets-12-entries)
6. [TeamMembers](#6-teammembers-3-entries)
7. [Partners](#7-partners-12-entries)
8. [AgeGroups](#8-agegroups-4-entries)
9. [ServiceTabs](#9-servicetabs-8-entries)
10. [CourseModules](#10-coursemodules-4-entries)
11. [TimelineEvents](#11-timelineevents-13-entries)
12. [Conferences](#12-conferences-22-entries)
13. [Projects](#13-projects-4-entries)
14. [Certificates](#14-certificates-14-entries)
15. [PressClippings](#15-pressclippings-20-entries)
16. [FAQs](#16-faqs-12-entries)
17. [Services](#17-services-6-entries)
18. [Pages](#18-pages-16-entries)
19. [Galleries](#19-galleries-7-entries)
20. [PricingTiers](#20-pricingtiers-12-entries)
21. [SpecialPricing](#21-specialpricing-1-entry)

---

## 1. SiteSettings (1 entry)

**Content Type:** `siteSettings`

| Field | Value |
|-------|-------|
| `internalName` | Main Site Settings |
| `siteName` | Micii Campioni |
| `tagline` | Primul club de educație acvatică din România |
| `logo` | → `/images/logos/logo-micii-campioni.png` |
| `logoWhite` | → `/images/logos/micii-logo.png` |
| `favicon` | *(create from logo or find in WordPress files)* |
| `anniversaryText` | 23 ani de Micii Campioni |
| `anniversaryActive` | true |
| `phone` | 0756-119-119 |
| `email` | info@miciicampioni.ro |
| `address` | Str. Lt. Victor Manu Nr.45, Sector 2, București |
| `location` | Lat: 44.482485, Lng: 26.037626 |
| `facebookUrl` | https://facebook.com/miciicampioni |
| `twitterUrl` | https://twitter.com/MiciiCampioni1 |
| `instagramUrl` | *(leave empty or add if exists)* |
| `scheduleWeekdays` | 10:00 - 20:00 |
| `scheduleSaturday` | 09:00 - 14:00 |
| `scheduleSunday` | Închis |
| `footerCopyright` | © 2001-2025 Clubul Micii Campioni. Toate drepturile rezervate. |
| `defaultMetaDescription` | Clubul Micii Campioni - primul club de educație acvatică din România. Educație acvatică pentru bebeluși și copii, Metoda Sultana, cursuri prenatale Lamaze din 2001. |

---

## 2. Navigation (2 entries)

### Entry 1: Header Navigation

| Field | Value |
|-------|-------|
| `internalName` | Header Navigation |
| `location` | header |
| `items` | *(JSON below)* |

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
      {"label": "Istoric", "href": "/despre-noi/istoric"},
      {"label": "Siguranță și securitate", "href": "/despre-noi/siguranta-si-securitate-pentru-copilul-tau"},
      {"label": "Echipa Micii Campioni", "href": "/despre-noi/echipa-micii-campioni"},
      {"label": "Press Info", "href": "/despre-noi/press-info"},
      {"label": "Distincții și certificări", "href": "/despre-noi/distinctii-si-certificari"}
    ]
  },
  {
    "label": "CONCEPT",
    "href": "/concept",
    "children": [
      {"label": "Micii Campioni și FAAEL", "href": "/concept/micii-campioni-si-faael"},
      {"label": "Viziune și obiective", "href": "/concept/viziune-si-obiective"}
    ]
  },
  {
    "label": "ASOCIAȚIA",
    "href": "/asociatia",
    "children": [
      {"label": "Misiune", "href": "/asociatia/misiune"},
      {"label": "Proiecte și programe", "href": "/asociatia/proiecte-si-programe"},
      {"label": "Conferințe și congrese", "href": "/asociatia/conferinte-si-congrese"},
      {"label": "Sponsorizări", "href": "/asociatia/sponsorizari"}
    ]
  },
  {
    "label": "SERVICII",
    "href": "/servicii",
    "children": [
      {"label": "Metoda Sultana", "href": "/servicii/metoda-sultana"},
      {"label": "Educație Acvatică", "href": "/servicii/educatie-acvatica"},
      {"label": "Școala Părinților", "href": "/servicii/scoala-parintilor-de-campioni"},
      {"label": "Activitate Gravide", "href": "/servicii/activitate-acvatica-gravide"},
      {"label": "Kinetoterapie", "href": "/servicii/kinetoterapie"},
      {"label": "Întrebări Frecvente", "href": "/servicii/intrebari-frecvente"}
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

### Entry 2: Footer Navigation

| Field | Value |
|-------|-------|
| `internalName` | Footer Navigation |
| `location` | footer |
| `items` | *(JSON below)* |

```json
[
  {
    "label": "Servicii",
    "href": "/servicii",
    "children": [
      {"label": "Metoda Sultana", "href": "/servicii/metoda-sultana"},
      {"label": "Educație Acvatică", "href": "/servicii/educatie-acvatica"},
      {"label": "Școala Părinților", "href": "/servicii/scoala-parintilor-de-campioni"},
      {"label": "Activitate Gravide", "href": "/servicii/activitate-acvatica-gravide"},
      {"label": "Kinetoterapie", "href": "/servicii/kinetoterapie"}
    ]
  },
  {
    "label": "Despre Noi",
    "href": "/despre-noi",
    "children": [
      {"label": "Istoric", "href": "/despre-noi/istoric"},
      {"label": "Echipa", "href": "/despre-noi/echipa-micii-campioni"},
      {"label": "Distincții", "href": "/despre-noi/distinctii-si-certificari"}
    ]
  },
  {
    "label": "Informații",
    "href": "#",
    "children": [
      {"label": "Contact", "href": "/contact"},
      {"label": "Întrebări Frecvente", "href": "/servicii/intrebari-frecvente"},
      {"label": "Hartă Site", "href": "/harta-site"}
    ]
  }
]
```

---

## 3. Testimonials (6 entries)

### Testimonial 1

| Field | Value |
|-------|-------|
| `authorName` | Adela și Dragoș Stan |
| `authorTitle` | Părinții lui Filip și Leon, multipli campioni municipali și naționali |
| `quote` | Pentru noi, beneficiile Metodei Sultana pot fi exprimate matematic pe hârtie, în măsura în care metoda a pus bazele psihomotorii ale unor timpi și performanțe remarcabile la concursuri naționale de natație. Este apanajul unor părinți care înțeleg secretul din spatele succesului mai departe de talent și muncă susținută. Munca Georgetei Sultana a fost pașaportul copiilor noștri pentru gândire pozitivă, perseverență, alegeri asumate și responsabile, fericire, succese necondiționate, fizic de invidiat. Acești copii au deja înscris în ADN, secretul unei vieți mai bune. |
| `photo` | *(upload if available)* |
| `featured` | true |
| `order` | 1 |

---

### Testimonial 2

| Field | Value |
|-------|-------|
| `authorName` | Sanda Ladoși |
| `authorTitle` | *(leave empty)* |
| `quote` | Toți ne dorim copii sănătoși și mișcarea încă de la o vârstă fragedă nu poate să facă decât bine. Așa că pentru ambii copii am ales să o am aproape pe GETI, așa cum îi spunem noi. Și-a dezvoltat o echipă serioasă de profesioniști, ce conturează personalitățile copiilor, începând de acasă și apoi continuând în piscina specială de la Micii Campioni. Cel mai bine ar fi să încerci. |
| `photo` | *(upload if available)* |
| `featured` | true |
| `order` | 2 |

---

### Testimonial 3

| Field | Value |
|-------|-------|
| `authorName` | Irina Deleanu |
| `authorTitle` | Președinte Federația Română de Gimnastică Ritmică |
| `quote` | Ai un nou membru în familie...? Vrei ca problemele și întrebările tale să dispară...? Cheam-o pe Mami Geti! |
| `photo` | *(upload if available)* |
| `featured` | true |
| `order` | 3 |

---

### Testimonial 4

| Field | Value |
|-------|-------|
| `authorName` | dr. Daniela Taropa |
| `authorTitle` | Family Clinic |
| `quote` | Georgeta Sultana a făcut mai mult: a dezvoltat o metodă care s-a răspândit din ce în ce mai mult, folosind efectele benefice ale apei. Astfel, stimulând reflexul de scafandru, bebelușul își fortifică organismul devenind din zi în zi, mai sănătos. Îi mulțumim Getei Sultana pentru sănătatea copiilor noștri. |
| `photo` | *(upload if available)* |
| `featured` | true |
| `order` | 4 |

---

### Testimonial 5

| Field | Value |
|-------|-------|
| `authorName` | Rita Mureșan |
| `authorTitle` | *(leave empty)* |
| `quote` | Cred cu convingere că relația dintre fetele mele și apă, relația foarte bună, este rodul acelor seri în care Geta le făcea mai mult decât un masaj sau hidroterapie, le pregătea pentru viitor. De altfel, Rege și Glo sunt două fete înalte, suple, grațioase, care iubesc apa. Iar totul i se datorează și minunatei Geta! Mulțumim Mami Geti! |
| `photo` | *(upload if available)* |
| `featured` | true |
| `order` | 5 |

---

### Testimonial 6

| Field | Value |
|-------|-------|
| `authorName` | Simona Bălănescu |
| `authorTitle` | Realizator TV |
| `quote` | Înotul timpuriu crește încrederea în sine și independența copilului, prin mișcări libere executate în apă, lucru care nu este posibil pentru copilul mic cu aceeași ușurință în mediul terestru. Apa devine acum, ca în burtica mamei, un mediu protector și stimulant pentru bebeluș, în care mișcările se desfășoară fără prea multă dificultate, datorită gravitației inexistente. Citiți mai multe în Ghidul profesionistei Georgeta Sultana, de la care avem cu toții ce învăța! |
| `photo` | *(upload if available)* |
| `featured` | true |
| `order` | 6 |

---

## 4. CarouselSlides (5 entries)

### Slide 1

| Field | Value |
|-------|-------|
| `internalName` | Slide 1 - Hero Principal |
| `badge` | DIN 2001 |
| `title` | Primul club de educație acvatică din România |
| `subtitle` | Campion pentru toată viața! Programele noastre sunt concepute pe baza principiilor europene promovate de FAAEL. |
| `backgroundImage` | → `/images/carousel/slice1.jpg` |
| `ctaText` | Află mai mult |
| `ctaLink` | /despre-noi |
| `order` | 1 |
| `active` | true |

---

### Slide 2

| Field | Value |
|-------|-------|
| `internalName` | Slide 2 - Metoda Sultana |
| `badge` | METODA SULTANA |
| `title` | Metodă de stimulare psihomotorie |
| `subtitle` | Combinația eficientă de masaj, gimnastică și hidroterapie pentru bebeluși, de la naștere până la 4-6 luni. |
| `backgroundImage` | → `/images/carousel/slice2.jpg` |
| `ctaText` | Descoperă metoda |
| `ctaLink` | /servicii/metoda-sultana |
| `order` | 2 |
| `active` | true |

---

### Slide 3

| Field | Value |
|-------|-------|
| `internalName` | Slide 3 - Educație Acvatică |
| `badge` | EDUCAȚIE ACVATICĂ |
| `title` | Campion pentru toată viața |
| `subtitle` | De la 4 luni, educație acvatică și inițiere în înot pentru copii de toate vârstele. |
| `backgroundImage` | → `/images/carousel/slice3.jpg` |
| `ctaText` | Vezi programele |
| `ctaLink` | /servicii/educatie-acvatica |
| `order` | 3 |
| `active` | true |

---

### Slide 4

| Field | Value |
|-------|-------|
| `internalName` | Slide 4 - Școala Părinților |
| `badge` | ȘCOALA PĂRINȚILOR |
| `title` | Școala Părinților de Campioni |
| `subtitle` | Cursuri prenatale Lamaze, Metoda Sultana și alăptare pentru viitorii părinți. |
| `backgroundImage` | → `/images/carousel/slice4.jpg` |
| `ctaText` | Înscrie-te |
| `ctaLink` | /servicii/scoala-parintilor-de-campioni |
| `order` | 4 |
| `active` | true |

---

### Slide 5

| Field | Value |
|-------|-------|
| `internalName` | Slide 5 - Activitate Gravide |
| `badge` | CURS GRAVIDE |
| `title` | Activitate acvatică gravide |
| `subtitle` | Relaxare în apă pentru viitoare mămici - cel mai bun mijloc de relaxare pentru perioada prenatală. |
| `backgroundImage` | → `/images/carousel/slice5.jpg` |
| `ctaText` | Află detalii |
| `ctaLink` | /servicii/activitate-acvatica-gravide |
| `order` | 5 |
| `active` | true |

---

## 5. Widgets (12 entries)

### Widget 1: Inteligență Emoțională

| Field | Value |
|-------|-------|
| `internalName` | Widget - Inteligență Emoțională |
| `title` | Inteligență emoțională |
| `icon` | → `/images/icons/home-ico-1.png` |
| `content` | Un studiu statistic desfășurat la Clubul Micii Campioni a arătat că inteligența emoțională și stima de sine sunt considerabil mai crescute la copiii care practică educația acvatică. |
| `widgetType` | info |
| `ctaText` | |
| `ctaLink` | |

---

### Widget 2: Înmulțirea Neuronilor

| Field | Value |
|-------|-------|
| `internalName` | Widget - Înmulțirea Neuronilor |
| `title` | Înmulțirea neuronilor |
| `icon` | → `/images/icons/home-ico-2.png` |
| `content` | Stimularea acvatică produce înmulțirea celulelor neuronale din creier, ceea ce înseamnă că bebelușul va avea mai mulți neuroni care îl vor ajuta în viitoarele procese de învățare. |
| `widgetType` | info |
| `ctaText` | |
| `ctaLink` | |

---

### Widget 3: Recomandări Oficiale

| Field | Value |
|-------|-------|
| `internalName` | Widget - Recomandări |
| `title` | Recomandări |
| `icon` | → `/images/icons/home-ico-3.png` |
| `content` | Organizația Mondială a Sănătății recomandă Metoda Lamaze. Comisia de Pediatrie și Neonatologie din cadrul Ministerului Sănătății recomandă Metoda Sultana. |
| `widgetType` | highlight |
| `ctaText` | |
| `ctaLink` | |

---

### Widget 4: Siguranță Apă

| Field | Value |
|-------|-------|
| `internalName` | Widget - Siguranță Apă |
| `title` | Siguranță și securitate |
| `icon` | |
| `content` | Apă filtrată de 3 ori, încălzită la 31-32 grade și tratată prin electroliză cu sare - cea mai sigură metodă pentru pielea sensibilă a bebelușilor. |
| `widgetType` | highlight |
| `ctaText` | Află mai mult |
| `ctaLink` | /despre-noi/siguranta-si-securitate-pentru-copilul-tau |

---

### Widget 5: Contact Rapid

| Field | Value |
|-------|-------|
| `internalName` | Widget - Contact Rapid |
| `title` | Contactează-ne |
| `icon` | |
| `content` | **Telefon:** 0756-119-119\n**Email:** info@miciicampioni.ro\n**Program:** Luni-Vineri 10:00-20:00, Sâmbătă 09:00-14:00 |
| `widgetType` | contact |
| `ctaText` | Programează o vizită |
| `ctaLink` | /contact |

---

### Widget 6: Metoda Sultana Recomandare

| Field | Value |
|-------|-------|
| `internalName` | Widget - Metoda Sultana Recomandare |
| `title` | Metodă recomandată oficial |
| `icon` | |
| `content` | Metoda de stimulare psihomotorie recomandată de Comisia de Pediatrie și Neonatologie din cadrul Ministerului Sănătății. Brevet OSIM din 2012. |
| `widgetType` | highlight |
| `ctaText` | |
| `ctaLink` | |

---

### Widget 7: Parteneriat FAAEL

| Field | Value |
|-------|-------|
| `internalName` | Widget - Parteneriat FAAEL |
| `title` | Parteneriat internațional |
| `icon` | |
| `content` | 14+ ani de parteneriat cu FAAEL Franța pentru cele mai înalte standarde de educație acvatică. |
| `widgetType` | info |
| `ctaText` | Află mai mult |
| `ctaLink` | /concept/micii-campioni-si-faael |

---

### Widget 8: Pregătire Naștere

| Field | Value |
|-------|-------|
| `internalName` | Widget - Pregătire Naștere |
| `title` | Pregătire pentru naștere |
| `icon` | |
| `content` | Programul pregătește mămicile pentru momentul nașterii și pentru prima întâlnire cu bebelușul. Practicile Lamaze sunt susținute de OMS. |
| `widgetType` | info |
| `ctaText` | |
| `ctaLink` | |

---

### Widget 9: Alăptare OMS

| Field | Value |
|-------|-------|
| `internalName` | Widget - Alăptare OMS |
| `title` | Alăptare cu succes |
| `icon` | |
| `content` | OMS și UNICEF declară că 97% dintre femei sunt fiziologic capabile de a alăpta cu succes. Prin informare corectă și sprijin specializat, proaspetele mămici pot face față noilor provocări! |
| `widgetType` | info |
| `ctaText` | |
| `ctaLink` | |

---

### Widget 10: Ateliere Mămici

| Field | Value |
|-------|-------|
| `internalName` | Widget - Ateliere Mămici |
| `title` | Atelierele pentru mămici |
| `icon` | |
| `content` | În perioada postnatală, proaspeții părinți sunt invitați la atelierele pentru mămici: consiliere în alăptare, puericultura, diversificarea alimentației și parenting. |
| `widgetType` | cta |
| `ctaText` | Află mai mult |
| `ctaLink` | /servicii/scoala-parintilor-de-campioni |

---

### Widget 11: Exerciții Gravide

| Field | Value |
|-------|-------|
| `internalName` | Widget - Exerciții Gravide |
| `title` | Beneficii pentru gravide |
| `icon` | |
| `content` | Exercițiile în apă pentru gravide îmbunătățesc activitatea cardiovasculară a mămicilor, asigură o naștere fără probleme și dureri, dar și un tonus de invidiat. |
| `widgetType` | highlight |
| `ctaText` | |
| `ctaLink` | |

---

### Widget 12: Sponsorizare CTA

| Field | Value |
|-------|-------|
| `internalName` | Widget - Sponsorizare CTA |
| `title` | Susțineți educația acvatică |
| `icon` | |
| `content` | Susțineți educația acvatică în România! Deveniți partener sau sponsor al Clubului Micii Campioni. |
| `widgetType` | cta |
| `ctaText` | Contactați-ne |
| `ctaLink` | /asociatia/sponsorizari |

---

## 6. TeamMembers (3 entries)

### Team Member 1: Georgeta Sultana

| Field | Value |
|-------|-------|
| `name` | Georgeta Sultana |
| `role` | Fondator și Director |
| `bio` | *(Markdown - see below)* |
| `shortBio` | Asistent medical pediatru cu peste 30 de ani experiență, formator francez educație acvatică, autoarea Metodei Sultana. |
| `photo` | *(upload photo)* |
| `certifications` | Asistent medical pediatru, Formator francez educație acvatică nou-născuți, Formator educație acvatică femei însărcinate, Autor Metoda Sultana (brevet OSIM 2012) |
| `isFounder` | true |
| `order` | 1 |

**Bio (Rich Text):**

Georgeta Sultana reprezintă un reper important în ceea ce privește munca cu bebelușii și programele de stimulare acvatică din România.

**Experiență:**
- **1981:** Prima dată când a pus un bebeluș în apă
- **30+ ani** de experiență cu bebeluși și copii
- **14+ ani** de colaborare cu specialiștii francezi de la FAAEL

**Realizări:**
- **1998:** Participare la primul curs de educație acvatică organizat în România
- **2002:** Organizarea primului curs de educație acvatică din România în parteneriat cu FAAEL
- **2009:** Publicarea ghidului "Metoda Sultana - Ghid de îngrijire a nou-născutului prin masaj, gimnastică și hidroterapie"
- **2012:** Obținerea brevetului OSIM pentru Metoda Sultana

---

### Team Member 2: Simina Angelescu

| Field | Value |
|-------|-------|
| `name` | Simina Angelescu |
| `role` | Educator Prenatal Lamaze |
| `bio` | *(Markdown - see below)* |
| `shortBio` | Psiholog, psihoterapeut și educator prenatal certificat Lamaze. Susține cursurile pentru viitorii părinți. |
| `photo` | *(upload photo)* |
| `certifications` | Psiholog, Psihoterapeut, Educator prenatal certificat Lamaze |
| `isFounder` | false |
| `order` | 2 |

**Bio (Rich Text):**

Simina Angelescu este psiholog, psihoterapeut și educator prenatal certificat Lamaze. Susține cursurile Lamaze în cadrul Școlii Părinților de Campioni, pregătind viitorii părinți pentru momentul nașterii și pentru primele săptămâni cu bebelușul.

---

### Team Member 3: Echipa de Instructori

| Field | Value |
|-------|-------|
| `name` | Echipa de Instructori |
| `role` | Instructori Educație Acvatică |
| `bio` | *(Markdown - see below)* |
| `shortBio` | Echipă de profesioniști certificați FAAEL pentru educație acvatică, cu experiență în lucrul cu bebeluși și copii. |
| `photo` | *(upload team photo)* |
| `certifications` | Certificare FAAEL educație acvatică, Certificare pentru lucrul cu nou-născuți, Certificare pentru lucrul cu femei însărcinate |
| `isFounder` | false |
| `order` | 3 |

**Bio (Rich Text):**

Echipa Clubului Micii Campioni este formată din profesioniști cu experiență vastă în domeniul educației acvatice, pediatrie, kinetoterapie și psihologie.

Toți membrii echipei sunt certificați și au participat la cursuri de formare profesională organizate în parteneriat cu FAAEL Franța.

**Valorile echipei:**
- Profesionalism
- Dedicare pentru sănătatea copiilor
- Actualizare permanentă a cunoștințelor
- Abordare personalizată pentru fiecare copil

---

## 7. Partners (12 entries)

**Partner logos located at:** `public/images/partners/`

### Partner 1: FAAEL

| Field | Value |
|-------|-------|
| `name` | FAAEL - Fédération des Activités Aquatiques d'Éveil et de Loisir |
| `logo` | → `/images/partners/partener-fael.jpg` |
| `website` | https://faael.fr |
| `partnerType` | partner |
| `description` | Federația franceză a activităților acvatice - partener strategic din 2002. |
| `active` | true |
| `order` | 1 |

---

### Partner 2: Chicco

| Field | Value |
|-------|-------|
| `name` | Chicco |
| `logo` | → `/images/partners/partener-chicco.jpg` |
| `website` | https://www.chicco.ro |
| `partnerType` | partner |
| `description` | Partener pentru produse pentru bebeluși și copii. |
| `active` | true |
| `order` | 2 |

---

### Partner 3: Modelier

| Field | Value |
|-------|-------|
| `name` | Modelier |
| `logo` | → `/images/partners/partener-modelier.png` |
| `website` | https://www.modelier.ro |
| `partnerType` | partner |
| `description` | Partener pentru mobilier și amenajări. |
| `active` | true |
| `order` | 3 |

---

### Partner 4: Remodelier

| Field | Value |
|-------|-------|
| `name` | Remodelier |
| `logo` | → `/images/partners/remodelier-logo.png` |
| `website` | |
| `partnerType` | partner |
| `description` | Partener pentru renovări și design interior. |
| `active` | true |
| `order` | 4 |

---

### Partner 5: KiToto

| Field | Value |
|-------|-------|
| `name` | KiToto |
| `logo` | → `/images/partners/partener_kitoto.png` |
| `website` | https://kitoto.ro |
| `partnerType` | partner |
| `description` | Partener pentru produse și servicii pentru copii. |
| `active` | true |
| `order` | 5 |

---

### Partner 6: OrthoExclusive

| Field | Value |
|-------|-------|
| `name` | OrthoExclusive |
| `logo` | → `/images/partners/partener-orthoexclusive.jpg` |
| `website` | |
| `partnerType` | partner |
| `description` | Partener pentru servicii medicale ortopedice. |
| `active` | true |
| `order` | 6 |

---

### Partner 7: Magazinul Piticilor

| Field | Value |
|-------|-------|
| `name` | Magazinul Piticilor |
| `logo` | → `/images/partners/partener-mag-piticilor.jpg` |
| `website` | |
| `partnerType` | partner |
| `description` | Partener pentru produse pentru copii. |
| `active` | true |
| `order` | 7 |

---

### Partner 8: Sfinții Arhangheli

| Field | Value |
|-------|-------|
| `name` | Sfinții Arhangheli |
| `logo` | → `/images/partners/partener-sfintiiarhangheli.png` |
| `website` | |
| `partnerType` | partner |
| `description` | Partener instituțional. |
| `active` | true |
| `order` | 8 |

---

### Partner 9: Up-Down

| Field | Value |
|-------|-------|
| `name` | Up-Down |
| `logo` | → `/images/partners/partener-up-down.png` |
| `website` | |
| `partnerType` | partner |
| `description` | Partener pentru activități și evenimente. |
| `active` | true |
| `order` | 9 |

---

### Partner 10: BRD (Sponsor Istoric)

| Field | Value |
|-------|-------|
| `name` | BRD - Groupe Société Générale |
| `logo` | → `/images/partners/brd.gif` |
| `website` | https://www.brd.ro |
| `partnerType` | sponsor |
| `description` | Sponsor istoric al programelor educaționale. |
| `active` | false |
| `order` | 10 |

---

### Partner 11: SC Bostina (Sponsor Istoric)

| Field | Value |
|-------|-------|
| `name` | SC Bostina |
| `logo` | *(no logo available)* |
| `website` | |
| `partnerType` | sponsor |
| `description` | Sponsor istoric al programelor de educație acvatică. |
| `active` | false |
| `order` | 11 |

---

### Partner 12: Exim Bank (Sponsor Istoric)

| Field | Value |
|-------|-------|
| `name` | Exim Bank |
| `logo` | *(no logo available)* |
| `website` | https://www.eximbank.ro |
| `partnerType` | sponsor |
| `description` | Sponsor istoric al activităților asociației. |
| `active` | false |
| `order` | 12 |

---

## 8. AgeGroups (4 entries)

### AgeGroup 1: PRO-BEBE

| Field | Value |
|-------|-------|
| `name` | PRO-BEBE |
| `ageRange` | 4/6 luni - 1 an |
| `duration` | Maximum 35 minute |
| `description` | *(Markdown below)* |
| `psychologicalDevelopment` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `icon` | *(upload icon)* |
| `color` | #14b8a6 |
| `order` | 1 |

**Description:**
Educația acvatică la această vârstă constituie prima experiență educațională și de socializare desfășurată în afara mediului de acasă. Este necesar să fie o experiență pozitivă care să pună bazele unei relații armonioase cu apa.

**Psychological Development:**
- După 4 luni, copilul manifestă interes evident pentru lumea exterioară
- Între 8-12 luni apare primul comportament cu adevărat intențional
- Copilul începe să exploreze și să descopere mediul înconjurător

**Objectives:**
1. Acomodarea cu mediul acvatic
2. Stimularea reflexului de apnee în momentul imersiei
3. Stimularea mișcării membrelor inferioare și superioare
4. Stimularea poziției verticale în mediul acvatic
5. Stimularea prehensiunii (reflexul de apucare)
6. Stimularea tonusului muscular

---

### AgeGroup 2: BEBE-FORTE

| Field | Value |
|-------|-------|
| `name` | BEBE-FORTE |
| `ageRange` | 1 an - 2 ani și 1/2 |
| `duration` | Maximum 40 minute |
| `description` | *(Markdown below)* |
| `psychologicalDevelopment` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `icon` | *(upload icon)* |
| `color` | #f97316 |
| `order` | 2 |

**Description:**
Perioada specifică este descoperirea de noi mijloace prin explorare activă. Reprezintă o perioadă de tranziție ce face trecerea de la activitate acvatică la inițiere înot.

**Psychological Development:**
- Copiii se observă unul pe celălalt și încep să interacționeze
- Între 18-24 luni, copilul devine capabil de reprezentări mentale
- Dezvoltarea abilităților sociale și de comunicare

**Objectives:**
1. Adaptarea și deplasarea în mediul acvatic
2. Stimularea reflexului de apnee prin imprimarea unei respirații specifice acvatice
3. Stimularea mișcării specifice înotului a membrelor
4. Dezvoltarea prehensiunii

---

### AgeGroup 3: STAR

| Field | Value |
|-------|-------|
| `name` | STAR |
| `ageRange` | 2 ani și 1/2 - 4 ani |
| `duration` | Maximum 45 minute |
| `description` | *(Markdown below)* |
| `psychologicalDevelopment` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `icon` | *(upload icon)* |
| `color` | #8b5cf6 |
| `order` | 3 |

**Description:**
Bagajul motric al unui copil încadrat la această categorie de vârstă permite trecerea către inițiere înot, însă mișcările specifice sunt slab reprezentate.

**Psychological Development:**
- După vârsta de 2 ani apare abilitatea reprezentațională sau funcția simbolică
- Copiii încep să aprecieze că persoana care creează un simbol îi determină și semnificația
- Dezvoltarea imaginației și a jocului simbolic

**Objectives:**
1. Dezvoltarea calităților volitive
2. Dezvoltarea capacității de concentrare
3. Adaptarea și deplasarea în mediul acvatic
4. Învățarea mecanismului respirației acvatice
5. Stimularea mișcării specifice înotului

---

### AgeGroup 4: CAMPION

| Field | Value |
|-------|-------|
| `name` | CAMPION |
| `ageRange` | peste 4 ani |
| `duration` | Maximum 45 minute |
| `description` | *(Markdown below)* |
| `psychologicalDevelopment` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `icon` | *(upload icon)* |
| `color` | #ec4899 |
| `order` | 4 |

**Description:**
Personalitatea unui copil de peste 4 ani este mult mai complexă, motiv pentru care sunt introduse mai multe elemente de tehnică ce presupun o coordonare mai bună.

**Psychological Development:**
- Apare fenomenul imitației
- Capacitatea de a stoca amintiri
- Dezvoltarea gândirii logice și a capacității de analiză

**Objectives:**

**Componente fizice:**
1. Creșterea capacității de efort (forță, viteză, rezistență)
2. Dozarea efortului (intensitate și volum)
3. Dezvoltarea capacității coordinative (orientare spațio-temporală, mobilitate-suplețe, ritm și tempou)

**Componente tehnice:**
1. Corectarea mișcărilor incorect executate
2. Învățarea și perfecționarea coordonării picioare-respirație
3. Învățarea mecanismului de respirație acvatică în coordonare cu mișcările membrelor

---

## 9. ServiceTabs (8 entries)

*ServiceTabs are used within Services for tabbed content sections.*

### ServiceTab 1: Lamaze

| Field | Value |
|-------|-------|
| `title` | Lamaze |
| `content` | *(Markdown below)* |
| `order` | 1 |

**Content:**

**Filozofie:**
Promovează o abordare naturală, sănătoasă și sigură a sarcinii, nașterii și îngrijirii bebelușului.

**Despre Lamaze:**
Practicile Lamaze, bazate pe dovezi și susținute de Organizația Mondială a Sănătății, promovează și susțin faptul că nașterea este normală și sănătoasă.

**Istoric:**
Tehnica Lamaze a fost dezvoltată în anii '40 de către dr. Fernand Lamaze (obstetrician francez), cu scopul de a crește încrederea viitoarei mămici în abilitatea sa de a da naștere.

**Filozofie și concepte:**
1. Mod de viață sănătos în timpul sarcinii
2. Modificările anatomice, fiziologice și emoționale normale
3. Etapele travaliului și momentul nașterii
4. Tehnici de relaxare în timpul travaliului
5. Procedurile medicale posibile (analgezia, anestezia, epidurala, epiziotomia, inducția)

**Ce învață participanții:**
1. Despre nașterea naturală și alte tipuri de naștere
2. Metode practice de a face față durerii în travaliu
3. Cum să faciliteze alăptarea
4. Cum să îngrijească și să comunice cu bebelușul
5. Resurse pentru a face față vieții în trei

**Structura cursului (6 sesiuni):**
1. Sarcina și nașterea (transformări, stil de viață, atașament prenatal)
2. Travaliul (hormonii nașterii, stadii și faze, emoțiile, bagajul de maternitate)
3. Gestionarea durerii - măsuri de confort (mișcare, poziții, relaxare, respirație)
4. Intervenții medicale și planul pentru naștere
5. Cum întâmpinăm nou-născutul (alăptarea, îngrijirea bebelușului)
6. Viața în trei - Arta de a fi părinte

**Instructor:** Simina Angelescu - psiholog, psihoterapeut, educator prenatal certificat Lamaze

**Bonus:** La sfârșitul cursului, tăticii vor primi un atestat de puericultura pentru 3 săptămâni de concediu paternal.

---

### ServiceTab 2: Metoda Sultana (pentru Școala Părinților)

| Field | Value |
|-------|-------|
| `title` | Metoda Sultana |
| `content` | *(Markdown below)* |
| `order` | 2 |

**Content:**

**Descriere:**
Metodă alternativă de îngrijire a nou-născutului, certificată de experiența de peste 36 de ani în programele de stimulare psihomotorie.

**Componente:**
- Masaj
- Gimnastică
- Hidroterapie

**Abordare:**
Metoda Sultana facilitează interacționarea activă cu bebelușul încă din prima zi de viață. Această interacțiune se transformă ulterior în dialog și comunicare non-verbală controlată.

**Instructor:** Georgeta Sultana - asistent medical pediatru, formator francez educație acvatică, autor Metoda Sultana

**Structură:**
- 3 sesiuni x 2 ore
- Instruire practică pentru părinți
- Materiale de suport
- Consiliere personalizată

---

### ServiceTab 3: Alăptare

| Field | Value |
|-------|-------|
| `title` | Alăptare |
| `content` | *(Markdown below)* |
| `order` | 3 |

**Content:**

**Premisă:**
Alăptarea este un act natural pe care mamele societății moderne trebuie să îl învețe.

**Subiecte abordate:**
1. Avantajele alăptării
2. Recomandările OMS și UNICEF
3. Sfaturi pentru începerea cu succes a alăptării
4. Informații despre alăptarea biologică
5. Răspunsuri la întrebări frecvente
6. Ultimele cercetări în domeniul alăptării
7. Recunoașterea și rezolvarea problemelor de alăptare

**Statistică:**
OMS și UNICEF declară că 97% dintre femei sunt fiziologic capabile de a alăpta cu succes.

---

### ServiceTab 4: Puericultura

| Field | Value |
|-------|-------|
| `title` | Puericultura |
| `content` | *(Markdown below)* |
| `order` | 4 |

**Content:**

**Prezentare:**
Sesiunile de puericultura cuprind 4 ore de informații, recomandări și sfaturi pentru primele întâlniri cu bebelușul.

**Pentru viitorii părinți:**
1. Diferitele variante de îngrijire a bebelușului
2. Alegerea soluției ideale
3. Încredere în instinctele parentale înnăscute

**Pentru proaspeții părinți:**
1. Bucuria primelor zile fără griji
2. Informații despre băița, temperatura camerei, bontul ombilical, colici
3. Curbele de creștere
4. Liniștirea copilului fără teama de a-l răsfăța

**Atelierele pentru mămici (postnatal):**
1. Întâlniri postnatale de consiliere în alăptare și puericultura
2. Cursuri de parenting
3. Seminarii pentru diversificarea alimentației
4. Cursuri de prim-ajutor pentru bebeluș
5. Seminarii de dezvoltare a inteligenței emoționale

---

### ServiceTab 5: Beneficii (pentru Activitate Gravide)

| Field | Value |
|-------|-------|
| `title` | Beneficii |
| `content` | *(Markdown below)* |
| `order` | 1 |

**Content:**

**Ușurința exercițiilor:**
Ușurința practicării exercițiilor în mediul acvatic, în comparație cu practicarea exercițiilor de tip aerobic, explică preferința pentru acest tip de mișcare din partea multor gravide, mai ales în ultimul trimestru de sarcină când mișcările devin din ce în ce mai greoaie.

**Starea de bine:**
Dincolo de beneficiile mișcării în apă, apare și "starea de bine" pe care gravidele o menționează în mod constant după practicarea unui asemenea program.

**Muzică și atmosferă:**
Muzica care însoțește programele se adaptează tipurilor de exerciții practicate, făcând posibil ca gravidele să se relaxeze într-o atmosferă extrem de liniștitoare.

**Beneficii concrete:**
1. Îmbunătățirea circulației sanguine și limfatice
2. Îmbunătățirea respirației
3. Reglarea digestiei
4. Reducerea edemelor
5. Reducerea tensiunii articulațiilor
6. Relaxare generală

**Accesibilitate:**
La aceste programe poate avea acces orice gravidă deoarece nu există condiția existenței unor abilități de înot, atâta timp cât apa din piscină are o adâncime corespunzătoare.

**Beneficii la naștere:**
Femeile care au adoptat un astfel de program de activitate acvatică au trecut mult mai ușor peste durerile nașterii și s-au refăcut într-un timp mult mai scurt.

---

### ServiceTab 6: Contraindicații (pentru Activitate Gravide)

| Field | Value |
|-------|-------|
| `title` | Contraindicații |
| `content` | *(Markdown below)* |
| `order` | 2 |

**Content:**

**Restricții generale:**
Restricțiile participării la programele de activitate acvatică sunt legate de existența unor afecțiuni:
1. Boli de inimă
2. Infecții
3. Diabet
4. Epilepsie
5. Insuficiență respiratorie

**Afecțiuni specifice sarcinii:**
Afecțiuni strâns legate de sarcină care trebuie luate în considerare:
1. Avorturi spontane în antecedente
2. Cerclajul colului uterin
3. Hipertensiunea arterială
4. Întârzierea de creștere intra-uterină

**Constatare pozitivă:**
Specialiștii au demonstrat că femeile care desfășoară activități fizice pe timpul sarcinii sunt ferite de a dezvolta o formă de hipertensiune indusă de sarcină.

**Focusul exercițiilor:**
Se pune accent atât pe exerciții care lucrează musculatura pelviană, cât și pe cele pentru mobilitate în special la nivelul articulațiilor bazinului.

**Categorii de exerciții:**
1. Exerciții pentru un travaliu ușor
2. Exerciții pentru atenuarea durerilor din timpul nașterii
3. Exerciții pentru îmbunătățirea circulației de la nivelul membrelor inferioare

---

### ServiceTab 7: Evaluare (pentru Kinetoterapie)

| Field | Value |
|-------|-------|
| `title` | Evaluare |
| `content` | *(Markdown below)* |
| `order` | 1 |

**Content:**

Procesul de evaluare include:
- Evaluare inițială a copilului
- Identificarea nevoilor specifice
- Elaborarea planului de tratament personalizat
- Consultare cu părinții pentru stabilirea obiectivelor

---

### ServiceTab 8: Tratament (pentru Kinetoterapie)

| Field | Value |
|-------|-------|
| `title` | Tratament |
| `content` | *(Markdown below)* |
| `order` | 2 |

**Content:**

Serviciile de tratament includ:
- Exerciții de recuperare motorie
- Tehnici de stimulare a dezvoltării
- Tratament în mediul acvatic (hidroterapie)
- Masaj terapeutic

**Beneficiile kinetoterapiei acvatice:**
1. Reducerea gravitației - ușurința mișcărilor
2. Efecte relaxante asupra musculaturii
3. Stimulare proprioceptivă
4. Mediu plăcut și motivant pentru copii

---

## 10. CourseModules (4 entries)

*CourseModules are for Școala Părinților service.*

### CourseModule 1: Lamaze

| Field | Value |
|-------|-------|
| `title` | Lamaze |
| `subtitle` | Curs de pregătire pentru naștere |
| `sessions` | 6 sesiuni x 2 ore |
| `instructor` | *(Reference to TeamMember: Simina Angelescu)* |
| `content` | *(Same as ServiceTab 1: Lamaze)* |
| `objectives` | *(Markdown below)* |
| `order` | 1 |

**Objectives:**
1. Înțelegerea procesului nașterii naturale
2. Tehnici de relaxare și respirație pentru travaliu
3. Pregătirea pentru alăptare
4. Comunicarea cu bebelușul
5. Adaptarea la viața în trei

---

### CourseModule 2: Metoda Sultana

| Field | Value |
|-------|-------|
| `title` | Metoda Sultana |
| `subtitle` | Masaj, gimnastică și hidroterapie |
| `sessions` | 3 sesiuni x 2 ore |
| `instructor` | *(Reference to TeamMember: Georgeta Sultana)* |
| `content` | *(Same as ServiceTab 2: Metoda Sultana)* |
| `objectives` | *(Markdown below)* |
| `order` | 2 |

**Objectives:**
1. Tehnici de masaj pentru bebeluș
2. Exerciții de gimnastică adaptate vârstei
3. Introducere în hidroterapie
4. Stimularea dezvoltării psihomotorii
5. Consolidarea legăturii părinte-copil

---

### CourseModule 3: Alăptare

| Field | Value |
|-------|-------|
| `title` | Alăptare și puericultura |
| `subtitle` | Îngrijirea bebelușului |
| `sessions` | 2 sesiuni x 2 ore |
| `instructor` | *(Reference to TeamMember or leave empty)* |
| `content` | *(Combine ServiceTab 3 & 4 content)* |
| `objectives` | *(Markdown below)* |
| `order` | 3 |

**Objectives:**
1. Începerea cu succes a alăptării
2. Rezolvarea problemelor comune de alăptare
3. Îngrijirea de bază a nou-născutului
4. Rutina zilnică cu bebelușul
5. Încredere în instinctele parentale

---

### CourseModule 4: Lamaze Refresh

| Field | Value |
|-------|-------|
| `title` | Lamaze Refresh |
| `subtitle` | Pentru părinți cu experiență |
| `sessions` | 6 sesiuni x 2 ore |
| `instructor` | *(Reference to TeamMember: Simina Angelescu)* |
| `content` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `order` | 4 |

**Content:**
Modulul II este destinat părinților care au mai participat la cursuri Lamaze și doresc o reîmprospătare a cunoștințelor pentru o nouă sarcină.

Include aceleași subiecte ca și cursul Lamaze standard, adaptate pentru părinții cu experiență.

**Objectives:**
1. Reîmprospătarea tehnicilor de relaxare și respirație
2. Actualizarea informațiilor despre naștere
3. Pregătirea fratelui/surorii mai mari
4. Organizarea familiei pentru noul membru
5. Gestionarea provocărilor cu doi sau mai mulți copii

---

## 11. TimelineEvents (13 entries)

### TimelineEvent 1

| Field | Value |
|-------|-------|
| `year` | 1981 |
| `title` | Începutul |
| `description` | Prima oară când Georgeta Sultana a pus un bebeluș în apă - momentul care a marcat începutul a ceea ce va deveni Clubul Micii Campioni. |
| `image` | *(upload if available)* |
| `order` | 1 |

---

### TimelineEvent 2

| Field | Value |
|-------|-------|
| `year` | 1998 |
| `title` | Primul curs în România |
| `description` | Participare la primul curs de educație acvatică organizat în România de către instructori francezi - un moment de referință pentru dezvoltarea domeniului în țara noastră. |
| `image` | *(upload if available)* |
| `order` | 2 |

---

### TimelineEvent 3

| Field | Value |
|-------|-------|
| `year` | 2000 |
| `title` | Înființarea Asociației |
| `description` | Înființarea "Asociației Educație Acvatică pentru Sănătatea Familiei" - cadrul legal pentru promovarea și dezvoltarea educației acvatice în România. |
| `image` | *(upload if available)* |
| `order` | 3 |

---

### TimelineEvent 4

| Field | Value |
|-------|-------|
| `year` | 2001 |
| `title` | Deschiderea Clubului |
| `description` | Deschiderea Clubului Micii Campioni - primul club de educație acvatică din România, marcând un moment istoric pentru domeniu. |
| `image` | *(upload if available)* |
| `order` | 4 |

---

### TimelineEvent 5

| Field | Value |
|-------|-------|
| `year` | 2002 |
| `title` | Parteneriat FAAEL |
| `description` | Organizarea primului curs de educație acvatică din România în parteneriat direct cu FAAEL Franța, consolidând standardele europene în cadrul clubului. |
| `image` | *(upload if available)* |
| `order` | 5 |

---

### TimelineEvent 6

| Field | Value |
|-------|-------|
| `year` | 2004 |
| `title` | Piscina Specială |
| `description` | Inaugurarea piscinei speciale pentru bebeluși și copii, unică în România - proiectată special pentru nevoile celor mici, cu apă încălzită și tratată prin electroliză cu sare. |
| `image` | *(upload if available)* |
| `order` | 6 |

---

### TimelineEvent 7

| Field | Value |
|-------|-------|
| `year` | 2009 |
| `title` | Publicarea Ghidului |
| `description` | Publicarea ghidului "Metoda Sultana - Ghid de îngrijire a nou-născutului prin masaj, gimnastică și hidroterapie" - oficializarea metodei dezvoltate de Georgeta Sultana. |
| `image` | *(upload if available)* |
| `order` | 7 |

---

### TimelineEvent 8

| Field | Value |
|-------|-------|
| `year` | 2012 |
| `title` | Brevet OSIM |
| `description` | Obținerea brevetului OSIM pentru Metoda Sultana - recunoașterea oficială a metodei ca inovație în domeniul îngrijirii nou-născuților. |
| `image` | *(upload if available)* |
| `order` | 8 |

---

### TimelineEvent 9

| Field | Value |
|-------|-------|
| `year` | 2006 |
| `title` | Școala de Formatori |
| `description` | Lansarea programului "Școala de Formatori în Domeniul Acvatic" - primul program de formare profesională pentru instructori de educație acvatică din România, în parteneriat cu FAAEL Franța. |
| `image` | *(upload if available)* |
| `order` | 9 |

---

### TimelineEvent 10

| Field | Value |
|-------|-------|
| `year` | 2008 |
| `title` | Kinetoterapie la Domiciliu |
| `description` | Lansarea serviciului de kinetoterapie la domiciliu, aducând beneficiile Metodei Sultana direct în casele familiilor care nu se pot deplasa la club. |
| `image` | *(upload if available)* |
| `order` | 10 |

---

### TimelineEvent 11

| Field | Value |
|-------|-------|
| `year` | 2011 |
| `title` | 10 Ani și Recunoaștere COR |
| `description` | Aniversarea a 10 ani de activitate a Clubului Micii Campioni. În același an, ocupația de "Instructor Educație Acvatică" a fost inclusă în Clasificarea Ocupațiilor din România (COR). |
| `image` | *(upload if available)* |
| `order` | 11 |

---

### TimelineEvent 12

| Field | Value |
|-------|-------|
| `year` | 2012 |
| `title` | Brevet OSIM |
| `description` | Obținerea brevetului OSIM pentru Metoda Sultana - recunoașterea oficială a metodei ca inovație în domeniul îngrijirii nou-născuților. În același an, Standardul Ocupațional pentru Instructor Educație Acvatică a fost validat oficial. |
| `image` | *(upload if available)* |
| `order` | 12 |

---

### TimelineEvent 13

| Field | Value |
|-------|-------|
| `year` | 2014 |
| `title` | 13 Ani de Activitate |
| `description` | Celebrarea a 13 ani de activitate și continuarea programelor de educație acvatică, cu mii de copii și familii beneficiare de-a lungul anilor. |
| `image` | *(upload if available)* |
| `order` | 13 |

---

## 12. Conferences (22 entries)

### International Conferences

#### Conference 1

| Field | Value |
|-------|-------|
| `title` | Congres Internațional FAAEL - Nantes |
| `year` | 2003 |
| `location` | Nantes, Franța |
| `description` | Participare la congresul internațional de educație acvatică organizat de FAAEL în Nantes, Franța - prima prezență internațională a echipei Micii Campioni. |
| `isInternational` | true |
| `order` | 1 |

---

#### Conference 2

| Field | Value |
|-------|-------|
| `title` | Congres Internațional FAAEL |
| `year` | 2007 |
| `location` | Franța |
| `description` | Participare activă și prezentare despre dezvoltarea educației acvatice în România - recunoaștere internațională a progreselor făcute. |
| `isInternational` | true |
| `order` | 2 |

---

### National Conferences

#### Conference 3

| Field | Value |
|-------|-------|
| `title` | Prima conferință națională de educație acvatică pentru bebeluși |
| `year` | 2000 |
| `location` | București, România |
| `description` | Prima conferință națională pe tema educației acvatice pentru bebeluși, marcând introducerea oficială a domeniului în România. |
| `isInternational` | false |
| `order` | 3 |

---

#### Conference 4

| Field | Value |
|-------|-------|
| `title` | Conferința de lansare a Clubului Micii Campioni |
| `year` | 2001 |
| `location` | București, România |
| `description` | Conferința de lansare oficială a Clubului Micii Campioni - primul club de educație acvatică din România. |
| `isInternational` | false |
| `order` | 4 |

---

#### Conference 5

| Field | Value |
|-------|-------|
| `title` | Conferința în parteneriat cu FAAEL |
| `year` | 2002 |
| `location` | București, România |
| `description` | Prezentarea standardelor europene de educație acvatică în parteneriat cu FAAEL Franța. |
| `isInternational` | false |
| `order` | 5 |

---

#### Conference 6

| Field | Value |
|-------|-------|
| `title` | Conferința anuală - Rezultate și perspective |
| `year` | 2003 |
| `location` | București, România |
| `description` | Prezentarea rezultatelor primilor ani de activitate și perspectivele de dezvoltare ale clubului. |
| `isInternational` | false |
| `order` | 6 |

---

#### Conference 7

| Field | Value |
|-------|-------|
| `title` | Conferința de inaugurare a piscinei speciale |
| `year` | 2004 |
| `location` | București, România |
| `description` | Inaugurarea oficială a piscinei speciale pentru bebeluși și copii, unică în România. |
| `isInternational` | false |
| `order` | 7 |

---

#### Conference 8

| Field | Value |
|-------|-------|
| `title` | Beneficiile educației acvatice timpurii |
| `year` | 2005 |
| `location` | București, România |
| `description` | Conferință dedicată prezentării beneficiilor educației acvatice pentru dezvoltarea copiilor. |
| `isInternational` | false |
| `order` | 8 |

---

#### Conference 9

| Field | Value |
|-------|-------|
| `title` | 5 ani de Micii Campioni |
| `year` | 2006 |
| `location` | București, România |
| `description` | Celebrarea a 5 ani de activitate și bilanțul realizărilor clubului. |
| `isInternational` | false |
| `order` | 9 |

---

#### Conference 10

| Field | Value |
|-------|-------|
| `title` | Metoda Sultana - Rezultate și perspective |
| `year` | 2007 |
| `location` | București, România |
| `description` | Prezentarea rezultatelor obținute prin aplicarea Metodei Sultana și planurile de dezvoltare. |
| `isInternational` | false |
| `order` | 10 |

---

#### Conference 11

| Field | Value |
|-------|-------|
| `title` | Conferința anuală cu specialiști invitați |
| `year` | 2008 |
| `location` | București, România |
| `description` | Conferință cu participarea specialiștilor din domeniul pediatriei și educației acvatice. |
| `isInternational` | false |
| `order` | 11 |

---

#### Conference 12

| Field | Value |
|-------|-------|
| `title` | Lansarea ghidului Metoda Sultana |
| `year` | 2009 |
| `location` | București, România |
| `description` | Conferința de lansare a ghidului "Metoda Sultana - Ghid de îngrijire a nou-născutului prin masaj, gimnastică și hidroterapie". |
| `isInternational` | false |
| `order` | 12 |

---

#### Conference 13

| Field | Value |
|-------|-------|
| `title` | 10 ani de educație acvatică în România |
| `year` | 2010 |
| `location` | București, România |
| `description` | Celebrarea a 10 ani de educație acvatică în România și impactul asupra sănătății copiilor. |
| `isInternational` | false |
| `order` | 13 |

---

#### Conference 14

| Field | Value |
|-------|-------|
| `title` | Parteneriatul cu FAAEL - 10 ani de colaborare |
| `year` | 2011 |
| `location` | București, România |
| `description` | Aniversarea a 10 ani de parteneriat cu FAAEL Franța și prezentarea rezultatelor colaborării. |
| `isInternational` | false |
| `order` | 14 |

---

#### Conference 15

| Field | Value |
|-------|-------|
| `title` | Prezentarea brevetului OSIM pentru Metoda Sultana |
| `year` | 2012 |
| `location` | București, România |
| `description` | Conferința de prezentare a brevetului OSIM obținut pentru Metoda Sultana - recunoaștere oficială a inovației. |
| `isInternational` | false |
| `order` | 15 |

---

#### Conference 16

| Field | Value |
|-------|-------|
| `title` | Conferința anuală - Noi programe și servicii |
| `year` | 2013 |
| `location` | București, România |
| `description` | Prezentarea noilor programe și servicii oferite de Clubul Micii Campioni. |
| `isInternational` | false |
| `order` | 16 |

---

#### Conference 17

| Field | Value |
|-------|-------|
| `title` | Viitorul educației acvatice în România |
| `year` | 2014 |
| `location` | București, România |
| `description` | Conferință dedicată perspectivelor de dezvoltare a educației acvatice în România. |
| `isInternational` | false |
| `order` | 17 |

---

### Specific Documented Participations (WordPress Archive)

#### Conference 18

| Field | Value |
|-------|-------|
| `title` | Conferința Națională de Neonatologie - Ediția a XIII-a |
| `year` | 2009 |
| `location` | Târgu Mureș, România |
| `description` | Participare la cea de-a XIII-a ediție a Conferinței Naționale de Neonatologie. Prezentare despre beneficiile hidroterapiei pentru nou-născuți și aplicarea Metodei Sultana în reabilitarea precoce. |
| `isInternational` | false |
| `order` | 18 |

---

#### Conference 19

| Field | Value |
|-------|-------|
| `title` | Conferința "Educația Fizică și Sportul din România" |
| `year` | 2009 |
| `location` | Oradea, România |
| `description` | Participare la conferința "Educația Fizică și Sportul din România" - prezentarea educației acvatice ca disciplină esențială pentru dezvoltarea copiilor. |
| `isInternational` | false |
| `order` | 19 |

---

#### Conference 20

| Field | Value |
|-------|-------|
| `title` | Conferința Științifică - Facultatea de Educație Fizică |
| `year` | 2010 |
| `location` | Oradea, România |
| `description` | Participare la conferința științifică organizată de Facultatea de Educație Fizică din Oradea - prezentare despre metodele de educație acvatică pentru bebeluși. |
| `isInternational` | false |
| `order` | 20 |

---

#### Conference 21

| Field | Value |
|-------|-------|
| `title` | Conferința Națională de Neonatologie - Ediția a XIV-a |
| `year` | 2010 |
| `location` | Sibiu, România |
| `description` | Participare la cea de-a XIV-a ediție a Conferinței Naționale de Neonatologie la Sibiu. Continuarea parteneriatului cu comunitatea medicală pentru promovarea hidroterapiei neonatale. |
| `isInternational` | false |
| `order` | 21 |

---

#### Conference 22

| Field | Value |
|-------|-------|
| `title` | Stagiu de Formare Lyon - "La femme enceinte dans le milieu aquatique" |
| `year` | 2011 |
| `location` | Lyon, Franța |
| `description` | Stagiu de formare specializat în Lyon, Franța, pe tema "La femme enceinte dans le milieu aquatique" (Femeia însărcinată în mediul acvatic) - perfecționarea tehnicilor de lucru cu gravidele în apă. |
| `isInternational` | true |
| `order` | 22 |

---

## 13. Projects (4 entries)

### Project 1: Informare corectă pentru decizii corecte

| Field | Value |
|-------|-------|
| `title` | Informare corectă pentru decizii corecte |
| `slug` | informare-corecta |
| `description` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `results` | *(Markdown below)* |
| `image` | *(upload if available)* |
| `status` | completed |
| `order` | 1 |

**Description:**
Program educațional destinat părinților și viitorilor părinți, având ca obiectiv informarea corectă cu privire la beneficiile stimulării psihomotorii timpurii.

**Componente:**
- Publicarea ghidului "Metoda Sultana - Ghid de îngrijire a nou-născutului"
- Organizarea de seminarii și workshop-uri pentru părinți
- Campanii de informare

**Objectives:**
1. Educarea părinților cu privire la importanța stimulării timpurii
2. Diseminarea informațiilor științifice într-un mod accesibil
3. Crearea unei comunități de părinți informați
4. Promovarea Metodei Sultana ca standard de îngrijire

**Results:**
- Ghidul publicat în 2009
- Brevet OSIM obținut în 2012
- Mii de părinți informați
- Recunoaștere din partea Ministerului Sănătății

---

### Project 2: Mai competitivi în Europa

| Field | Value |
|-------|-------|
| `title` | Mai competitivi în Europa |
| `slug` | mai-competitivi-europa |
| `description` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `results` | *(Markdown below)* |
| `image` | *(upload if available)* |
| `status` | completed |
| `order` | 2 |

**Description:**
Program de formare profesională pentru instructori de educație acvatică, în parteneriat cu FAAEL Franța.

**Componente:**
- Cursuri de formare pentru instructori
- Certificare internațională
- Schimb de experiență cu specialiști străini
- Participare la conferințe internaționale

**Objectives:**
1. Formarea de instructori certificați la standarde europene
2. Transfer de cunoștințe și bune practici
3. Crearea unei rețele de profesioniști în România
4. Recunoaștere internațională a competențelor

**Results:**
- Zeci de instructori formați și certificați
- Standarde europene implementate în România
- Recunoaștere internațională
- Parteneriat durabil cu FAAEL

---

### Project 3: Toți copiii merită o șansă

| Field | Value |
|-------|-------|
| `title` | Toți copiii merită o șansă |
| `slug` | toti-copiii-merita-sansa |
| `description` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `results` | *(Markdown below)* |
| `image` | *(upload if available)* |
| `status` | active |
| `order` | 3 |

**Description:**
Program pilot pentru tratamentul copiilor cu Sindrom Down prin educație acvatică. Un proiect care demonstrează că educația acvatică poate aduce beneficii semnificative copiilor cu nevoi speciale.

**Abordare:**
- Programe individualizate
- Colaborare cu medici specialiști
- Monitorizare atentă a progresului
- Implicarea familiilor

**Objectives:**
1. Demonstrarea beneficiilor educației acvatice pentru copiii cu nevoi speciale
2. Dezvoltarea de programe adaptate
3. Integrarea socială a copiilor cu dizabilități
4. Crearea unui model replicabil pentru alte organizații

**Results:**
- Rezultate pozitive demonstrate în dezvoltarea motorie
- Model pentru alte organizații
- Îmbunătățirea calității vieții copiilor cu nevoi speciale
- Implicarea și educarea familiilor

---

### Project 4: Școala de Formatori în Domeniul Acvatic

| Field | Value |
|-------|-------|
| `title` | Școala de Formatori în Domeniul Acvatic |
| `slug` | scoala-formatori-acvatic |
| `description` | *(Markdown below)* |
| `objectives` | *(Markdown below)* |
| `results` | *(Markdown below)* |
| `image` | *(upload if available)* |
| `status` | completed |
| `order` | 4 |

**Description:**
Program de formare profesională lansat în 2005-2006, destinat pregătirii instructorilor de educație acvatică la standarde europene. Primul și singurul program de formare în domeniu din România, realizat în parteneriat cu FAAEL Franța.

**Componente:**
- Cursuri teoretice de pedagogie și fiziologie
- Stagii practice sub supervizare
- Evaluare și certificare
- Mentorat post-formare
- Stagii de perfecționare în străinătate (Lyon, Franța)

**Objectives:**
1. Formarea primei generații de instructori certificați în educație acvatică din România
2. Implementarea standardelor europene FAAEL în practica românească
3. Includerea ocupației de "Instructor Educație Acvatică" în Clasificarea Ocupațiilor din România (COR)
4. Validarea oficială a Standardului Ocupațional pentru această profesie

**Results:**
- 2006: Prima promoție de instructori certificați
- 2011: Ocupația inclusă oficial în COR (Clasificarea Ocupațiilor din România)
- 2012: Standardul Ocupațional pentru Instructor Educație Acvatică validat oficial
- Peste 50 de instructori formați și certificați
- Rețea națională de profesioniști în educație acvatică

---

## 14. Certificates (14 entries)

**Images located at:** `public/images/certificates/`

### Certificate 1

| Field | Value |
|-------|-------|
| `title` | Brevet OSIM - Metoda Sultana |
| `issuingBody` | OSIM - Oficiul de Stat pentru Invenții și Mărci |
| `date` | 2012-01-01 |
| `image` | → `/images/certificates/img004.jpg` |
| `description` | Brevet pentru "Metoda Sultana" - metodă de stimulare psihomotorie a nou-născutului prin masaj, gimnastică și hidroterapie. |
| `order` | 1 |

---

### Certificate 2

| Field | Value |
|-------|-------|
| `title` | Certificare FAAEL - Educație Acvatică |
| `issuingBody` | FAAEL - Fédération des Activités Aquatiques d'Éveil et de Loisir |
| `date` | 2002-01-01 |
| `image` | → `/images/certificates/img005.jpg` |
| `description` | Certificare din partea Federației Franceze a Activităților Acvatice de Învățare și Recreere pentru educație acvatică. |
| `order` | 2 |

---

### Certificate 3

| Field | Value |
|-------|-------|
| `title` | Recomandare Ministerul Sănătății |
| `issuingBody` | Comisia de Pediatrie și Neonatologie - Ministerul Sănătății |
| `date` | *(leave empty if unknown)* |
| `image` | → `/images/certificates/img006.jpg` |
| `description` | Recomandare din partea Comisiei de Pediatrie și Neonatologie din cadrul Ministerului Sănătății pentru Metoda Sultana. |
| `order` | 3 |

---

### Certificates 4-14

**Available certificate images:**
- `/images/certificates/img007.jpg` → Certificate 4
- `/images/certificates/img008.jpg` → Certificate 5
- `/images/certificates/img009.jpg` → Certificate 6
- `/images/certificates/img010.jpg` → Certificate 7
- `/images/certificates/img011.jpg` → Certificate 8
- `/images/certificates/img012.jpg` → Certificate 9
- `/images/certificates/img013.jpg` → Certificate 10
- `/images/certificates/img014.jpg` → Certificate 11
- `/images/certificates/img015.jpg` → Certificate 12
- `/images/certificates/img016.jpg` → Certificate 13
- `/images/certificates/img176.jpg` → Certificate 14

*For each, create an entry with:*

| Field | Value |
|-------|-------|
| `title` | *(examine image to determine)* |
| `issuingBody` | *(examine image to determine)* |
| `date` | *(examine image or leave empty)* |
| `image` | → `/images/certificates/img[XXX].jpg` |
| `description` | *(describe based on image content)* |
| `order` | [4-14] |

---

## 15. PressClippings (20 entries)

**Images located at:** `public/images/press/`

### PressClipping 1: Aquatica

| Field | Value |
|-------|-------|
| `title` | Aquatica - Educație acvatică |
| `publication` | *(examine image)* |
| `date` | *(examine image)* |
| `image` | → `/images/press/Aquatica.jpg` |
| `link` | |
| `excerpt` | Articol despre educația acvatică la Clubul Micii Campioni |
| `order` | 1 |

### PressClipping 2-3: Aquatica series

| # | Image Path | Order |
|---|------------|-------|
| 2 | → `/images/press/Aquatica2.jpg` | 2 |
| 3 | → `/images/press/Aquatica3.jpg` | 3 |

### PressClipping 4-5: Bebeluși

| # | Image Path | Title | Order |
|---|------------|-------|-------|
| 4 | → `/images/press/Bebelusii-campioni.jpg` | Bebelușii campioni | 4 |
| 5 | → `/images/press/Bebelusii-inotatori.jpg` | Bebelușii înotători | 5 |

### PressClipping 6-7: Clubul

| # | Image Path | Title | Order |
|---|------------|-------|-------|
| 6 | → `/images/press/Clubul-micilor-inotatori.jpg` | Clubul micilor înotători | 6 |
| 7 | → `/images/press/Inotatori-de-la-2-zile.jpg` | Înotători de la 2 zile | 7 |

### PressClipping 8-11: Interviuri

| # | Image Path | Title | Order |
|---|------------|-------|-------|
| 8 | → `/images/press/Interviu.jpg` | Interviu | 8 |
| 9 | → `/images/press/Interviu2.jpg` | Interviu (2) | 9 |
| 10 | → `/images/press/Interviu3.jpg` | Interviu (3) | 10 |
| 11 | → `/images/press/Interviu4.jpg` | Interviu (4) | 11 |

### PressClipping 12-15: Metode și Terapii

| # | Image Path | Title | Order |
|---|------------|-------|-------|
| 12 | → `/images/press/Masajul-subacvatic.jpg` | Masajul subacvatic | 12 |
| 13 | → `/images/press/Metoda-MG.jpg` | Metoda MG | 13 |
| 14 | → `/images/press/Prima-scoala-de-inot.jpg` | Prima școală de înot | 14 |
| 15 | → `/images/press/Scoala-micilor-campioni.jpg` | Școala micilor campioni | 15 |

### PressClipping 16-18: Terapia Acvatică

| # | Image Path | Title | Order |
|---|------------|-------|-------|
| 16 | → `/images/press/Terapia-acvatica.jpg` | Terapia acvatică | 16 |
| 17 | → `/images/press/Terapia-acvatica2.jpg` | Terapia acvatică (2) | 17 |
| 18 | → `/images/press/Terapia-acvatica3.jpg` | Terapia acvatică (3) | 18 |

### PressClipping 19-20: Documente

| # | Image Path | Title | Order |
|---|------------|-------|-------|
| 19 | → `/images/press/brevet-inventie.jpg` | Brevet de invenție | 19 |
| 20 | → `/images/press/metoda-MG2.jpg` | Metoda MG (document) | 20 |

---

## 16. FAQs (12 entries)

### FAQ 1

| Field | Value |
|-------|-------|
| `question` | De la ce vârstă poate începe bebelușul educația acvatică? |
| `answer` | Programul de Educație Acvatică poate începe de la vârsta de 4-6 luni, după finalizarea programului Metoda Sultana. Metoda Sultana se aplică de la naștere până la 4-6 luni. |
| `category` | programs |
| `order` | 1 |

---

### FAQ 2

| Field | Value |
|-------|-------|
| `question` | Care este temperatura apei din piscină? |
| `answer` | Apa din piscină este încălzită la o temperatură constantă de 31-32 de grade Celsius, ideală pentru bebeluși și copii mici. Această temperatură previne hipotermia și asigură confortul maxim. |
| `category` | safety |
| `order` | 2 |

---

### FAQ 3

| Field | Value |
|-------|-------|
| `question` | Cum este tratată apa din piscină? |
| `answer` | Apa este filtrată de trei ori și tratată prin electroliză cu sare, o metodă naturală care nu irită pielea sensibilă a bebușilor și nu irită ochii. Este mai blândă decât clorul tradițional și menține apa curată și dezinfectată natural. |
| `category` | safety |
| `order` | 3 |

---

### FAQ 4

| Field | Value |
|-------|-------|
| `question` | Este necesar să știe copilul să înoate pentru a participa la program? |
| `answer` | Nu, programele sunt concepute pentru toate nivelurile, de la bebeluși care abia se familiarizează cu apa până la copii mai mari care învață tehnici de înot. Fiecare program este adaptat vârstei și nivelului de experiență al copilului. |
| `category` | programs |
| `order` | 4 |

---

### FAQ 5

| Field | Value |
|-------|-------|
| `question` | Cât durează o ședință? |
| `answer` | Durata variază în funcție de vârstă:\n\n- **PRO-BEBE** (4/6 luni - 1 an): maximum 35 minute\n- **BEBE-FORTE** (1 an - 2 ani și 1/2): maximum 40 minute\n- **STAR** (2 ani și 1/2 - 4 ani): maximum 45 minute\n- **CAMPION** (peste 4 ani): maximum 45 minute |
| `category` | programs |
| `order` | 5 |

---

### FAQ 6

| Field | Value |
|-------|-------|
| `question` | Părintele trebuie să fie prezent în apă cu copilul? |
| `answer` | Da, pentru copiii mici (PRO-BEBE și BEBE-FORTE), prezența părintelui în apă este obligatorie și face parte din procesul de învățare și bonding. Această participare activă întărește legătura părinte-copil și oferă siguranță bebelușului. |
| `category` | programs |
| `order` | 6 |

---

### FAQ 7

| Field | Value |
|-------|-------|
| `question` | Ce trebuie să aduc pentru o ședință? |
| `answer` | Pentru o ședință aveți nevoie de:\n\n- Costum de baie pentru copil\n- Scutec de înot pentru bebeluși\n- Prosop\n- Costum de baie pentru părinte (dacă participă în apă)\n- Șapcă de baie (opțional) |
| `category` | general |
| `order` | 7 |

---

### FAQ 8

| Field | Value |
|-------|-------|
| `question` | Pot participa și femeile însărcinate? |
| `answer` | Da, avem program special de activitate acvatică pentru gravide, recomandat mai ales în ultimul trimestru de sarcină. Programul include exerciții adaptate pentru pregătirea nașterii și relaxare în apă. |
| `category` | programs |
| `order` | 8 |

---

### FAQ 9

| Field | Value |
|-------|-------|
| `question` | Ce este Metoda Sultana? |
| `answer` | Metoda Sultana este o metodă inovatoare de îngrijire a nou-născutului care combină masajul, gimnastica și hidroterapia pentru stimularea psihomotorie a bebelușului de la naștere până la 4-6 luni. A fost dezvoltată de Georgeta Sultana și deține brevet OSIM din 2012. |
| `category` | programs |
| `order` | 9 |

---

### FAQ 10

| Field | Value |
|-------|-------|
| `question` | Este Metoda Sultana recunoscută oficial? |
| `answer` | Da, Metoda Sultana este recomandată de Comisia de Pediatrie și Neonatologie din cadrul Ministerului Sănătății și deține brevet OSIM din 2012. Este o metodă recunoscută și apreciată de specialiști. |
| `category` | programs |
| `order` | 10 |

---

### FAQ 11

| Field | Value |
|-------|-------|
| `question` | Care sunt avantajele educației acvatice timpurii? |
| `answer` | Beneficiile educației acvatice timpurii includ:\n\n- Întărirea sistemului imunitar\n- Dezvoltare fizică armonioasă\n- Inteligență emoțională crescută\n- Stimă de sine ridicată\n- Legături neuronale puternice\n- Păstrarea reflexelor primare și transformarea lor în automatism |
| `category` | programs |
| `order` | 11 |

---

### FAQ 12

| Field | Value |
|-------|-------|
| `question` | Cum pot programa o ședință? |
| `answer` | Ne puteți contacta pentru programări:\n\n**Telefon:** 0756-119-119\n**Email:** info@miciicampioni.ro\n**Program:** Luni-Vineri 10:00-20:00, Sâmbătă 09:00-14:00\n\nVă așteptăm cu drag! |
| `category` | general |
| `order` | 12 |

---

## 17. Services (6 entries)

### Service 1: Metoda Sultana

| Field | Value |
|-------|-------|
| `title` | Metoda Sultana |
| `slug` | metoda-sultana |
| `shortDescription` | Metodă inovatoare de îngrijire a nou-născutului care combină masajul, gimnastica și hidroterapia pentru stimularea psihomotorie de la naștere. |
| `icon` | *(upload icon)* |
| `heroImage` | *(upload hero image)* |
| `content` | *(Rich text - see full content below)* |
| `metaTitle` | Metoda Sultana - Micii Campioni |
| `metaDescription` | Metoda Sultana - metodă de stimulare psihomotorie a nou-născutului prin masaj, gimnastică și hidroterapie. Recomandată de Ministerul Sănătății. Brevet OSIM. |
| `tabs` | *(no tabs for this service)* |
| `ageGroups` | *(no age groups for this service)* |
| `sidebarWidgets` | *(Reference: Widget - Metoda Sultana Recomandare, Widget - Contact Rapid)* |
| `relatedServices` | *(Reference: Educație Acvatică, Școala Părinților)* |
| `order` | 1 |
| `featured` | true |

**Content (Rich Text):**

## Ce este Metoda Sultana?

**Metoda Sultana** este o metodă alternativă și inovatoare de îngrijire a nou-născutului, creată de Georgeta Sultana, care combină în mod armonios **masajul**, **gimnastica** și **hidroterapia** pentru stimularea psihomotorie a bebelușului încă din primele zile de viață.

### Recunoaștere oficială

- **2009:** Publicarea ghidului "Metoda Sultana - Ghid de îngrijire a nou-născutului prin masaj, gimnastică și hidroterapie"
- **2012:** Obținerea brevetului OSIM pentru Metoda Sultana
- **Recomandare:** Comisia de Pediatrie și Neonatologie din cadrul Ministerului Sănătății recomandă Metoda Sultana

### Vârsta recomandată

**0 - 4/6 luni** (de la naștere până la vârsta de 4-6 luni)

---

## Componentele Metodei

### 1. Masaj

Stimulează:
- Circulația sanguină și limfatică
- Sistemul digestiv
- Legătura părinte-copil
- Relaxarea și somnul

### 2. Gimnastica

Dezvoltă:
- Tonusul muscular
- Coordonarea motorie
- Reflexele naturale
- Mobilitatea articulațiilor

### 3. Hidroterapie

Oferă:
- Mediu similar celui intrauterin
- Stimularea reflexului de apnee
- Relaxare și confort
- Dezvoltare motorie accelerată

---

## Beneficii

1. **Întărirea sistemului imunitar** - copiii sunt mai rezistenți la boli
2. **Dezvoltarea armonioasă** - fizică, mentală și emoțională
3. **Păstrarea reflexelor primare** - transformarea lor în automatisme
4. **Fortificarea sistemului osos și muscular**
5. **Grad crescut al inteligenței emoționale**
6. **Legătură puternică părinte-copil** - bonding
7. **Pregătirea pentru educație acvatică** - familiarizarea cu apa

---

## Cum funcționează?

Metoda Sultana facilitează interacționarea activă cu bebelușul încă din prima zi de viață. Această interacțiune se transformă ulterior în dialog și comunicare non-verbală controlată.

Prin intermediul metodei, copilul își construiește de la început:
- Un spațiu al său
- O percepție a timpului
- Un univers personal

---

## Structura cursului

Cursul de Metoda Sultana este susținut de **Georgeta Sultana** personal și include:

- **3 sesiuni x 2 ore**
- Instruire practică pentru părinți
- Materiale de suport
- Consiliere personalizată

---

### Service 2: Educație Acvatică

| Field | Value |
|-------|-------|
| `title` | Educație Acvatică |
| `slug` | educatie-acvatica |
| `shortDescription` | Continuarea Metodei Sultana pentru copii de la 4 luni. Programe adaptate pe vârste pentru dezvoltarea armonioasă și inițierea în înot. |
| `icon` | *(upload icon)* |
| `heroImage` | *(upload hero image)* |
| `content` | *(Rich text - see full content below)* |
| `metaTitle` | Educație Acvatică - Micii Campioni |
| `metaDescription` | Educație acvatică pentru bebeluși și copii de la 4 luni. Programe PRO-BEBE, BEBE-FORTE, STAR și CAMPION. Piscină specială, apă tratată natural. |
| `tabs` | *(no additional tabs - age groups handle content)* |
| `ageGroups` | *(Reference: PRO-BEBE, BEBE-FORTE, STAR, CAMPION)* |
| `sidebarWidgets` | *(Reference: Widget - Inteligență Emoțională, Widget - Contact Rapid)* |
| `relatedServices` | *(Reference: Metoda Sultana, Kinetoterapie)* |
| `order` | 2 |
| `featured` | true |

**Content (Rich Text):**

## Educație Acvatică

Educația acvatică reprezintă o continuare a **Metodei Sultana** și constituie prima experiență educațională străină de mediul familiar. Tocmai de aceea este necesar să fie o experiență pozitivă.

Odată ce încep acest program, copiii nu vor avea frică de apă și vor învăța conduita de siguranță în apă mai devreme decât alți copii de aceeași vârstă.

---

## Beneficii

1. Imunitate crescută
2. Dezvoltarea armonioasă a unui sistem muscular fortificat care susține un sistem osos puternic și corect dezvoltat
3. Aparat respirator cu capacitate mărită - oxigenare generală foarte bună
4. Legături neuronale foarte puternice
5. Rezolvarea unor deficiențe poziționale
6. Dezvoltarea normală a prematurilor și copiilor cu risc neuromotor la naștere
7. Atitudinea de lideri a copiilor evaluați periodic până la vârsta de școlari
8. Grad crescut al inteligenței emoționale
9. Capacitatea de a ieși din situații extreme începând cu vârste foarte mici
10. Păstrarea reflexelor primare și transformarea lor în automatism

---

## Despre dezvoltarea timpurie

Avantajul păstrării reflexelor primare, exersarea și dezvoltarea lor, conduce la o evoluție psihomotorie armonioasă și precoce. Pentru ca un copil să se formeze în plan psihic, trebuie mai întâi să-și însușească siguranța și confortul fizic.

Mediul acvatic are un efect relaxant pentru copii, stimulând curiozitatea și canalizându-le energia, permițându-le să culeagă neîncetat informații.

---

## Programe pe vârste

Selectați categoria de vârstă pentru detalii complete despre program:

---

### Service 3: Școala Părinților de Campioni

| Field | Value |
|-------|-------|
| `title` | Școala Părinților de Campioni |
| `slug` | scoala-parintilor-de-campioni |
| `shortDescription` | Primul program complet de educație prenatală și îngrijire a bebelușului: cursuri Lamaze, Metoda Sultana, alăptare și puericultura. |
| `icon` | *(upload icon)* |
| `heroImage` | *(upload hero image)* |
| `content` | *(Rich text - see full content below)* |
| `metaTitle` | Școala Părinților de Campioni - Micii Campioni |
| `metaDescription` | Școala Părinților de Campioni - cursuri prenatale Lamaze, Metoda Sultana, alăptare și puericultura pentru viitorii și proaspeții părinți. |
| `tabs` | *(Reference: ServiceTab Lamaze, ServiceTab Metoda Sultana, ServiceTab Alăptare, ServiceTab Puericultura)* |
| `ageGroups` | *(none)* |
| `sidebarWidgets` | *(Reference: Widget - Pregătire Naștere, Widget - Alăptare OMS, Widget - Ateliere Mămici)* |
| `relatedServices` | *(Reference: Metoda Sultana, Activitate Gravide)* |
| `order` | 3 |
| `featured` | true |

**Content (Rich Text):**

## Școala Părinților de Campioni

Școala Părinților de Campioni reprezintă primul program de educație prenatală și îngrijire a bebelușului, lansat de Micii Campioni pentru a le oferi părinților posibilitatea de a alege cea mai bună modalitate de a-și crește copiii sănătoși.

Programul pregătește mămicile pentru momentul nașterii și pentru prima întâlnire cu bebelușul.

---

## Structura programului

Școala Părinților de Campioni cuprinde cursuri adresate atât perioadei prenatale, cât și celei postnatale.

### Modulul I (pentru viitori părinți)

- **Lamaze:** 6 sesiuni x 2 ore
- **Metoda Sultana** (masaj, gimnastică, hidroterapie): 3 sesiuni x 2 ore
- **Alăptare și puericultura:** 2 sesiuni x 2 ore

### Modulul II (pentru părinți cu experiență - Lamaze Refresh)

- **Lamaze Refresh:** 6 sesiuni x 2 ore
- **Metoda Sultana:** 3 sesiuni x 2 ore
- **Alăptare și puericultura:** 2 sesiuni x 2 ore

---

## Perioada recomandată

**Trimestrul III de sarcină** (săptămâna 28-33)

## Dimensiunea grupului

- **Minimum:** 3 cupluri
- **Maximum:** 6-7 cupluri

---

## Module detaliate

Selectați fiecare modul pentru informații complete:

---

### Service 4: Activitate Acvatică Gravide

| Field | Value |
|-------|-------|
| `title` | Activitate Acvatică Gravide |
| `slug` | activitate-acvatica-gravide |
| `shortDescription` | Cel mai bun mijloc de relaxare pentru perioada prenatală. Exerciții în apă adaptate sarcinii pentru o naștere mai ușoară. |
| `icon` | *(upload icon)* |
| `heroImage` | *(upload hero image)* |
| `content` | *(Rich text - see full content below)* |
| `metaTitle` | Activitate Acvatică Gravide - Micii Campioni |
| `metaDescription` | Activitate acvatică pentru gravide - exerciții în apă pentru relaxare, pregătirea nașterii și recuperare postnatală. Piscină specială, apă caldă. |
| `tabs` | *(Reference: ServiceTab Beneficii, ServiceTab Contraindicații)* |
| `ageGroups` | *(none)* |
| `sidebarWidgets` | *(Reference: Widget - Exerciții Gravide, Widget - Contact Rapid)* |
| `relatedServices` | *(Reference: Școala Părinților, Educație Acvatică)* |
| `order` | 4 |
| `featured` | false |

**Content (Rich Text):**

## Activitate Acvatică Gravide

Programele de educație acvatică pentru gravide constituie cel mai bun mijloc de relaxare pentru perioada prenatală, având la bază, în mod esențial, relația dintre mamă-tată-bebeluș.

Pentru fiecare categorie de beneficiari ai programelor de educație acvatică este necesară o pregătire și un mod de lucru specifice, adaptate la nevoile acestora și personalizate.

În ultimii ani, sunt din ce în ce mai recunoscute beneficiile practicării activității acvatice pre și postnatale pentru sănătatea femeii gravide și a viitorului ei copil.

---

## De ce apa?

Apa este un mediu excelent pentru practicarea unor exerciții fizice și mișcări speciale adaptate:

- Perioadei de sarcină
- Pregătirii pentru naștere
- Revenirii la normal în perioada postnatală

---

## Format ședință

Ședința de educație acvatică pentru cuplu se desfășoară individual pentru fiecare cuplu, în urma unui program anterior stabilit.

---

### Service 5: Kinetoterapie

| Field | Value |
|-------|-------|
| `title` | Kinetoterapie |
| `slug` | kinetoterapie |
| `shortDescription` | Servicii de kinetoterapie pentru copiii cu nevoi speciale: recuperare motorie, tratament în mediul acvatic și masaj terapeutic. |
| `icon` | *(upload icon)* |
| `heroImage` | *(upload hero image)* |
| `content` | *(Rich text - see full content below)* |
| `metaTitle` | Kinetoterapie - Micii Campioni |
| `metaDescription` | Kinetoterapie pentru copii - recuperare motorie, hidroterapie și masaj terapeutic pentru copiii cu întârzieri în dezvoltare sau nevoi speciale. |
| `tabs` | *(Reference: ServiceTab Evaluare, ServiceTab Tratament)* |
| `ageGroups` | *(none)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `relatedServices` | *(Reference: Educație Acvatică, Metoda Sultana)* |
| `order` | 5 |
| `featured` | false |

**Content (Rich Text):**

## Kinetoterapie

Serviciile de kinetoterapie oferite de Clubul Micii Campioni sunt dedicate copiilor care necesită tratament specializat pentru diverse afecțiuni sau întârzieri în dezvoltarea motorie.

---

## Ce este kinetoterapia?

Kinetoterapia este o formă de terapie fizică care utilizează mișcarea și exercițiile fizice pentru:

1. Recuperarea funcțiilor motorii
2. Prevenirea și corectarea deficiențelor posturale
3. Stimularea dezvoltării motorii
4. Îmbunătățirea calității vieții

---

## Servicii oferite

### Evaluare
- Evaluare inițială a copilului
- Identificarea nevoilor specifice
- Elaborarea planului de tratament personalizat

### Tratament
- Exerciții de recuperare motorie
- Tehnici de stimulare a dezvoltării
- Tratament în mediul acvatic (hidroterapie)
- Masaj terapeutic

### Monitorizare
- Monitorizare continuă a progresului
- Ajustarea planului de tratament
- Consiliere pentru părinți

---

## Grupuri țintă

1. Copii cu întârzieri în dezvoltarea motorie
2. Copii cu afecțiuni neurologice
3. Copii prematuri
4. Copii cu deficiențe posturale
5. Copii cu sindrom Down
6. Copii cu risc neuromotor la naștere

---

## Beneficiile kinetoterapiei acvatice

1. **Reducerea gravitației** - ușurința mișcărilor
2. **Efecte relaxante** asupra musculaturii
3. **Stimulare proprioceptivă**
4. **Mediu plăcut și motivant** pentru copii

---

## Echipa

Serviciile de kinetoterapie sunt oferite de specialiști calificați și cu experiență în lucrul cu copiii.

---

### Service 6: Întrebări Frecvente

| Field | Value |
|-------|-------|
| `title` | Întrebări Frecvente |
| `slug` | intrebari-frecvente |
| `shortDescription` | Răspunsuri la cele mai frecvente întrebări despre programele Clubului Micii Campioni: vârstă, temperatură apă, echipament necesar și programări. |
| `icon` | *(upload icon)* |
| `heroImage` | *(upload hero image)* |
| `content` | *(Rich text below)* |
| `metaTitle` | Întrebări Frecvente - Micii Campioni |
| `metaDescription` | Întrebări frecvente despre educația acvatică la Micii Campioni: vârstă minimă, temperatură apă, durata ședințelor, echipament necesar și cum să programați. |
| `tabs` | *(none)* |
| `ageGroups` | *(none)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `relatedServices` | *(none)* |
| `order` | 6 |
| `featured` | false |

**Content (Rich Text):**

## Întrebări Frecvente

Mai jos găsiți răspunsuri la cele mai frecvente întrebări adresate de părinți cu privire la programele Clubului Micii Campioni.

Dacă nu găsiți răspunsul la întrebarea dumneavoastră, nu ezitați să ne contactați la **0756-119-119** sau **info@miciicampioni.ro**.

---

*Note: The FAQ entries will be displayed dynamically from the FAQ content type using an accordion component.*

---

## 18. Pages (16 entries)

### Page 1: Despre Noi

| Field | Value |
|-------|-------|
| `title` | Despre Noi |
| `slug` | despre-noi |
| `metaTitle` | Despre Noi - Micii Campioni |
| `metaDescription` | Clubul Micii Campioni - primul club de educație acvatică din România, înființat în 2001. Aflați povestea noastră și misiunea de a forma campioni pentru toată viața. |
| `heroImage` | *(upload if available)* |
| `heroImageAlt` | Clubul Micii Campioni - echipa și facilități |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Parteneriat FAAEL, Widget - Contact Rapid)* |
| `parentPage` | *(none - top level)* |
| `showInSitemap` | true |
| `publishedAt` | *(leave empty)* |

**Content:**

## Despre Clubul Micii Campioni

Clubul Micii Campioni a fost înființat în anul **2001** din dorința unor părinți de a oferi copiilor lor cel mai bun start în viață. Filozofia Clubului se bazează pe ideea că primii ani din viața copilului sunt cei mai importanți și mai complexi în ceea ce privește dezvoltarea fizică, mintală și emoțională.

> "Georgeta Sultana reprezintă un reper important, un etalon, în ceea ce privește munca cu bebelușii și programele de stimulare acvatică din România. Cu o experiență de peste 30 de ani în domeniul educației acvatice și aproximativ 20 de ani de colaborare cu specialiștii francezi de la FAAEL, Georgeta Sultana a pus bazele primului club de educație acvatică din România, deschizând astfel drumul pentru dezvoltarea acestui domeniu în țara noastră."

---

## Fondatoarea: Georgeta Sultana

**Experiență:**
- **1981:** Prima dată când a pus un bebeluș în apă
- **30+ ani** de lucru cu bebeluși și copii
- Formator francez pentru educație acvatică pentru nou-născuți și femei însărcinate

**Realizări:**
- Participare la primul curs de educație acvatică din România (1998)
- Organizarea primului curs de educație acvatică în parteneriat cu FAAEL (2002)
- 14+ ani de colaborare cu FAAEL Franța
- Autoarea ghidului "Metoda Sultana" (2009)
- Deținătoare a brevetului OSIM pentru Metoda Sultana (2012)

---

## Asociația

"Asociația Educație Acvatică Pentru Sănătatea Familiei" a fost înființată în anul **2000**, având ca obiectiv principal promovarea și susținerea educației acvatice ca mijloc de stimulare psihomotorie a copiilor.

---

## Explorați mai mult

- [Istoric](/despre-noi/istoric)
- [Siguranță și securitate](/despre-noi/siguranta-si-securitate-pentru-copilul-tau)
- [Echipa Micii Campioni](/despre-noi/echipa-micii-campioni)
- [Press Info](/despre-noi/press-info)
- [Distincții și certificări](/despre-noi/distinctii-si-certificari)

---

### Page 2: Istoric

| Field | Value |
|-------|-------|
| `title` | Istoric |
| `slug` | istoric |
| `metaTitle` | Istoric - Micii Campioni |
| `metaDescription` | Istoria Clubului Micii Campioni - de la 1981 până în prezent. Momente cheie în dezvoltarea primului club de educație acvatică din România. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Despre Noi)* |
| `showInSitemap` | true |

**Content:**

## Istoria Clubului Micii Campioni

Povestea Clubului Micii Campioni începe în 1981, când Georgeta Sultana a pus pentru prima dată un bebeluș în apă. De atunci, pasiunea pentru educația acvatică a crescut și s-a transformat într-o misiune de viață.

---

## Repere importante

*Timeline events will be displayed dynamically from the TimelineEvent content type.*

---

### Page 3: Siguranță și Securitate

| Field | Value |
|-------|-------|
| `title` | Siguranță și securitate pentru copilul tău |
| `slug` | siguranta-si-securitate-pentru-copilul-tau |
| `metaTitle` | Siguranță și Securitate - Micii Campioni |
| `metaDescription` | Siguranța copilului tău este prioritatea noastră. Apă filtrată de 3 ori, încălzită la 31-32°C și tratată prin electroliză cu sare. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Siguranță Apă, Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Despre Noi)* |
| `showInSitemap` | true |

**Content:**

## Siguranță și Securitate

Siguranța și securitatea copilului tău sunt priorități absolute pentru noi. Piscina Clubului Micii Campioni este special concepută pentru bebeluși, copii și femei însărcinate, respectând cele mai înalte standarde de igienă și siguranță.

---

## Standardele calității apei

### 1. Filtrare
Apa din piscină este filtrată de **trei ori**, asigurând o curățenie perfectă și eliminarea oricăror impurități.

### 2. Temperatură
Apa este încălzită la o temperatură constantă de **31-32 de grade Celsius**, ideală pentru bebeluși și copii mici, prevenind hipotermia și asigurând confortul maxim.

### 3. Tratament
Apa este tratată prin **electroliză cu sare**, o metodă naturală și sigură care:

- Nu irită pielea sensibilă a bebelușilor
- Nu irită ochii
- Este hipoalergenică
- Este mai blândă decât clorul tradițional
- Menține apa curată și dezinfectată natural

---

## Design piscină

Piscina este **unică în România**, special proiectată pentru:
- Bebeluși (de la 4 luni)
- Copii de toate vârstele
- Femei însărcinate

---

## Măsuri de siguranță

- Personal calificat și certificat
- Supraveghere permanentă
- Echipamente de siguranță adecvate
- Protocoale stricte de igienă

---

### Page 4: Echipa Micii Campioni

| Field | Value |
|-------|-------|
| `title` | Echipa Micii Campioni |
| `slug` | echipa-micii-campioni |
| `metaTitle` | Echipa - Micii Campioni |
| `metaDescription` | Echipa Clubului Micii Campioni - profesioniști certificați FAAEL cu experiență vastă în educație acvatică pentru bebeluși și copii. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Despre Noi)* |
| `showInSitemap` | true |

**Content:**

## Echipa Noastră

Echipa Clubului Micii Campioni este formată din profesioniști cu experiență vastă în domeniul educației acvatice, pediatrie, kinetoterapie și psihologie. Toți membrii echipei sunt certificați și au participat la cursuri de formare profesională organizate în parteneriat cu FAAEL Franța.

---

*Team members will be displayed dynamically from the TeamMember content type.*

---

## Certificări profesionale

- Certificare FAAEL pentru educație acvatică
- Certificare pentru lucrul cu nou-născuți
- Certificare pentru lucrul cu femei însărcinate
- Cursuri Lamaze

---

## Valorile echipei

- **Profesionalism** - standarde înalte de calitate
- **Dedicare** pentru sănătatea copiilor
- **Actualizare permanentă** a cunoștințelor
- **Abordare personalizată** pentru fiecare copil

---

### Page 5: Press Info

| Field | Value |
|-------|-------|
| `title` | Press Info |
| `slug` | press-info |
| `metaTitle` | Press Info - Micii Campioni |
| `metaDescription` | Aparițiile media ale Clubului Micii Campioni - articole și reportaje despre educația acvatică pentru bebeluși în România. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Despre Noi)* |
| `showInSitemap` | true |

**Content:**

## Press Info

Clubul Micii Campioni a fost prezentat în numeroase publicații și emisiuni TV de-a lungul anilor. Mai jos puteți găsi o selecție de articole și apariții media.

---

*Press clippings will be displayed dynamically from the PressClipping content type.*

---

## Contact Media

**Email:** info@miciicampioni.ro
**Telefon:** 0756-119-119

---

### Page 6: Distincții și Certificări

| Field | Value |
|-------|-------|
| `title` | Distincții și certificări |
| `slug` | distinctii-si-certificari |
| `metaTitle` | Distincții și Certificări - Micii Campioni |
| `metaDescription` | Distincțiile și certificările Clubului Micii Campioni: Brevet OSIM, certificare FAAEL, recomandare Ministerul Sănătății. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text)* |
| `sidebarWidgets` | *(Reference: Widget - Metoda Sultana Recomandare, Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Despre Noi)* |
| `showInSitemap` | true |

**Content:**

## Distincții și Certificări

De-a lungul anilor, Clubul Micii Campioni și fondatoarea sa, Georgeta Sultana, au primit numeroase distincții și certificări care atestă calitatea și profesionalismul serviciilor oferite.

---

## Certificări principale

### Brevet OSIM (2012)
Brevet pentru "Metoda Sultana" - metodă de stimulare psihomotorie a nou-născutului prin masaj, gimnastică și hidroterapie.

### Certificare FAAEL
Certificare din partea Federației Franceze a Activităților Acvatice de Învățare și Recreere pentru educație acvatică.

### Recomandare Ministerul Sănătății
Recomandare din partea Comisiei de Pediatrie și Neonatologie din cadrul Ministerului Sănătății pentru Metoda Sultana.

---

*Certificates gallery will be displayed dynamically from the Certificate content type.*

---

### Page 7: Concept

| Field | Value |
|-------|-------|
| `title` | Concept |
| `slug` | concept |
| `metaTitle` | Concept - Micii Campioni |
| `metaDescription` | Conceptul Clubului Micii Campioni - bazat pe principii europene de educație acvatică promovate de FAAEL, îmbinate cu experiența de peste 30 de ani. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Parteneriat FAAEL, Widget - Contact Rapid)* |
| `parentPage` | *(none - top level)* |
| `showInSitemap` | true |

**Content:**

## Conceptul Micii Campioni

Conceptul Clubului Micii Campioni se bazează pe principii europene de educație acvatică, promovate de **FAAEL** (Federația franceză a activităților acvatice de învățare și recreere), îmbinate cu experiența de peste 30 de ani a specialiștilor noștri și cele mai recente cercetări științifice din domeniu.

---

## "Campion pentru toată viața"

Obiectivul principal al programelor noastre este de a forma **"campioni pentru toată viața"** - copii sănătoși, încrezători în forțele proprii, cu o dezvoltare fizică, mintală și emoțională armonioasă.

---

## Principii fundamentale

1. **Dezvoltare holistică** - Abordare completă a dezvoltării copilului: fizic, mental, emoțional
2. **Început timpuriu** - Stimularea de la cele mai fragede vârste (de la naștere)
3. **Parteneriat părinte-copil** - Implicarea activă a părinților în procesul de dezvoltare
4. **Mediu sigur și confortabil** - Piscină specială, apă caldă, personal calificat
5. **Metode dovedite științific** - Bazate pe cercetări și practici internaționale

---

## Standarde europene

Programele noastre respectă standardele europene de educație acvatică, fiind dezvoltate în parteneriat cu FAAEL Franța.

---

## Explorați mai mult

- [Micii Campioni și FAAEL](/concept/micii-campioni-si-faael)
- [Viziune și obiective](/concept/viziune-si-obiective)

---

### Page 8: Micii Campioni și FAAEL

| Field | Value |
|-------|-------|
| `title` | Micii Campioni și FAAEL |
| `slug` | micii-campioni-si-faael |
| `metaTitle` | Micii Campioni și FAAEL - Parteneriat Internațional |
| `metaDescription` | Parteneriatul dintre Clubul Micii Campioni și FAAEL Franța - 14+ ani de colaborare pentru cele mai înalte standarde de educație acvatică. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Parteneriat FAAEL, Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Concept)* |
| `showInSitemap` | true |

**Content:**

## FAAEL - Partener strategic

**FAAEL** (Fédération des Activités Aquatiques d'Éveil et de Loisir) - Federația franceză a activităților acvatice de învățare și recreere este o organizație de prestigiu din Franța, specializată în educația acvatică pentru bebeluși, copii și familii.

---

## Istoricul parteneriatului

Colaborarea dintre Clubul Micii Campioni și FAAEL datează de peste **14 ani** și a reprezentat fundamentul pentru dezvoltarea programelor de educație acvatică din România.

---

## Momente cheie

### 1998
Prima participare a specialiștilor români la cursuri de educație acvatică organizate de instructori francezi.

### 2002
Organizarea primului curs de educație acvatică din România în parteneriat direct cu FAAEL Franța.

---

## Formare și certificare

FAAEL a asigurat:
- Formarea primilor instructori de educație acvatică din România
- Certificarea profesională a echipei Micii Campioni
- Transfer de cunoștințe și bune practici europene
- Actualizare permanentă a metodelor de lucru

---

## Impact

Parteneriatul cu FAAEL a permis:
- Introducerea standardelor europene de educație acvatică în România
- Formarea unei echipe profesioniste certificate internațional
- Dezvoltarea unor programe adaptate nevoilor copiilor români
- Recunoașterea internațională a activității Clubului

---

### Page 9: Viziune și Obiective

| Field | Value |
|-------|-------|
| `title` | Viziune și obiective |
| `slug` | viziune-si-obiective |
| `metaTitle` | Viziune și Obiective - Micii Campioni |
| `metaDescription` | Viziunea Clubului Micii Campioni - formarea de campioni pentru toată viața prin educație acvatică de calitate și Metoda Sultana. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Concept)* |
| `showInSitemap` | true |

**Content:**

## Viziunea noastră

> **"Campion pentru toată viața"**

Viziunea Clubului Micii Campioni este de a contribui la formarea unor generații de copii sănătoși, încrezători și echilibrați, prin promovarea educației acvatice ca metodă eficientă de stimulare a dezvoltării fizice, mintale și emoționale.

---

## Misiune

Misiunea noastră este de a oferi programe de educație acvatică de cea mai înaltă calitate pentru:
- Nou-născuți și bebeluși
- Copii de toate vârstele
- Femei însărcinate
- Familii

---

## Obiective principale

### 1. Promovarea Metodei Sultana
Răspândirea și implementarea Metodei Sultana ca standard de îngrijire a nou-născutului prin masaj, gimnastică și hidroterapie.

### 2. Educație acvatică de calitate
Oferirea de programe de educație acvatică bazate pe principii europene și cercetări științifice.

### 3. Formarea profesioniștilor
Pregătirea și certificarea instructorilor de educație acvatică.

### 4. Informare și educație
Educarea părinților cu privire la beneficiile stimulării psihomotorii timpurii.

### 5. Parteneriate internaționale
Menținerea și dezvoltarea parteneriatelor cu organizații internaționale de prestigiu.

---

## Valori

- **Profesionalism** - Standarde înalte de calitate
- **Siguranță** - Prioritate absolută pentru copii
- **Inovație** - Actualizare permanentă
- **Grijă** - Abordare personalizată
- **Comunitate** - Sprijin pentru familii

---

### Page 10: Asociația

| Field | Value |
|-------|-------|
| `title` | Asociația |
| `slug` | asociatia |
| `metaTitle` | Asociația - Micii Campioni |
| `metaDescription` | Asociația Educație Acvatică pentru Sănătatea Familiei - înființată în 2000 pentru promovarea educației acvatice în România. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Sponsorizare CTA, Widget - Contact Rapid)* |
| `parentPage` | *(none - top level)* |
| `showInSitemap` | true |

**Content:**

## Despre Asociație

**"Asociația Educație Acvatică pentru Sănătatea Familiei"** a fost înființată în anul **2000**, având ca principal obiectiv promovarea și susținerea educației acvatice ca mijloc de stimulare psihomotorie a copilului de vârstă mică.

---

## Istoric

### 2000
Înființarea Asociației Educație Acvatică pentru Sănătatea Familiei.

### 2001
Lansarea programului pilot de educație acvatică în parteneriat cu FAAEL Franța.

### 2004
Inaugurarea piscinei speciale pentru bebeluși și copii, unică în România.

---

## Misiune

Asociația își propune:
- Promovarea educației acvatice în România
- Formarea profesioniștilor în domeniu
- Susținerea cercetării științifice
- Colaborarea cu organizații internaționale
- Sprijinirea familiilor

---

## Activități

- Organizarea de cursuri de educație acvatică
- Formarea și certificarea instructorilor
- Organizarea de conferințe și congrese
- Programe sociale pentru copii cu nevoi speciale
- Publicarea de materiale informative

---

## Parteneriat cu FAAEL

Asociația colaborează strâns cu FAAEL Franța pentru:
- Certificarea instructorilor
- Transfer de cunoștințe
- Participare la evenimente internaționale
- Actualizarea standardelor profesionale

---

## Explorați mai mult

- [Misiune](/asociatia/misiune)
- [Proiecte și programe](/asociatia/proiecte-si-programe)
- [Conferințe și congrese](/asociatia/conferinte-si-congrese)
- [Sponsorizări](/asociatia/sponsorizari)

---

### Page 11: Misiune

| Field | Value |
|-------|-------|
| `title` | Misiune |
| `slug` | misiune |
| `metaTitle` | Misiune - Asociația Micii Campioni |
| `metaDescription` | Misiunea Asociației Educație Acvatică pentru Sănătatea Familiei - promovarea educației acvatice pentru dezvoltarea armonioasă a copiilor. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Asociația)* |
| `showInSitemap` | true |

**Content:**

## Misiunea noastră

Asociația Educație Acvatică pentru Sănătatea Familiei are ca misiune principală promovarea și susținerea educației acvatice ca metodă eficientă de stimulare psihomotorie a copilului, contribuind astfel la formarea unor generații de copii sănătoși și echilibrați.

---

## Obiective

1. **Promovarea educației acvatice** ca mijloc de stimulare a dezvoltării copilului
2. **Formarea profesioniștilor** în domeniul educației acvatice
3. **Informarea părinților** cu privire la beneficiile stimulării timpurii
4. **Susținerea cercetării** în domeniul educației acvatice
5. **Colaborarea internațională** pentru transfer de cunoștințe

---

## Parteneri și susținători

Asociația a beneficiat de sprijinul următorilor parteneri:

### Sponsori (Istorici)
- SC Bostina
- RAR (Registrul Auto Român)
- CNA Poșta Română
- BRD
- Exim Bank

---

## Impact

De-a lungul anilor, Asociația a contribuit la:
- Formarea primilor instructori de educație acvatică din România
- Introducerea standardelor europene în domeniu
- Organizarea de conferințe și congrese naționale și internaționale
- Dezvoltarea de programe sociale pentru copii cu nevoi speciale

---

### Page 12: Proiecte și Programe

| Field | Value |
|-------|-------|
| `title` | Proiecte și programe |
| `slug` | proiecte-si-programe |
| `metaTitle` | Proiecte și Programe - Asociația Micii Campioni |
| `metaDescription` | Proiectele și programele Asociației: Informare corectă pentru decizii corecte, Mai competitivi în Europa, Toți copiii merită o șansă. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Asociația)* |
| `showInSitemap` | true |

**Content:**

## Proiecte și programe

Asociația Educație Acvatică pentru Sănătatea Familiei a derulat și derulează o serie de proiecte și programe menite să promoveze educația acvatică și să susțină dezvoltarea copiilor.

---

*Proiectele sunt afișate dinamic din tipul de conținut Project.*

---

### Page 13: Conferințe și Congrese

| Field | Value |
|-------|-------|
| `title` | Conferințe și congrese |
| `slug` | conferinte-si-congrese |
| `metaTitle` | Conferințe și Congrese - Asociația Micii Campioni |
| `metaDescription` | Conferințele și congresele organizate sau cu participare activă - peste 15 evenimente naționale și internaționale. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Parteneriat FAAEL, Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Asociația)* |
| `showInSitemap` | true |

**Content:**

## Conferințe și congrese

Asociația Educație Acvatică pentru Sănătatea Familiei a participat la și a organizat numeroase conferințe și congrese naționale și internaționale, contribuind la schimbul de cunoștințe și bune practici în domeniul educației acvatice.

---

*Conferințele sunt afișate dinamic din tipul de conținut Conference.*

---

### Page 14: Sponsorizări

| Field | Value |
|-------|-------|
| `title` | Sponsorizări |
| `slug` | sponsorizari |
| `metaTitle` | Sponsorizări - Asociația Micii Campioni |
| `metaDescription` | Deveniți sponsor al Asociației Educație Acvatică pentru Sănătatea Familiei. Susțineți educația acvatică în România! |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Sponsorizare CTA, Widget - Contact Rapid)* |
| `parentPage` | *(Reference: Asociația)* |
| `showInSitemap` | true |

**Content:**

## Sponsorizări

Asociația Educație Acvatică pentru Sănătatea Familiei invită companiile și persoanele fizice interesate să sprijine activitățile noastre prin sponsorizări.

---

## De ce să ne susțineți?

Sprijinul dumneavoastră contribuie la:

1. **Dezvoltarea programelor de educație acvatică** pentru copii din toate categoriile sociale
2. **Formarea profesioniștilor** în domeniul educației acvatice
3. **Programe sociale** pentru copii cu nevoi speciale
4. **Cercetare și inovație** în domeniul stimulării psihomotorii timpurii
5. **Informare și educație** pentru părinți

---

## Beneficii pentru sponsori

- Vizibilitate pe site-ul și materialele Clubului
- Menționare în cadrul evenimentelor
- Rapoarte de activitate
- Posibilitatea de a participa la evenimente
- Satisfacția de a contribui la o cauză nobilă

---

## Domenii de susținere

Sponsorizările pot fi direcționate către:

- **Programul general** de educație acvatică
- **Programe sociale** pentru copii defavorizați
- **Evenimente și conferințe**
- **Echipamente și infrastructură**
- **Materiale educaționale**

---

## Cum să deveniți sponsor

Pentru a deveni sponsor, vă rugăm să ne contactați:

- **Email:** info@miciicampioni.ro
- **Telefon:** 0756-119-119
- **Adresa:** Str. Lt. Victor Manu Nr.45, Sector 2, București

---

## Sponsori actuali și anteriori

Mulțumim partenerilor noștri pentru sprijinul acordat de-a lungul anilor:

- SC Bostina
- RAR (Registrul Auto Român)
- CNA Poșta Română
- BRD
- Exim Bank

---

### Page 15: Contact

| Field | Value |
|-------|-------|
| `title` | Contact |
| `slug` | contact |
| `metaTitle` | Contact - Micii Campioni |
| `metaDescription` | Contactați-ne la 0756-119-119 sau info@miciicampioni.ro. Vizitați-ne la Str. Lt. Victor Manu Nr.45, Sector 2, București. |
| `heroImage` | *(upload if available)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(none - top level)* |
| `showInSitemap` | true |

**Content:**

## Contact

Vă așteptăm cu drag să ne contactați pentru orice întrebări despre programele noastre sau pentru a programa o vizită la club.

---

## Informații de contact

### Adresa
**Str. Lt. Victor Manu Nr.45, Sector 2, București**

### Telefon
**0756-119-119**

### Email
**info@miciicampioni.ro**

---

## Program

| Zi | Ore |
|-----|-------|
| Luni | 10:00 - 20:00 |
| Marți | 10:00 - 20:00 |
| Miercuri | 10:00 - 20:00 |
| Joi | 10:00 - 20:00 |
| Vineri | 10:00 - 20:00 |
| Sâmbătă | 09:00 - 14:00 |
| Duminică | Închis |

---

## Locație

**Coordonate GPS:**
- Latitudine: 44.482485
- Longitudine: 26.037626

*Harta Google Maps va fi afișată dinamic.*

---

## Rețele sociale

- **Facebook:** facebook.com/miciicampioni
- **Twitter:** @MiciiCampioni1

---

## Formular de contact

Completați formularul de mai jos și vă vom contacta în cel mai scurt timp.

*Formularul de contact va fi implementat în componenta Next.js.*

---

### Page 16: Hartă Site

| Field | Value |
|-------|-------|
| `title` | Hartă Site |
| `slug` | harta-site |
| `metaTitle` | Hartă Site - Micii Campioni |
| `metaDescription` | Harta completă a site-ului Micii Campioni - găsiți rapid informațiile de care aveți nevoie. |
| `heroImage` | *(none)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(Reference: Widget - Contact Rapid)* |
| `parentPage` | *(none - top level)* |
| `showInSitemap` | false |

**Content:**

## Hartă Site

Folosiți harta de mai jos pentru a naviga rapid către secțiunile site-ului.

---

### Acasă
- [Pagina principală](/)

### Despre Noi
- [Despre Noi](/despre-noi)
- [Istoric](/despre-noi/istoric)
- [Siguranță și securitate](/despre-noi/siguranta-si-securitate-pentru-copilul-tau)
- [Echipa Micii Campioni](/despre-noi/echipa-micii-campioni)
- [Press Info](/despre-noi/press-info)
- [Distincții și certificări](/despre-noi/distinctii-si-certificari)

### Concept
- [Concept](/concept)
- [Micii Campioni și FAAEL](/concept/micii-campioni-si-faael)
- [Viziune și obiective](/concept/viziune-si-obiective)

### Asociația
- [Asociația](/asociatia)
- [Misiune](/asociatia/misiune)
- [Proiecte și programe](/asociatia/proiecte-si-programe)
- [Conferințe și congrese](/asociatia/conferinte-si-congrese)
- [Sponsorizări](/asociatia/sponsorizari)

### Servicii
- [Servicii](/servicii)
- [Metoda Sultana](/servicii/metoda-sultana)
- [Educație Acvatică](/servicii/educatie-acvatica)
- [Școala Părinților de Campioni](/servicii/scoala-parintilor-de-campioni)
- [Activitate Acvatică Gravide](/servicii/activitate-acvatica-gravide)
- [Kinetoterapie](/servicii/kinetoterapie)
- [Întrebări Frecvente](/servicii/intrebari-frecvente)

### Galerie
- [Galerie Foto](/galerie)

### Contact
- [Contact](/contact)

---

## 19. Galleries (7 entries)

### Gallery 1: Sărbătoarea Învingătorilor 2013

| Field | Value |
|-------|-------|
| `title` | Sărbătoarea Învingătorilor - Ediția a VII-a (2013) |
| `slug` | sarbatoarea-invingatorilor-2013 |
| `description` | Și anul acesta, am sărbătorit încă un an de Micii Campioni, alături de prietenii noștri, cei mai mici dintre înotători. A fost o competiție plină de veselie, fair-play și mulți copii fericiți! |
| `date` | 2013-12-01 |
| `coverImage` | → `/images/gallery/sarbatoarea-invingatorilor-2013/DSC_5030.jpg` |
| `images` | *(upload all 143 images from `/images/gallery/sarbatoarea-invingatorilor-2013/`)* |
| `featured` | true |
| `order` | 1 |

**Images to upload (143 files):**
- Path: `/images/gallery/sarbatoarea-invingatorilor-2013/`
- Files: `2.jpg`, `3.jpg`, `DSC_5030.jpg`, `DSC_5078.jpg`, `DSC_5123.jpg`, `DSC_5152.jpg`, `DSC_5160.jpg`, `DSC_5181.jpg`, `DSC_5190.jpg`, `DSC_5212.jpg`, `DSC_5279.jpg`, `DSC_5352.jpg`, `DSC_5447.jpg`, `DSC_5469.jpg`, `DSC_5567.jpg`, `DSC_5571.jpg`, `DSC_5594.jpg`, `DSC_5633.jpg`, `DSC_5643.jpg`, `DSC_5718.jpg`, ... *(and more)*

---

### Gallery 2: Sărbătoarea Învingătorilor 2012

| Field | Value |
|-------|-------|
| `title` | Sărbătoarea Învingătorilor - Ediția a VI-a (2012) |
| `slug` | sarbatoarea-invingatorilor-2012 |
| `description` | Competiția anuală pentru micii noștri campioni - ediția 2012. |
| `date` | 2012-12-01 |
| `coverImage` | → `/images/gallery/sarbatoarea-invingatorilor-2012/dsc_0006.jpg` |
| `images` | *(upload all 20 images from `/images/gallery/sarbatoarea-invingatorilor-2012/`)* |
| `featured` | true |
| `order` | 2 |

**Images to upload (20 files):**
- Path: `/images/gallery/sarbatoarea-invingatorilor-2012/`
- Files: `dsc_0006.jpg`, `dsc_0013.jpg`, `dsc_0019.jpg`, `dsc_0041.jpg`, `dsc_0051.jpg`, `dsc_0053.jpg`, `dsc_0054.jpg`, `dsc_0067.jpg`, `dsc_0072.jpg`, `dsc_0078.jpg`, `dsc_0179 (2).jpg`, `dsc_0194.jpg`, `dsc_0200.jpg`, `dsc_0249.jpg`, `dsc_0263.jpg`, `dsc_0406.jpg`, `dsc_0411.jpg`, `dsc_0432.jpg`, `dsc_0458.jpg`, `ulf_0301.jpg`

---

### Gallery 3: 10 Ani de Micii Campioni

| Field | Value |
|-------|-------|
| `title` | 10 Ani de Micii Campioni |
| `slug` | 10-ani-micii-campioni |
| `description` | Aniversarea celor 10 ani de activitate ai Clubului Micii Campioni. |
| `date` | 2011-01-01 |
| `coverImage` | → `/images/gallery/10-ani/dsc_0048.jpg` |
| `images` | *(upload all 20 images from `/images/gallery/10-ani/`)* |
| `featured` | true |
| `order` | 3 |

**Images to upload (20 files):**
- Path: `/images/gallery/10-ani/`
- Files: `dsc_0048.jpg`, `dsc_006.jpg`, `dsc_0068.jpg`, `dsc_0071.jpg`, `dsc_0088.jpg`, `dsc_0089.jpg`, `dsc_0090.jpg`, `dsc_0117.jpg`, `dsc_0134.jpg`, `dsc_0136.jpg`, `dsc_0141.jpg`, `dsc_0143.jpg`, `dsc_0159.jpg`, `dsc_0167.jpg`, `dsc_0176.jpg`, `dsc_0190.jpg`, `dsc_0191.jpg`, `dsc_024.jpg`, `dsc_0255.jpg`, `dsc_045.jpg`

---

### Gallery 4: Bebeluși Înotători

| Field | Value |
|-------|-------|
| `title` | Bebeluși Înotători la Clubul Micii Campioni |
| `slug` | bebelusi-inotatori |
| `description` | Încă de la primele ședințe, bebelușii noștri descoperă bucuria apei într-un mediu sigur și confortabil. |
| `date` | *(leave empty)* |
| `coverImage` | → `/images/gallery/bebelusi-inotatori/dsc_0172.jpg` |
| `images` | *(upload all 11 images from `/images/gallery/bebelusi-inotatori/`)* |
| `featured` | true |
| `order` | 4 |

**Images to upload (11 files):**
- Path: `/images/gallery/bebelusi-inotatori/`
- Files: `dsc_0172.jpg`, `dsc_0179.jpg`, `dsc_0183.jpg`, `dsc_0193.jpg`, `dsc_0219..jpg`, `dsc_0219.jpg`, `dsc_0220.jpg`, `dsc_0222.jpg`, `dsc_0226.jpg`, `dsc_0228.jpg`, `dsc_0243.jpg`

---

### Gallery 5: Copii Peste 4 Ani

| Field | Value |
|-------|-------|
| `title` | Copii Peste 4 Ani |
| `slug` | copii-peste-4-ani |
| `description` | Programul pentru copii cu vârsta peste 4 ani - dezvoltarea abilităților de înot și încrederea în apă. |
| `date` | *(leave empty)* |
| `coverImage` | → `/images/gallery/peste-4-ani/dsc00800.jpg` |
| `images` | *(upload all 10 images from `/images/gallery/peste-4-ani/`)* |
| `featured` | false |
| `order` | 5 |

**Images to upload (10 files):**
- Path: `/images/gallery/peste-4-ani/`
- Files: `dsc00800.jpg`, `dsc00816.jpg`, `img_0649.jpg`, `img_0684.jpg`, `img_0694.jpg`, `img_0708.jpg`, `img_0739.jpg`, `img_0766.jpg`, `img_0778.jpg`, `img_0783.jpg`

---

### Gallery 6: Ziua Copilului

| Field | Value |
|-------|-------|
| `title` | Ziua Copilului la Micii Campioni |
| `slug` | ziua-copilului |
| `description` | Sărbătorirea Zilei Internaționale a Copilului alături de micii noștri campioni. |
| `date` | *(leave empty)* |
| `coverImage` | → `/images/gallery/ziua-copilului/p1130875.jpg` |
| `images` | *(upload all 10 images from `/images/gallery/ziua-copilului/`)* |
| `featured` | false |
| `order` | 6 |

**Images to upload (10 files):**
- Path: `/images/gallery/ziua-copilului/`
- Files: `p1130875.jpg`, `p1130922.jpg`, `p1130973.jpg`, `p1130993.jpg`, `p1140085.jpg`, `p1140114.jpg`, `p1140158.jpg`, `p1140198.jpg`, `p1140204.jpg`, `p1140216.jpg`

---

### Gallery 7: Filip Stan - Campion

| Field | Value |
|-------|-------|
| `title` | Filip Stan - Campion al Micilor Campioni |
| `slug` | filip-stan-campion |
| `description` | Filip Stan, unul dintre absolvenții noștri de succes. |
| `date` | *(leave empty)* |
| `coverImage` | → `/images/gallery/filip-stan/2.jpg` |
| `images` | *(upload all 2 images from `/images/gallery/filip-stan/`)* |
| `featured` | false |
| `order` | 7 |

**Images to upload (2 files):**
- Path: `/images/gallery/filip-stan/`
- Files: `2.jpg`, `3.jpg`

---

## 20. PricingTiers (12 entries)

> ⚠️ **Note:** These prices are from the 2014 WordPress backup. **Verify current pricing before publishing.**

**Content Type:** `pricingTier`

### Pricing Structure Overview

| Period | Frequency | Morning (09-16) | Afternoon (16-20) |
|--------|-----------|-----------------|-------------------|
| Monthly | 1x/week | 160€ | 180€ |
| Monthly | 2x/week | 300€ | 340€ |
| Semester | 1x/week | 800€ | 900€ |
| Semester | 2x/week | 1500€ | 1700€ |
| Annual | 1x/week | 1500€ | 1700€ |
| Annual | 2x/week | 2800€ | 3200€ |

---

### PricingTier 1: Monthly 1x/week Morning

| Field | Value |
|-------|-------|
| `internalName` | Monthly 1x/week Morning |
| `period` | monthly |
| `frequency` | 1x/week |
| `timeSlot` | morning |
| `price` | 160 |
| `description` | Ore 09:00-16:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 1 |

---

### PricingTier 2: Monthly 1x/week Afternoon

| Field | Value |
|-------|-------|
| `internalName` | Monthly 1x/week Afternoon |
| `period` | monthly |
| `frequency` | 1x/week |
| `timeSlot` | afternoon |
| `price` | 180 |
| `description` | Ore 16:00-20:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 2 |

---

### PricingTier 3: Monthly 2x/week Morning

| Field | Value |
|-------|-------|
| `internalName` | Monthly 2x/week Morning |
| `period` | monthly |
| `frequency` | 2x/week |
| `timeSlot` | morning |
| `price` | 300 |
| `description` | Ore 09:00-16:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 3 |

---

### PricingTier 4: Monthly 2x/week Afternoon

| Field | Value |
|-------|-------|
| `internalName` | Monthly 2x/week Afternoon |
| `period` | monthly |
| `frequency` | 2x/week |
| `timeSlot` | afternoon |
| `price` | 340 |
| `description` | Ore 16:00-20:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 4 |

---

### PricingTier 5: Semester 1x/week Morning

| Field | Value |
|-------|-------|
| `internalName` | Semester 1x/week Morning |
| `period` | semester |
| `frequency` | 1x/week |
| `timeSlot` | morning |
| `price` | 800 |
| `description` | Ore 09:00-16:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 5 |

---

### PricingTier 6: Semester 1x/week Afternoon

| Field | Value |
|-------|-------|
| `internalName` | Semester 1x/week Afternoon |
| `period` | semester |
| `frequency` | 1x/week |
| `timeSlot` | afternoon |
| `price` | 900 |
| `description` | Ore 16:00-20:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 6 |

---

### PricingTier 7: Semester 2x/week Morning

| Field | Value |
|-------|-------|
| `internalName` | Semester 2x/week Morning |
| `period` | semester |
| `frequency` | 2x/week |
| `timeSlot` | morning |
| `price` | 1500 |
| `description` | Ore 09:00-16:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | true |
| `order` | 7 |

---

### PricingTier 8: Semester 2x/week Afternoon

| Field | Value |
|-------|-------|
| `internalName` | Semester 2x/week Afternoon |
| `period` | semester |
| `frequency` | 2x/week |
| `timeSlot` | afternoon |
| `price` | 1700 |
| `description` | Ore 16:00-20:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 8 |

---

### PricingTier 9: Annual 1x/week Morning

| Field | Value |
|-------|-------|
| `internalName` | Annual 1x/week Morning |
| `period` | annual |
| `frequency` | 1x/week |
| `timeSlot` | morning |
| `price` | 1500 |
| `description` | Ore 09:00-16:00 - Cel mai bun preț per ședință |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 9 |

---

### PricingTier 10: Annual 1x/week Afternoon

| Field | Value |
|-------|-------|
| `internalName` | Annual 1x/week Afternoon |
| `period` | annual |
| `frequency` | 1x/week |
| `timeSlot` | afternoon |
| `price` | 1700 |
| `description` | Ore 16:00-20:00 |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 10 |

---

### PricingTier 11: Annual 2x/week Morning

| Field | Value |
|-------|-------|
| `internalName` | Annual 2x/week Morning |
| `period` | annual |
| `frequency` | 2x/week |
| `timeSlot` | morning |
| `price` | 2800 |
| `description` | Ore 09:00-16:00 - Pachet complet |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | true |
| `order` | 11 |

---

### PricingTier 12: Annual 2x/week Afternoon

| Field | Value |
|-------|-------|
| `internalName` | Annual 2x/week Afternoon |
| `period` | annual |
| `frequency` | 2x/week |
| `timeSlot` | afternoon |
| `price` | 3200 |
| `description` | Ore 16:00-20:00 - Pachet complet |
| `service` | *(Reference: Educație Acvatică)* |
| `highlighted` | false |
| `order` | 12 |

---

## 21. SpecialPricing (1 entry)

**Content Type:** `specialPricing`

### SpecialPricing 1: Metoda Sultana - Deplasare la domiciliu

| Field | Value |
|-------|-------|
| `title` | Metoda Sultana - Deplasare la domiciliu |
| `price` | 60 |
| `unit` | per ședință |
| `notes` | + transport (în funcție de zonă) |
| `service` | *(Reference: Metoda Sultana)* |
| `order` | 1 |

---

## Checklist

Use this checklist to track your progress:

- [ ] **SiteSettings** - 1 entry
- [ ] **Navigation** - 2 entries (header + footer)
- [ ] **Testimonials** - 6 entries ⚠️ *Needs fresh content*
- [ ] **CarouselSlides** - 5 entries
- [ ] **Widgets** - 12 entries
- [ ] **TeamMembers** - 3 entries ⚠️ *Needs fresh content*
- [ ] **Partners** - 12 entries
- [ ] **AgeGroups** - 4 entries
- [ ] **ServiceTabs** - 8 entries
- [ ] **CourseModules** - 4 entries
- [ ] **TimelineEvents** - 13 entries
- [ ] **Conferences** - 22 entries
- [ ] **Projects** - 4 entries
- [ ] **Certificates** - 14 entries
- [ ] **PressClippings** - 20 entries
- [ ] **FAQs** - 12 entries ⚠️ *Needs fresh content*
- [ ] **Services** - 6 entries
- [ ] **Pages** - 16 entries
- [ ] **Galleries** - 7 entries
- [ ] **PricingTiers** - 12 entries ⚠️ *Verify pricing*
- [ ] **SpecialPricing** - 1 entry ⚠️ *Verify pricing*

**Total entries: ~175**

### Image Assets Summary

| Category | Count | Location |
|----------|-------|----------|
| Logos | 2 | `/images/logos/` |
| Icons | 19 | `/images/icons/` |
| Animations | 5 | `/images/animations/` |
| Separators | 2 | `/images/separators/` |
| Backgrounds | 4 | `/images/backgrounds/` |
| Carousel | 8 | `/images/carousel/` |
| Certificates | 14 | `/images/certificates/` |
| Press Clippings | 20 | `/images/press/` |
| Partner Logos | 14 | `/images/partners/` |
| Team Photos | 1 | `/images/team/` |
| Gallery Images | 216+ | `/images/gallery/` (7 subdirectories) |
| **Total** | **305+** | |

---

## Tips

1. **Work in order** - Create entries in the order listed to ensure references work correctly
2. **Publish as you go** - Publish each entry after creating it
3. **Use copy-paste** - Copy content directly from this document
4. **Upload images** - Have images ready before starting (carousel slides, certificates, press clippings)
5. **Test references** - After creating referenced content types (Widgets, AgeGroups), you can link them in Services and Pages

---

### Page 17: Termeni și Condiții

| Field | Value |
|-------|-------|
| `title` | Termeni și Condiții |
| `slug` | termeni-conditii |
| `metaTitle` | Termeni și Condiții - Micii Campioni |
| `metaDescription` | Termenii și condițiile de utilizare a site-ului și serviciilor Clubului Micii Campioni. |
| `heroImage` | *(none)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(none)* |
| `parentPage` | *(none)* |
| `showInSitemap` | true |

**Content:**

## Termeni și Condiții

Ultima actualizare: Ianuarie 2025

Prezentul document stabilește termenii și condițiile de utilizare a site-ului **miciicampioni.ro** și a serviciilor oferite de **Asociația Educație Acvatică pentru Sănătatea Familiei** (denumită în continuare „Clubul Micii Campioni"), cu sediul în Str. Lt. Victor Manu Nr.45, Sector 2, București.

Prin accesarea și utilizarea acestui site, confirmați că ați citit, înțeles și acceptat acești termeni și condiții în integralitate.

## 1. Definiții

- **„Site-ul"** – platforma web accesibilă la adresa miciicampioni.ro
- **„Utilizator"** – orice persoană care accesează sau utilizează site-ul
- **„Servicii"** – totalitatea programelor de educație acvatică, cursurilor și activităților oferite de Clubul Micii Campioni
- **„Client"** – părintele sau tutorele legal care contractează servicii pentru copilul său

## 2. Descrierea serviciilor

Clubul Micii Campioni oferă programe de educație acvatică pentru nou-născuți, bebeluși și copii mici, precum și cursuri prenatale pentru viitorii părinți. Serviciile includ:

- Educație acvatică pe categorii de vârstă (0-6 luni, 6 luni - 1½ ani, 1½ - 2½ ani, 2½ - 4 ani, peste 4 ani)
- Metoda Sultana – stimulare psihomotorie a nou-născutului (masaj, gimnastică, hidroterapie)
- Școala Părinților de Campioni – cursuri Lamaze și educație prenatală
- Aqua Gym pentru gravide
- Kinetoterapie pentru copii cu nevoi speciale

## 3. Programări și participare

### 3.1. Programări
Programările se realizează telefonic la **0756-119-119** sau prin email la **info@miciicampioni.ro**. Trimiterea formularului de contact prin site nu constituie o programare confirmată.

### 3.2. Evaluare inițială
Înainte de înscrierea în orice program, copilul va fi supus unei evaluări inițiale de către echipa noastră. Clubul Micii Campioni își rezervă dreptul de a recomanda un alt program decât cel solicitat inițial, în funcție de nevoile și stadiul de dezvoltare al copilului.

### 3.3. Cerințe medicale
Participarea la programele de educație acvatică necesită aviz medical de la medicul pediatru. Clubul Micii Campioni poate solicita documente medicale suplimentare, în funcție de specificul programului.

### 3.4. Anulări
Anularea unei ședințe programate trebuie comunicată cu cel puțin 24 de ore în avans. Condițiile specifice de anulare și recuperare se stabilesc la momentul înscrierii.

## 4. Prețuri și plăți

Prețurile serviciilor sunt afișate orientativ pe site și pot fi modificate fără notificare prealabilă. Prețurile definitive și modalitățile de plată se comunică la momentul programării. Prețurile nu includ transportul la domiciliu, acesta fiind facturat suplimentar în funcție de zonă.

## 5. Responsabilitate și siguranță

### 5.1. Obligațiile Clubului
Clubul Micii Campioni se angajează să asigure:
- Personal calificat și certificat
- Supraveghere permanentă pe durata activităților
- Echipamente de siguranță adecvate
- Protocoale stricte de igienă

### 5.2. Obligațiile Clientului
Clientul (părintele/tutorele legal) are obligația de a:
- Comunica echipei orice informație relevantă despre starea de sănătate a copilului
- Respecta regulamentul intern al clubului
- Asigura prezența la orele programate
- Informa echipa despre orice medicație administrată copilului

### 5.3. Limitarea răspunderii
Clubul Micii Campioni nu poate fi ținut responsabil pentru:
- Daune rezultate din nerespectarea recomandărilor echipei
- Situații în care clientul nu a comunicat informații medicale relevante
- Forță majoră sau situații neprevăzute

## 6. Proprietate intelectuală

### 6.1. Marca înregistrată
**„Micii Campioni Metoda Sultana"** este marcă înregistrată la OSIM (Oficiul de Stat pentru Invenții și Mărci). Utilizarea neautorizată a acestei mărci este interzisă.

### 6.2. Brevet
**Metoda Sultana** este protejată prin brevet OSIM obținut în anul 2012. Reproducerea, copierea sau utilizarea comercială a metodei fără acordul scris al titularului este interzisă.

### 6.3. Conținutul site-ului
Conținutul site-ului (texte, imagini, logo-uri, materiale video) este proprietatea Clubului Micii Campioni sau este utilizat cu acordul deținătorilor de drepturi. Reproducerea fără acord scris este interzisă.

## 7. Utilizarea site-ului

Utilizatorul se angajează:
- Să utilizeze site-ul numai în scopuri legale
- Să nu transmită conținut ilegal, defăimător sau care încalcă drepturile terților
- Să furnizeze informații corecte și complete prin formularul de contact

## 8. Link-uri externe

Site-ul poate conține link-uri către site-uri terțe. Clubul Micii Campioni nu este responsabil pentru conținutul, politicile de confidențialitate sau practicile acestor site-uri externe.

## 9. Modificarea termenilor

Clubul Micii Campioni își rezervă dreptul de a modifica acești termeni și condiții în orice moment. Modificările intră în vigoare la data publicării pe site. Utilizarea continuă a site-ului după publicarea modificărilor constituie acceptarea noilor termeni.

## 10. Legea aplicabilă

Prezentii termeni și condiții sunt guvernați de legislația română. Orice litigiu va fi soluționat pe cale amiabilă, iar în cazul în care aceasta nu este posibilă, de instanțele competente din București.

## Contact

Pentru orice întrebări privind acești termeni și condiții:

- **Email:** info@miciicampioni.ro
- **Telefon:** 0756-119-119
- **Adresa:** Str. Lt. Victor Manu Nr.45, Sector 2, București

---

### Page 18: Politica de Confidențialitate

| Field | Value |
|-------|-------|
| `title` | Politica de Confidențialitate |
| `slug` | politica-confidentialitate |
| `metaTitle` | Politica de Confidențialitate - Micii Campioni |
| `metaDescription` | Politica de confidențialitate și protecția datelor cu caracter personal - Clubul Micii Campioni. Conform GDPR. |
| `heroImage` | *(none)* |
| `content` | *(Rich text - see below)* |
| `sidebarWidgets` | *(none)* |
| `parentPage` | *(none)* |
| `showInSitemap` | true |

**Content:**

## Politica de Confidențialitate

Ultima actualizare: Ianuarie 2025

**Asociația Educație Acvatică pentru Sănătatea Familiei** (denumită în continuare „Clubul Micii Campioni"), cu sediul în Str. Lt. Victor Manu Nr.45, Sector 2, București, se angajează să protejeze confidențialitatea și datele cu caracter personal ale utilizatorilor site-ului **miciicampioni.ro** și ale clienților săi.

Această politică descrie modul în care colectăm, utilizăm, stocăm și protejăm datele dumneavoastră, în conformitate cu **Regulamentul (UE) 2016/679** (GDPR) și legislația română în vigoare.

## 1. Operatorul de date

Operatorul de date cu caracter personal este:

**Asociația Educație Acvatică pentru Sănătatea Familiei**
Str. Lt. Victor Manu Nr.45, Sector 2, București
Email: info@miciicampioni.ro
Telefon: 0756-119-119

## 2. Datele pe care le colectăm

### 2.1. Date furnizate direct de dumneavoastră

**Prin formularul de contact de pe site:**
- Nume și prenume
- Adresă de email
- Număr de telefon
- Serviciul solicitat
- Conținutul mesajului

**La înscrierea în programe:**
- Datele părintelui/tutorelui legal (nume, prenume, telefon, email, adresă)
- Datele copilului (nume, prenume, data nașterii, vârstă)
- Informații medicale relevante (aviz medical, istoric medical relevant)
- Fotografii sau materiale video realizate în cadrul activităților (cu consimțământ explicit)

### 2.2. Date colectate automat

La vizitarea site-ului, colectăm automat:
- Adresa IP
- Tipul de browser și sistem de operare
- Paginile vizitate și durata vizitei
- Sursa de trafic (de unde ați ajuns pe site)

## 3. Scopul prelucrării datelor

Datele dumneavoastră sunt prelucrate în următoarele scopuri:

| Scop | Baza legală |
|------|-------------|
| Răspunsul la solicitări prin formularul de contact | Consimțământ (art. 6 alin. 1 lit. a GDPR) |
| Programarea și gestionarea ședințelor | Executarea contractului (art. 6 alin. 1 lit. b GDPR) |
| Evaluarea medicală și asigurarea siguranței copilului | Interese legitime / obligații legale (art. 6 alin. 1 lit. d, f GDPR) |
| Îmbunătățirea serviciilor și a site-ului | Interese legitime (art. 6 alin. 1 lit. f GDPR) |
| Comunicări informative (cu consimțământ) | Consimțământ (art. 6 alin. 1 lit. a GDPR) |

## 4. Prelucrarea datelor copiilor

Fiind un club dedicat bebelușilor și copiilor mici, prelucrăm date ale minorilor exclusiv:

- Cu consimțământul explicit al părintelui/tutorelui legal
- În scopul furnizării serviciilor contractate
- Limitate la minimul necesar (principiul minimizării datelor)
- Cu măsuri suplimentare de securitate

**Fotografii și materiale video:** Realizarea și utilizarea fotografiilor sau materialelor video cu copiii se face exclusiv cu acordul scris al părintelui/tutorelui legal. Acest consimțământ poate fi retras în orice moment.

## 5. Perioada de stocare

| Tip de date | Perioadă de stocare |
|-------------|---------------------|
| Date formular de contact | 12 luni de la ultima interacțiune |
| Date contractuale (clienți) | Pe durata relației contractuale + 3 ani |
| Date medicale | Pe durata participării la program |
| Date de facturare | 10 ani (conform legislației fiscale) |
| Fotografii / video | Până la retragerea consimțământului |

## 6. Partajarea datelor

Datele dumneavoastră **nu sunt vândute** către terți. Putem partaja date cu:

- **Furnizorii de servicii tehnice** – hosting, email, mentenanță site (procesare pe bază contractuală, în conformitate cu GDPR)
- **Autorități publice** – numai atunci când suntem obligați prin lege

Toate transferurile de date se realizează pe baza unor acorduri de prelucrare a datelor care asigură un nivel adecvat de protecție.

## 7. Cookie-uri

Site-ul utilizează cookie-uri pentru funcționarea corectă și pentru analiza traficului. Tipuri de cookie-uri folosite:

| Tip | Scop | Durata |
|-----|------|--------|
| Cookie-uri esențiale | Funcționarea site-ului | Sesiune |
| Cookie-uri analitice | Înțelegerea comportamentului vizitatorilor | 12 luni |

Puteți gestiona preferințele cookie-uri prin setările browserului dumneavoastră.

## 8. Drepturile dumneavoastră

Conform GDPR, aveți următoarele drepturi:

- **Dreptul de acces** – puteți solicita o copie a datelor pe care le deținem despre dumneavoastră
- **Dreptul la rectificare** – puteți cere corectarea datelor inexacte
- **Dreptul la ștergere** („dreptul de a fi uitat") – puteți solicita ștergerea datelor, cu excepția celor pe care suntem obligați să le păstrăm prin lege
- **Dreptul la restricționarea prelucrării** – puteți cere limitarea modului în care vă folosim datele
- **Dreptul la portabilitatea datelor** – puteți primi datele într-un format structurat
- **Dreptul de opoziție** – vă puteți opune prelucrării datelor în anumite situații
- **Dreptul de a retrage consimțământul** – în orice moment, fără a afecta legalitatea prelucrării anterioare

Pentru exercitarea acestor drepturi, contactați-ne la **info@miciicampioni.ro**. Vom răspunde solicitării dumneavoastră în termen de maximum **30 de zile**.

## 9. Securitatea datelor

Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor, inclusiv:

- Conexiune securizată (HTTPS)
- Acces restricționat la date pe bază de necesitate
- Backup-uri periodice
- Actualizarea regulată a sistemelor

## 10. Modificări ale politicii

Această politică poate fi actualizată periodic. Data ultimei actualizări este afișată în partea de sus a documentului. Vă încurajăm să consultați periodic această pagină.

## 11. Plângeri

Dacă considerați că datele dumneavoastră nu sunt prelucrate conform legii, aveți dreptul de a depune o plângere la:

**Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)**
B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București
Website: www.dataprotection.ro
Email: anspdcp@dataprotection.ro

## Contact

Pentru orice întrebări privind protecția datelor dumneavoastră:

- **Email:** info@miciicampioni.ro
- **Telefon:** 0756-119-119
- **Adresa:** Str. Lt. Victor Manu Nr.45, Sector 2, București

---

*Document generated for Micii Campioni website content population.*
