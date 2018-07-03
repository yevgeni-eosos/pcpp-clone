import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../shared/data.store.service';
import { ActivatedRoute } from '@angular/router';

export interface SelectedPart {
  base: number;
  merchant: string;
  model: string;
  name: string;
  productImage: string;
  promo: string;
  route: string;
}

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  itemList = [];
  selectedPart;
  item: { name: string };

  constructor(
    private dataStoreService: DataStoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.item = {
      name: this.route.snapshot.params['name']
    };

    this.itemList = this.dataStoreService.getItems(this.item.name);
  }
  onAddPart(selectedPart) {
    this.selectedPart = Object.assign(selectedPart);

    this.dataStoreService.saveSelectedPart(this.selectedPart);
  }
}
