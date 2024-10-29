import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro-lifecycle/intro-lifecycle.component').then(m => m.IntroLifecycleComponent)
  },
  {
    path: 'step-1',
    loadComponent: () => import('./pages/step1-ngfor-issue/step1-ngfor-issue.component').then(m => m.Step1NgforIssueComponent)
  },
  {
    path: 'step-2',
    loadComponent: () => import('./pages/step2-ngfor-fixed/step2-ngfor-fixed.component').then(m => m.Step2NgforFixedComponent)
  }
];
