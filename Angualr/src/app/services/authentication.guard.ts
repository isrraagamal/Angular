import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from './account.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  let service = inject(AccountService);
  if (service.isLogin()) return service.isLogin();
  else {
    let router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};
