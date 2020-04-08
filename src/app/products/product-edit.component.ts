import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from './product-model';
import { ProductService } from './product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  productId: number;
  product: ProductModel;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe({
      next: (data) => (this.product = data),
    });
  }

  onSubmit(form: NgForm): void {
    const data = {
      ...this.product,
      ...form.value,
    };
    this.productService.updateProduct(this.productId, data).subscribe({
      next: (data) => console.log('data', data),
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
