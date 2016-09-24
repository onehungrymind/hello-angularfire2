import { Injectable } from '@angular/core';
import { Item, Items$ } from './items.model';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ItemsService {
  items$: Items$;

  constructor(private af: AngularFire) {}

  getItems(): Items$ {
    this.items$ = this.af.database.list('items');
    return this.items$;
  }

  saveItem(item: Item): void {
    const {$key, name, description} = item,
      targetItem = {name, description};

    $key ? this.items$.update($key, targetItem) : this.items$.push(targetItem);
  }

  deleteItem(item: Item): void {
    this.items$.remove(item.$key);
  }
}
