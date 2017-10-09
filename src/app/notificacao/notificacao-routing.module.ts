import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuardAutenticated} from '../auth/auth-guard-autenticated.service';
import {NotificacaoComponent} from './notificacao.component';

const notificacaoRoutes: Routes = [
  {path: '', component: NotificacaoComponent, canActivate: [AuthGuardAutenticated]}
];

@NgModule({
  imports: [
    RouterModule.forChild(notificacaoRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardAutenticated
  ]
})
export class NotificacaoRoutingModule {
}
