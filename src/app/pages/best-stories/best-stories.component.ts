import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TabComponent, PageLinkComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES } from '../../types';
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'app-best-stories',
  imports: [DatePipe, PageLinkComponent, TabComponent],
  templateUrl: './best-stories.component.html',
  styleUrl: './best-stories.component.scss',
})
export class BestStoriesComponent {
  readonly path = PAGE_ROUTES.best;
  readonly title = PAGE_TITLES.best;

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
