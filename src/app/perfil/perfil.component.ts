import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Usuario} from '../shared/models/usuario.model';
import {UsuarioService} from '../usuario/usuario.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {CoreService} from '../core/core.service';
import {Router} from '@angular/router';
import {MapService} from '../shared/services/map.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit, OnDestroy {
  usuario: Usuario = new Usuario;
  getUsuarioSubscription: Subscription;
  currentUserChanged: Subscription;

  @ViewChild('maps') mapElement: ElementRef;


  constructor(protected usuarioService: UsuarioService,
              protected authService: AuthService,
              protected coreService: CoreService,
              private router: Router,
              private mapService: MapService) {
  }


  ngOnInit() {
    if (this.authService.currentUser) {
      this.getUsuarioSubscription = this.getUsuario(this.authService.currentUser);
    } else {
      this.currentUserChanged = this.authService.currentUserChanged.subscribe(currentUser => {
        this.getUsuarioSubscription = this.getUsuario(currentUser);
      });
    }
  }

  ngOnDestroy() {
    if (this.currentUserChanged) {
      this.currentUserChanged.unsubscribe();

      if (this.getUsuarioSubscription) {
        this.getUsuarioSubscription.unsubscribe();
      }
    }
  }

  private getUsuario(currentUser) {
    return this.usuarioService
      .getUsuario(currentUser.uid)
      .subscribe(usuario => {
        this.usuario = usuario;

        if (this.mapElement){
          this.mapService.loadMap(usuario.endereco.maps, this.mapElement.nativeElement);
        }
      });
  }

  desativar() {
    const usuario = {
      uid: this.authService.getUsuarioLogado().uid,
      nome: this.authService.getUsuarioLogado().nome,
      foto: this.authService.getUsuarioLogado().foto,
      ativo: false
    };

    this.usuarioService.updateUsuario(usuario)
      .then(() => this.router.navigate(['/login']));

  }
}

