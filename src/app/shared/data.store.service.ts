import { Injectable } from '@angular/core';
import { SelectedPart } from '../product-select/parts/parts.component';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  selectedItems = [];
  cpu;
  gpu;

  constructor() {}

  getItems(route: string) {
    // should return an array of objects from firebase containing only a part of and according to the /products/PART/ route

    switch (route) {
      case 'cpu':
        return (this.cpu = [
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
        ]);
      case 'gpu':
        return (this.gpu = [
          {
            route: 'gpu',
            name: 'GPU',
            model: 'gtx1060',
            base: 210.0,
            productImage: '',
            promo: '-',
            merchant: 'bh'
          }
        ]);
      default:
        return null;
    }
  }
  saveSelectedPart(selectedItemsObj: SelectedPart) {
    // performancetweak
    if (selectedItemsObj !== undefined) {
      const compareTo = selectedItemsObj.route;
      for (let i = 0; i < this.selectedItems.length; i++) {
        if (this.selectedItems[i].route === compareTo) {
          this.selectedItems.splice(i, 1);
        }
      }
    }
    this.selectedItems.push(selectedItemsObj);
  }

  clearSelectParts() {
    this.selectedItems = [];
  }
}
