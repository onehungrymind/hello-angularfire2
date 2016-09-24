import { Component, OnInit } from '@angular/core';
import { Items$, Item } from './items.model';
import { ItemsService } from './items.service';

@Component({
  selector: 'items',
  template: `
  <div class="mdl-grid items">
    <div class="mdl-cell mdl-cell--6-col">
      <items-list [items]="items$"
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
  items$: Items$;
  selectedItem: Item;

  constructor(private ItemsService: ItemsService) {}

  ngOnInit() {
    this.items$ = this.ItemsService.getItems();
  }

  resetItem(): void {
    let emptyItem: Item = {name: '', description: ''};
    this.selectedItem = emptyItem;
  }

  selectItem(item: Item): void {
    this.selectedItem = item;
  }

  saveItem(item: Item): void {
    this.ItemsService.saveItem(item);

    // Generally, we would want to wait for the result of `itemsService.saveItem`
    // before resetting the current item.
    this.resetItem();
  }

  deleteItem(item: Item): void {
    this.ItemsService.deleteItem(item);

    // Generally, we would want to wait for the result of `itemsService.removeItem`
    // before resetting the current item.
    this.resetItem();
  }
}
