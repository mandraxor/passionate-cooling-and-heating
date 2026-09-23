# Passionate Cooling & Heating LLC — Web Application & AEO Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-61dafb.svg?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38b2ac.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Schema.org](https://img.shields.io/badge/Schema.org-JSON--LD-green.svg)](https://schema.org/)

An authoritative, ultra-fast web application and Technical SEO / Answer Engine Optimization (AEO) platform engineered for **Passionate Cooling & Heating LLC** (Las Vegas, NV — Nevada State Contractors Board License #0088935).

Designed to replace legacy WordPress architecture, eliminating bloated plugins and slow loading times while establishing dominant topical authority in Southern Nevada's hyper-competitive climate and plumbing market.

---

## ⚡ Core Competitive Advantages over Legacy WordPress

| Dimension | Legacy WordPress / Elementor | Passionate Modern Web App |
| :--- | :--- | :--- |
| **Performance** | TTFB > 1.2s; heavy script deferral; layout shifts (CLS) | **Sub-second initial paint**; zero layout shift; compressed static assets |
| **AEO & Search** | Generic post content without direct answers | **Inverted Pyramid 40–60 word answer boxes**, specs tables, diagnostic checklists |
| **Structured Data** | Basic Yoast meta tags | **Nested Schema.org JSON-LD** (`HVACBusiness`, `PlumbingContractor`, `FAQPage`, `Service`, `BlogPosting`, `BreadcrumbList`) |
| **Service Scope** | Constrained 5-page layout | **Full 17-Service Catalog** across 4 core pillars with interactive filtering |
| **Local Expansion** | Single contact page | **Programmatic Clark County Regional Hubs** (`/locations/:slug`) |
| **Lead Capture** | Slow static contact forms | **Multi-step emergency dispatch funnel** with urgency flags and direct SMS/Call triggers |

---

## 🛠️ Architecture & Features

### 1. Answer Engine Optimization (AEO) Content Framework
- **`AEOQuestionAnswer.jsx`**: Formatted to maximize extraction by Google AI Overviews, Perplexity, and voice search.
- **Inverted Pyramid Direct Answers**: Authoritative 40–60 word snippet answers immediately following H2/H3 queries.
- **Key Operational Specs Tables**: Technical operating windows, electrical tolerances, pricing, and hardware standards.
- **Diagnostic Action Checklists**: Unambiguous, step-by-step homeowner troubleshooting procedures.
- **Automatic `FAQPage` Schema**: Automatically generates valid Schema.org microdata for every question module.

### 2. Nested Schema.org JSON-LD Generators (`src/data/schemas.js`)
- `getBusinessSchema()`: Master entity for `HVACBusiness`, `PlumbingContractor`, and `LocalBusiness` with license verification, operating hours, coordinates, 5.0 Google score rating, and reviews.
- `getLocationBusinessSchema(loc)`: Municipal-level local business schema for regional landing pages.
- `getServiceSchema(service)`: Detailed service and offer catalog microdata.
- `getArticleSchema(article)`: Technical editorial metadata credentialing master qualifiers.
- `getBreadcrumbSchema(items)`: Structured breadcrumb hierarchy for search engine SERP trails.

### 3. Programmatic Clark County Landing Pages (`/locations/:slug`)
Scalable data-driven landing pages for Southern Nevada communities:
- **Henderson & Green Valley** (`/locations/henderson-nv`)
- **Summerlin & The Ridges** (`/locations/summerlin-nv`)
- **North Las Vegas & Aliante** (`/locations/north-las-vegas-nv`)
- **Boulder Highway HQ & Whitney** (`/locations/boulder-hwy-east-lv`)
- **Boulder City** (`/locations/boulder-city-nv`)
- **Mesquite, NV** (`/locations/mesquite-nv`)

Each location page includes municipal climate profiles, assigned technician rosters, verified local rescue testimonials, and covered zip code lookups.

### 4. Technical Knowledge Base (`/knowledge-base`, `/knowledge-base/:slug`)
Deep-dive engineering guides for desert HVAC and plumbing dilemmas:
1. **`desert-ac-capacitor-failure-115f`**: Why AC capacitors fail in 115°F heat, 370V vs 440V American-made upgrades, locked-rotor amperage diagnostics.
2. **`navien-tankless-descaling-clark-county`**: 22-grain hard water caliche precipitation, error codes E001/E003/E012, 5-step food-grade vinegar pump flush protocol.
3. **`seer2-heat-pump-vs-traditional-ac-nevada`**: 2026 Southwest SEER2 regulations, variable-speed inverter modulation, NV Energy $650 instant rebates & IRA 25C tax credits.

### 5. Full 17-Service Catalog Matrix
- **Cooling (6 Services)**: 24/7 Emergency AC Repair, High-Efficiency AC Installation, Precision Tune-Up, Inverter Heat Pumps, Ductless Mini-Splits, Commercial Rooftop Units.
- **Heating (4 Services)**: Emergency Heating Repair, High-Efficiency Gas Furnaces, Safety Tune-Up, Hydronic Boilers.
- **Air Quality & Ductwork (4 Services)**: Custom Duct Design, Attic Duct Replacement, Aeroseal Duct Sealing, HEPA & UV-C Air Purification.
- **Plumbing & Water Heating (3 Services)**: Tankless Water Heater Conversions & Descaling, Traditional Water Heater Repair, Whole-Home Water Softeners.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` or `yarn`

### Installation
```bash
# Clone the repository
git clone https://github.com/mandraxor/passionate-cooling-and-heating.git

# Navigate to project directory
cd passionate-cooling-and-heating

# Install dependencies
npm install
```

### Development
```bash
# Start local development server with HMR
npm run dev
# Or on port 3132
npx vite --port 3132 --host
```
Open [http://localhost:3132](http://localhost:3132) to view the application in your browser.

### Production Build
```bash
# Compile and bundle for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🏢 Business Identity & Credentials

- **Company**: Passionate Cooling & Heating LLC
- **Nevada Contractor License**: #0088935 (HVAC & General Contractor)
- **Certifications**: EPA 608 Universal Certified, NATE Certified
- **Headquarters**: 6672 Boulder Hwy Suite 2, Las Vegas, NV 89122
- **24/7 Emergency Dispatch**: [(702) 858-1211](tel:7028581211)
- **Slogan**: *"When Your A/C Don’t Sing, Give Passionate A Ring!"*
