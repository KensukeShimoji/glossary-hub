import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateGlossaryInput, GlossaryService } from 'src/app/core/services/glossary.service';

@Component({
  templateUrl: 'create-glossary.component.html',
  styleUrls: ['create-glossary.component.scss'],
})
export class CreateGlossaryComponent {
  readonly createGlossaryForm: FormGroup;

  constructor(
    private readonly router: Router,
    readonly fb: FormBuilder,
    private readonly glossaryService: GlossaryService,
    private readonly location: Location
  ) {
    this.createGlossaryForm = fb.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  create() {
    const input: CreateGlossaryInput = {
      title: this.createGlossaryForm.controls['title'].value,
      description: this.createGlossaryForm.controls['description'].value,
    };
    this.glossaryService.createGlossary(input).subscribe((id: string) => {
      this.router.navigateByUrl(`glossary/${id}`);
    });
  }

  cancel() {
    this.location.back();
  }
}
