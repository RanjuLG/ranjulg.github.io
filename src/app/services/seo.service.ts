import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PROFILE_CONFIG } from '../config/profile.config';

export interface SeoConfig {
  title: string;
  description: string;
  image?: string;
  slug?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly defaultImage = 'assets/images/og-image.jpg'; // Placeholder
  private readonly siteName = PROFILE_CONFIG.seo.siteName;
  private readonly baseUrl = PROFILE_CONFIG.urls.baseUrl;

  constructor(private title: Title, private meta: Meta) { }

  updateMetaTags(config: SeoConfig): void {
    // Update Title
    const pageTitle = `${config.title} | ${this.siteName}`;
    const pageUrl = this.buildPageUrl(config.slug);
    this.title.setTitle(pageTitle);

    // Update Meta Tags
    this.meta.updateTag({ name: 'description', content: config.description });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image || this.defaultImage });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image || this.defaultImage });

    // Crawl directives and canonical URL
    this.meta.updateTag({ name: 'robots', content: 'index,follow,max-image-preview:large' });
    this.updateCanonicalTag(pageUrl);
  }

  private buildPageUrl(slug?: string): string {
    const normalizedBaseUrl = this.baseUrl.replace(/\/$/, '');
    const normalizedSlug = (slug || '').replace(/^\//, '').trim();
    return normalizedSlug ? `${normalizedBaseUrl}/${normalizedSlug}` : normalizedBaseUrl;
  }

  private updateCanonicalTag(url: string): void {
    const selector = 'link[rel="canonical"]';
    let linkElement = document.querySelector(selector) as HTMLLinkElement | null;

    if (!linkElement) {
      linkElement = document.createElement('link');
      linkElement.setAttribute('rel', 'canonical');
      document.head.appendChild(linkElement);
    }

    linkElement.setAttribute('href', url);
  }
}
