import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersComponent } from './pages/characters/characters.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { LocationsComponent } from './pages/locations/locations.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'characters',
        component: CharactersComponent
      },
      {
        path: 'episodes',
        component: EpisodesComponent
      },
      {
        path: 'locations',
        component: LocationsComponent
      }
    ]
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SeriesRoutingModule { }
