import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { SignupComponent } from './signup/signup.component';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
  {
    path:'login', component:LoginModule,
  },
  {
    path:'signup', component:SignupModule,
  },
  {
    path:'', loadChildren:()=>import('./layout/layout.module').then((m)=>m.LayoutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
