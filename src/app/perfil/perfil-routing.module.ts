import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuardAutenticated} from '../auth/auth-guard-autenticated.service';
import {PerfilComponent} from './perfil.component';
import {PerfilEditComponent} from './perfil-edit/perfil-edit.component';

const perfilRoutes: Routes = [
  {path: '', component: PerfilComponent, canActivate: [AuthGuardAutenticated]},
  {path: 'alterar', component: PerfilEditComponent, canActivate: [AuthGuardAutenticated]}
];

@NgModule({
  imports: [
    RouterModule.forChild(perfilRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardAutenticated
  ]
})
export class PerfilRoutingModule {
}
