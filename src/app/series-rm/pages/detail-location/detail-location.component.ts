import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Character } from '../../interfaces/allCharacters.interface';
import { Location } from '../../interfaces/allLocations'
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.css']
})
export class DetailLocationComponent implements OnInit, OnDestroy {

  locationSubscrition!: Subscription
  charactersSubscrition!: Subscription

  get location(): Location {
    let place!: Location
    this.locationSubscrition = this.seriesService.getOneLocation().subscribe(resp => place = resp)
    return place
  }

  get residents(): Character[] {
    let characters!: Character[]
    this.charactersSubscrition = this.seriesService.getCharacters().subscribe(resp => characters = resp)
    return characters
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.seriesService.loadASingleLocation(id)
      })
  }

  ngOnDestroy(): void {
      this.locationSubscrition.unsubscribe()
      this.charactersSubscrition.unsubscribe()
  }

}
