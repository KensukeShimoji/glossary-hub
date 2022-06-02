import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface TermCategoryListItem {
  id: string;
  name: string;
}

export type TermCategoryList = TermCategoryListItem[];

@Injectable({
  providedIn: 'root',
})
export class TermCategoryService {
  list(glossaryId: string): Observable<TermCategoryList> {
    const response: TermCategoryList = [
      { id: '1', name: 'カテゴリ１' },
      { id: '2', name: 'カテゴリ２' },
      { id: '3', name: 'カテゴリ３' },
      { id: '4', name: 'カテゴリ４' },
    ];
    return of(response);
  }
}
