import { Component, input, OnInit } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';
import { HtmlToPlainTextPipe } from '../../pipes/html-to-plain-text.pipe';
import { Comment } from '../../types';
import { HackerNewsService } from '../../services';
import { PageLinkComponent } from '../page-link/page-link.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-comment',
  imports: [
    HtmlToPlainTextPipe,
    PageLinkComponent,
    LoadingComponent,
    TimeagoModule,
    LoadingComponent,
  ],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnInit {
  readonly commentId = input.required<number>();
  readonly censoredComments = [undefined, '[flagged]', '[dead]'];

  isLoadingComment = true;
  isInvalidComment = false;
  comment: Comment = {} as Comment;

  protected showReplies = false;

  constructor(private readonly dataService: HackerNewsService) {}

  ngOnInit() {
    this.loadComment();
  }

  loadComment() {
    this.isLoadingComment = true;

    this.dataService.getItem(this.commentId()).subscribe((res) => {
      this.comment = res as Comment;
      this.isInvalidComment = this.censoredComments.includes(this.comment.text);
      this.isLoadingComment = false;
    });
  }

  toggleReplies() {
    this.showReplies = !this.showReplies;
  }
}
