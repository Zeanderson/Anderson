import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Resume } from './pages/resume/resume';
import { Gatemate } from './pages/gatemate/gatemate';
import { LasorTag } from './pages/lasor-tag/lasor-tag';
import { NutritionTracker } from './pages/nutrition-tracker/nutrition-tracker';

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
  {
    path: 'gatemate',
    component: Gatemate,
    title: 'Project: Gatemate details',
  },
  {
    path: 'lasor-tag',
    component: LasorTag,
    title: 'Project: LasorTag details',
  },
  {
    path: 'nutrition-tracker',
    component: NutritionTracker,
    title: 'Project: NutritionTracker details',
  },
];
