import { Component, OnDestroy, OnInit } from '@angular/core';
import { company } from '../../data/content';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly company = company;

  readonly frames = [
    'assets/images/hero/frame-01.jpg',
    'assets/images/hero/frame-02.jpg',
    'assets/images/hero/frame-03.jpg',
    'assets/images/hero/frame-04.jpg',
  ];

  active = 0;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.active = (this.active + 1) % this.frames.length;
    }, 5500);
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
