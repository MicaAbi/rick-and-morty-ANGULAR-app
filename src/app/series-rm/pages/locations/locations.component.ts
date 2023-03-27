import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SeriesService } from '../../services/series.service';
import { Location } from '../../interfaces/allLocations.interface'

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit, OnDestroy {

  locationsSubscription!: Subscription

  get locations(): Location[] {
    let places!: Location[]
    this.locationsSubscription = this.seriesService.getLocations().subscribe(resp => places = resp)
    return places
  }

  constructor( private seriesService: SeriesService ) {}

  ngOnInit(): void {
    this.seriesService.loadLocations()
  }

  ngOnDestroy(): void {
    this.locationsSubscription?.unsubscribe()
  }

}
