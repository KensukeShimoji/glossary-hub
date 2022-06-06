import { GlossaryVisibility } from '#models/glossary.model';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateGlossaryInput, GlossaryService } from 'src/app/core/services/glossary.service';
import { ControlsOf } from 'src/app/core/utils/reactive-form-util';

@Component({
  templateUrl: 'create-glossary.component.html',
  styleUrls: ['create-glossary.component.scss'],
})
export class CreateGlossaryComponent {
  readonly createGlossaryForm: FormGroup<ControlsOf<CreateGlossaryInput>>;

  constructor(
    private readonly router: Router,
    private readonly fb: NonNullableFormBuilder,
    private readonly glossaryService: GlossaryService,
    private readonly location: Location
  ) {
    this.createGlossaryForm = this.fb.group<ControlsOf<CreateGlossaryInput>>({
      title: new FormControl('', { validators: Validators.required, nonNullable: true }),
      description: new FormControl('', { nonNullable: true }),
      visibility: new FormControl(GlossaryVisibility.PUBLIC, { validators: Validators.required, nonNullable: true }),
    });
  }

  create() {
    this.createGlossaryForm.markAllAsTouched();
    if (this.createGlossaryForm.invalid) return;

    const input: CreateGlossaryInput = {
      title: this.createGlossaryForm.getRawValue().title,
      description: this.createGlossaryForm.getRawValue().description,
      visibility: this.createGlossaryForm.getRawValue().visibility,
    };

    this.glossaryService.create(input).subscribe((id: string) => {
      this.router.navigateByUrl(`glossary/${id}`);
    });
  }

  cancel() {
    this.location.back();
  }
}
