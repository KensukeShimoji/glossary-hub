import { DateTime } from 'luxon';
import { Component } from '@angular/core';
import { Glossary } from './glossary/glossary-card.component';

@Component({
  templateUrl: 'top.component.html',
  styleUrls: ['top.component.scss'],
})
export class TopComponent {
  glossaries: Glossary[] = [];

  constructor() {
    Array(30)
      .fill('')
      .forEach((item, index, _) =>
        this.glossaries.push({
          imageUrl: '',
          title: `用語集その${index}`,
          description: `用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明 用語集その${index}の説明`,
          authorImageUrl: '',
          authorName: '山田 太郎',
          lastUpdatedAt: DateTime.now(),
        })
      );
  }
}
