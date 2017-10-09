import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MensagemComponent} from './mensagem.component';
import {MensagemRoutingModule} from './mensagem-routing.module';
import {ChatComponent} from './chat/chat.component';
import {MomentModule} from 'angular2-moment';
import { ChatListItemComponent } from './chat-list/chat-list-item/chat-list-item.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MomentModule,
    MensagemRoutingModule,
    SharedModule
  ],
  declarations: [
    MensagemComponent,
    ChatComponent,
    ChatListItemComponent,
    ChatListComponent
  ]
})
export class MensagemModule {
}
