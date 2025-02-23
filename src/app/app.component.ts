import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PAGE_ROUTES, PageRoutes } from './types';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);

  currentPage: PageRoutes = PAGE_ROUTES.ALL;
  currentPageTitle = 'All Stories';
  navOpen = true;
  currentYear = new Date().getFullYear();

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  navigateTo(page: PageRoutes) {
    this.currentPage = page;

    const route = this.router.config.find((route) => route.path === page);
    this.currentPageTitle = typeof route?.title === 'string' ? route.title : '';

    this.router.navigate([page]);
  }
}
