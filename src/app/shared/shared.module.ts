import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DropdownDirective} from './directives/dropdown.directive';
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {ConsultaCepService} from './services/consulta-cep.service';
import {MapService} from './services/map.service';

@NgModule({
  imports: [],
  declarations: [
    DropdownDirective,
    CapitalizePipe
  ],
  exports: [
    CommonModule,
    DropdownDirective,
    CapitalizePipe
  ],
  providers:[
    ConsultaCepService,
    MapService
  ]
})
export class SharedModule {
}
