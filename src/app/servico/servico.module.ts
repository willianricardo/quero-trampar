import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ServicoRoutingModule} from './servico-routing.module';
import {ServicoComponent} from './servico.component';
import {ServicoDetailComponent} from './servico-item/servico-detail/servico-detail.component';
import {ServicoItemComponent} from './servico-item/servico-item.component';
import {SharedModule} from '../shared/shared.module';
import { ServicoEditComponent } from './servico-item/servico-edit/servico-edit.component';
import {ServicoCandidatoComponent} from './servico-item/servico-detail/components/servico-candidato/servico-candidato.component';

@NgModule({
  declarations: [
    ServicoComponent,
    ServicoDetailComponent,
    ServicoItemComponent,
    ServicoEditComponent,
    ServicoCandidatoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicoRoutingModule,
    SharedModule
  ]
})
export class ServicoModule {
}
