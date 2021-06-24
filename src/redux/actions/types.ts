import { Data } from '../../CountrytTypes';

export const ITEMS_HAS_ERRORED = "ITEMS_HAS_ERRORED";
export const ITEMS_IS_LOADING = "ITEMS_IS_LOADING";
export const ITEMS_FETCH_DATA_SUCCESS = "ITEMS_FETCH_DATA_SUCCESS";
export const ADDING_TO_CART = "ADDING_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";

export type itemsHasErrored= {
  type: typeof ITEMS_HAS_ERRORED;
  payload: string
}

export type itemsIsLoading ={
  type: typeof ITEMS_IS_LOADING;
}
export type itemsFetchDataSuccess ={
  type: typeof ITEMS_FETCH_DATA_SUCCESS;
  payload: Data[] | Data;
}

export type searchCountry = {
  type: typeof SEARCH_COUNTRY;
  payload: string
}
export type addToCart={
  type: typeof ADDING_TO_CART;
  payload: Data
}
export type removeFromCart = {
  type: typeof REMOVE_FROM_CART;
  payload: Data
}

export type  AllActions = 
 | itemsHasErrored
 | itemsIsLoading
 | itemsFetchDataSuccess
 | searchCountry
 | addToCart
 | removeFromCart

