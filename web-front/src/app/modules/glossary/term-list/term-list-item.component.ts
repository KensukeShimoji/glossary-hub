import { TermListItem } from '#services/term.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gh-term-list-item',
  templateUrl: 'term-list-item.component.html',
  styleUrls: ['term-list-item.component.scss'],
})
export class TermListItemComponent {
  @Input()
  item!: TermListItem;

  get name() {
    return this.item.name;
  }

  get yomi() {
    return this.item.yomi;
  }
}
