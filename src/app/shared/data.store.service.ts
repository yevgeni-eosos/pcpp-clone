import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Motherboard } from './motherboard.model';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  selectedItems: Product[] = [];
  cpu;
  gpu;
  motherboard;

  constructor() {}

  getItems(route: string) {
    // id?: number
    // should return an array of objects from firebase containing only a part of and according to the /products/PART/ route

    switch (route) {
      case 'cpu':
        return (this.cpu = [
          new Product(
            1,
            'cpu',
            'CPU',
            'i7-4790k',
            310.0,
            'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
            'https://www.amazon.com/Intel-Core-i7-4790K-Processor-BX80646I74790K/dp/B00KPRWAX8',
            'newegg',
            5
          ),
          new Product(
            2,
            'cpu',
            'CPU',
            'i5-4690K',
            210.0,
            '',
            'https://www.amazon.com/Intel-Core-i7-4790K-Processor-BX80646I74790K/dp/B00KPRWAX8',
            'amazon',
            4
          ),
          new Product(
            3,
            'cpu',
            'CPU',
            'i3-4390K',
            110.0,
            '',
            'https://www.amazon.com/Intel-Core-i7-4790K-Processor-BX80646I74790K/dp/B00KPRWAX8',
            'bh',
            3
          )
        ]);
      case 'gpu':
        return (this.gpu = [
          new Product(
            4,
            'gpu',
            'GPU',
            'GTX 1060',
            210.0,
            '',
            'https://www.amazon.com/Intel-Core-i7-4790K-Processor-BX80646I74790K/dp/B00KPRWAX8',
            'bh'
          )
        ]);
      case 'motherboard':
        return (this.motherboard = [
          new Motherboard(
            new Product(
              5,
              'motherboard',
              'Motherboard',
              'VI Impact',
              215.0,
              '',
              '',
              'amazon'
            ),
            'LGA1150',
            'Mini ITX',
            2,
            64
          )
        ]);
      default:
        return null;
    }
  }
  saveSelectedPart(selectedItemsObj: Product) {
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
