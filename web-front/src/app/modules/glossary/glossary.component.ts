import { TermList, TermService } from '#services/term.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { concatMap, map, zip } from 'rxjs';
import { Glossary } from 'src/app/core/models/glossary.model';
import { GlossaryService } from 'src/app/core/services/glossary.service';

enum TabList {
  SUMMARY,
  TERM_LIST,
}

@Component({
  templateUrl: 'glossary.component.html',
  styleUrls: ['glossary.component.scss'],
})
export class GlossaryComponent implements OnInit {
  private _glossary?: Glossary;

  get title(): string | undefined {
    return this._glossary?.title;
  }

  get description(): string | undefined {
    return this._glossary?.description;
  }

  private _termList: TermList = [];

  get termList() {
    return this._termList;
  }

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly glossaryService: GlossaryService,
    private readonly termService: TermService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap) => params.get('glossary-id')),
        concatMap((glossaryId) => {
          if (glossaryId === null) throw new Error();
          return zip(this.glossaryService.get(glossaryId), this.termService.list(glossaryId));
        })
      )
      .subscribe((response) => ([this._glossary, this._termList] = response));
  }
}
