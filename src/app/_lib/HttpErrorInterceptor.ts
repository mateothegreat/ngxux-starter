import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable }                                                              from '@angular/core';
import { ToastrService }                                                           from 'ngx-toastr';
import { Observable }                                                              from 'rxjs';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/retry';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    public constructor(private toastr: ToastrService) {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).catch((err: HttpErrorResponse) => {

            if (err.error instanceof Error) {

                // A client-side or network error occurred. Handle it accordingly.
                console.error('An error occurred:', err.error.message);

                this.toastr.error(err.error.message, 'An error has occurred');

            } else {

                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error(`Backend returned code ${ err.status }, body was: ${ JSON.stringify(err.error) }`);

                this.toastr.error(err.error.message, 'An error has occurred');

            }

            // ...optionally return a default fallback value so app can continue (pick one)
            // which could be a default value (which has to be a HttpResponse here)
            // return Observable.of(new HttpResponse({body: [{name: "Default value..."}]}));
            // or simply an empty observable
            return Observable.empty();

        });

    }

}
