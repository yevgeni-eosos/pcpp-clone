import { Component, OnInit, OnDestroy } from '@angular/core';

import { DataStoreService } from '../shared/data.store.service';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit, OnDestroy {
  listFilled = false;
  totalCost = 0;

  displayedColumns = ['component', 'selection', 'base', 'retailer', 'buy'];
  componentsNames;
  mergedTables;

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.mergedTables = this.dataStoreService.meregedSelectedItems;
    this.componentsNames = this.dataStoreService.componentsNames;
    // this.initillizeComponentNames();
    // console.log(this.componentsNames);
    // if (!this.listFilled) {
    //   this.displayedColumns.pop();
    // }
    if (this.mergedTables !== undefined) {
      if (
        JSON.stringify(this.mergedTables) ===
        JSON.stringify(this.componentsNames)
      ) {
        this.listFilled = false;
      }
    }

    for (const el of this.mergedTables) {
      this.totalCost += el.base;
    }

    // this.mergeTables();
    // if (this.mergedTables.length > 0) {
    //   this.displayedColumns.push('remove');
    // }

    this.dataStoreService.log();
  }

  onClearList() {
    this.dataStoreService.clearSelectParts();
    this.displayedColumns.pop();
    this.mergedTables = [];
    this.initillizeComponentNames();
  }

  onBuyClick(route: string, productId: number) {
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
    // console.log(this.mergedTables);
    // console.log(this.componentsNames);
    for (let i = 0; i < this.mergedTables.length; i++) {
      if (this.mergedTables[i].id === id) {
        this.mergedTables.splice(i, 1, this.componentsNames[i]);
        console.log(this.mergedTables);
        console.log(this.componentsNames[i]);
      }
    }

    if (id !== undefined) {
      this.displayedColumns.pop();
    }

    this.initillizeComponentNames();
  }

  onSaveList(ref) {
    // save list function
  }

  // mergeTables() {
  //   for (const key in this.componentsNames) {
  //     if (this.mergedTables.hasOwnProperty(key)) {
  //       this.componentsNames[key] = this.mergedTables[key];
  //     }
  // }
  // }

  initillizeComponentNames() {
    return (this.componentsNames = [
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
    ]);
  }
  ngOnDestroy() {
    // this.dataStoreService.meregedSelectedItems = this.componentsNames;
  }
}
