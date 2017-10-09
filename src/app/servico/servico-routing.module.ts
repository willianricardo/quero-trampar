import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuardAutenticated} from '../auth/auth-guard-autenticated.service';
import {ServicoDetailComponent} from './servico-item/servico-detail/servico-detail.component';
import {ServicoComponent} from './servico.component';
import {ServicoEditComponent} from './servico-item/servico-edit/servico-edit.component';

const servicoRoutes: Routes = [
  {path: '', component: ServicoComponent},
  {path: 'novo', component: ServicoEditComponent, canActivate:[AuthGuardAutenticated]},
  {path: ':id/alterar', component: ServicoEditComponent, canActivate:[AuthGuardAutenticated]},
  {path: ':id', component: ServicoDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(servicoRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardAutenticated
  ]
})
export class ServicoRoutingModule {
}
