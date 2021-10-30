import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatMenuModule} from'@angular/material/menu'

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    // MatMenuModule
  ],
   exports:[
     HeaderComponent
   ]
})
export class HeaderModule { }
