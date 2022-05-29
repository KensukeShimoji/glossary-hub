import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AddTermInput {
  name: string;
  yomi: string;
  abbreviation: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class TermService {
  add(input: AddTermInput): Observable<string> {
    console.log(`add term = ${JSON.stringify(input)}`);
    return of('term-id-123');
  }
}
