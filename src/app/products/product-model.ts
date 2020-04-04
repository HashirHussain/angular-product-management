export class ProductModel {
  constructor(
    public productId: number,
    public productName: string,
    public productCode: string,
    public releaseDate: string,
    public description: string,
    public price: number,
    public starRating: number,
    public imageUrl: string
  ) {
    (this.productId = productId),
      (this.productName = productName),
      (this.productCode = productCode),
      (this.releaseDate = releaseDate),
      (this.description = description),
      (this.price = price),
      (this.starRating = starRating),
      (this.imageUrl = imageUrl);
  }
}
