import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { LoginService } from './login/login.service';

@Component({
  selector: 'my-app',
  template: require('./app.html')
})

export class App {
  constructor(
    private LoginService: LoginService,
    public af: AngularFire
  ) {}

  logout(): void {
    this.LoginService.logout();
  }
}
