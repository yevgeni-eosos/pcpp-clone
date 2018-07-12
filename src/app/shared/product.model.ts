export class Product {
  constructor(
    public id: number,
    public route: string,
    public name: string,
    public model: string,
    public base: number,
    public image: string,
    public retailer: string,
    public rating: number // 1-5 star rating
  ) {}
}
