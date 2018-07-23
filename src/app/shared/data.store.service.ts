import { Injectable, OnDestroy } from '@angular/core';
import { Product } from './product.model';
import { Motherboard } from './motherboard.model';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  // selectedItems: Product[] = [];
  componentsNames = [
    {
      route: 'cpu',
      name: 'CPU'
    },
    {
      route: 'gpu',
      name: 'Video Card'
    },
    {
      route: 'motherboard',
      name: 'Motherboard'
    }
  ];

  meregedSelectedItems = this.componentsNames.slice();

  productsList = [
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
    ),
    new Product(
      4,
      'gpu',
      'Video Card',
      'GTX 1060',
      210.0,
      '',
      'https://www.amazon.com/Intel-Core-i7-4790K-Processor-BX80646I74790K/dp/B00KPRWAX8',
      'bh'
    ),
    // new Motherboard(
    //   new Product(
    //     5,
    //     'motherboard',
    //     'Motherboard',
    //     'VI Impact',
    //     215.0,
    //     '',
    //     '',
    //     'amazon'
    //   ),
    //   'LGA1150',
    //   'Mini ITX',
    //   2,
    //   64
    // ),
    new Product(
      6,
      'motherboard',
      'Motherboard',
      'VII Impact',
      225.0,
      '',
      '',
      'amazon'
    )
  ];
  constructor() {}
  // id?: number
  // should return an array of objects from firebase containing only a part of and according to the /products/PART/ route
  getItems(route: string) {
    return this.productsList.filter(product => product.route === route);
  }

  saveSelectedPart(selectedItemsObj: Product) {
    // performancetweak
    if (selectedItemsObj !== undefined) {
      // const compareTo = selectedItemsObj.route;
      for (let i = 0; i < this.componentsNames.length; i++) {
        if (selectedItemsObj.name === this.componentsNames[i].name) {
          this.meregedSelectedItems[i] = selectedItemsObj;
        }
      }
    }
  }

  clearSelectParts() {
    this.meregedSelectedItems = this.componentsNames.slice();
    console.log(this.meregedSelectedItems);
  }

  log() {
    // console.log('should be immutable: ');
    // console.log(this.productsList);
    // console.log('should be immutable: ');
    // console.log(this.componentsNames);
    // console.log('should be mutable: ');
    // // console.log(this.selectedItems);
    // console.log('should be mutable: ');
    // console.log(this.meregedSelectedItems);
  }
}
