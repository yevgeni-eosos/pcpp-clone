import { Product } from './product.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Cpu {
  constructor(
    public product: Product,
    public speed: number,
    public tdp: number,
    public cores: number
  ) {}
}
