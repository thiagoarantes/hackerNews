import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimeagoModule } from 'ngx-timeago';
import { forkJoin } from 'rxjs';
import { TabComponent, PageLinkComponent } from '../../components';
import { PAGE_TITLES, PageRoutes, Story } from '../../types';
import { HackerNewsService } from '../../services';

@Component({
  selector: 'app-stories-tab',
  imports: [PageLinkComponent, TabComponent, TimeagoModule],
  templateUrl: './stories-tab.component.html',
  styleUrl: './stories-tab.component.scss',
})
export class StoriesTabComponent implements OnInit {
  private readonly router = inject(Router);

  readonly path = this.router.url.replace('/', '') as PageRoutes;
  readonly title = PAGE_TITLES[this.path];

  allStoriesIds: number[] = [];
  allStories: Story[] = [];
  isLoadingStories = true;
  currentPage = 0;

  constructor(private readonly dataService: HackerNewsService) {}

  ngOnInit() {
    this.dataService.getAllStoriesIds(this.path).subscribe((ids) => {
      this.allStoriesIds = ids as number[];
      this.loadNextStoriesPage();
    });
  }

  loadNextStoriesPage() {
    this.isLoadingStories = true;

    const stories = this.dataService.getAllItems(
      this.allStoriesIds,
      this.currentPage
    );

    forkJoin(stories).subscribe((res) => {
      this.allStories.push(...(res as Story[]));
      this.isLoadingStories = false;
      this.currentPage++;
    });
  }
}
