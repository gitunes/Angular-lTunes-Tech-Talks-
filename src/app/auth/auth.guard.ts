
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../core/services/auth.service";

@Injectable()

export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let authStatus = false
        
        this.authService.user.subscribe(res => {
            authStatus = res.isLoggedIn
        })
        if (!authStatus) {
            this.router.navigate(['auth/login']);
        }
        return authStatus;
    }

}