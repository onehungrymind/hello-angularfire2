import {Component} from '@angular/core';
import {AngularFire} from 'angularfire2';

@Component({
  selector: 'container',
  template: `
    <login *ngIf="!(af.auth | async)"></login>
    <items *ngIf="af.auth | async"></items>
  `
})
export class Container {
  constructor(private af: AngularFire) {}
}
