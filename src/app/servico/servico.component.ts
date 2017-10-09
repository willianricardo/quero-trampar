import {Component, OnDestroy, OnInit} from '@angular/core';
import {ServicoService} from './servico.service';
import {Servico} from '../shared/models/servico.model';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../auth/auth.service';
import {CoreService} from '../core/core.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.css']
})
export class ServicoComponent implements OnInit, OnDestroy {

  formulario: FormGroup;

  servicos: Servico[];
  subscription: Subscription;

  constructor(protected servicoService: ServicoService,
              protected authService: AuthService,
              private formBuilder: FormBuilder,
              protected coreService: CoreService) {
    this.formulario = this.formBuilder.group({
        status: ['disponivel'],
        busca: [''],
        cidade: [''],
        categoria: [0]
      }
    );
  }

  ngOnInit() {
    this.formulario.patchValue(this.servicoService.getFiltro());

    this.subscription = this.servicoService.servicosChanged
      .subscribe((servicos: Servico[]) => {
          this.servicos = servicos;
        }
      );

    this.servicos = this.servicoService.getServicos();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBuscarServicos() {
    const busca = this.formulario.get('busca').value;
    const categoriaSelect = parseInt(this.formulario.get('categoria').value);
    const cidadeSelect = this.formulario.get('cidade').value;

    const filtro = {busca: busca, ativo: true, categoria: categoriaSelect, cidade: cidadeSelect, autonomo: true};

    this.servicoService.setFiltro(filtro);
    this.servicos = this.servicoService.getServicos();
  }

  limparFiltro() {
    this.servicoService.setFiltroDefault();
    this.formulario.patchValue(this.servicoService.getFiltro());
    this.servicos = this.servicoService.getServicos();
  }

}
