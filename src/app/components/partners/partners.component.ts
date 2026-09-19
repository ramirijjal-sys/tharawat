import { Component } from '@angular/core';
import { company, partners, PartnerVendor, whyUs } from '../../data/content';

@Component({
  selector: 'app-partners',
  standalone: true,
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss',
})
export class PartnersComponent {
  readonly company = company;
  readonly partners = partners;
  readonly whyUs = whyUs;

  logoUrl(vendor: PartnerVendor): string {
    if (vendor.slug) {
      return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${vendor.slug}.svg`;
    }
    return this.faviconUrl(vendor);
  }

  faviconUrl(vendor: PartnerVendor): string {
    return `https://www.google.com/s2/favicons?domain=${vendor.domain}&sz=128`;
  }

  onLogoError(event: Event, vendor: PartnerVendor): void {
    const img = event.target as HTMLImageElement;
    const fallback = this.faviconUrl(vendor);
    if (img.src !== fallback && !img.src.includes('s2/favicons')) {
      img.src = fallback;
      return;
    }
    img.style.display = 'none';
  }
}
