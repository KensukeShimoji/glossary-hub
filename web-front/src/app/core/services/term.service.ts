import { Term } from '#models/term.models';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AddTermInput {
  name: string;
  yomi: string;
  abbreviation: string;
  description: string;
}

export const HiraganaIndexList = ['あ', 'か', 'さ', 'た', 'な', 'は', 'ま', 'ら', 'や', 'わ'] as const;

export type HiraganaIndex = typeof HiraganaIndexList[number];
export interface TermListItem {
  id: string;
  index: HiraganaIndex;
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
      { id: '1', index: 'あ', name: 'ABeam Consulting', yomi: 'あびーむ' },
      { id: '2', index: 'あ', name: 'アベる', yomi: 'あべる' },
      { id: '3', index: 'あ', name: 'NRI', yomi: 'えぬあーあるあい' },
      { id: '4', index: 'は', name: 'BCG', yomi: 'びーしーじー' },
      { id: '5', index: 'は', name: 'BCC', yomi: 'びーしーしー' },
      { id: '6', index: 'は', name: 'PwC', yomi: 'ぴーだぶりゅーしー' },
      { id: '7', index: 'は', name: 'Boston Consulting Group', yomi: 'ぼすとん こんさるてぃんぐ ぐるーぷ' },
    ];
    return of(list);
  }
}
