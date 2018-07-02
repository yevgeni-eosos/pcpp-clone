import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Gpu {
  constructor(
    public product: Product,
    public seris: string,
    public chipset: string,
    public memory: number,
    public coreClock: number
  ) {}
}
