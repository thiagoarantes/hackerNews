import { Component } from '@angular/core';
import { TabComponent } from '../../components';
import { PAGE_ROUTES, PAGE_TITLES } from '../../types';

@Component({
  selector: 'app-all-stories',
  imports: [TabComponent],
  templateUrl: './all-stories.component.html',
  styleUrl: './all-stories.component.scss',
})
export class AllStoriesComponent {
  readonly path = PAGE_ROUTES.all;
  readonly title = PAGE_TITLES.all;
}
