import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent, PageIconComponent } from './components';
import { PAGE_ROUTES, PAGE_TITLES, PageRoutes, PageTitles } from './types';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, PageIconComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);

  currentPage: PageRoutes = PAGE_ROUTES.all;
  currentPageTitle: PageTitles = PAGE_TITLES.all;
  navOpen = true;

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  navigateTo(page: PageRoutes) {
    this.currentPage = page;
    this.currentPageTitle = PAGE_TITLES[page];

    this.router.navigate([page]);
  }
}
