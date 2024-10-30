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
  },
  {
    path: 'step-3',
    loadComponent: () => import('./pages/step3-dns-issue/step3-dns-issue.component').then(m => m.Step3DnsIssueComponent)
  },
  {
    path: 'step-4',
    loadComponent: () => import('./pages/step4-dns-fixed/step4-dns-fixed.component').then(m => m.Step4DnsFixedComponent)
  },
  {
    path: 'step-5',
    loadComponent: () => import('./pages/step5-cls-issue/step5-cls-issue.component').then(m => m.Step5ClsIssueComponent)
  },
  {
    path: 'step-6',
    loadComponent: () => import('./pages/step6-cls-fixed/step6-cls-fixed.component').then(m => m.Step6ClsFixedComponent)
  },
  {
    path: 'step-7',
    loadComponent: () => import('./pages/step7-image-size-issue/step7-image-size-issue.component').then(m => m.Step7ImageSizeIssueComponent)
  },
  {
    path: 'step-8',
    loadComponent: () => import('./pages/step8-image-size-fixed/step8-image-size-fixed.component').then(m => m.Step8ImageSizeFixedComponent)
  }
];
