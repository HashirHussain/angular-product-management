import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

const getProductFeatureState = createFeatureSelector<ProductsState>('products');

export const getShowProductImage = createSelector(
  getProductFeatureState,
  (state) => state.showProductImage
);
