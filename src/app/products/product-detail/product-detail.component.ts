import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` ${id}`;
    this.productService.getProduct(id);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
