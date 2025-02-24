import { Component } from '@angular/core';
import { TabComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES } from '../../types';
import { HackerNewsService } from '../../services/hacker-news.service';

@Component({
  selector: 'app-all-stories',
  imports: [TabComponent],
  templateUrl: './all-stories.component.html',
  styleUrl: './all-stories.component.scss',
})
export class AllStoriesComponent {
  readonly path = PAGE_ROUTES.all;
  readonly title = PAGE_TITLES.all;

  allStories: any[] = [];
  isLoadingStories = true;

  constructor(private readonly service: HackerNewsService) {}

  ngOnInit() {
    this.service.getAllStories().subscribe((stories) => {
      this.allStories = stories as any[];
      this.isLoadingStories = false;
    });
  }
}
