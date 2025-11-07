import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanActivateChildFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

function isAuthenticated(): boolean {
  // TODO: replace with real auth check
  return true;
}

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);

  const allowed = isAuthenticated();
  if (allowed) return true;

  // If not allowed, redirect to sign-in page
  return router.parseUrl('/auth/sign-in') as UrlTree;
};

export const authChildGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return authGuard(childRoute, state);
};
