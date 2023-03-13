import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  exports: [
    CharactersComponent
  ]
})
export class SeriesRMModule { }
