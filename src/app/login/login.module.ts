import { CommonModule }        from '@angular/common';
import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';
import { NgxuxMatLoginModule } from '@ngxux/ngxux-mat-login';
import { LoginComponent }      from './login.component';
import { LogoutComponent }     from './logout/logout.component';

@NgModule({

    declarations: [

        LoginComponent,
        LogoutComponent,

    ],

    imports: [

        CommonModule,

        RouterModule.forChild([

            {

                path: 'login',
                component: LoginComponent

            }, {

                path: 'logout',
                component: LogoutComponent

            }

        ]),

        NgxuxMatLoginModule,

    ],

    exports: [

        LoginComponent

    ]

})
export class LoginModule {
}
