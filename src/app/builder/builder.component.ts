import { Component, OnInit, OnChanges } from '@angular/core';
import { DataStoreService } from '../shared/data.store.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit, OnChanges {
  isListEmpty = true;
  totalCost = 0;

  displayedColumns = ['component', 'selection', 'base', 'retailer', 'buy'];
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

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.selectedItemsList = this.dataStoreService.selectedItems;
    if (this.selectedItemsList !== undefined) {
      if (Object.keys(this.selectedItemsList).length > 0) {
        this.isListEmpty = false;
      }
    }

    for (const el of this.selectedItemsList) {
      this.totalCost += el.base;
    }

    this.mergeTables();

    console.log(this.selectedItemsList);
  }

  onClearList() {
    this.dataStoreService.clearSelectParts();
    this.selectedItemsList = [];
    this.componentsNames = [
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
  }

  onBuyClick(route, productId) {
    // performancetweak

    const productLinkEnteredCategory = this.dataStoreService.getItems(route);

    for (let i = 0; i < productLinkEnteredCategory.length; i++) {
      const id = productLinkEnteredCategory[i].id;
      if (productId === id) {
        document.location.href = productLinkEnteredCategory[i].link;
      }
    }
  }

  onRemoveClick(id: number) {
    for (let i = 0; i < this.selectedItemsList.length; i++) {
      if (this.selectedItemsList[i].id === id) {
        this.selectedItemsList.splice(i, 1);
      }
    }
  }

  mergeTables() {
    for (const key in this.componentsNames) {
      if (this.selectedItemsList.hasOwnProperty(key)) {
        this.componentsNames[key] = this.selectedItemsList[key];
      }
    }

    if (this.selectedItemsList.length > 0) {
      this.displayedColumns.push('remove');
    }
  }

  ngOnChanges() {
    this.mergeTables();
  }
}
