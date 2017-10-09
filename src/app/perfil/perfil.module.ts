import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {PerfilRoutingModule} from './perfil-routing.module';
import {PerfilComponent} from './perfil.component';
import {PerfilEditComponent} from './perfil-edit/perfil-edit.component';
import {SharedModule} from '../shared/shared.module';
import {StarRatingModule} from 'angular-star-rating';
import {AvaliacaoItemComponent} from './components/avaliacao-item/avaliacao-item.component';
import {PerfilServicoDisponibilizadoComponent} from './components/perfil-servico-disponibilizado/perfil-servico-disponibilizado.component';
import {PerfilProfissionalFavoritoComponent} from './components/perfil-profissional-favorito/perfil-profissional-favorito.component';
import {PerfilEditProfissionalFavoritoComponent} from './perfil-edit/components/perfil-edit-profissional-favorito/perfil-edit-profissional-favorito.component';
import {PerfilEditServicoInscritoComponent} from './perfil-edit/components/perfil-edit-servico-inscrito/perfil-edit-servico-inscrito.component';

@NgModule({
  declarations: [
    PerfilComponent,
    PerfilEditComponent,
    AvaliacaoItemComponent,
    PerfilServicoDisponibilizadoComponent,
    PerfilProfissionalFavoritoComponent,
    PerfilEditProfissionalFavoritoComponent,
    PerfilEditServicoInscritoComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PerfilRoutingModule,
    SharedModule,
    StarRatingModule
  ]
})
export class PerfilModule {
}
