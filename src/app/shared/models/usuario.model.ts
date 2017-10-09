import {Link} from './link.model';
import {Endereco} from './endereco.model';
import {Avaliacao} from './avaliacao.model';
import {Categoria} from './categoria.model';
import {ServicoBasic} from './servico-basic.model';

export class Usuario {
  uid: string;
  nome: string;
  email: string;
  foto: string;
  autonomo: boolean;
  cpf: string;
  descricao: string;
  dataCadastro: string;
  ativo: boolean;
  aceitaCartao: boolean;
  links: Link[];
  fones: string[];
  chats: string[];
  observacao: string;
  endereco: Endereco;
  avaliacoes: Avaliacao[];
  servicosInscritos: ServicoBasic[];
  servicosDisponibilizados: ServicoBasic[];
  categorias: Categoria[];
  favoritos: string[];
}
