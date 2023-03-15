import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AllCharacters, Character } from '../interfaces/allCharacters.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private _characters: Character[] = []

  get characters() {
    return [...this._characters]
  }

  constructor(private http: HttpClient) { }

  // getCharacters(): Observable<Character[]> {
  //   return of([...this._characters])
  // }

  searchWord( query: string) {
    this.loadCharacters(query)
  }

  loadCharacters(query: string = '') {
    this.http.get<AllCharacters>(`https://rickandmortyapi.com/api/character/?name=${query}`)
          .subscribe(
            resp => {
              this._characters = resp.results
            },
            err => {
              console.log('Error en la petición');
              this._characters = []
            }
          )
  }

}
