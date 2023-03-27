import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Character } from '../../interfaces/allCharacters.interface';
import { Episode } from '../../interfaces/allEpisodes';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.css']
})
export class DetailCharacterComponent implements OnInit, OnDestroy {

  characterSubscrition!: Subscription
  episodesSubscrition!: Subscription

  get character(): Character {
    let char!: Character
    this.characterSubscrition = this.seriesService.getOneCharacter().subscribe( resp => {char = resp})
    return char
  }

  get episodes(): Episode[] {
    let episodes!: Episode[]
    this.episodesSubscrition = this.seriesService.getEpisodes().subscribe(resp => episodes = resp)
    return episodes
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
  }

  ngOnDestroy(): void {
      this.characterSubscrition?.unsubscribe()
      this.episodesSubscrition?.unsubscribe()
  }

}
