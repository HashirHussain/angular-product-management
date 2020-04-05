import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id: number = +this.route.snapshot.paramMap.get('id');

    this.pageTitle += ` ${id}`;
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
