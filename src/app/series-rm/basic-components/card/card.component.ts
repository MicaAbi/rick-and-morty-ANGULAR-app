import { Component, Input, OnInit } from '@angular/core';

import { Character } from '../../interfaces/allCharacters.interface';
import { Episode } from '../../interfaces/allEpisodes';
import { Location } from '../../interfaces/allLocations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() title: string = ''

  @Input() subtitle: string = ''

  @Input() urlImg: string = ''

  @Input() character!: Character

  @Input() episode!: Episode

  @Input() location!: Location

  @Input() linkCard: string = ''

  @Input() detail: boolean = false

  constructor() {}

}
