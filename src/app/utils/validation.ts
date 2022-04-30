import { AbstractControl, ValidatorFn } from '@angular/forms';

export default class Validation {
  static match(controlName: string, checkControlName: string): ValidatorFn {
    return (controls: AbstractControl) => {
      const control = controls.get(controlName);
      const checkControl = controls.get(checkControlName);

      if (checkControl != undefined) {
        if (checkControl.errors && !checkControl.errors['matching']) {
          return null;
        }

        if (control != undefined) {
          if (control.value !== checkControl.value) {
            controls.get(checkControlName);

            if (controls != undefined) {
              controls.setErrors({ matching: true });
            }

            return { matching: true };
          } else {
            return null;
          }
        } else {
          return null;
        }
      } else {
        return null;
      }
    };
  }
}
