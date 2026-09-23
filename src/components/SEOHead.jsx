import React, { useEffect } from 'react';
import { SITE_URL } from '../data/schemas';

export default function SEOHead({
  title = "Passionate Cooling & Heating LLC | 24/7 HVAC & Plumbing Las Vegas, NV",
  description = "When Your A/C Don’t Sing, Give Passionate A Ring! 24/7 emergency AC repair, heating, tankless water heaters & ductwork across Clark County & Mesquite, NV. 45-min avg arrival. Lic. #0088935. Call (702) 858-1211.",
  canonicalPath = "",
  ogImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&auto=format&fit=crop&q=80",
  schema = null
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Canonical URL
    const canonicalUrl = canonicalPath.startsWith('http')
      ? canonicalPath
      : `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Update OpenGraph Tags
    const setMetaTag = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:url', canonicalUrl);
    setMetaTag('og:image', ogImage);

    // 5. Inject Structured Data JSON-LD
    const SCRIPT_ID = 'page-jsonld-schema';
    let scriptTag = document.getElementById(SCRIPT_ID);

    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = SCRIPT_ID;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema, null, 2);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Clean up dynamic schema on unmount if needed
      const currentScript = document.getElementById(SCRIPT_ID);
      if (currentScript && schema) {
        // Keeps head clean when switching routes
      }
    };
  }, [title, description, canonicalPath, ogImage, schema]);

  return null;
}
