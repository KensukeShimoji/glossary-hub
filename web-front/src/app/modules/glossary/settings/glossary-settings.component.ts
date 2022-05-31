import { Location } from '@angular/common';
import { GlossaryService, SaveGlossaryInput } from '#services/glossary.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { concatMap, map } from 'rxjs';
import { Glossary } from '#models/glossary.model';

@Component({
  templateUrl: 'glossary-settings.component.html',
  styleUrls: ['glossary-settings.component.scss'],
})
export class GlossarySettingsComponent implements OnInit {
  private _glossary!: Glossary;

  readonly glossarySettingForm: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    readonly fb: FormBuilder,
    private readonly glossaryService: GlossaryService,
    private readonly location: Location
  ) {
    this.glossarySettingForm = fb.group({
      title: ['', Validators.required],
      description: [''],
      visibility: ['public', Validators.required],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap) => params.get('glossary-id')),
        concatMap((glossaryId: string | null) => {
          if (glossaryId === null) throw new Error();
          return this.glossaryService.get(glossaryId);
        })
      )
      .subscribe((glossary: Glossary) => {
        this._glossary = glossary;
        this.glossarySettingForm.controls['title'].setValue(glossary.title);
        this.glossarySettingForm.controls['description'].setValue(glossary.description);
        this.glossarySettingForm.controls['visibility'].setValue(glossary.visibility);
      });
  }

  save() {
    this.glossarySettingForm.markAllAsTouched();
    if (this.glossarySettingForm.invalid) return;

    const input: SaveGlossaryInput = {
      id: this._glossary.id,
      title: this.glossarySettingForm.controls['title'].value,
      description: this.glossarySettingForm.controls['description'].value,
    };
    this.glossaryService.save(input).subscribe((id: string) => {
      this.router.navigateByUrl(`glossary/${id}`);
    });
  }

  cancel() {
    this.location.back();
  }
}
