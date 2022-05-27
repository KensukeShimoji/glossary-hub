import { DateTime } from 'luxon';
import { Component, Input } from '@angular/core';

export interface Glossary {
  imageUrl: string;
  title: string;
  description: string;
  authorImageUrl: string;
  authorName: string;
  lastUpdatedAt: DateTime;
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

  get lastUpdatedAt(): string {
    return this.glossary.lastUpdatedAt.toFormat('yyyy/MM/dd H:mm')
  }
}
