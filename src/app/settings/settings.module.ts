import { CommonModule }            from '@angular/common';
import { NgModule }                from '@angular/core';
import { RouterModule }            from '@angular/router';
import { NgxuxMatHeaderNavModule } from '@ngxux/ngxux-mat-header-nav';
import { SharedModule }            from '../shared/shared.module';
import { SettingsComponent }       from './settings.component';

@NgModule({

    declarations: [

        SettingsComponent

    ],

    imports: [

        CommonModule,
        SharedModule,
        NgxuxMatHeaderNavModule,
        RouterModule.forChild([

            {

                path: 'settings',
                component: SettingsComponent

            }

        ])

    ]

})
export class SettingsModule {
}
