import {Component, Input, OnInit} from '@angular/core';
import {UsuarioBasic} from '../../../../../shared/models/usuario-basic.model';
import {Subscription} from 'rxjs/Subscription';
import {UsuarioService} from '../../../../../usuario/usuario.service';

@Component({
  selector: 'app-servico-candidato',
  templateUrl: './servico-candidato.component.html',
  styleUrls: ['./servico-candidato.component.css']
})
export class ServicoCandidatoComponent implements OnInit {

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
