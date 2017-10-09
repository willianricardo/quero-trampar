import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ServicoBasic} from '../../../shared/models/servico-basic.model';
import {Subscription} from 'rxjs/Subscription';
import {ServicoService} from '../../../servico/servico.service';

@Component({
  selector: 'app-perfil-servico-disponibilizado',
  templateUrl: './perfil-servico-disponibilizado.component.html',
  styleUrls: ['./perfil-servico-disponibilizado.component.css']
})
export class PerfilServicoDisponibilizadoComponent implements OnInit, OnDestroy {

  @Input() uid: string;
  servico: ServicoBasic;

  getServicoBasicSubscription : Subscription;

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.getServicoBasicSubscription = this.servicoService.getServicoBasic(this.uid)
      .subscribe(servico => this.servico = servico);
  }

  ngOnDestroy(){
    if (this.getServicoBasicSubscription){
      this.getServicoBasicSubscription.unsubscribe();
    }
  }

}
