import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  exports: [
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    ImageModule,
    InputTextModule,
    MenubarModule,
    MessagesModule,
    PaginatorModule
  ]
})
export class PrimeNgModule { }
