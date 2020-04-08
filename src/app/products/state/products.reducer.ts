import { ProductsState, initialState } from './products.state';

export function reducer(
  state: ProductsState = initialState,
  action
): ProductsState {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_IMAGE':
      return {
        ...state,
        showProductImage: action.payload,
      };
    default:
      return state;
  }
}
