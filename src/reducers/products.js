import { fromJS } from 'immutable';
import { SET_FAVORITE, SET_LOADING, SET_PRODUCTS } from "../actions/types";

const initialState = fromJS({
  products: [],
  loading: false,
});

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      // return { ...state, products: action.payload, };
      return state.setIn(['products'], fromJS(action.payload))
    case SET_FAVORITE:
      // inmutable se encarga de la inmutabilidad, por lo
      // tanto la siguiente línea no es necesaria
      // const newProductsList = [...state.products];
      // const currentProductIndex = newProductsList.findIndex(
      //   (product) => product.id === action.payload.productId
      // );
      const currentProductIndex = state.get('products').findIndex((product) =>(
        product.get('id') === action.payload.productId
      ))
      if (currentProductIndex < 0) {
        return state;
      }

      const isFavorite = state.getIn('products', currentProductIndex, 'favorite')

      return state.setIn(['products', currentProductIndex, 'favorite'], !isFavorite)

    // case SET_LOADING:
      // return {
      //   ...state,
      //   loading: action.payload,
      // };
    default:
      return state;
  }
};
