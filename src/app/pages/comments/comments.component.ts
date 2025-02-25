import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
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
export class CommentsComponent {
  private readonly router = inject(Router);

  readonly path = PAGE_ROUTES.comments;

  title = PAGE_TITLES.comments;
  isLoadingStory = true;
  story: Story = {} as Story;

  constructor(private readonly dataService: HackerNewsService) {}

  ngOnInit() {
    this.loadNextStoriesPage();
  }

  loadNextStoriesPage() {
    this.isLoadingStory = true;

    this.dataService.getStory(43163011).subscribe((res) => {
      this.isLoadingStory = false;
      this.story = res as Story;
      this.title += ` - ${(res as Story).title}`;
    });
  }
}
