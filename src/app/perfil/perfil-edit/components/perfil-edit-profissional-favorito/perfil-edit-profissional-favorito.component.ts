import {Component, Input, OnInit} from '@angular/core';
import {UsuarioBasic} from '../../../../shared/models/usuario-basic.model';
import {Subscription} from 'rxjs/Subscription';
import {UsuarioService} from '../../../../usuario/usuario.service';

@Component({
  selector: 'app-perfil-edit-profissional-favorito',
  templateUrl: './perfil-edit-profissional-favorito.component.html',
  styleUrls: ['./perfil-edit-profissional-favorito.component.css']
})
export class PerfilEditProfissionalFavoritoComponent implements OnInit {

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

  desfavoritarProfissional(uid) {
    this.usuarioService.marcarFavorito(uid)
  }

}
