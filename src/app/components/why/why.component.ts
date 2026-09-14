import { Component } from '@angular/core';
import { whyUs } from '../../data/content';

@Component({
  selector: 'app-why',
  standalone: true,
  templateUrl: './why.component.html',
  styleUrl: './why.component.scss',
})
export class WhyComponent {
  readonly whyUs = whyUs;

  indexLabel(index: number): string {
    return String(index + 1).padStart(2, '0');
  }
}
