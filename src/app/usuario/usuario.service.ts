import {AngularFireDatabase} from 'angularfire2/database';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

import {isEqual, uniqWith} from 'lodash';

import {Usuario} from '../shared/models/usuario.model';
import {UsuarioBasic} from '../shared/models/usuario-basic.model';
import {AuthService} from '../auth/auth.service';
import {CoreService} from '../core/core.service';


export interface Filtro {
  busca: string;
  ativo: boolean;
  cidade: string;
  categoria: number;
  autonomo: boolean;
}

@Injectable()
export class UsuarioService {

  public usuariosChanged = new Subject<Usuario[]>();

  private usuarios: Usuario[] = [];
  private filtro: Filtro = this.getFiltroDefault();

  constructor(private db: AngularFireDatabase,
              private authService: AuthService,
              private coreService: CoreService) {
    db.list('usuarios', {preserveSnapshot: true})
      .subscribe(
        snapshots => {
          const usuarios: Usuario[] = snapshots.map(snapshot => {
            const usuario: Usuario = snapshot.val();
            usuario.uid = snapshot.key;
            return usuario;
          });

          this.setUsuarios(usuarios);
        }
      );
  }


  getUsuarioBasic(id) {
    return this.db.object('usuarios-basic/' + id)
  }

  getFiltro() {
    return this.filtro;
  }

  setFiltro(filtro) {
    this.filtro = filtro;
  }

  getFiltroDefault() {
    return {
      busca: '',
      ativo: true,
      categoria: 0,
      cidade: '',
      autonomo: true
    }
  }

  setFiltroDefault() {
    this.setFiltro(this.getFiltroDefault());
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

  getUsuarios() {
    return this.usuarios.filter(
      usuario => {
        const busca = usuario.nome.search(new RegExp(this.filtro.busca, 'ig')) !== -1;
        const ativo = usuario.ativo === true;
        const autonomo = usuario.autonomo === true;
        const cidade = this.filtro.cidade ? usuario.endereco.ibge === this.filtro.cidade : true;
        const categoria = this.possuiCategoria(usuario.categorias, this.filtro.categoria);

        return busca && categoria && cidade && ativo && autonomo;
      }
    );
  }

  setUsuarios(usuarios: Usuario[]) {
    this.usuarios = usuarios;
    this.usuariosChanged.next(this.getUsuarios());
  }

  getUsuario(id: string) {
    return this.db.object('usuarios/' + id);
  }

  setUsuario(usuario) {
    const usuarioBasic: UsuarioBasic = {
      uid: usuario.uid,
      nome: usuario.nome,
      foto: usuario.foto,
      autonomo: usuario.autonomo
    };

    this.db.object('usuarios-basic/' + usuario.uid).set(usuarioBasic);

    return this.db.object('usuarios/' + usuario.uid).set(usuario);
  }

  updateUsuario(usuario) {
    const usuarioBasic: UsuarioBasic = {
      uid: usuario.uid,
      nome: usuario.nome,
      foto: usuario.foto,
      autonomo: usuario.autonomo
    };

    this.db.object('usuarios-basic/' + usuario.uid).update(usuarioBasic);

    return this.db.object('usuarios/' + usuario.uid).update(usuario);
  }

  getMediaAvaliacao(avaliacao) {
    return (avaliacao.preco +
      avaliacao.apresentacao +
      avaliacao.atendimento +
      avaliacao.pontualidade +
      avaliacao.servico) / 5;
  }

  getMediaAvaliacoes(avaliacoes) {
    avaliacoes = this.coreService.getValuesFromObject(avaliacoes);
    if (!avaliacoes) {
      return 0;
    }

    const soma = avaliacoes.reduce((acc, curr) => acc + this.getMediaAvaliacao(curr), 0);
    return soma / avaliacoes.length;
  }

  getMediaAvaliacaoServico(avaliacoes) {
    if (!avaliacoes) {
      return 0;
    }

    const soma = avaliacoes.reduce((acc, curr) => acc + curr.servico, 0);
    return soma / avaliacoes.length;
  }

  getMediaAvaliacaoPreco(avaliacoes) {

    if (!avaliacoes) {
      return 0;
    }

    const soma = avaliacoes.reduce((acc, curr) => acc + curr.preco, 0);
    return soma / avaliacoes.length;
  }

  getMediaAvaliacaoAtendimento(avaliacoes) {
    if (!avaliacoes) {
      return 0;
    }

    const soma = avaliacoes.reduce((acc, curr) => acc + curr.atendimento, 0);
    return soma / avaliacoes.length;
  }

  getMediaAvaliacaoPontualidade(avaliacoes) {
    if (!avaliacoes) {
      return 0;
    }

    const soma = avaliacoes.reduce((acc, curr) => acc + curr.pontualidade, 0);
    return soma / avaliacoes.length;
  }

  getMediaAvaliacaoApresentacao(avaliacoes) {
    if (!avaliacoes) {
      return 0;
    }

    const soma = avaliacoes.reduce((acc, curr) => acc + curr.apresentacao, 0);
    return soma / avaliacoes.length;
  }

  marcarFavorito(uid) {
    if (this.isFavorito(uid)) {
      const favoritos = this.authService.getUsuarioLogado().favoritos;

      const newFavoritos = Object.keys(favoritos).reduce((acc, curr) => {

        if (favoritos[curr] !== uid) {
          acc[curr] = favoritos[curr];
        }

        return acc
      }, {});

      this.db.object('usuarios/' + this.authService.currentUser.uid + '/favoritos').set(newFavoritos);
    } else {
      this.db.object('usuarios/' + this.authService.currentUser.uid + '/favoritos').$ref.push(uid);
    }
  }

  enviarAvaliacao(usuario, avaliacao) {
    this.db.list('usuarios/' + usuario + '/avaliacoes').push(avaliacao);
  }

  isFavorito(uid) {
    if (!this.authService.getUsuarioLogado()) {
      return false;
    }

    const favoritos = this.authService.getUsuarioLogado().favoritos;

    if (!favoritos) {
      return false;
    }

    return Object.keys(favoritos).map(key => favoritos[key]).some(profissional => profissional === uid);
  }

  getCidades() {

    const usuarios = this.usuarios
      .filter((usuario) => (usuario.autonomo && usuario.ativo && usuario.endereco.ibge))
      .map((usuario) => ({ibge: usuario.endereco.ibge, cidade: usuario.endereco.cidade}));

    return uniqWith(usuarios, isEqual);
  }
}
