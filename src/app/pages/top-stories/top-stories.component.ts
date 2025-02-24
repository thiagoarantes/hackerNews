import { Component } from '@angular/core';
import { TabComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES } from '../../types';

@Component({
  selector: 'app-top-stories',
  imports: [TabComponent],
  templateUrl: './top-stories.component.html',
  styleUrl: './top-stories.component.scss',
})
export class TopStoriesComponent {
  readonly path = PAGE_ROUTES.top;
  readonly title = PAGE_TITLES.top;
}
