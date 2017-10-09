import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AngularFireDatabase} from 'angularfire2/database';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {UsuarioService} from '../usuario/usuario.service';
import {Chat} from '../shared/models/chat.model';

@Injectable()
export class MensagemService {

  public chatListChanged = new Subject<string[]>();
  private currentUserChanged: Subscription;

  private chatList: any[] = [];

  private chats: Chat[] = [];

  constructor(private db: AngularFireDatabase,
              private authService: AuthService,
              private usuarioService: UsuarioService) {
    this.currentUserChanged = this.authService.currentUserChanged.subscribe(currentUser => {
      if (currentUser) {
        this.usuarioService.getUsuario(currentUser.uid).subscribe(usuario => {
          if (usuario.$exists()) {
            if (usuario.chats) {
              this.setChatList(Object.keys(usuario.chats).map(key => usuario.chats[key]));
            }
          }
        });
      }
    });

    if (this.authService.getUsuarioLogado()) {
      if (this.authService.getUsuarioLogado().chats) {
        this.setChatList(this.authService.getUsuarioLogado().chats);
      }
    }

    db.list('chats', {preserveSnapshot: true})
      .subscribe(
        snapshots => {
          const chats: Chat[] = snapshots.map(snapshot => {
            const chat: Chat = snapshot.val();
            chat.uid = snapshot.key;
            return chat;
          });

          this.setChats(chats);
        }
      );
  }

  getChatList() {
    return this.chatList.slice();
  }

  setChatList(chats: any[] = []) {
    this.chatList = chats;
    this.chatListChanged.next(this.chatList.slice());
  }

  setChats(chats: Chat[] = []) {
    this.chats = chats;
  }

  getNumeroChats() {
    return this.chatList.reduce((acc, curr) => {
      if (curr.notificacao) {
        acc += 1;
      }

      return acc
    }, 0);
  }

  getUsuarioMensagem(usuarios: string[] = []) {
    return usuarios.reduce((acc, curr) => {
      if (curr !== this.authService.currentUser.uid) {
        acc = curr;
      }
      return acc
    }, this.authService.currentUser.uid);

  }

  // getNumeroChats() {
  //   // const numeroChats = this.chats.reduce((acc, curr) => {
  //   //   if (!curr.visualizado) {
  //   //     acc += 1;
  //   //   }
  //   //
  //   //   return acc
  //   // }, 0);
  //   // return numeroChats;
  // }
  //
  // getNumeroMensagens() {
  //   // const numeroMensagens = this.mensagens.reduce((acc, curr) => {
  //   //   if (!curr.visualizado) {
  //   //     acc += 1;
  //   //   }
  //   //
  //   //   return acc
  //   // }, 0);
  //   // return numeroMensagens;
  // }

  getChat(id) {
    return this.db.object('chats/' + id);
  }

  getChats() {
    return this.chats.slice();
  }

  getMensagensfromChat(id) {
    return this.db.list('mensagens/' + id, {preserveSnapshot: true});
  }


  //
  // setMensagem(chats: Chat[] = []) {
  //   return this.db.object('/usuarios/' + this.authService.currentUser.uid)
  //     .update({mensagens: chats});
  // }
  //
  // enviarMensagem(chatId, mensagem) {
  //   return this.db.list('mensagens/' + chatId, {preserveSnapshot: true}).push(mensagem);
  // }

  existeChat(dados) {

    const chat = this.chats.reduce((acc, curr) => {
      const servico = curr.servico === dados.servico;
      const usuarioEnvio = curr.usuarios.some(usuario => usuario === dados.usuarioEnvio);
      const usuarioRecebimento = curr.usuarios.some(usuario => usuario === dados.usuarioRecebimento);

      if (servico && usuarioEnvio && usuarioRecebimento) {
        acc = curr
      }
      return acc
    }, null);


    return chat;
  }

  novoChat(dados) {
    const chat = {
      servico: dados.servico,
      usuarios: [dados.usuarioEnvio, dados.usuarioRecebimento]
    };

    return this.db.list('chats', {preserveSnapshot: true}).push(chat);

  }

  novaMensagem(chat, dados) {
    const mensagem = {
      texto: dados.texto,
      usuario: dados.usuarioEnvio,
      timestamp: dados.timestamp
    };

    this.db.list('mensagens/' + chat, {preserveSnapshot: true})
      .push(mensagem);

    this.insereChatUsuario(dados.usuarioEnvio, chat, false);
    this.insereChatUsuario(dados.usuarioRecebimento, chat, true);
  }

  insereChatUsuario(usuarioID, chatID, notificar) {
    const chatsListObservable = this.db.list('usuarios/' + usuarioID + '/chats', {preserveSnapshot: true});

    chatsListObservable
      .subscribe(chats => {
          const existeChatNoUsuario = chats
            .map(chat => chat.val())
            .some(chat => chat.uid === chatID);

          const chat = {
            uid: chatID,
            notificacao: notificar
          };

          if (!existeChatNoUsuario) {
            chatsListObservable.push(chat);
          } else {
            const chatItem = this.getChatFromChats(chats, chatID);

            if (notificar) {
              if (!chatItem.value.notificacao) {
                this.db.object('usuarios/' + usuarioID + '/chats/' + chatItem.key).update(chat);
              }
            }
          }

        }
      )
      .unsubscribe();
  }

  private getChatFromChats(chats, chatID) {
    return chats
      .map(chat => {
        return {key: chat.key, value: chat.val()}
      })
      .reduce((acc, curr) => {
        if (curr.value.uid === chatID) {
          acc = curr;
        }

        return acc
      }, null);
  }

  enviarMensagemServico(dados) {
    let chat = this.existeChat(dados);

    if (chat) {
      this.novaMensagem(chat.uid, dados);
    } else {
      this.novoChat(dados)
        .then(success => this.novaMensagem(success.key, dados));
    }
  }

  marcarVisualizado(chatID: string) {
    const chatsListObservable = this.db.list('usuarios/' + this.authService.currentUser.uid + '/chats', {preserveSnapshot: true});

    chatsListObservable
      .subscribe(chats => {
          const chat = {
            uid: chatID,
            notificacao: false
          };

          const chatItem = this.getChatFromChats(chats, chatID);

          if (chatItem.value.notificacao) {
            this.db.object('usuarios/' + this.authService.currentUser.uid + '/chats/' + chatItem.key).update(chat);
          }
        }
      )
      .unsubscribe();
  }
}
