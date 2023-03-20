import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/allCharacters.interface';

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

  constructor() {}

}
