import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Character } from '../../interfaces/allCharacters.interface';
import { Episode } from '../../interfaces/allEpisodes.interface';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.css']
})
export class DetailEpisodeComponent implements OnInit, OnDestroy {

  episodeSubscription!: Subscription
  charactersSubscription!: Subscription

  get episode(): Episode {
    let episode!: Episode
    this.episodeSubscription = this.seriesService.getOneEpisode().subscribe(resp => episode = resp)
    return episode
  }

  get charactersInEpisode(): Character[] {
    let characters!: Character[]
    this.charactersSubscription = this.seriesService.getCharacters().subscribe(resp => characters = resp)
    return characters
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
    this.episodeSubscription?.unsubscribe()
    this.charactersSubscription?.unsubscribe()
  }

}
