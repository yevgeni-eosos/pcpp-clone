export class Product {
  constructor(
    public id: number,
    public route: string,
    public name: string,
    public model: string,
    public basePrice: number,
    public image: string,
    public merchant: string,
    public rating: number // 1-5 star rating
  ) {}
}
