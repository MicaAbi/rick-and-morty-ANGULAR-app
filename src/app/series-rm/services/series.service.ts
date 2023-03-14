import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private _pruebaHistorial: string[] = []

  get historial(): string[] {
    return [...this._pruebaHistorial]
  }

  constructor() { }

  searchWord( query: string) {
    this._pruebaHistorial.unshift(query)
    console.log(this.historial);
  }

}
