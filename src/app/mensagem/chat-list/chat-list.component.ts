import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CoreService} from '../../core/core.service';
import {MensagemService} from '../mensagem.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit, OnDestroy {

  chats: any[] = [];

  chatListChanged: Subscription;

  constructor(protected coreService: CoreService,
              protected mensagemService: MensagemService) {
  }

  ngOnInit() {
    this.chatListChanged = this.mensagemService.chatListChanged
      .subscribe((chats: any[]) => {
          this.chats = chats;
        }
      );

    this.chats = this.mensagemService.getChatList();
  }

  ngOnDestroy() {
    this.chatListChanged.unsubscribe();
  }

}
