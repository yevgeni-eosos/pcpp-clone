import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Motherboard {
  constructor(
    public product: Product,
    public socket: string,
    public formFactor: string,
    public ramSlots: number,
    public maxRam: number
  ) {}
}
