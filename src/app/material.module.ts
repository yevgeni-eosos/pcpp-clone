import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatTableModule,
  MatHeaderCell
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatTableModule],
  exports: [MatButtonModule, MatToolbarModule, MatTableModule]
})
export class MaterialModule {}
