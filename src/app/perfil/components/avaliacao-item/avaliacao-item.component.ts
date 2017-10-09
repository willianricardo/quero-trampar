import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Avaliacao} from '../../../shared/models/avaliacao.model';
import {Subscription} from 'rxjs/Subscription';
import {UsuarioBasic} from '../../../shared/models/usuario-basic.model';
import {UsuarioService} from '../../../usuario/usuario.service';

@Component({
  selector: 'app-avaliacao-item',
  templateUrl: './avaliacao-item.component.html',
  styleUrls: ['./avaliacao-item.component.css']
})
export class AvaliacaoItemComponent implements OnInit, OnDestroy {

  @Input() avaliacao: Avaliacao;
  usuario: UsuarioBasic;


  getUsuarioBasicSubscription: Subscription;

  constructor(protected usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.getUsuarioBasicSubscription = this.usuarioService.getUsuarioBasic(this.avaliacao.usuario)
      .subscribe(usuario => this.usuario = usuario);
  }

  ngOnDestroy() {
    if (this.getUsuarioBasicSubscription) {
      this.getUsuarioBasicSubscription.unsubscribe();
    }
  }

}
