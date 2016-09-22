import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'my-app',
  template: require('./app.html')
})

export class App {
  constructor(private af: AngularFire) {}

  logout() {
    this.af.auth.logout();
  }
}
