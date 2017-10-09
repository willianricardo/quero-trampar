import {
  AfterViewChecked, Component, ElementRef, OnDestroy, OnInit,
  ViewChild
} from '@angular/core';
import {MensagemService} from '../mensagem.service';
import {Mensagem} from '../../shared/models/mensagem.model';
import {Subscription} from 'rxjs/Subscription';
import {CoreService} from '../../core/core.service';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {

  @ViewChild('mensagemInput') mensagemInput: ElementRef;
  @ViewChild('divMensagens') divMensagens: ElementRef;
  chatId = null;

  atualizaScroll = true;

  mensagens: Mensagem[] = [];
  usuarios: string[] = [];

  getMensagensfromChatSubscription: Subscription;
  getChatSubscription: Subscription;

  constructor(protected coreService: CoreService,
              private authService: AuthService,
              private mensagemService: MensagemService,
              private route: ActivatedRoute) {
    moment.locale('pt-BR');
  }

  ngOnInit() {

    this.route.params
      .subscribe(
        (params: Params) => {
          this.chatId = params['id'];
          this.getMensagensfromChatSubscription = this.mensagemService.getMensagensfromChat(this.chatId)
            .subscribe(
              snapshots => {
                this.mensagens = snapshots.map(snapshot => {
                  const mensagem: Mensagem = snapshot.val();
                  mensagem.uid = snapshot.key;
                  return mensagem;
                });

                this.atualizaScroll = true;
              });

          this.getChatSubscription = this.mensagemService.getChat(this.chatId).subscribe(chat => this.usuarios = chat.usuarios);
        }
      );
  }

  ngOnDestroy() {
    this.getMensagensfromChatSubscription.unsubscribe();
    this.getChatSubscription.unsubscribe();
  }

  ngAfterViewChecked() {
    this.teste();
  }

  isMe(uid) {
    return uid === this.authService.currentUser.uid;
  }

  teste() {
    if (this.atualizaScroll) {
      this.divMensagens.nativeElement.scrollTop = this.divMensagens.nativeElement.scrollHeight;
      this.atualizaScroll = false;
    }

  }

  getData(data) {
    return moment(data);
  }

  onEnviarMensagem() {
    if (!this.mensagemInput.nativeElement.value){
      return;
    }

    const dados = {
      texto: this.mensagemInput.nativeElement.value,
      usuarioEnvio: this.authService.usuarioLogado.uid,
      usuarioRecebimento: this.mensagemService.getUsuarioMensagem(this.usuarios),
      timestamp: Date.now()
    };

    this.mensagemService.novaMensagem(this.chatId, dados);
    this.mensagemInput.nativeElement.value = '';
    this.atualizaScroll = true;

  }

}
