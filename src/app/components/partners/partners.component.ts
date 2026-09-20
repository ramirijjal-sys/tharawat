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

  /** Full-color brand marks via site favicons */
  logoUrl(vendor: PartnerVendor): string {
    return `https://www.google.com/s2/favicons?domain=${vendor.domain}&sz=128`;
  }

  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
