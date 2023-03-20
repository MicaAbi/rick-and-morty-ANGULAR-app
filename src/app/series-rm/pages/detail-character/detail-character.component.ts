import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Character } from '../../interfaces/allCharacters.interface';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit, OnDestroy {

  // character!: Character
  characterSubscrition!: Subscription

  get character(): Character {
    let char!: Character
    this.characterSubscrition = this.seriesService.getOneCharacter().subscribe( resp => {char = resp})
    return char
  }

  constructor( 
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({id}) => {
        this.seriesService.loadASingleCharacter(id)
      })

    // this.characterSubscrition = this.seriesService.getOneCharacter().subscribe(char => this.character = char)
  }

  ngOnDestroy(): void {
      this.characterSubscrition.unsubscribe()
  }
}
