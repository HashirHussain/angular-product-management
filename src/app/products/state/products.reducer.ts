import { ProductsState, initialState } from './products.state';
import { ProductActions, ProductActionTypes } from './product.actions';

export function reducer(
  state: ProductsState = initialState,
  action: ProductActions
): ProductsState {
  switch (action.type) {
    case ProductActionTypes.ToggleImage:
      return {
        ...state,
        showProductImage: action.payload,
      };
    default:
      return state;
  }
}
