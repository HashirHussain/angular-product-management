import { Component, OnInit, OnChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { pluck } from 'rxjs/operators';

import { ProductModel } from './product-model';
import { ProductService } from './product.service';
import { State as ProductState } from '../products/state/products.state';
import * as ProductSelector from './state/product.selector';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnChanges {
  pageTitle: string = 'Product List!';
  products: ProductModel[] = [];
  showImage: boolean = false;
  toggleImage(): void {
    this.store.dispatch({
      type: 'TOGGLE_PRODUCT_IMAGE',
      payload: !this.showImage,
    });
  }
  _listFilter: string = '';
  filteredProducts: ProductModel[];
  errorMessage: string;

  constructor(
    private store: Store<ProductState>,
    private productService: ProductService
  ) {}

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
        product.name.toLocaleLowerCase().indexOf(filterBy) != -1
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = `Product List! ${message}`;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => (this.filteredProducts = this.products = products),
      error: (err) => (this.errorMessage = err),
    });

    this.store
      .pipe(select(ProductSelector.getShowProductImage))
      .subscribe((showProductImage) => (this.showImage = showProductImage));
  }

  ngOnChanges(): void {}
}
