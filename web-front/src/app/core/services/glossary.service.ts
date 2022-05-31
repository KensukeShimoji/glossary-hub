import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Glossary, GlossaryVisibility } from '../models/glossary.model';

export interface CreateGlossaryInput {
  title: string;
  description: string;
}

export interface SaveGlossaryInput {
  id: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlossaryService {
  create(input: CreateGlossaryInput): Observable<string> {
    console.log(`create Glossary = ${JSON.stringify(input)}`);
    return of('glossary-id-123');
  }

  save(input: SaveGlossaryInput): Observable<string> {
    console.log(`saveGlossary = ${JSON.stringify(input)}`);
    return of('glossary-id-123');
  }

  get(id: string): Observable<Glossary> {
    const response: Glossary = {
      id: id,
      title: '用語集のタイトル',
      description:
        '用語集の説明サンプル 用語集の説明サンプル 用語集の説明サンプル 用語集の説明サンプル 用語集の説明サンプル 用語集の説明サンプル 用語集の説明サンプル 用語集の説明サンプル 用語集の説明サンプル',
      visibility: GlossaryVisibility.PUBLIC,
    };
    return of(response);
  }
}
