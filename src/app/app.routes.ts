import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Resume } from './pages/resume/resume';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home page',
  },
  {
    path: 'resume',
    component: Resume,
    title: 'Resume details',
  },
];
