import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeagoModule } from 'ngx-timeago';
import { TabComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES, Story } from '../../types';
import { HackerNewsService } from '../../services';

@Component({
  selector: 'app-comments',
  imports: [TabComponent, TimeagoModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  private readonly router = inject(Router);

  readonly path = PAGE_ROUTES.comments;

  title = PAGE_TITLES.comments;
  isLoadingStory = true;
  story: Story = {} as Story;

  storyId: number = 0;

  constructor(
    private readonly dataService: HackerNewsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.storyId = params['storyId'];
      this.loadNextStoriesPage();
    });
  }

  loadNextStoriesPage() {
    this.isLoadingStory = true;

    this.dataService.getStory(this.storyId).subscribe((res) => {
      this.isLoadingStory = false;
      this.story = res as Story;
      this.title += ` - ${(res as Story).title}`;
    });
  }
}
