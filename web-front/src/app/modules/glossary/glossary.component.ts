import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';
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

  private _selectedTab: TabList = TabList.TERM_LIST;

  turnedSummaryTab() {
    this._selectedTab = TabList.SUMMARY;
  }

  isSummaryTabSelected() {
    return this._selectedTab === TabList.SUMMARY;
  }

  turnedTermListTab() {
    this._selectedTab = TabList.TERM_LIST;
  }

  isTermListTabSelected() {
    return this._selectedTab === TabList.TERM_LIST;
  }

  get title(): string | undefined {
    return this._glossary?.title;
  }

  get description(): string | undefined {
    return this._glossary?.description;
  }

  constructor(private readonly activatedRoute: ActivatedRoute, private readonly glossaryService: GlossaryService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((params: ParamMap) => {
          const id = params.get('glossary-id');
          if (id === null) return;
          this.glossaryService.get(id).subscribe((glossary: Glossary) => {
            this._glossary = glossary;
          });
        })
      )
      .subscribe();
  }
}
