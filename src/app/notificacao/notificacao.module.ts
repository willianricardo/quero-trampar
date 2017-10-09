import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificacaoComponent} from './notificacao.component';
import {NotificacaoRoutingModule} from './notificacao-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NotificacaoRoutingModule
  ],
  declarations: [NotificacaoComponent]
})
export class NotificacaoModule {
}
