import {Component, Input, OnDestroy, OnInit} from '@angular/core';

import * as moment from 'moment';
import 'moment/locale/pt-br';
import {Feedback} from '../../shared/models/feedback.model';
import {UsuarioBasic} from '../../shared/models/usuario-basic.model';
import {UsuarioService} from '../../usuario/usuario.service';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../auth/auth.service';
import {CoreService} from '../../core/core.service';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit, OnDestroy {
  @Input() feedback: Feedback;
  usuario: UsuarioBasic;

  getUsuarioBasicSubscription: Subscription;

  constructor(private usuarioService: UsuarioService,
              protected authService: AuthService,
              protected coreService: CoreService) {
    moment.locale('pt-BR');
  }

  ngOnInit() {
    this.getUsuarioBasicSubscription = this.usuarioService.getUsuarioBasic(this.feedback.usuario)
      .subscribe(usuario => this.usuario = usuario);
  }

  getData(data) {
    return moment(data);
  }

  ngOnDestroy() {
    if (this.getUsuarioBasicSubscription) {
      this.getUsuarioBasicSubscription.unsubscribe();
    }
  }
}
