import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {Usuario} from '../shared/models/usuario.model';
import {UsuarioService} from './usuario.service';
import {AuthService} from '../auth/auth.service';
import {CoreService} from '../core/core.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {

  formulario: FormGroup;

  usuarios: Usuario[];
  subscription: Subscription;

  constructor(protected usuarioService: UsuarioService,
              protected authService: AuthService,
              private formBuilder: FormBuilder,
              protected coreService: CoreService) {

    this.formulario = this.formBuilder.group({
        ativo: [true],
        busca: [''],
        categoria: [0],
        cidade: [0],
        autonomo: [true]
      }
    );
  }

  ngOnInit() {
    this.formulario.patchValue(this.usuarioService.getFiltro());

    this.subscription = this.usuarioService.usuariosChanged
      .subscribe((usuarios: Usuario[]) => {
          this.usuarios = usuarios;
        }
      );

    this.usuarios = this.usuarioService.getUsuarios();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onBuscarUsuarios() {
    const busca = this.formulario.get('busca').value;
    const categoriaSelect = parseInt(this.formulario.get('categoria').value);
    const cidadeSelect = this.formulario.get('cidade').value;

    const filtro = {busca: busca, ativo: true, categoria: categoriaSelect, cidade: cidadeSelect, autonomo: true};

    this.usuarioService.setFiltro(filtro);
    this.usuarios = this.usuarioService.getUsuarios();
  }

  limparFiltro() {
    this.usuarioService.setFiltroDefault();
    this.formulario.patchValue(this.usuarioService.getFiltro());
    this.usuarios = this.usuarioService.getUsuarios();
  }


}
