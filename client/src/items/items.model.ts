import { FirebaseListObservable } from 'angularfire2';

export interface Item {
  key?: number;
  name: string;
  description: string;
}

export interface Items$ extends FirebaseListObservable<Array<Item>> {}
