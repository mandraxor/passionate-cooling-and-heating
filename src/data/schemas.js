import { BUSINESS_INFO } from './hours';
import { REVIEW_METRICS, REVIEWS } from './reviews';

export const SITE_URL = "https://passionatehvaclv.com";

/**
 * Master LocalBusiness / HVACBusiness / PlumbingContractor Schema
 */
export function getBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "PlumbingContractor", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    "name": BUSINESS_INFO.name,
    "alternateName": "Passionate HVAC",
    "slogan": BUSINESS_INFO.slogan,
    "description": "Las Vegas's premier 24/7/365 emergency HVAC, cooling, heating, ductwork, and plumbing contractor. Licensed NV Contractor #0088935, EPA 608 Universal Certified, with a 45-minute average dispatch across Clark County and Mesquite, NV.",
    "url": SITE_URL,
    "telephone": BUSINESS_INFO.phone,
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Financing, Check",
    "logo": `${SITE_URL}/logo.png`,
    "image": [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6672 Boulder Hwy Suite 2",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "postalCode": "89122",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.1445953,
      "longitude": -115.0999611
    },
    "hasMap": BUSINESS_INFO.mapsUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": REVIEW_METRICS.rating,
      "reviewCount": REVIEW_METRICS.totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": REVIEWS.slice(0, 5).map(rev => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": rev.name
      },
      "datePublished": "2026-08-01",
      "reviewBody": rev.review,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": rev.rating.toString(),
        "bestRating": "5"
      }
    })),
    "areaServed": [
      {
        "@type": "City",
        "name": "Las Vegas"
      },
      {
        "@type": "City",
        "name": "Henderson"
      },
      {
        "@type": "City",
        "name": "North Las Vegas"
      },
      {
        "@type": "City",
        "name": "Summerlin"
      },
      {
        "@type": "City",
        "name": "Boulder City"
      },
      {
        "@type": "City",
        "name": "Mesquite"
      },
      {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 36.1445953,
          "longitude": -115.0999611
        },
        "geoRadius": "85000"
      }
    ],
    "identifier": {
      "@type": "PropertyValue",
      "name": "Nevada State Contractors Board License",
      "value": BUSINESS_INFO.licenseNumber
    },
    "knowsAbout": [
      "Emergency AC Repair",
      "Heat Pump Installation",
      "Tankless Water Heater Descaling",
      "Aeroseal Duct Leak Sealing",
      "Whole-Home Water Softeners",
      "Gas Furnace Repair",
      "Mini-Split Zoning Systems"
    ]
  };
}

/**
 * FAQPage Schema Generator
 * @param {Array<{ question: string, answer: string }>} qaList
 */
export function getFAQSchema(qaList) {
  if (!qaList || qaList.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": qaList.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof item.answer === 'string' ? item.answer : item.directAnswer || item.answer
      }
    }))
  };
}

/**
 * Service Schema Generator
 */
export function getServiceSchema(service) {
  if (!service) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": ["HVACBusiness", "PlumbingContractor"],
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "url": SITE_URL
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Clark County, Nevada"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "price": "0.00",
      "priceValidUntil": "2027-12-31",
      "description": "$0 Diagnostic with Completed Repair & Free In-Home Replacement Estimates"
    },
    "termsOfService": `${SITE_URL}/terms`,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.categoryName || "HVAC & Plumbing Services"
    }
  };
}

/**
 * BreadcrumbList Schema Generator
 * @param {Array<{ name: string, url: string }>} items
 */
export function getBreadcrumbSchema(items) {
  if (!items || items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}

/**
 * BlogPosting / Article Schema Generator
 */
export function getArticleSchema(article) {
  if (!article) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": article.coverImage || `${SITE_URL}/og-default.jpg`,
    "datePublished": article.publishDate,
    "dateModified": article.modifiedDate || article.publishDate,
    "author": {
      "@type": "Person",
      "name": article.author?.name || "Jason Curtis Roden",
      "jobTitle": "Licensed HVAC & Plumbing Qualifier",
      "worksFor": {
        "@type": "Organization",
        "name": BUSINESS_INFO.name
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": BUSINESS_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/knowledge-base/${article.slug}`
    }
  };
}

/**
 * Localized HVAC & Plumbing Business Schema Generator
 * Custom-tailored for each Clark County local landing page
 */
export function getLocationBusinessSchema(loc) {
  if (!loc) return null;
  return {
    "@context": "https://schema.org",
    "@type": ["HVACBusiness", "PlumbingContractor", "LocalBusiness"],
    "@id": `${SITE_URL}/locations/${loc.slug}#localBusiness`,
    "name": `${BUSINESS_INFO.name} - ${loc.city}, NV Dispatch`,
    "alternateName": `Passionate HVAC ${loc.city}`,
    "url": `${SITE_URL}/locations/${loc.slug}`,
    "telephone": BUSINESS_INFO.phone,
    "description": loc.metaDescription,
    "priceRange": "$$",
    "currenciesAccepted": "USD",
    "paymentAccepted": "Cash, Credit Card, Financing, Check",
    "image": [
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6672 Boulder Hwy Suite 2",
      "addressLocality": loc.city || "Las Vegas",
      "addressRegion": "NV",
      "postalCode": loc.zipCodes?.[0] || "89122",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": loc.city
      },
      ...(loc.landmarks || []).map(landmark => ({
        "@type": "Place",
        "name": `${landmark}, ${loc.city}, NV`
      }))
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 36.1445953,
        "longitude": -115.0999611
      },
      "geoRadius": "45000"
    },
    "identifier": {
      "@type": "PropertyValue",
      "name": "Nevada State Contractors Board License",
      "value": BUSINESS_INFO.licenseNumber
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Emergency HVAC & Plumbing Services in ${loc.city}, NV`,
      "itemListElement": (loc.serviceHighlights || []).map((highlight, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": highlight
        }
      }))
    }
  };
}

