import { Component, OnInit } from '@angular/core';
import { DataStoreService } from '../../shared/data.store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  itemList = [];
  selectedPart;
  item: { name: string };
  displayedColumns = ['model', 'base', 'add'];

  constructor(
    private dataStoreService: DataStoreService,
    private route: ActivatedRoute,
    private router: Router
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
    this.router.navigate(['/list']);
  }
}
