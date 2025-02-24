import { Component } from '@angular/core';
import { TabComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES } from '../../types';
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'app-top-stories',
  imports: [TabComponent],
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.scss',
})
export class TopStoriesComponent {
  readonly path = PAGE_ROUTES.top;
  readonly title = PAGE_TITLES.top;

  allStories: any[] = [];
  isLoadingStories = true;

  constructor(private readonly service: HackerNewsService) {}

  ngOnInit() {
    this.service.getAllStories('top').subscribe((stories) => {
      this.allStories = stories as any[];
      this.isLoadingStories = false;
    });
  }
}
