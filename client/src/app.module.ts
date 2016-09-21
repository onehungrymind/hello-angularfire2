import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

import { App } from './app';
import { Items } from './items/items.component';
import { ItemsList } from './items/items-list.component';
import { ItemDetail } from './items/item-detail.component';
import { routing, appRoutingProviders } from './app.routing';

export const firebaseConfig = {
  apiKey: 'AIzaSyALMtpDc8Y0g6aoI3DKOvmoPMH_b3oZpOU',
  authDomain: 'hello-angularfire2.firebaseapp.com',
  databaseURL: 'https://hello-angularfire2.firebaseio.com/',
  storageBucket: '',
};

@NgModule({
  declarations: [
    App,
    Items,
    ItemsList,
    ItemDetail
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
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
