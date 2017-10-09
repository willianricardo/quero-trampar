import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', loadChildren: './perfil/perfil.module#PerfilModule'},
  {path: 'profissionais', loadChildren: './usuario/usuario.module#UsuarioModule'},
  {path: 'servicos', loadChildren: './servico/servico.module#ServicoModule'},
  {path: 'notificacoes', loadChildren: './notificacao/notificacao.module#NotificacaoModule'},
  {path: 'mensagens', loadChildren: './mensagem/mensagem.module#MensagemModule'},
  {path: 'feedback', loadChildren: './feedback/feedback.module#FeedbackModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
