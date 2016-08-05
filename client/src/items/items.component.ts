import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ItemsList} from './items-list.component';
import {ItemDetail} from './item-detail.component';

interface Item {
  $key: string;
  name: string;
  description: string;
};

@Component({
  selector: 'items',
  template: `
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <items-list [items]="items"
      (selected)="selectItem($event)" (deleted)="deleteItem($event)">
      </items-list>
    </div>
    <div class="mdl-cell mdl-cell--6-col">
      <item-detail
      (saved)="saveItem($event)" (cancelled)="resetItem($event)"
      [item]="selectedItem">
        Select an Item
      </item-detail>
    </div>
  </div>
  `,
  styles: [`
    .items {
      padding: 20px;
    }
  `],
  directives: [ItemsList, ItemDetail]
})
export class Items implements OnInit {
  items: FirebaseListObservable<Item[]>;
  selectedItem: Item;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.items = this.af.database.list('items');
  }

  resetItem() {
    let emptyItem: Item = {$key: null, name: '', description: ''};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    const key = item.$key;
    delete item.$key;
    key ? this.items.update(key, item) : this.items.push(item);

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  deleteItem(item: Item) {
    this.items.remove(item.$key);

    // Generally, we would want to wait for the result of `itemsService.deleteItem`
    // before resetting the current item.
    this.resetItem();
  }
}
