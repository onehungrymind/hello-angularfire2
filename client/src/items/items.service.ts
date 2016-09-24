import { Injectable } from '@angular/core';
import { Item } from './items.model';
import { items } from './items';

@Injectable()
export class ItemsService {
  items: Item[] = items;

  getItems(): Item[] {
    return this.items;
  }

  saveItem(item: Item): void {
    const { id, name, description } = item,
      targetItem: Item = { name, description };

    if (id) {
      this.items.forEach((i, index) => {
        this.items[index] = i.id === id
          ? Object.assign({}, i, targetItem)
          : i;
      });
    } else {
      targetItem.id = this.generateId();
      this.items.push(targetItem);
    }
  }

  deleteItem(item: Item): void {
    this.items.forEach((i, index) => {
      if (i.id === item.id) {
        this.items.splice(index, 1);
      }
    });
  }

  generateId() {
    const min = Math.ceil(100),
      max = Math.floor(1000);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
