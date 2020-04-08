import { ProductState, initialState } from './products.state';

export function reducer(
  state: ProductState = initialState,
  action
): ProductState {
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
