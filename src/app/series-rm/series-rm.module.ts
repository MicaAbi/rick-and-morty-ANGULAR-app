import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SeriesRoutingModule } from './series-routing.module';

// Components
import { CardComponent } from './basic-components/card/card.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationBarComponent } from './basic-components/location-bar/location-bar.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { SearchBarComponent } from './basic-components/search-bar/search-bar.component';

@NgModule({
  declarations: [  
    CardComponent,
    CharactersComponent,
    EpisodesComponent,
    LocationBarComponent,
    LocationsComponent, 
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
