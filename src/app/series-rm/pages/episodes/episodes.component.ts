import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SeriesService } from '../../services/series.service';
import { Episode } from '../../interfaces/allEpisodes.interface';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit, OnDestroy {

  episodesSubscription!: Subscription

  get episodes(): Episode[] {
    let ep!: Episode[]
    this.episodesSubscription = this.seriesService.getEpisodes().subscribe(resp => ep = resp)
    return ep
  }

  constructor( private seriesService: SeriesService ){}

  ngOnInit(): void {
      this.seriesService.loadEpisodes()
  }

  ngOnDestroy(): void {
    this.episodesSubscription?.unsubscribe()
  }
  
}
