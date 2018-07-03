import { Injectable } from '@angular/core';
import { SelectedPart } from '../product-select/parts/parts.component';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  selectedItems = [];
  cpu;
  gpu;
  motherboard;

  constructor() {}

  getItems(route: string) {
    // should return an array of objects from firebase containing only a part of and according to the /products/PART/ route

    switch (route) {
      case 'cpu':
        return (this.cpu = [
          {
            id: 1,
            route: 'cpu',
            name: 'CPU',
            model: 'i7-4790K',
            base: 310.0,
            productImage:
              'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
            link: '-',
            merchant: 'newegg'
          },
          {
            id: 2,
            route: 'cpu',
            name: 'CPU',
            model: 'i5-4690K',
            base: 210.0,
            productImage: '',
            link: '-',
            merchant: 'amazon'
          },
          {
            id: 3,
            route: 'cpu',
            name: 'CPU',
            model: 'i3-4390K',
            base: 110.0,
            productImage: '',
            link: '-',
            merchant: 'bh'
          }
        ]);
      case 'gpu':
        return (this.gpu = [
          {
            id: 4,
            route: 'gpu',
            name: 'GPU',
            model: 'gtx1060',
            base: 210.0,
            productImage: '',
            link: '-',
            merchant: 'bh'
          }
        ]);
      case 'motherboard':
        return (this.motherboard = [
          {
            id: 5,
            route: 'motherboard',
            name: 'Motherboard',
            model: 'VI impact',
            base: 215.0,
            productImage: '',
            link: '-',
            merchant: 'amazon'
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
