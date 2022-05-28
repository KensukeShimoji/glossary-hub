import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface CreateGlossaryInput {
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class GlossaryService {
  createGlossary(input: CreateGlossaryInput): Observable<string> {
    console.log(`create Glossary = ${JSON.stringify(input)}`);
    return of('glossary-id-123');
  }
}
