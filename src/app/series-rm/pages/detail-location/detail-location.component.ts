import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { SeriesService } from '../../services/series.service';
import { Location } from '../../interfaces/allLocations'

@Component({
  selector: 'app-detail-location',
  templateUrl: './detail-location.component.html',
  styleUrls: ['./detail-location.component.css']
})
export class DetailLocationComponent implements OnInit, OnDestroy {

  locationSubscrition!: Subscription

  get location(): Location {
    let place!: Location
    this.locationSubscrition = this.seriesService.getOneLocation().subscribe(resp => place = resp)
    return place
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
  }

}
