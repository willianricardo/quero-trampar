import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Usuario} from '../../../shared/models/usuario.model';
import {UsuarioService} from '../../usuario.service';
import {ActivatedRoute, Params} from '@angular/router';
import {CoreService} from '../../../core/core.service';
import {AuthService} from '../../../auth/auth.service';
import {MensagemService} from '../../../mensagem/mensagem.service';
import {MapService} from '../../../shared/services/map.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css']
})
export class UsuarioDetailComponent implements OnInit {

  usuario: Usuario;
  @ViewChild('maps') mapElement: ElementRef;

  constructor(protected usuarioService: UsuarioService,
              protected authService: AuthService,
              private mensagemService: MensagemService,
              private route: ActivatedRoute,
              protected coreService: CoreService,
              private mapService: MapService) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];

          this.usuarioService.getUsuario(id)
            .subscribe(usuario => {
              this.usuario = usuario;

              if (this.mapElement){
                this.mapService.loadMap(usuario.endereco.maps, this.mapElement.nativeElement);
              }
            })
        }
      );
  }

  enviarMensagem(texto) {
    if (!texto) {
      return;
    }

    const dadosMensagem = {
      texto: texto,
      usuarioEnvio: this.authService.usuarioLogado.uid,
      usuarioRecebimento: this.usuario.uid,
      timestamp: Date.now(),
      servico: ''
    };

    this.mensagemService.enviarMensagemServico(dadosMensagem);
  }

  favoritar() {
    this.usuarioService.marcarFavorito(this.usuario.uid);
  }

  avaliar(preco, apresentacao, atendimento, pontualidade, servico, texto) {

    const avaliacao = {
      usuario: this.authService.currentUser.uid,
      preco,
      apresentacao,
      atendimento,
      pontualidade,
      servico,
      texto,
      timestamp: Date.now()
    };

    this.usuarioService.enviarAvaliacao(this.usuario.uid, avaliacao)
  }

  desativar() {
    const usuario = {
      uid: this.usuario.uid,
      nome: this.usuario.nome,
      foto: this.usuario.foto,
      ativo: false
    };

    this.usuarioService.updateUsuario(usuario);
  }
}
