import { Injectable }          from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIClient }           from '../_lib/APIClient';

@Injectable({
    providedIn: 'root'
})
export class LoginService extends APIClient<any> {

    public login(email: string, password: string): Observable<any> {

        let subject: Subject<any> = new Subject();

        this.post('users/login', {

            email,
            password

        }).subscribe((user: any) => {


            console.log(user);

        });

        return subject;

    }

}

