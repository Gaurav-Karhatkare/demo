import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
   LayoutComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    LayoutComponent,
    HomeModule,
    HeaderModule,
    FooterModule,
    NavbarModule

  ]
})
export class LayoutModule { }
