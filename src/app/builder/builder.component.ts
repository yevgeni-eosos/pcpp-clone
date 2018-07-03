import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../shared/data.store.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  isListEmpty = true;
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
      name: 'MotherBoard'
    }
  ];
  selectedItemsList;
  // pickedItemData: Product[] = [
  //   new Product(
  //     1,
  //     'cpu',
  //     'CPU',
  //     'i9-9800k',
  //     520.99,
  //     'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
  //     'amazon',
  //     5
  //   ),
  //   new Product(2, 'gpu', 'Video Card', 'MSI GTX 1070', 480.99, '', 'newegg', 5)
  // ];

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.selectedItemsList = this.dataStoreService.selectedItems;

    if (this.selectedItemsList !== undefined) {
      if (Object.keys(this.selectedItemsList).length > 0) {
        this.isListEmpty = false;
      }
    }
  }

  onClearList() {
    this.dataStoreService.clearSelectParts();
    this.selectedItemsList = [];
  }
}
