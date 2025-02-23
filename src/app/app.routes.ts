import { Routes } from '@angular/router';
import {
  AllStoriesComponent,
  BestStoriesComponent,
  TopStoriesComponent,
} from './pages';

export const routes: Routes = [
  {
    path: 'all',
    title: 'All Stories',
    component: AllStoriesComponent,
  },
  {
    path: 'top',
    title: 'Top Stories',
    component: TopStoriesComponent,
  },
  {
    path: 'best',
    title: 'Best Stories',
    component: BestStoriesComponent,
  },
  { path: '', redirectTo: '/all', pathMatch: 'full' },
];
