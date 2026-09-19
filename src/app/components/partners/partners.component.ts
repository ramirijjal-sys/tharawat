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
    return `https://cdn.simpleicons.org/${vendor.slug}/3b5766`;
  }

  onLogoError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }
}
