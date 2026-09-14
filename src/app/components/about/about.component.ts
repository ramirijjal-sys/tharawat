import { Component } from '@angular/core';
import { company, highlights, pillars } from '../../data/content';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly company = company;
  readonly highlights = highlights;
  readonly pillars = pillars;

  indexLabel(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
