import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardLayoutComponent } from '../shared/components/card-layout/card-layout.component';
import {
  ExternalCodePanelComponent,
  ExternalCodeReference,
} from '../shared/external-code-panel/external-code-panel.component';
import { AgeDriversLicenceValidator } from '../shared/validators/age-drivers-licence-validator.directive';

@Component({
  selector: 'app-form-group-validations',
  standalone: true,
  imports: [
    CommonModule,
    CardLayoutComponent,
    ReactiveFormsModule,
    ExternalCodePanelComponent,
  ],
  templateUrl: './form-group-validations.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupValidationsComponent {
  references: ExternalCodeReference[] = [
    {
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/form-group-validations/form-group-validations.component.ts',
      title: 'the component',
      language: 'typescript',
    },
    {
      title: 'the validator',
      url: 'https://raw.githubusercontent.com/lucasnbsb/AngularPatterns/main/src/app/shared/validators/age-drivers-licence-validator.directive.ts',
      language: 'typescript',
    },
  ];

  limitAge = 90;

  formGroup = this.fb.group(
    {
      age: [0, Validators.required],
      driversLicence: [false],
    },
    { validators: [AgeDriversLicenceValidator(this.limitAge)] },
  );

  constructor(private fb: FormBuilder) {}
}
