import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'products/:id',
    canActivate: [ProductDetailGuard],
    component: ProductDetailComponent,
  },
  { path: 'welcome', component: WelcomeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
