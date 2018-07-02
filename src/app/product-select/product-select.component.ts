import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-select',
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.css']
})
export class ProductSelectComponent implements OnInit {
  item: { name: string };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.item = {
      name: this.route.snapshot.params['name']
    };
  }
}
