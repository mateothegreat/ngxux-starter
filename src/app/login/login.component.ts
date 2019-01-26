import { Component }             from '@angular/core';
import { Router }                from '@angular/router';
import { ToastrService }         from 'ngx-toastr';
import { AuthenticationService } from '../_lib/AuthenticationService';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent {

    public constructor(private toastrService: ToastrService,
                       private route: Router,
                       private authenticationService: AuthenticationService) {
    }

    public onLoginClick(obj: any): void {

        this.authenticationService.login(obj.email, obj.password).subscribe((result: boolean) => {

            if (result) {

                this.route.navigate([ '/' ]);

            } else {

                this.toastrService.error('You\'ve entered an invalid email address or password. Please try again..');

            }

        });

    }

}
