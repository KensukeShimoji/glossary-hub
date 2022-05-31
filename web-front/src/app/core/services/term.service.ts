import { Term } from '#models/term.models';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AddTermInput {
  name: string;
  yomi: string;
  abbreviation: string;
  description: string;
}

export interface TermListItem {
  id: string;
  name: string;
  yomi: string;
}

export type TermList = TermListItem[];
@Injectable({
  providedIn: 'root',
})
export class TermService {
  add(input: AddTermInput): Observable<string> {
    console.log(`add term = ${JSON.stringify(input)}`);
    return of('term-id-123');
  }

  list(glossaryId: string): Observable<TermList> {
    const list: TermList = [
      { id: '1', name: 'ABeam Consulting', yomi: 'あびーむ' },
      { id: '1', name: 'アベる', yomi: 'あべる' },
      { id: '2', name: 'BCG', yomi: 'びーしーじー' },
      { id: '2', name: 'BCC', yomi: 'びーしーしー' },
      { id: '3', name: 'Boston Consulting Group', yomi: 'ぼすとん こんさるてぃんぐ ぐるーぷ' },
      { id: '4', name: 'NRI', yomi: 'えぬあーあるあい' },
      { id: '5', name: 'PwC', yomi: 'ぴーだぶりゅーしー' },
    ];
    return of(list);
  }
}
