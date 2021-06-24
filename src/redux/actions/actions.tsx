import {Dispatch} from 'redux'
import { Data } from '../../CountrytTypes';

import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS, ADDING_TO_CART,
  REMOVE_FROM_CART, SEARCH_COUNTRY, } from  './types';

import {AllActions} from './types'

//export const SORT_COUNTRY_BY_POPN = "SORT_COUNTRY_BY_POPN";

export function itemsHasErrored(err: string): AllActions{
  return {
      type: ITEMS_HAS_ERRORED,
      payload: err
  };
}
export function itemsIsLoading(): AllActions {
  return {
      type: ITEMS_IS_LOADING,
  };
}
export function itemsFetchDataSuccess(data: Data[]): AllActions {
  return {
      type: ITEMS_FETCH_DATA_SUCCESS,
      payload: data
  };
}

export function itemsFetchData (url: string) {
  return async (dispatch: Dispatch<AllActions>) => {
    try {
      dispatch(itemsIsLoading() );
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      dispatch(itemsFetchDataSuccess(data));
    } catch (error) {
      dispatch(itemsHasErrored(error));
    }
  };
};

// export function sortCountryByPopn (value) {
//   return {
//     type: "SORT_COUNTRY_BY_POPN",
//     payload: value
//   };
// };

export function searchCountry (value: string): AllActions{
  return {
    type: SEARCH_COUNTRY,
    payload: value
  }
} 

export function addToCart (country: Data): AllActions{
  return {
    type: ADDING_TO_CART,
    payload: country
  }
}

export function removeFromCart (country: Data): AllActions{
  return {
    type: REMOVE_FROM_CART,
    payload: country
  }
}



