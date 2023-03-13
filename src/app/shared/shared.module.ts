import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos propios
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Componentes
import { ErrorPageComponent } from './error-page/error-page.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    ErrorPageComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
