import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TabComponent, PageLinkComponent } from '../../components';
import { PAGE_TITLES, PageRoutes } from '../../types';
import { HackerNewsService } from '../../services/hacker-news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories',
  imports: [DatePipe, PageLinkComponent, TabComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss',
})
export class StoriesComponent {
  private readonly router = inject(Router);

  readonly path = this.router.url.replace('/', '') as PageRoutes;
  readonly title = PAGE_TITLES[this.path];

  allStories: any[] = [];
  isLoadingStories = true;

  constructor(private readonly service: HackerNewsService) {}

  ngOnInit() {
    this.service.getAllStories('best').subscribe((stories) => {
      this.allStories = stories as any[];
      this.isLoadingStories = false;
    });
  }

  displayDatePassedSince(date: number) {
    return new DatePipe('en-US').transform(date * 1000, 'short');
  }
}
