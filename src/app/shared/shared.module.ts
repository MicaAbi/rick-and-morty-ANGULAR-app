import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos propios
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Componentes
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    MenuComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent,
    FooterComponent
  ]
})
export class SharedModule { }
