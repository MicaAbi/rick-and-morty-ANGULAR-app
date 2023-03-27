import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Character, Info } from '../../interfaces/allCharacters.interface';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy {

  charactersSubscription!: Subscription

  get characters(): Character[] {
    let characters!: Character[]
    this.charactersSubscription = this.seriesService.getCharacters().subscribe(resp => characters = resp)
    return characters
  }

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.loadCharacters()
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe()
  }

}
