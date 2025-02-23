import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TabComponent } from '../../components';

@Component({
  selector: 'app-top-stories',
  imports: [TabComponent],
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.scss',
})
export class TopStoriesComponent {
  private readonly router = inject(Router);

  readonly path = this.router.url.replace('/', '');
  readonly title = this.router.config.find((route) => route.path === this.path)
    ?.title;
}
