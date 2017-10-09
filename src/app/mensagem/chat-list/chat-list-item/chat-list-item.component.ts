import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UsuarioService} from '../../../usuario/usuario.service';
import {ServicoService} from '../../../servico/servico.service';
import {UsuarioBasic} from '../../../shared/models/usuario-basic.model';
import {ServicoBasic} from '../../../shared/models/servico-basic.model';
import {MensagemService} from '../../mensagem.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-chat-list-item',
  templateUrl: './chat-list-item.component.html',
  styleUrls: ['./chat-list-item.component.css']
})
export class ChatListItemComponent implements OnInit, OnDestroy {
  @Input() chat: string;
  @Input() notificacao: boolean;
  usuario: UsuarioBasic;
  servico: ServicoBasic;

  getUsuarioBasicSubscription: Subscription;
  getServicoBasicSubscription: Subscription;

  constructor(private mensagemService: MensagemService,
              private usuarioService: UsuarioService,
              private servicoService: ServicoService) {

  }

  ngOnInit() {
    this.mensagemService.getChat(this.chat)
      .subscribe(chat => {
        this.getUsuarioBasicSubscription = this.usuarioService.getUsuarioBasic(this.mensagemService.getUsuarioMensagem(chat.usuarios))
          .subscribe(usuario => this.usuario = usuario);

        this.getServicoBasicSubscription = this.servicoService.getServicoBasic(chat.servico)
          .subscribe(servico => this.servico = servico);
      });
  }

  ngOnDestroy() {
    if (this.getUsuarioBasicSubscription) {
      this.getUsuarioBasicSubscription.unsubscribe();
    }

    if (this.getServicoBasicSubscription) {
      this.getServicoBasicSubscription.unsubscribe();
    }
  }

  marcarVisualizado() {
    this.mensagemService.marcarVisualizado(this.chat);
  }
}
