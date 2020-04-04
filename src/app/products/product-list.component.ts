import { Component } from '@angular/core';
import { ProductModel } from './product-model';

@Component({
  selector: 'app-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
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
}
