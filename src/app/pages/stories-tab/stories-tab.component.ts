import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TabComponent, PageLinkComponent } from '../../components';
import { PAGE_TITLES, PageRoutes, Story } from '../../types';
import { HackerNewsService } from '../../services';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

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

  allStoriesIds: number[] = [];
  allStories: Story[] = [];
  isLoadingStories = true;
  currentPage = 0;

  constructor(private readonly service: HackerNewsService) {}

  ngOnInit() {
    this.service.getAllStoriesIds(this.path).subscribe((ids) => {
      this.allStoriesIds = ids as number[];
      this.loadStoriesPage(this.currentPage);
    });
  }

  loadStoriesPage(page: number) {
    this.isLoadingStories = true;
    this.currentPage = page;

    const stories = this.service.getAllStories(this.allStoriesIds, page);

    forkJoin(stories).subscribe((res) => {
      this.allStories.push(...(res as Story[]));
      this.isLoadingStories = false;
    });
  }
}
