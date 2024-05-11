import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// The validator is just a function, on a group of controls you get access to all of the values.
export function AgeDriversLicenceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      control.value.age &&
      control.value.driversLicence &&
      (control.value.age < 18 || control.value.age > 65)
    ) {
      return { ageDriversLicence: 'You should not be driving' };
    }
    return null;
  };
}
