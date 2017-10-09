import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {StarRatingModule} from 'angular-star-rating';

export const firebaseConfig = {
  apiKey: 'AIzaSyD2a_7E4PfYd5GucfdGHFwD7TxrT7QXFEk',
  authDomain: 'querotrampar-1787d.firebaseapp.com',
  databaseURL: 'https://querotrampar-1787d.firebaseio.com',
  projectId: 'querotrampar-1787d',
  storageBucket: 'querotrampar-1787d.appspot.com',
  messagingSenderId: '758775532802'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    CoreModule,
    SharedModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
