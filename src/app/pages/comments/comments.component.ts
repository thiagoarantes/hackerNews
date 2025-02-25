import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeagoModule } from 'ngx-timeago';
import {
  CommentComponent,
  PageLinkComponent,
  TabComponent,
} from '../../components';
import { PAGE_ROUTES, PAGE_TITLES, Story } from '../../types';
import { HackerNewsService } from '../../services';

@Component({
  selector: 'app-comments',
  imports: [CommentComponent, PageLinkComponent, TabComponent, TimeagoModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  private readonly router = inject(Router);

  readonly path = PAGE_ROUTES.comments;

  title = PAGE_TITLES.comments;
  isLoadingStory = true;
  storyId: number = 0;
  story: Story = {} as Story;

  protected showComments = true;

  constructor(
    private readonly dataService: HackerNewsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.storyId = params['storyId'];
      this.loadStory();
    });
  }

  loadStory() {
    this.isLoadingStory = true;

    this.dataService.getItem(this.storyId).subscribe((res) => {
      this.story = res as Story;
      this.title += ` - ${(res as Story).title}`;
      this.isLoadingStory = false;
    });
  }
}
