import { Component, Input } from '@angular/core';

import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() section: string = ''

  get totalCards(): number {
    let count!: number
    this.seriesService.getInfoResp().subscribe(resp => count = resp.count)
    return count
  }

  constructor(
    private seriesService: SeriesService
  ) {}

  paginator(event: any) {    
    
    let currentPage: number = event.page + 1
    
    switch(this.section) {
      case 'characters':
        this.seriesService.loadCharacters('', currentPage )
        break;
      case 'episodes':
        this.seriesService.loadEpisodes('', currentPage)
        break;
      case 'locations':
        this.seriesService.loadLocations('', currentPage)
        break
    }

  }

}
