import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../shared/data.store.service';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  itemList = [];
  selectedParts = [];

  constructor(private dataStoreService: DataStoreService) {}

  ngOnInit() {
    this.itemList = this.dataStoreService.getItems();
    console.log(this.itemList);
  }
  onAddPart(selectedPart) {
    console.log(selectedPart);
    this.selectedParts.push(selectedPart);
    this.dataStoreService.saveSelectedPart(this.selectedParts);
  }
}
