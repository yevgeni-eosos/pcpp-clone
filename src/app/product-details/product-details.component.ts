import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../shared/data.store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  // constructor(
  //   private dataStoreService: DataStoreService,
  //   private route: ActivatedRoute
  // ) {}
  // item;
  // name;
  // productDetails = (this.item = this.dataStoreService.getItems(
  //   this.item.id,
  //   this.item.name
  // ));
  // ngOnInit() {
  //   this.item = {
  //     id: this.route.snapshot.params['id'],
  //     name: this.route.snapshot.params['name']
  //   };
  //   console.log(this.productDetails);
  // }
}
