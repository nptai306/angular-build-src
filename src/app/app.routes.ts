import { Routes } from '@angular/router';
import { authChildGuard, authGuard } from '@guards/auth.guard';
import { Layout } from '@shared/constant/layout';
export const routes: Routes = [
  {
    path: 'auth',
    data: { layout: Layout.AUTH_LAYOUT },
    loadComponent: () => import('./layouts/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('@pages/sign-in/sign-in.component').then((m) => m.SignInComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('@pages/sign-up/sign-up.component').then((m) => m.SignUpComponent),
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    data: { layout: Layout.DASHBOARD_LAYOUT },
    loadComponent: () => import('./layouts/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'user-management',
        loadComponent: () =>
          import('@pages/user-management/user-management.component').then((m) => m.UserManagementComponent),
      },
    ],
  },
  { path: '**', redirectTo: 'error/404' },
];
