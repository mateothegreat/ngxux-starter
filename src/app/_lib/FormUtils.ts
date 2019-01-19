import { FormGroup } from '@angular/forms';

export class FormUtils {

    public static setValuesFromObj(formGroup: FormGroup, valueObj: any): void {

        Object.keys(formGroup.controls).map((k, v) => {

            if (k in valueObj) {

                formGroup.controls[k].setValue(valueObj[k]);

            }

        });

    }

}
