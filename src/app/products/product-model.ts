export class ProductModel {
  constructor(
    public id: number,
    public name: string,
    public code: string,
    public releaseDate: string,
    public description: string,
    public price: number,
    public starRating: number,
    public imageUrl: string
  ) {
    (this.id = id),
      (this.name = name),
      (this.code = code),
      (this.releaseDate = releaseDate),
      (this.description = description),
      (this.price = price),
      (this.starRating = starRating),
      (this.imageUrl = imageUrl);
  }
}
