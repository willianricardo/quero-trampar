import {UsuarioBasic} from './usuario-basic.model';
import {ServicoBasic} from './servico-basic.model';

export class Notificacao {
  uid: string;
  usuario: UsuarioBasic;
  servico: ServicoBasic;
  titulo: string;
  link: string;
  visualizado: boolean;
  descricao: string;
  datahora: string;
}
