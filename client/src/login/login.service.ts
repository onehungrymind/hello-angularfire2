import { Injectable } from '@angular/core';
import { AngularFire, FirebaseAuthState } from 'angularfire2';
import { Credentials } from './credentials.model';

@Injectable()
export class LoginService {
  constructor(private af: AngularFire) {}

  login(credentials: Credentials): Promise<FirebaseAuthState> {
    return this.af.auth
      .login(credentials);
  }

  signUp(credentials: Credentials): Promise<FirebaseAuthState> {
    return this.af.auth
      .createUser(credentials);
  }

  logout(): void {
    this.af.auth.logout();
  }
}
