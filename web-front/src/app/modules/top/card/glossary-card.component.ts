import { DateTime } from 'luxon';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Glossary {
  title: string;
  description: string;
  author: string;
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

  constructor(private readonly router: Router) {}

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
    return this.glossary.lastUpdatedAt.toFormat('yyyy/MM/dd H:mm');
  }

  goToGlossaryPage() {
    this.router.navigateByUrl(`/glossary/glossary-id-123`);
  }

  goToAuthorProfile() {
    this.router.navigateByUrl(`/profile/${this.glossary.author}`);
  }
}
