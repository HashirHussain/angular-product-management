import { State as AppState } from '../../app.state';

export interface ProductsState {
  showProductImage: boolean;
}

export interface State extends AppState {
  products: ProductsState;
}

export const initialState: ProductsState = {
  showProductImage: true,
};
