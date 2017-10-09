import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {UsuarioRoutingModule} from './usuario-routing.module';
import {UsuarioComponent} from './usuario.component';
import {UsuarioDetailComponent} from './usuario-item/usuario-detail/usuario-detail.component';
import {UsuarioItemComponent} from './usuario-item/usuario-item.component';
import {SharedModule} from '../shared/shared.module';
import {StarRatingModule} from 'angular-star-rating';
import { AvaliacaoItemComponent } from './usuario-item/usuario-detail/components/avaliacao-item/avaliacao-item.component';
import {PerfilServicoDisponibilizadoComponent} from './usuario-item/usuario-detail/components/perfil-servico-disponibilizado/perfil-servico-disponibilizado.component';
import { UsuarioEditComponent } from './usuario-item/usuario-edit/usuario-edit.component';
import {PerfilEditProfissionalFavoritoComponent} from './usuario-item/usuario-edit/components/perfil-edit-profissional-favorito/perfil-edit-profissional-favorito.component';
import {PerfilEditServicoInscritoComponent} from './usuario-item/usuario-edit/components/perfil-edit-servico-inscrito/perfil-edit-servico-inscrito.component';

@NgModule({
  declarations: [
    UsuarioComponent,
    UsuarioDetailComponent,
    UsuarioItemComponent,
    AvaliacaoItemComponent,
    PerfilServicoDisponibilizadoComponent,
    UsuarioEditComponent,
    PerfilEditServicoInscritoComponent,
    PerfilEditProfissionalFavoritoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsuarioRoutingModule,
    SharedModule,
    StarRatingModule
  ]
})
export class UsuarioModule {
}
