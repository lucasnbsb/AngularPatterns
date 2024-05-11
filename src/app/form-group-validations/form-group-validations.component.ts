import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardLayoutComponent } from '../card-layout/card-layout.component';
import { AgeDriversLicenceValidator } from '../shared/validators/age-drivers-licence-validator.directive';

@Component({
  selector: 'app-form-group-validations',
  standalone: true,
  imports: [CommonModule, CardLayoutComponent, ReactiveFormsModule],
  templateUrl: './form-group-validations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupValidationsComponent {
  formGroup = this.fb.group(
    {
      age: [0, Validators.required],
      driversLicence: [false],
    },
    { validators: [AgeDriversLicenceValidator()] },
  );

  constructor(private fb: FormBuilder) {}
}
