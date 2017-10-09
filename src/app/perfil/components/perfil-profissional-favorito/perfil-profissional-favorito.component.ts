import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {UsuarioBasic} from '../../../shared/models/usuario-basic.model';
import {UsuarioService} from '../../../usuario/usuario.service';

@Component({
  selector: 'app-perfil-profissional-favorito',
  templateUrl: './perfil-profissional-favorito.component.html',
  styleUrls: ['./perfil-profissional-favorito.component.css']
})
export class PerfilProfissionalFavoritoComponent implements OnInit,OnDestroy {

  @Input() uid: string;
  usuario: UsuarioBasic;

  getUsuarioBasicSubscription : Subscription;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.getUsuarioBasicSubscription = this.usuarioService.getUsuarioBasic(this.uid)
      .subscribe(usuario => this.usuario = usuario);
  }

  ngOnDestroy(){
    if (this.getUsuarioBasicSubscription){
      this.getUsuarioBasicSubscription.unsubscribe();
    }
  }

}
