import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeagoModule } from 'ngx-timeago';
import { forkJoin } from 'rxjs';
import { TabComponent } from '../../components';
import { Comment, PAGE_ROUTES, PAGE_TITLES, Story } from '../../types';
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
  storyId: number = 0;
  story: Story = {} as Story;
  allComments: Comment[] = [];

  constructor(
    private readonly dataService: HackerNewsService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.storyId = params['storyId'];
      this.loadComments();
    });
  }

  loadComments() {
    this.isLoadingStory = true;

    this.dataService.getStory(this.storyId).subscribe((res) => {
      this.story = res as Story;
      this.title += ` - ${(res as Story).title}`;

      const comments = this.dataService.getAllItems(this.story.kids);

      forkJoin(comments).subscribe((res) => {
        this.allComments = res as Comment[];
        this.isLoadingStory = false;

        console.log(this.allComments);
      });
    });
  }
}
