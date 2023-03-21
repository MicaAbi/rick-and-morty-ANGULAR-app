import { Component, OnInit } from '@angular/core';

import { SeriesService } from '../../services/series.service';
import { Location } from '../../interfaces/allLocations'

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  get locations(): Location[] {
    let places!: Location[]
    this.seriesService.getLocations().subscribe(resp => places = resp)
    return places
  }

  constructor( private seriesService: SeriesService ) {}

  ngOnInit(): void {
    this.seriesService.loadLocations()
  }

}
