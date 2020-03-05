import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        console.log(next);

        if (this.auth.isAuthenticated()) {
            console.log('Paso el guard');
            return true;
        } else {
            console.error('Bloqueado por el guard');
            return false;
        }
    }

}
