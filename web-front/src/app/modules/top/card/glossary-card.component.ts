import { DateTime } from 'luxon';
import { Component, Input } from '@angular/core';

export interface Glossary {
  title: string;
  description: string;
  authorName: string;
  lastUpdatedAt: DateTime;
  bookMarkCount: number;
}

@Component({
  selector: 'gh-glossary-card',
  templateUrl: 'glossary-card.component.html',
  styleUrls: ['glossary-card.component.scss'],
})
export class GlossaryCardComponent {
  @Input()
  glossary!: Glossary;

  get title(): string {
    return this.glossary.title;
  }

  get description(): string {
    return this.glossary.description;
  }

  get authorName(): string {
    return this.glossary.authorName;
  }

  get bookmarkCount(): number {
    return this.glossary.bookMarkCount;
  }

  get lastUpdatedAt(): string {
    return this.glossary.lastUpdatedAt.toFormat('yyyy/MM/dd H:mm')
  }
}
