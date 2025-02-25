import { Injectable, signal } from '@angular/core';
import { PAGE_ROUTES, PageRoutes } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PageStateService {
  private readonly currentPage = signal<PageRoutes>(PAGE_ROUTES.new);

  setCurrentPage(page: PageRoutes) {
    this.currentPage.update(() => page);
  }

  getCurrentPage() {
    return this.currentPage;
  }
}
