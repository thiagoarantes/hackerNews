import { Routes } from '@angular/router';
import { CommentsComponent, HomeComponent, StoriesTabComponent } from './pages';
import { PAGE_ROUTES, PAGE_TITLES } from './types';

export const routes: Routes = [
  {
    path: PAGE_ROUTES.new,
    title: `${PAGE_TITLES.new} - ${PAGE_TITLES.home}`,
    component: StoriesTabComponent,
  },
  {
    path: PAGE_ROUTES.top,
    title: `${PAGE_TITLES.top} - ${PAGE_TITLES.home}`,
    component: StoriesTabComponent,
  },
  {
    path: PAGE_ROUTES.best,
    title: `${PAGE_TITLES.best} - ${PAGE_TITLES.home}`,
    component: StoriesTabComponent,
  },
  {
    path: PAGE_ROUTES.home,
    title: PAGE_TITLES.home,
    component: HomeComponent,
  },
  {
    path: `${PAGE_ROUTES.comments}/:storyId`,
    title: `${PAGE_TITLES.comments} - ${PAGE_TITLES.home}`,
    component: CommentsComponent,
  },
  { path: '', redirectTo: `/${PAGE_ROUTES.new}`, pathMatch: 'prefix' },
  { path: '**', redirectTo: `/${PAGE_ROUTES.home}` },
];
