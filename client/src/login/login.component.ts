import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Credentials } from './credentials.model';

@Component({
  selector: 'login',
  template: `
  <div class="mdl-grid">
    <div class="mdl-cell">
      <div class="mdl-card mdl-shadow--2dp">
        <form (submit)="login()">
          <div class="mdl-card__title">
            <h1 class="mdl-card__title-text">Login</h1>
          </div>
          <div class="mdl-card__supporting-text">
            <div class="mdl-textfield">
              <label for="email">Email</label>
              <input class="mdl-textfield__input" [(ngModel)]="email" type="email" id="email" name="email">
            </div>
            <div class="mdl-textfield">
              <label for="password">Password</label>
              <input class="mdl-textfield__input" [(ngModel)]="password" type="password" id="password" name="password">
            </div>
            <div class="error">{{error}}</div>
          </div>
          <div class="mdl-card__actions mdl-card--border">
            <button type="submit" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
              Login
            </button>
            <button type="button" (click)="signUp()" class="mdl-button mdl-js-button mdl-js-ripple-effect">
              Sign up
            </button>
          </div>
          <div class="mdl-card__menu">
  
          </div>
        </form>
      </div>
    </div>
  </div>
`,
  styles: [`
    .mdl-grid {
      justify-content: center;
    }
    .mdl-card__actions {
      display: flex;
      justify-content: space-between;
    }
    .error {
      color: red;
    }
  `]
})
export class Login {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private LoginService: LoginService) {}

  login(): void {
    this.LoginService
      .login(this.getCredentials())
      .then(res => this.error = null)
      .catch(error => this.error = error.message);
  }

  signUp(): void {
    this.LoginService
      .signUp(this.getCredentials())
      .then(res => this.error = null)
      .catch(error => this.error = error.message);
  }

  getCredentials(): Credentials {
    return { email: this.email, password: this.password };
  }
}
