import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Episode } from '../../interfaces/allEpisodes';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.css']
})
export class DetailEpisodeComponent implements OnInit, OnDestroy {

  episodeSubscrition!: Subscription

  get episode(): Episode {
    let episode!: Episode
    this.episodeSubscrition = this.seriesService.getOneEpisode().subscribe(resp => episode = resp)
    return episode
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private seriesService: SeriesService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(({ id }) => {
        this.seriesService.loadASingleEpisode(id)
      })
  }

  ngOnDestroy(): void {
    this.episodeSubscrition.unsubscribe()
  }
}
