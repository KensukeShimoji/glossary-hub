import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { AddTermInput, TermService } from 'src/app/core/services/term.service';

@Component({
  templateUrl: 'add-term.component.html',
  styleUrls: ['add-term.component.scss'],
})
export class AddTermComponent implements OnInit {
  private _glossaryId: string | null = '';
  readonly addTermForm: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    readonly fb: FormBuilder,
    private readonly location: Location,
    private readonly termService: TermService
  ) {
    this.addTermForm = fb.group({
      name: ['', Validators.required],
      yomi: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap) => {
          this._glossaryId = params.get('id');
        })
      )
      .subscribe();
  }

  add() {
    const input: AddTermInput = {
      name: this.addTermForm.controls['name'].value,
      yomi: this.addTermForm.controls['yomi'].value,
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
