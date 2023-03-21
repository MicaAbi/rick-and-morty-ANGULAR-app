import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SeriesRoutingModule } from './series-routing.module';

// Components
import { CardComponent } from './basic-components/card/card.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';
import { DetailEpisodeComponent } from './pages/detail-episode/detail-episode.component';
import { DetailLinkComponent } from './basic-components/detail-link/detail-link.component';
import { DetailLocationComponent } from './pages/detail-location/detail-location.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationBarComponent } from './basic-components/location-bar/location-bar.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { PaginatorComponent } from './basic-components/paginator/paginator.component';
import { SearchBarComponent } from './basic-components/search-bar/search-bar.component';

@NgModule({
  declarations: [  
    CardComponent,
    CharactersComponent,
    DetailCharacterComponent,
    DetailEpisodeComponent,
    DetailLinkComponent,
    DetailLocationComponent,
    EpisodesComponent,
    LocationBarComponent,
    LocationsComponent, 
    PaginatorComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeNgModule,
    SeriesRoutingModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class SeriesRMModule { }
