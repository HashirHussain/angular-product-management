import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductModel } from './product-model';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  pageTitle: string = 'Product List!';
  products: ProductModel[] = [
    new ProductModel(
      1,
      'Leaf Rake',
      'GDN-0011',
      'March 19, 2019',
      'Leaf rake with 48-inch wooden handle.',
      19.95,
      3.2,
      'assets/images/leaf_rake.png'
    ),
    new ProductModel(
      2,
      'Garden Cart',
      'GDN-0023',
      'March 18, 2019',
      '15 gallon capacity rolling garden cart',
      32.99,
      4.2,
      'assets/images/garden_cart.png'
    ),
  ];
  showImage: boolean = false;
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  _listFilter: string = '';
  filteredProducts: ProductModel[];

  constructor() {
    this.filteredProducts = this.products;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  performFilter(filterBy: string): ProductModel[] {
    filterBy = filterBy.trim().toLocaleLowerCase();
    return this.products.filter(
      (product: ProductModel) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) != -1
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List! ${message}`;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}
}
