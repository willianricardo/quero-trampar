import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from '../../shared/models/usuario.model';
import {AuthService} from '../../auth/auth.service';
import {UsuarioService} from '../usuario.service';
import {CoreService} from '../../core/core.service';

@Component({
  selector: 'app-usuario-item',
  templateUrl: './usuario-item.component.html',
  styleUrls: ['./usuario-item.component.css']
})
export class UsuarioItemComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor(protected usuarioService: UsuarioService,
              protected authService: AuthService,
              protected coreService: CoreService) {

  }

  ngOnInit() {
  }

  favoritar() {
    this.usuarioService.marcarFavorito(this.usuario.uid);
  }
}
