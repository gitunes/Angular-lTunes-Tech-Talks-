import { environment } from './../../../environments/environment';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { Router } from '@angular/router';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) {

    }
    get token() {
        return environment.token
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.indexOf(environment.apiUrl + "/login") == 0) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer" + this.token + "DTECH-LTUNES"
                }
            })
        }
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status !== 200) {
                    this.router.navigateByUrl("auth/login")
                }
                return throwError(err)

            })

        )
    }

}