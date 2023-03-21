import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ResponseAllCharacters, Character, Info } from '../interfaces/allCharacters.interface';
import { Episode, ResponseAllEpisodes } from '../interfaces/allEpisodes';
import { Location, ResponseAllLocations } from '../interfaces/allLocations';

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

  private _episodes: Episode[] = []
  private _oneEpisode!: Episode

  private _locations: Location[] = []
  private _oneLocation!: Location

  // Endpoints
  private _characterEndpointApi: string = 'https://rickandmortyapi.com/api/character'
  private _episodeEndpointApi: string = 'https://rickandmortyapi.com/api/episode'
  private _episodeLocationApi: string = 'https://rickandmortyapi.com/api/location'

  get characters() {
    return [...this._characters]
  }

  get infoResp() {
    return this._infoResp
  }

  constructor(private http: HttpClient) { }

  // getCharacters(): Observable<Character[]> {
  //   return of([...this._characters])
  // }

  getOneCharacter():Observable<Character> {
    return of(this._oneCharacter)
  }

  getEpisodes(): Observable<Episode[]> {
    return of(this._episodes)
  }

  getOneEpisode():Observable<Episode> {
    return of(this._oneEpisode)
  }

  getLocations(): Observable<Location[]> {
    return of(this._locations)
  }

  getOneLocation():Observable<Location> {
    return of(this._oneLocation)
  }

  searchWord( query: string, section: string) {

    switch(section) {
      case 'characters': this.loadCharacters(query)
                         break;
      case 'episodes'  : this.loadEpisodes(query)
                         break;
      case 'locations' : this.loadLocations(query)
                         break;
    }

  }

  loadCharacters(query: string = '') {

    const params = new HttpParams()
          .set('name', query)
          .set('page', 1)

    this.http.get<ResponseAllCharacters>(this._characterEndpointApi, { params })
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

  loadEpisodes(query: string = '', page: number = 1): void {
    
    const params = new HttpParams()
          .set('name', query)
          .set('page', page)

    this.http.get<ResponseAllEpisodes>(this._episodeEndpointApi, { params })
          .subscribe(
            {
              next: resp => {
                this._episodes = resp.results
                console.log(this._episodes)
              },
              error: err => {
                this._episodes = []
                console.log(err)
              }
            }
          )
  }

  loadASingleEpisode(id: number): void {
    this.http.get<Episode>(`${this._episodeEndpointApi}/${id}`)
          .subscribe(
            {
              next: episode => {
                this._oneEpisode = episode
                console.log(this._oneEpisode)
              },
              error: err => console.log(err)
            }
          )
  }

  loadLocations(query: string = '') {

    const params = new HttpParams()
          .set('name', query)

    this.http.get<ResponseAllLocations>(this._episodeLocationApi, { params })
          .subscribe(
            {
              next: resp => {
                this._locations = resp.results
                console.log(resp)
              },
              error: err => console.log(err)
            }
          )
  }

  loadASingleLocation(id: number): void {
    this.http.get<Location>(`${this._episodeLocationApi}/${id}`)
        .subscribe(
          {
            next: location => {
              this._oneLocation = location
              console.log(location);
              
            },
            error: err => console.log(err)
          }
        )
  }
}