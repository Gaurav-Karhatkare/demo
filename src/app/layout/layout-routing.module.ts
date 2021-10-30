import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarModule } from './navbar/navbar.module';

const routes: Routes = [
  {
    path:'', component:LayoutComponent,
    children:[
    {path:'footer', component:FooterModule},
    {path:'header',component:HeaderModule},
    {path:'home',component:HomeModule},
    {path:'navbar',component:NavbarModule}
    ]
  },
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
