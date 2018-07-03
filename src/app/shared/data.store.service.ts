import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  selectedItems;
  getItems() {
    return [
      {
        route: 'cpu',
        name: 'CPU',
        model: 'i7-4790K',
        base: 310.0,
        productImage:
          'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
        promo: '-',
        merchant: 'newegg'
      },
      {
        route: 'cpu',
        name: 'CPU',
        model: 'i5-4690K',
        base: 210.0,
        productImage: '',
        promo: '-',
        merchant: 'amazon'
      },
      {
        route: 'cpu',
        name: 'CPU',
        model: 'i3-4390K',
        base: 110.0,
        productImage: '',
        promo: '-',
        merchant: 'bh'
      }
    ];
  }
  saveSelectedPart(selectedItemsObj: Object) {
    this.selectedItems = Object.assign(selectedItemsObj);
  }
}
