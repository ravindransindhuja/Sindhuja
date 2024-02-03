import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {TodoformComponent} from './todoform/todoform.component';
import {TodolistComponent} from './todolist/todolist.component';
import {LogoutComponent} from "./logout/logout.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {RouteGaurdService} from "./service/route-gaurd.service";

const routes: Routes = [
  {path :  'login',  component : LoginComponent } ,
  {path : 'welcome/:username' , component : WelcomeComponent , canActivate: [RouteGaurdService]} ,
  {path : 'todoform/:action' , component : TodoformComponent , canActivate: [RouteGaurdService]} ,
  {path : 'todoform/:action/:id' , component : TodoformComponent , canActivate: [RouteGaurdService]} ,
  {path : 'todolist' , component : TodolistComponent , canActivate: [RouteGaurdService]} ,
  {path : '' , component : LoginComponent} ,
  {path : 'logout' , component : LogoutComponent },
  {path : 'signup' , component : SignupComponent},
  {path : 'home' , component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
