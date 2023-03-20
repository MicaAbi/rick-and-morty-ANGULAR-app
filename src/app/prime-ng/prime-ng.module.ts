import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {PaginatorModule} from 'primeng/paginator';


@NgModule({
  exports: [
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    MenubarModule,
    PaginatorModule
  ]
})
export class PrimeNgModule { }
