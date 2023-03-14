import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';


@NgModule({
  exports: [
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
