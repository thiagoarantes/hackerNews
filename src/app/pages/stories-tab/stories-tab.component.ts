import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TabComponent, PageLinkComponent } from '../../components';
import { PAGE_TITLES, PageRoutes } from '../../types';
import { HackerNewsService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-tab',
  imports: [DatePipe, PageLinkComponent, TabComponent],
  templateUrl: './stories-tab.component.html',
  styleUrl: './stories-tab.component.scss',
})
export class StoriesTabComponent {
  private readonly router = inject(Router);

  readonly path = this.router.url.replace('/', '') as PageRoutes;
  readonly title = PAGE_TITLES[this.path];

  allStories: any[] = [];
  isLoadingStories = true;
  currentPage = 0;

  constructor(private readonly service: HackerNewsService) {}

  ngOnInit() {
    this.service
      .getAllStories(this.path, this.currentPage)
      .subscribe((stories) => {
        this.allStories = stories as any[];
        this.isLoadingStories = false;
      });
  }
}
