import { Component } from '@angular/core';
import { investment, services } from '../../data/content';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  readonly services = services;
  readonly investment = investment;
  activeId = services[0].id;

  select(id: string): void {
    this.activeId = id;
  }

  get active() {
    return this.services.find((s) => s.id === this.activeId) ?? this.services[0];
  }
}
