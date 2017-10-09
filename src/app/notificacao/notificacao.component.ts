import {Component, OnDestroy, OnInit} from '@angular/core';
import {Notificacao} from '../shared/models/notificacao.model';
import {CoreService} from '../core/core.service';
import {Subscription} from 'rxjs/Subscription';
import {NotificacaoService} from './notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit, OnDestroy {

  notificacoes: Notificacao[] = [];

  subscription: Subscription;

  constructor(protected coreService: CoreService,
              private notificacaoService: NotificacaoService) {
  }

  ngOnInit() {
    this.subscription = this.notificacaoService.notificacoesChanged
      .subscribe((notificacoes: Notificacao[]) => {
          this.notificacoes = notificacoes;
        }
      );

    this.notificacoes = this.notificacaoService.getNotificacoes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  marcarVisualizado(index) {

    if (!this.notificacoes[index].visualizado) {
      this.notificacoes[index].visualizado = true;

      this.notificacaoService.setNotificacao(this.notificacoes);
    }
  }
}
