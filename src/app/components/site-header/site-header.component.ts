import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  standalone: true,
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
})
export class SiteHeaderComponent implements OnInit {
  menuOpen = false;
  scrolled = false;

  readonly links = [
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#factory', label: 'المصنع الرقمي' },
    { href: '#partners', label: 'شركاؤنا' },
    { href: '#contact', label: 'تواصل' },
  ];

  ngOnInit(): void {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateScrollState();
  }

  private updateScrollState(): void {
    this.scrolled = window.scrollY > 24;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
