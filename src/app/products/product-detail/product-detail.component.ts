import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: ProductModel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe({
      next: (data) => (this.product = data),
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
