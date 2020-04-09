import { Action } from '@ngrx/store';
import { ProductModel } from '../product-model';

export enum ProductActionTypes {
  ToggleImage = '[Product] toogle Product image',
  SetCurrentProduct = '[Product] set current product',
}

export class ToogleProductImage implements Action {
  readonly type = ProductActionTypes.ToggleImage;

  constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: ProductModel) {}
}

//We can add many action types with the help of union type "|".
//e.g. export type Productactions = ToogleProductImage | SetCurrentProduct;
export type ProductActions = ToogleProductImage;
