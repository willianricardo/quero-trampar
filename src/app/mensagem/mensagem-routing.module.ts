import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthGuardAutenticated} from '../auth/auth-guard-autenticated.service';
import {MensagemComponent} from './mensagem.component';
import {ChatComponent} from './chat/chat.component';

const mensagemRoutes: Routes = [
  {
    path: '',
    component: MensagemComponent,
    canActivate: [AuthGuardAutenticated]
  },
  {
    path: ':id',
    component: MensagemComponent,
    canActivate: [AuthGuardAutenticated],
    children: [{path: '', component: ChatComponent, canActivate: [AuthGuardAutenticated]}]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(mensagemRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuardAutenticated
  ]
})
export class MensagemRoutingModule {
}
