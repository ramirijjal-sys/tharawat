import { Component } from '@angular/core';
import { company, partners, whyUs } from '../../data/content';

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
}
