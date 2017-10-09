import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {Servico} from '../shared/models/servico.model';
import {ServicoBasic} from '../shared/models/servico-basic.model';
import {AuthService} from '../auth/auth.service';

export interface Filtro {
  busca: string;
  status: string;
  categoria: number;
}

@Injectable()
export class ServicoService {

  public servicosChanged = new Subject<Servico[]>();

  private servicos: Servico[] = [];
  private filtro: Filtro = this.getFiltroDefault();


  constructor(private db: AngularFireDatabase,
              private authService: AuthService) {
    db.list('servicos', {preserveSnapshot: true})
      .subscribe(
        snapshots => {
          const servicos: Servico[] = snapshots.map(snapshot => {
            const servico: Servico = snapshot.val();
            servico.uid = snapshot.key;
            return servico;
          });

          this.setServicos(servicos);
        }
      );
  }

  getFiltro() {
    return this.filtro;
  }

  setFiltro(filtro) {
    this.filtro = filtro;
  }

  setFiltroDefault() {
    this.setFiltro(this.getFiltroDefault());
  }

  getFiltroDefault() {
    return {
      busca: '',
      status: 'disponivel',
      categoria: 0,
      autonomo: true
    }
  }

  possuiCategoria(categorias, categoria: number) {

    if (!categoria) {
      return true;
    }

    if (!categorias) {
      return false;
    }

    return categorias.some(item => item.uid === categoria);
  }

  getServicos() {
    return this.servicos.filter(
      servico => {
        const busca = servico.titulo.search(new RegExp(this.filtro.busca, 'ig')) !== -1;
        const ativo = servico.status === 'disponivel';
        const categoria = this.possuiCategoria(servico.categorias, this.filtro.categoria);
        return busca && ativo && categoria;
      }
    );
  }

  getServicoBasic(id) {
    return this.db.object('servicos-basic/' + id)
  }

  setServicos(servicos: Servico[]) {
    this.servicos = servicos;
    this.servicosChanged.next(this.getServicos());
  }

  getServico(id: string) {
    return this.db.object('servicos/' + id);
  }

  setServico(servico) {

    return this.db.list('/servicos')
      .push(servico)
      .then(success => {
          servico.uid = success.key;

          const servicoBasic: ServicoBasic = {
            uid: servico.uid,
            titulo: servico.titulo
          };

          this.db.object('servicos-basic/' + success.key)
            .set(servicoBasic);

          this.db.object('servicos/' + success.key)
            .update(servico);

          this.db.object('usuarios/' + servico.usuario + '/servicosDisponibilizados').$ref.push(success.key);

          return success;
        }
      );
  }

  updateServico(servico) {
    const servicoBasic: ServicoBasic = {
      uid: servico.uid,
      titulo: servico.titulo
    };

    this.db.object('servicos-basic/' + servico.uid)
      .set(servicoBasic);

    return this.db.object('servicos/' + servico.uid).update(servico);
  }

  isInscrito(candidatos) {
    if (!this.authService.currentUser) {
      return false;
    }

    if (!candidatos) {
      return false;
    }

    return Object.keys(candidatos).map(key => candidatos[key]).some(profissional => profissional === this.authService.currentUser.uid);
  }

  inscrever(uid, candidatos) {
    if (this.isInscrito(candidatos)) {
      const newCandidatos = Object.keys(candidatos).reduce((acc, curr) => {

        if (candidatos[curr] !== this.authService.currentUser.uid) {
          acc[curr] = candidatos[curr];
        }

        return acc
      }, {});

      this.db.object('servicos/' + uid + '/candidatos').set(newCandidatos);


      const servicosInscritos = this.authService.getUsuarioLogado().servicosInscritos;

      if (servicosInscritos) {
        const newServicosInscritos = Object.keys(servicosInscritos).reduce((acc, curr) => {

          if (servicosInscritos[curr] !== uid) {
            acc[curr] = servicosInscritos[curr];
          }

          return acc
        }, {});

        this.db.object('usuarios/' + this.authService.currentUser.uid + '/servicosInscritos').set(newServicosInscritos);
      }

    } else {
      this.db.object('servicos/' + uid + '/candidatos').$ref.push(this.authService.currentUser.uid);
      this.db.object('usuarios/' + this.authService.currentUser.uid + '/servicosInscritos').$ref.push(uid);
    }
  }
}
