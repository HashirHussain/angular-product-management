export function reducer(state, action) {
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
