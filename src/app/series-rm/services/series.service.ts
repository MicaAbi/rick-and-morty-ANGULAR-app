import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ResponseAllCharacters, Character, Info } from '../interfaces/allCharacters.interface';
import { Episode, ResponseAllEpisodes } from '../interfaces/allEpisodes.interface';
import { Location, ResponseAllLocations } from '../interfaces/allLocations.interface';

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

  constructor(private http: HttpClient) { }

  getInfoResp(): Observable<Info> {
    return of(this._infoResp)
  }

  getCharacters(): Observable<Character[]> {
    return of(this._characters)
  }

  getOneCharacter(): Observable<Character> {
    return of(this._oneCharacter)
  }

  getEpisodes(): Observable<Episode[]> {
    return of(this._episodes)
  }

  getOneEpisode(): Observable<Episode> {
    return of(this._oneEpisode)
  }

  getLocations(): Observable<Location[]> {
    return of(this._locations)
  }

  getOneLocation(): Observable<Location> {
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

  // Functions for Characters

  loadCharacters(query: string = '', page: number = 1): void {

    const params = new HttpParams()
          .set('name', query)
          .set('page', page)

    this.http.get<ResponseAllCharacters>(this._characterEndpointApi, { params })
          .subscribe({
            next: resp => {
              this._characters = resp.results
              this._infoResp = resp.info
            },
            error: err => {
              console.log('Error en la petición')
                this._characters = []
                this._infoResp = {
                  count: 0,
                  pages: 0,
                  next:  '',
                  prev:  ''
                }
            }
          })
  }

  loadMultipleCharacters(ids: number[]): void {
    this.http.get<Character[]>(`${this._characterEndpointApi}/[${ids}]`)
        .subscribe({
          next: characters => {
            this._characters = characters
          },
          error: err => console.log(err)
        })
  }

  loadASingleCharacter( id:number ) {
    this.http.get<Character>(`${this._characterEndpointApi}/${id}`)
        .subscribe(
          {
            next: char => {
              this._oneCharacter = char
              let episodeIdList: number[] = this.getEpisodesID(char)
              this.loadMultipleEpisodes(episodeIdList)
            },
            error: err => console.log(err)
          }
        )
  }

  getEpisodesID(character: Character): number[] {
    let episodes: string[] = character.episode

    let positionLastSlash: number = episodes[0].lastIndexOf('/')
    let episodesIdList: number[] = []

    episodes.forEach( episode => {
        const episodeID: number = parseInt(episode.slice(positionLastSlash + 1))
        episodesIdList.push(episodeID)
    })

    return episodesIdList
  }
  
  // Functions for Episodes

  loadEpisodes(query: string = '', page: number = 1): void {
    
    const params = new HttpParams()
          .set('name', query)
          .set('page', page)

    this.http.get<ResponseAllEpisodes>(this._episodeEndpointApi, { params })
          .subscribe(
            {
              next: resp => {
                this._episodes = resp.results
                this._infoResp = resp.info
              },
              error: err => {
                this._episodes = []
                console.log(err)
              }
            }
          )
  }

  loadMultipleEpisodes(ids: number[]): void {
    this.http.get<Episode[]>(`${this._episodeEndpointApi}/[${ids}]`)
        .subscribe({
          next: episodes => {
            this._episodes = episodes
          },
          error: err => console.log(err)
        })
  }

  loadASingleEpisode(id: number): void {
    this.http.get<Episode>(`${this._episodeEndpointApi}/${id}`)
          .subscribe(
            {
              next: episode => {
                this._oneEpisode = episode
                let episodeCharactersID: number[] = this.getCharactersID(episode)
                this.loadMultipleCharacters(episodeCharactersID)
              },
              error: err => console.log(err)
            }
          )
  }

  getCharactersID(episode: Episode): number[] {
    let characters: string[] = episode.characters

    let positionLastSlash: number = characters[0].lastIndexOf('/')
    let charactersIdList: number[] = []

    characters.forEach(character => {
        const characterID: number = parseInt(character.slice(positionLastSlash + 1))
        charactersIdList.push(characterID)
    })

    return charactersIdList
  }


  // Functions for Locations

  loadLocations(query: string = '', page: number = 1): void {

    const params = new HttpParams()
          .set('name', query)
          .set('page', page)

    this.http.get<ResponseAllLocations>(this._episodeLocationApi, { params })
          .subscribe(
            {
              next: resp => {
                this._locations = resp.results
                this._infoResp = resp.info
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
              let characterIdList: number[] = this.getResidentsID(location)
              this.loadMultipleCharacters(characterIdList)
            },
            error: err => console.log(err)
          }
        )
  }

  getResidentsID(location: Location): number[] {
    let characters: string[] = location.residents

    let positionLastSlash: number = characters[0].lastIndexOf('/')
    let charactersIdList: number[] = []

    characters.forEach(character => {
        const characterID: number = parseInt(character.slice(positionLastSlash + 1))
        charactersIdList.push(characterID)
    })

    return charactersIdList
  }

}