import { ADDING_TO_CART, REMOVE_FROM_CART } from '../actions/types';
import { AllActions} from '../actions/types';
import {Data} from '../../CountrytTypes';

type initState = {
  cartItems: Data[] 
}
const initialState: initState = {
  cartItems: [],
}

const cartReducer = (state = initialState, action: AllActions) => {
  
  switch (action.type){
  case ADDING_TO_CART:
  const addTo = state.cartItems.push(action.payload)
  return {
    ...state,
    cartitems: addTo,
  }
  
  case REMOVE_FROM_CART:
    const delFrom = state.cartItems.filter(
      (item) => item.name !== action.payload.name);
    return {
       ...state, 
       cartItems: delFrom
    }
    default:
    return state;
  }
};

export default cartReducer;