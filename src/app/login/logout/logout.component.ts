import { Component }             from '@angular/core';
import { Router }                from '@angular/router';
import { AuthenticationService } from '../../_lib/AuthenticationService';

@Component({
    selector: 'app-logout',
    templateUrl: './logout.component.html',
    styleUrls: [ './logout.component.scss' ]
})
export class LogoutComponent {

    public constructor(private router: Router) {

        AuthenticationService.logout();

        router.navigate([ '/login' ]);

        console.log(123);
    }

}
