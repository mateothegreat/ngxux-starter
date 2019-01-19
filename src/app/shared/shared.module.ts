import { CommonModule }                  from '@angular/common';
import { NgModule }                      from '@angular/core';
import { ReactiveFormsModule }           from '@angular/forms';
import { NgProgressModule }              from '@ngx-progressbar/core';
import { NgProgressHttpModule }          from '@ngx-progressbar/http';
import { NgxuxDatatableModule }          from '@ngxux/datatable';
import { NgxuxMatDialogModule }          from '@ngxux/ngxux-mat-dialog';
import { NgxuxMatHeaderNavModule }       from '@ngxux/ngxux-mat-header-nav';
import { NgxuxMatLoginModule }           from '@ngxux/ngxux-mat-login';
import { NgxuxMatTableModule }           from '@ngxux/ngxux-mat-table';
import { NgxuxMatToolbarModule }         from '@ngxux/ngxux-mat-toolbar';
import { NgxuxMatVerticalToolbarModule } from '@ngxux/ngxux-mat-vertical-toolbar';
import { AutofocusDirective }            from '../_lib/AutofocusDirective';
import { MaterialModule }                from './material/material.module';

@NgModule({

    declarations: [

        AutofocusDirective,

    ],

    imports: [

        CommonModule,
        ReactiveFormsModule,

        NgProgressModule,
        NgProgressHttpModule,

        MaterialModule,

        NgxuxDatatableModule,
        NgxuxMatDialogModule,
        NgxuxMatHeaderNavModule,
        NgxuxMatLoginModule,
        NgxuxMatToolbarModule,
        NgxuxMatTableModule,
        NgxuxMatVerticalToolbarModule,

    ],

    exports: [

        CommonModule,
        ReactiveFormsModule,

        NgProgressModule,
        NgProgressHttpModule,

        MaterialModule,

        NgxuxDatatableModule,
        NgxuxMatDialogModule,
        NgxuxMatHeaderNavModule,
        NgxuxMatLoginModule,
        NgxuxMatToolbarModule,
        NgxuxMatTableModule,
        NgxuxMatVerticalToolbarModule,

    ]

})
export class SharedModule {
}
