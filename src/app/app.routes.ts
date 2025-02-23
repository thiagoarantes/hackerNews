import { Routes } from '@angular/router';
import { AllStoriesComponent } from './pages/all-stories/all-stories.component';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { BestStoriesComponent } from './pages/best-stories/best-stories.component';

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
