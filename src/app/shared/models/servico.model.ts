import {Endereco} from './endereco.model';
import {Categoria} from './categoria.model';

export class Servico {
  uid: string;
  titulo: string;
  categorias: Categoria[];
  descricao: string;
  observacao: string;
  dataCadastro: string;
  dataPrevisao: string;
  dataCancelamento: string;
  dataConclusao: string;
  valor: number;
  status: string;
  usuario: string;
  candidatos: any[];
  endereco: Endereco;
}
