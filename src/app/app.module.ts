import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos propios
import { SeriesRMModule } from './series-rm/series-rm.module';
import { SharedModule } from './shared/shared.module';

// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SeriesRMModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
