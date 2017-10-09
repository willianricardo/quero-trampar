import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ServicoService} from '../../../../../servico/servico.service';
import {Servico} from '../../../../../shared/models/servico.model';

@Component({
  selector: 'app-perfil-edit-servico-inscrito',
  templateUrl: './perfil-edit-servico-inscrito.component.html',
  styleUrls: ['./perfil-edit-servico-inscrito.component.css']
})
export class PerfilEditServicoInscritoComponent implements OnInit {

  @Input() uid: string;
  servico: Servico;

  getServicoSubscription : Subscription;

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
    this.getServicoSubscription = this.servicoService.getServico(this.uid)
      .subscribe(servico => this.servico = servico);
  }

  ngOnDestroy(){
    if (this.getServicoSubscription){
      this.getServicoSubscription.unsubscribe();
    }
  }

  desinscrever() {
    this.servicoService.inscrever(this.servico.uid, this.servico.candidatos)
  }

}
