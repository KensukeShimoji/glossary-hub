import { DateTime } from 'luxon';
import { Component } from '@angular/core';
import { GlossaryCardInput } from '#modules/shared/glossary-card/glossary-card.component';

@Component({
  templateUrl: 'top.component.html',
  styleUrls: ['top.component.scss'],
})
export class TopComponent {
  glossaries: GlossaryCardInput[] = [];

  constructor() {
    Array(30)
      .fill('')
      .forEach((item, index, _) =>
        this.glossaries.push({
          title: `用語集その${index}`,
          description: `用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明`,
          author: '123',
          authorName: '山田 太郎',
          lastUpdatedAt: DateTime.now(),
          bookMarkCount: Math.floor(Math.random() * 1000),
        })
      );
  }
}
