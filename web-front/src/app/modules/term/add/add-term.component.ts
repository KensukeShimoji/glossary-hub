import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { MatChipInputEvent } from '@angular/material/chips';
import { AddTermInput, TermService } from 'src/app/core/services/term.service';
import { TermCategoryList, TermCategoryService } from '#services/term-category.service';

export interface Tag {
  name: string;
}

@Component({
  templateUrl: 'add-term.component.html',
  styleUrls: ['add-term.component.scss'],
})
export class AddTermComponent implements OnInit {
  private _glossaryId: string | null = '';

  readonly addTermForm: UntypedFormGroup;

  addOnBlur = true;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  private _tags: Tag[] = [];

  get tags() {
    return this._tags;
  }

  private _categoryList: TermCategoryList = [];

  get categories() {
    return this._categoryList;
  }

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    readonly fb: UntypedFormBuilder,
    private readonly termService: TermService,
    private readonly termCategoryService: TermCategoryService
  ) {
    this.addTermForm = fb.group({
      name: ['', Validators.required],
      yomi: [''],
      abbreviation: [''],
      category: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap) => {
          this._glossaryId = params.get('glossary-id');
          if (this._glossaryId !== null) {
            this._loadCategory(this._glossaryId);
          }
        })
      )
      .subscribe();
  }

  _loadCategory(glossaryId: string): void {
    this.termCategoryService.list(glossaryId).subscribe((categoryList) => (this._categoryList = categoryList));
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this._tags.push({ name: value });
    }

    event.chipInput!.clear();
  }

  removeTag(tag: Tag): void {
    const index = this._tags.indexOf(tag);

    if (index >= 0) {
      this._tags.splice(index, 1);
    }
  }

  add() {
    this.addTermForm.markAllAsTouched();
    if (this.addTermForm.invalid) return;

    const input: AddTermInput = {
      name: this.addTermForm.controls['name'].value,
      yomi: this.addTermForm.controls['yomi'].value,
      abbreviation: this.addTermForm.controls['abbreviation'].value,
      description: this.addTermForm.controls['description'].value,
    };
    this.termService.add(input).subscribe(() => {
      this._backToGlossaryPage();
    });
  }

  cancel() {
    this._backToGlossaryPage();
  }

  private _backToGlossaryPage() {
    this.router.navigateByUrl(`/glossary/${this._glossaryId}`);
  }
}
