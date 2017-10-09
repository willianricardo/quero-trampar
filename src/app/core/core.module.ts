import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from '../app-routing.module';
import {AuthService} from '../auth/auth.service';
import {UsuarioService} from '../usuario/usuario.service';
import {SharedModule} from '../shared/shared.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {ServicoService} from '../servico/servico.service';
import {CoreRoutingModule} from './core-routing.module';
import {CoreService} from './core.service';
import {NotificacaoService} from '../notificacao/notificacao.service';
import {MensagemService} from '../mensagem/mensagem.service';
import { TesteComponent } from './teste/teste.component';
import {FeedbackService} from '../feedback/feedback.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    TesteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreRoutingModule,
    SharedModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    AuthService,
    UsuarioService,
    ServicoService,
    NotificacaoService,
    MensagemService,
    FeedbackService,
    CoreService
  ]
})
export class CoreModule {
}
