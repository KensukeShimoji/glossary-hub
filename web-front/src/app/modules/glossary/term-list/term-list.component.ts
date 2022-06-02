import { HiraganaIndexList, TermList } from '#services/term.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gh-term-list',
  templateUrl: 'term-list.component.html',
  styleUrls: ['term-list.component.scss'],
})
export class TermListComponent {
  @Input()
  list: TermList = [];

  get hiraganaIndex() {
    return HiraganaIndexList;
  } 

  findByIndex(index: string): TermList {
    return this.list.filter((item) => item.index === index);
  }
}
