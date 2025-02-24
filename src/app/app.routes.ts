import { Routes } from '@angular/router';
import {
  AllStoriesComponent,
  HomeComponent,
  BestStoriesComponent,
  TopStoriesComponent,
} from './pages';
import { PAGE_ROUTES, PAGE_TITLES } from './types';

export const routes: Routes = [
  {
    path: PAGE_ROUTES.all,
    title: `${PAGE_TITLES.all} - Hacker News`,
    component: AllStoriesComponent,
  },
  {
    path: PAGE_ROUTES.top,
    title: `${PAGE_TITLES.top} - Hacker News`,
    component: TopStoriesComponent,
  },
  {
    path: PAGE_ROUTES.best,
    title: `${PAGE_TITLES.best} - Hacker News`,
    component: BestStoriesComponent,
  },
  {
    path: PAGE_ROUTES.home,
    title: PAGE_TITLES.home,
    component: HomeComponent,
  },
  { path: '', redirectTo: `/${PAGE_ROUTES.all}`, pathMatch: 'full' },
];
