import {Component, OnInit} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ItemsList} from './items-list.component';
import {ItemDetail} from './item-detail.component';
import {Item} from './item.model';

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
  `]
})
export class Items implements OnInit {
  items: FirebaseListObservable<Item[]>;
  selectedItem: Item;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.items = this.af.database.list('items');
  }

  resetItem() {
    let emptyItem: Item = {name: '', description: ''};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item) {
    this.selectedItem = item;
  }

  saveItem(item: Item) {
    const {$key, name, description} = item,
      targetItem = {name, description};

    $key ? this.items.update($key, targetItem) : this.items.push(targetItem);

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
