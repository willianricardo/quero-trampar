import {Router} from '@angular/router';
import * as firebase from 'firebase';
import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Subject} from 'rxjs/Subject';
import {CurrentUser} from '../shared/models/current-user.model';
import {User} from 'firebase/app';
import {Usuario} from '../shared/models/usuario.model';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class AuthService {
  currentUser: User;
  usuarioLogado: Usuario = null;
  private administrator: string = '';
  private ativo: boolean = false;

  public currentUserChanged = new Subject<CurrentUser>();

  getUsuarioLogado() {
    return this.usuarioLogado;
  };

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
    this.db.object('administrator')
      .subscribe(administrator => this.administrator = administrator.$value);

    this.afAuth.auth.onAuthStateChanged(auth => {
      this.currentUser = null;
      this.usuarioLogado = null;
      if (auth) {

        this.db.object('usuarios/' + this.afAuth.auth.currentUser.uid)
          .subscribe(usuario => {
            this.currentUser = this.afAuth.auth.currentUser;
            this.currentUserChanged.next(this.currentUser);
            this.usuarioLogado = usuario;
            if (!usuario.$exists()) {
              this.ativo = true;
              this.router.navigate(['/perfil/alterar']);
            } else {
              this.ativo = usuario.ativo;
            }
          });
      }
    })
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null && this.isAtivo();
  }

  isAtivo() {
    return this.ativo;
  }

  isAdministrator() {
    if (!this.currentUser) {
      return false;
    }

    return this.currentUser.uid === this.administrator;
  }

  isAdministratorWithUID(uid) {
    if (!uid) {
      return false;
    }

    return uid === this.administrator;
  }

  isMe(usuario): boolean {
    if (!usuario) {
      return false;
    }

    if (!this.currentUser) {
      return false;
    }

    return this.currentUser.uid === usuario;
  }

  success = (success) => {
    this.router.navigate(['/home']);
  };

  error = (error) => {
    if (error) {
      console.log(error);
    }
  };

  registroEmail(email: string, password: string) {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(this.error);
  }

  loginEmail(email: string, password: string) {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(this.success)
      .catch(this.error);
  }


  loginAnonimo() {
    this.afAuth.auth
      .signInAnonymously()
      .then(this.success)
      .catch(this.error);
  }

  loginFacebook() {
    this.login(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    this.login(new firebase.auth.GoogleAuthProvider());
  }

  loginGitHub() {
    this.login(new firebase.auth.GithubAuthProvider());
  }

  loginTwitter() {
    this.login(new firebase.auth.TwitterAuthProvider());
  }

  login(provider) {
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(this.success)
      .catch(this.error);
  }

  logout() {
    this.afAuth.auth.signOut()
      .then((success) => {
        this.router.navigate(['/login']);
      });
  }
}
