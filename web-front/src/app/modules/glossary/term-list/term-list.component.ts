import { TermList } from '#services/term.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gh-term-list',
  templateUrl: 'term-list.component.html',
  styleUrls: ['term-list.component.scss'],
})
export class TermListComponent {
  @Input()
  list: TermList = [];

}
