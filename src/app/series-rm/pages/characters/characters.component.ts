import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Character } from '../../interfaces/allCharacters.interface';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  // characters: Character[] = []

  get characters() {
    return this.seriesService.characters
  }

  get infoResp() {
    return this.seriesService.infoResp
  }

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.loadCharacters()
    // this.getCharacters()    
  }

  // getCharacters() {
  //   this.seriesService.getCharacters()
  //     .subscribe(
  //       res => {
  //         this.characters = res
  //         console.log('Salió bien')
  //         console.log(res);
  //       },
  //       err => console.log('Error al obtener los personajes')
  //     )
  // }

}
