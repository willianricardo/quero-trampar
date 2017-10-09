import {Component, Input, OnInit} from '@angular/core';
import {Servico} from '../../shared/models/servico.model';
import {AuthService} from '../../auth/auth.service';
import {ServicoService} from '../servico.service';

@Component({
  selector: 'app-servico-item',
  templateUrl: './servico-item.component.html',
  styleUrls: ['./servico-item.component.css']
})
export class ServicoItemComponent implements OnInit {

  @Input() servico: Servico;

  constructor(protected authService: AuthService,
              protected servicoService: ServicoService) {

  }

  ngOnInit() {
  }

  inscrever() {
    this.servicoService.inscrever(this.servico.uid, this.servico.candidatos);
  }

}
