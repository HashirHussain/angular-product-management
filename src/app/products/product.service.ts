import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): ProductModel[] {
    return [
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
      new ProductModel(
        3,
        'Hammer',
        'TBX-0048',
        'May 21, 2019',
        'Curved claw steel hammer',
        8.9,
        4.8,
        'assets/images/hammer.png'
      ),
    ];
  }
}
