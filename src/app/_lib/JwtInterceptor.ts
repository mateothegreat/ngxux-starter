import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './AuthenticationService';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (AuthenticationService.isLoggedIn()) {

            request = request.clone({

                setHeaders: {

                    Authorization: `Bearer ${AuthenticationService.getToken()}`

                }

            });

        }

        return next.handle(request);

    }

}
