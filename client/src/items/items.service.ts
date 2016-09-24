import { Injectable } from '@angular/core';
import { Item, Items$ } from './items.model';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ItemsService {
  constructor(private af: AngularFire) {}

  getItems(): Items$ {
    return this.af.database.list('items');
  }

  saveItem(item: Item): void {
    // Save
  }

  deleteItem(item: Item): void {
    // Delete
  }
}
