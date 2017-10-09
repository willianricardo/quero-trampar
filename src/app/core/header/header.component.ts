import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {User} from 'firebase/app';
import {NotificacaoService} from '../../notificacao/notificacao.service';
import {MensagemService} from '../../mensagem/mensagem.service';
import {FeedbackService} from '../../feedback/feedback.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mensagemInput') mensagemInput;
  @ViewChild('tipoSelect') tipoSelect;

  usuario: User;

  subscription: Subscription;


  constructor(protected authService: AuthService,
              protected notificacaoService: NotificacaoService,
              protected mensagemService: MensagemService,
              private feedbackService: FeedbackService,
              private zone: NgZone) {

    this.subscription = this.authService.currentUserChanged
      .subscribe(
        (usuario: User) => {
          this.zone.run(() => {
            this.usuario = usuario;
          });
        }
      );
  }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

  enviarFeedback() {
    if (!this.mensagemInput.nativeElement.value) {
      return;
    }

    const feedback = {
      usuario: this.authService.currentUser.uid,
      tipo: this.tipoSelect.nativeElement.value,
      texto: this.mensagemInput.nativeElement.value,
      timestamp: Date.now()
    };

    this.feedbackService.setFeedback(feedback);

    this.mensagemInput.nativeElement.value = '';
  }

}
