import {Component} from '@angular/core';
import {CoreService} from '../core/core.service';
import {MensagemService} from './mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {

  constructor(protected coreService: CoreService,
              protected mensagemService: MensagemService) {
  }
}
