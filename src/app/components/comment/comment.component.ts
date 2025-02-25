import { Component, input, OnInit } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';
import { HtmlToPlainTextPipe } from '../../pipes/html-to-plain-text.pipe';
import { Comment } from '../../types';
import { HackerNewsService } from '../../services';
import { PageLinkComponent } from '../page-link/page-link.component';

@Component({
  selector: 'app-comment',
  imports: [HtmlToPlainTextPipe, PageLinkComponent, TimeagoModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnInit {
  readonly commentId = input.required<number>();
  readonly censoredComments = [undefined, '[flagged]', '[dead]'];

  isLoadingComment = true;
  comment: Comment = {} as Comment;
  isCensoredComment = false;

  protected showReplies = false;

  constructor(private readonly dataService: HackerNewsService) {}

  ngOnInit() {
    this.loadComment();
  }

  loadComment() {
    this.isLoadingComment = true;

    this.dataService.getItem(this.commentId()).subscribe((res) => {
      this.comment = res as Comment;
      this.isCensoredComment = this.censoredComments.includes(
        this.comment.text
      );
      this.isLoadingComment = false;
    });
  }
}
