import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //Clone, install and run(npm run json:server): https://github.com/HashirHussain/fake-db to below api
  private productUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http
      .get<ProductModel[]>(this.productUrl)
      .pipe(catchError(this.handleError));
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.http
      .get<ProductModel>(`${this.productUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updateProduct(id: number, data: ProductModel): Observable<ProductModel> {
    return this.http
      .put<ProductModel>(`${this.productUrl}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessgae = '';
    if (err.error instanceof ErrorEvent) {
      //A client-side or network error occured
      errorMessgae = `An error occured: ${err.error.message}`;
    } else {
      //The backend return an unsuccessful response code.
      errorMessgae = `Server returned code: ${err.status}, error message is ${err.message}`;
    }

    console.error(errorMessgae);
    return throwError(errorMessgae);
  }
}
