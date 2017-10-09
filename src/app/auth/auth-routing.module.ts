import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RegistroComponent} from "./registro/registro.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardNotAutenticated} from "./auth-guard-not-autenticated.service";


const authRoutes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [AuthGuardNotAutenticated]},
  {path: 'registro', component: RegistroComponent, canActivate : [AuthGuardNotAutenticated]}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  providers:[AuthGuardNotAutenticated],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
