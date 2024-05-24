import { CanActivateFn } from '@angular/router';

export const adminComponentGuard: CanActivateFn = (route, state) => {
  return route.url[0].path === 'admin';
};
