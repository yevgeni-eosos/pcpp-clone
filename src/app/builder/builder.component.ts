import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {
  isListEmpty = true;
  pickedItemData: Product[] = [
    new Product(
      1,
      'cpu',
      'CPU',
      'i9-9800k',
      520.99,
      'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
      'amazon',
      5
    ),
    new Product(2, 'gpu', 'Video Card', 'MSI GTX 1070', 480.99, '', 'newegg', 5)
  ];

  // listData = [
  //   {
  //     route: 'cpu',
  //     name: 'CPU',
  //     model: 'i7-4790K',
  //     basePrice: 310.0,
  //     productImage:
  //       'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
  //     merchant: '-'
  //   },
  //   {
  //     route: 'cpu',
  //     name: 'CPU',
  //     model: 'i5-4690K',
  //     basePrice: 210.0,
  //     productImage: '',
  //     merchant: '-'
  //   },
  //   {
  //     route: 'cpu-cooler',
  //     name: 'CPU Cooler',
  //     model: 'Noctua NH-D15',
  //     basePrice: 70.0,
  //     productImage: '',
  //     merchant: '-'
  //   }
  // ];

  // pickedItemData = [
  //   {
  //     route: 'cpu',
  //     name: 'CPU',
  //     model: 'i7-4790K',
  //     basePrice: 310.0,
  //     productImage:
  //       'https://images-eu.ssl-images-amazon.com/images/I/51guGHeu46L.jpg',
  //     merchant: '-'
  //   },
  //   {
  //     route: 'cpu-cooler',
  //     name: 'CPU Cooler',
  //     model: 'Noctua NH-D15',
  //     basePrice: 70.0,
  //     productImage: '',
  //     merchant: '-'
  //   }
  // ];

  constructor() {}

  ngOnInit() {}
}
