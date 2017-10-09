import {Component, OnDestroy, OnInit} from '@angular/core';
import {Servico} from '../../../shared/models/servico.model';
import {ServicoService} from '../../servico.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CoreService} from '../../../core/core.service';
import {UsuarioBasic} from '../../../shared/models/usuario-basic.model';
import {UsuarioService} from '../../../usuario/usuario.service';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../../../auth/auth.service';
import {MensagemService} from '../../../mensagem/mensagem.service';

@Component({
  selector: 'app-servico-detail',
  templateUrl: './servico-detail.component.html',
  styleUrls: ['./servico-detail.component.css']
})
export class ServicoDetailComponent implements OnInit, OnDestroy {

  servico: Servico;
  usuario: UsuarioBasic;

  getUsuarioBasicSubscription: Subscription;

  constructor(protected servicoService: ServicoService,
              protected authService: AuthService,
              private mensagemService: MensagemService,
              private usuarioService: UsuarioService,
              protected coreService: CoreService,
              private route: ActivatedRoute,
              private router: Router) {
    this.servico = new Servico();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = params['id'];
          this.servicoService.getServico(id)
            .subscribe(servico => {

              if (servico.$exists()) {
                this.servico = servico;

                this.getUsuarioBasicSubscription = this.usuarioService.getUsuarioBasic(this.servico.usuario)
                  .subscribe(usuario => this.usuario = usuario);
              } else {
                this.router.navigate(['/servicos'])
              }
            })
        }
      );
  }

  ngOnDestroy() {

    if (this.getUsuarioBasicSubscription) {
      this.getUsuarioBasicSubscription.unsubscribe();
    }
  }

  enviarMensagem(texto) {
    if (!texto){
      return;
    }

    const dadosMensagem = {
      texto: texto,
      usuarioEnvio: this.authService.usuarioLogado.uid,
      usuarioRecebimento: this.servico.usuario,
      timestamp: Date.now(),
      servico: this.servico.uid
    };

    this.mensagemService.enviarMensagemServico(dadosMensagem);
  }

  inscrever() {
    this.servicoService.inscrever(this.servico.uid, this.servico.candidatos);
  }


  cancelar() {
    const servico = {
      uid: this.servico.uid,
      titulo: this.servico.titulo,
      status: 'cancelado',
      dataCancelamento : Date.now()
    };

    this.servicoService
      .updateServico(servico)

  }

  finalizar() {
    const servico = {
      uid: this.servico.uid,
      titulo: this.servico.titulo,
      status: 'finalizado',
      dataConclusao : Date.now()
    };

    this.servicoService
      .updateServico(servico)
  }
}
