import { Component } from '@angular/core';

import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  query: string = ''
  
  constructor( private seriesService: SeriesService ) {}

  searchWorld(): void {
    this.query = this.query.trim()
    if(this.query.length === 0) { return }
    this.seriesService.searchWord(this.query)
    this.query = ''
  }
}
