import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent, PageIconComponent } from './components';
import { PAGE_ROUTES, PageRoutes } from './types';
import { PageStateService } from './services';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, PageIconComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);

  navOpen = true;

  constructor(readonly pageService: PageStateService) {}

  ngOnInit() {
    const splittedUrl = window.location.pathname.split('/');
    const path = splittedUrl[splittedUrl.length - 1] || PAGE_ROUTES.new;

    this.pageService.setCurrentPage(path as PageRoutes);
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  navigateTo(page: PageRoutes) {
    this.pageService.setCurrentPage(page);
    this.router.navigate([page]);
  }
}
