import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { App } from './app';
import { Container } from './container/container.component';
import { Login} from './login/login.component';
import { Items } from './items/items.component';
import { ItemsList } from './items/items-list.component';
import { ItemDetail } from './items/item-detail.component';
import { routing, appRoutingProviders } from './app.routing';

const firebaseConfig = {
  apiKey: 'AIzaSyALMtpDc8Y0g6aoI3DKOvmoPMH_b3oZpOU',
  authDomain: 'hello-angularfire2.firebaseapp.com',
  databaseURL: 'https://hello-angularfire2.firebaseio.com/',
  storageBucket: '',
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    App,
    Items,
    ItemsList,
    ItemDetail,
    Login,
    Container
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [App]
})
export class AppModule {
}
