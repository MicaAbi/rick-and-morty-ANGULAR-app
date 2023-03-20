import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ResponseAllCharacters, Character, Info } from '../interfaces/allCharacters.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private _characters: Character[] = []
  private _infoResp: Info = {
    count: 0,
    pages: 0,
    next:  '',
    prev:  ''
  }
  private _oneCharacter!: Character
  private _characterEndpointApi: string = 'https://rickandmortyapi.com/api/character'

  get characters() {
    return [...this._characters]
  }

  get infoResp() {
    return this._infoResp
  }

  get oneCharacter() {
    return this._oneCharacter
  }

  constructor(private http: HttpClient) { }

  // getCharacters(): Observable<Character[]> {
  //   return of([...this._characters])
  // }

  getOneCharacter():Observable<Character> {
    return of(this._oneCharacter)
  }

  searchWord( query: string, section: string) {

    switch(section) {
      case 'characters': this.loadCharacters(query)
                         break;
      case 'episodes'  : console.log('Buscando en episodes')
                         break;
      case 'locations' : console.log('Buscando en locations')
                         break;
    }

  }

  loadCharacters(query: string = '') {

    const params = new HttpParams()
          .set('name', query);

    this.http.get<ResponseAllCharacters>(`${this._characterEndpointApi}`, { params })
          .subscribe(
            resp => { 
              this._infoResp = resp.info 
              this._characters = resp.results
            },
            err => {
              console.log('Error en la petición')
              this._characters = []
              this._infoResp = {
                count: 0,
                pages: 0,
                next:  '',
                prev:  ''
              }
            }
          )
  }

  loadASingleCharacter( id:number ) {
    this.http.get<Character>(`${this._characterEndpointApi}/${id}`)
        .subscribe(
          {
            next: char => {
              this._oneCharacter = char
              console.log(this._oneCharacter)
            },
            error: err => console.log(err)
          }
        )
  }

  loadEpisodes(query: string = '') {
    
  }

  
}


/*

  loadASingleCharacter( id:number ) {
    this.http.get<Character>(`${this._characterEndpointApi}/${id}`)
        .subscribe(
          resp => {
            console.log('Respuesta del servicio');
            this._oneCharacter = resp
            console.log(this._oneCharacter)
          },
          err => console.log(err)
        )
  }

  loadASingleCharacter( id:number ) {
    this.http.get<Character>(`${this._characterEndpointApi}/${id}`)
        .subscribe(
          {
            next: char => console.log(char),
            error: err => console.log(err)
          }
        )
  }

*/