import { Component, OnInit } from '@angular/core';

import { SeriesService } from '../../services/series.service';
import { Episode } from '../../interfaces/allEpisodes';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  get episodes(): Episode[] {
    let ep!: Episode[]
    this.seriesService.getEpisodes().subscribe(resp => ep = resp)
    return ep
  }

  constructor( private seriesService: SeriesService ){}

  ngOnInit(): void {
      this.seriesService.loadEpisodes()
  }
  
}
