import { Component, inject } from '@angular/core';
import { TabComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES } from '../../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  imports: [TabComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent {
  private readonly router = inject(Router);

  readonly path = PAGE_ROUTES.comments;
  readonly title = PAGE_TITLES.comments;
}
