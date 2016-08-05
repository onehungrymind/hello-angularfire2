import 'core-js';
import 'zone.js/dist/zone';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_PROVIDERS} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {App} from './src/app';
import {FIREBASE_PROVIDERS, defaultFirebase} from 'angularfire2';

bootstrap(App, [
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: 'AIzaSyALMtpDc8Y0g6aoI3DKOvmoPMH_b3oZpOU',
    authDomain: 'hello-angularfire2.firebaseapp.com',
    databaseURL: 'https://hello-angularfire2.firebaseio.com/',
    storageBucket: '',
  }),
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
