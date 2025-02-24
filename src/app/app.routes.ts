import { Routes } from '@angular/router';
import { HomeComponent, StoriesComponent } from './pages';
import { PAGE_ROUTES, PAGE_TITLES } from './types';

export const routes: Routes = [
  {
    path: PAGE_ROUTES.new,
    title: `${PAGE_TITLES.new} - Hacker News`,
    component: StoriesComponent,
  },
  {
    path: PAGE_ROUTES.top,
    title: `${PAGE_TITLES.top} - Hacker News`,
    component: StoriesComponent,
  },
  {
    path: PAGE_ROUTES.best,
    title: `${PAGE_TITLES.best} - Hacker News`,
    component: StoriesComponent,
  },
  {
    path: PAGE_ROUTES.home,
    title: PAGE_TITLES.home,
    component: HomeComponent,
  },
  { path: '', redirectTo: `/${PAGE_ROUTES.new}`, pathMatch: 'full' },
];
