import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AngularFireDatabase} from 'angularfire2/database';

import {Notificacao} from '../shared/models/notificacao.model';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class NotificacaoService {

  public notificacoesChanged = new Subject<Notificacao[]>();
  currentUserChanged: Subscription;

  private notificacoes: Notificacao[] = [];

  constructor(private db: AngularFireDatabase,
              private authService: AuthService) {
    this.currentUserChanged = this.authService.currentUserChanged.subscribe(currentUser => {
      if (currentUser){
        this.db.list('notificacoes/' + currentUser.uid, {preserveSnapshot: true}).subscribe(
          snapshots => {
            const notificacoes: Notificacao[] = snapshots.map(snapshot => {
              const notificacao: Notificacao = snapshot.val();
              notificacao.uid = snapshot.key;
              return notificacao;
            });

            this.setNotificacoes(notificacoes);
          }
        );
      }

    });
  }

  getNumeroNotificoes() {
    return this.notificacoes.reduce((acc, curr) => {
      if (!curr.visualizado) {
        acc += 1;
      }

      return acc
    }, 0)
  }

  getNotificacoes() {
    return this.notificacoes = this.notificacoes.slice();
  }

  setNotificacoes(notificacoes: Notificacao[]) {
    this.notificacoes = notificacoes;
    this.notificacoesChanged.next(this.notificacoes.slice());
  }

  getNotificacao(id: string) {
    return this.db.object('notificacoes/' + id);
  }

  setNotificacao(notificacoes) {
    return this.db.object('/notificacoes/' + this.authService.currentUser.uid)
      .set(notificacoes);
  }

  updateNotificacao(notificacao) {
    this.db.object('notificacoes/' + this.authService.currentUser.uid).update(notificacao);
  }
}
