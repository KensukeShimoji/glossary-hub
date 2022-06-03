import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateGlossaryInput, GlossaryService } from 'src/app/core/services/glossary.service';

@Component({
  templateUrl: 'create-glossary.component.html',
  styleUrls: ['create-glossary.component.scss'],
})
export class CreateGlossaryComponent {
  readonly createGlossaryForm: UntypedFormGroup;

  constructor(
    private readonly router: Router,
    readonly fb: UntypedFormBuilder,
    private readonly glossaryService: GlossaryService,
    private readonly location: Location
  ) {
    this.createGlossaryForm = fb.group({
      title: ['', Validators.required],
      description: [''],
      visibility: ['public', Validators.required] 
    });
  }

  create() {
    this.createGlossaryForm.markAllAsTouched();
    if (this.createGlossaryForm.invalid) {
      return;
    }
    const input: CreateGlossaryInput = {
      title: this.createGlossaryForm.controls['title'].value,
      description: this.createGlossaryForm.controls['description'].value,
    };
    this.glossaryService.create(input).subscribe((id: string) => {
      this.router.navigateByUrl(`glossary/${id}`);
    });
  }

  cancel() {
    this.location.back();
  }
}
