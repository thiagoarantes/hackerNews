import { Component } from '@angular/core';
import { TabComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES } from '../../types';

@Component({
  selector: 'app-best-stories',
  imports: [TabComponent],
  templateUrl: './best-stories.component.html',
  styleUrl: './best-stories.component.scss',
})
export class BestStoriesComponent {
  readonly path = PAGE_ROUTES.best;
  readonly title = PAGE_TITLES.best;
}
