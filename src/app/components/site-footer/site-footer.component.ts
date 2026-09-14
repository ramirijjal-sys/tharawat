import { Component } from '@angular/core';
import { company } from '../../data/content';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
})
export class SiteFooterComponent {
  readonly company = company;
  readonly year = new Date().getFullYear();
}
