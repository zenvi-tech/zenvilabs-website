import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  articleTags?: string[];
}

const SEOHead = ({
  title = "ZenviLabs - AI Solutions for Energy Innovation",
  description = "ZenviLabs delivers cutting-edge AI and machine learning solutions for the energy sector.",
  keywords = "AI, machine learning, energy sector, renewable energy, data science",
  ogTitle,
  ogDescription,
  ogImage = "https://zenvilabs.com/assets/zenvi-team.png",
  ogType = "website",
  canonicalUrl,
  author = "Zenvi Labs",
  publishedDate,
  modifiedDate,
  articleTags
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        const attributes = selector.match(/\[([^=]+)="([^"]+)"\]/);
        if (attributes) {
          element.setAttribute(attributes[1], attributes[2]);
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Update meta tags
    updateMetaTag('meta[name="description"]', description);
    updateMetaTag('meta[name="keywords"]', keywords);
    updateMetaTag('meta[name="author"]', author);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', ogTitle || title);
    updateMetaTag('meta[property="og:description"]', ogDescription || description);
    updateMetaTag('meta[property="og:image"]', ogImage);
    updateMetaTag('meta[property="og:type"]', ogType);

    if (canonicalUrl) {
      updateMetaTag('meta[property="og:url"]', canonicalUrl);

      // Update canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonicalUrl;
    }

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:title"]', ogTitle || title);
    updateMetaTag('meta[name="twitter:description"]', ogDescription || description);
    updateMetaTag('meta[name="twitter:image"]', ogImage);

    // Add article-specific meta tags if it's a blog post
    if (ogType === 'article') {
      if (publishedDate) {
        updateMetaTag('meta[property="article:published_time"]', publishedDate);
      }
      if (modifiedDate) {
        updateMetaTag('meta[property="article:modified_time"]', modifiedDate);
      }
      if (articleTags && articleTags.length > 0) {
        articleTags.forEach(tag => {
          const tagElement = document.createElement('meta');
          tagElement.setAttribute('property', 'article:tag');
          tagElement.content = tag;
          document.head.appendChild(tagElement);
        });
      }
    }

    // Add JSON-LD structured data for articles
    if (ogType === 'article') {
      const scriptId = 'article-structured-data';
      let scriptElement = document.getElementById(scriptId);

      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }

      const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": ogImage,
        "author": {
          "@type": "Organization",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "ZenviLabs",
          "logo": {
            "@type": "ImageObject",
            "url": "https://zenvilabs.com/assets/favicon.png"
          }
        },
        "datePublished": publishedDate,
        "dateModified": modifiedDate || publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonicalUrl
        }
      };

      scriptElement.textContent = JSON.stringify(structuredData);
    }

    // Cleanup function to reset to defaults when component unmounts
    return () => {
      document.title = "ZenviLabs - AI Solutions for Energy Innovation";
      updateMetaTag('meta[name="description"]', "ZenviLabs delivers cutting-edge AI and machine learning solutions for the energy sector.");

      // Remove article-specific tags
      const articleTags = document.querySelectorAll('meta[property="article:tag"]');
      articleTags.forEach(tag => tag.remove());

      const articleStructuredData = document.getElementById('article-structured-data');
      if (articleStructuredData) {
        articleStructuredData.remove();
      }
    };
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogType, canonicalUrl, author, publishedDate, modifiedDate, articleTags]);

  return null;
};

export default SEOHead;