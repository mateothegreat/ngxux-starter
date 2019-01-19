import { Injectable }                                                       from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService }                                            from './AuthenticationService';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    public constructor(private router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (AuthenticationService.isLoggedIn()) {

            return true;

        } else {

            this.router.navigate([ '/login' ], { queryParams: { returnUrl: state.url } });

            return false;
        }

    }

}
