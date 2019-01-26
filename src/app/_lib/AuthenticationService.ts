import { Injectable }       from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject }          from 'rxjs';
import { APIClient }        from './APIClient';
import { RequestResult }    from './RequestResult';

@Injectable({ providedIn: 'root' })
export class AuthenticationService extends APIClient<any> {

    public static parseToken(jwtToken: string): any {

        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(jwtToken);
        const expirationDate = helper.getTokenExpirationDate(jwtToken);
        const isExpired = helper.isTokenExpired(jwtToken);

        console.log(helper);

        console.log(decodedToken);
        console.log(expirationDate);
        console.log(isExpired);

    }

    public static getToken(): string {

        return localStorage.getItem('token');

    }

    public static isLoggedIn(): boolean {

        const helper = new JwtHelperService();

        const token: string = localStorage.getItem('token');

        if (token) {

            return !helper.isTokenExpired(token);

        }

    }

    public isLoggedIn(): boolean {

        const helper = new JwtHelperService();

        const token: string = localStorage.getItem('token');

        if (token) {

            return !helper.isTokenExpired(token);

        }

    }

    public login(email: string, password: string): any {

        localStorage.removeItem('token');

        let subject: Subject<RequestResult<any> | boolean> = new Subject();

        this.post<any>(`users/login`, {

            email,
            password

        }).subscribe((result: any) => {

            if (!RequestResult.isError(result)) {

                localStorage.setItem('token', result.message);

            }

            subject.next(result);

        });

        return subject;

    }

    public static logout() {

        AuthenticationService.clear();

    }

    public static clear(): void {

        localStorage.removeItem('token');

    }

}
