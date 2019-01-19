import { Component }               from '@angular/core';
import { NgxuxMatHeaderNavButton } from '@ngxux/ngxux-mat-header-nav/lib/ngxux-mat-header-nav-button';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: [ './settings.component.scss' ]
})
export class SettingsComponent {

    public constructor() {

    }

    public onHeaderNavButtonClick(button: NgxuxMatHeaderNavButton) {

        console.log(button);

    }

}
