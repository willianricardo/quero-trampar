import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuardAutenticated} from '../auth/auth-guard-autenticated.service';
import {UsuarioDetailComponent} from './usuario-item/usuario-detail/usuario-detail.component';
import {UsuarioComponent} from './usuario.component';
import {UsuarioEditComponent} from './usuario-item/usuario-edit/usuario-edit.component';

const usuarioRoutes: Routes = [
  {path: '', component: UsuarioComponent},
  {path: ':id', component: UsuarioDetailComponent},
  {path: ':id/alterar', component: UsuarioEditComponent, canActivate: [AuthGuardAutenticated]},
];

@NgModule({
  imports: [
    RouterModule.forChild(usuarioRoutes)

  ],
  exports: [RouterModule],
  providers: [
    AuthGuardAutenticated
  ]
})
export class UsuarioRoutingModule {
}
