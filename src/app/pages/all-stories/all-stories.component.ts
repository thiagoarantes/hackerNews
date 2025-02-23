import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TabComponent } from '../../components';

@Component({
  selector: 'app-all-stories',
  imports: [TabComponent],
  templateUrl: './all-stories.component.html',
  styleUrl: './all-stories.component.scss',
})
export class AllStoriesComponent {
  private readonly router = inject(Router);

  readonly path = this.router.url.replace('/', '');
  readonly title = this.router.config.find((route) => route.path === this.path)
    ?.title;
}
