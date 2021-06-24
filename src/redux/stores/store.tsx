import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import {Data} from '../../CountrytTypes';

const toStorage = (state: Data[]) => {
  const toSave = JSON.stringify(state);
    window.localStorage.setItem("keyItem", toSave);
};
const fromStorage = (): Data[] => {
    const savedItem = window.localStorage.getItem("keyItem");
    if (savedItem === null) return [];
    return JSON.parse(savedItem);
};

type initState = {
  reducerCountry: {
    countries: Data[] | Data,
    error: string,
    loading: boolean,
    searchCountry: Data[]
  },
  cartReducer: {
    cartItems: Data[]
  }
}

const initialState:initState = {
  reducerCountry: {
    countries: [],
    error: '',
    loading: false,
    searchCountry:[]
  },
  cartReducer:{
    cartItems: fromStorage(),
  }
}

const makeStore = () => {
  let composeEnhancers = compose;

  const middleware = [thunk];

  if (process.env.NODE_ENV === 'development') {
      if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
          composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              trace: true,
          });
      }
  }

  const store = createStore(
    rootReducer, 
    initialState, 
  composeEnhancers(applyMiddleware(...middleware)));

  store.subscribe(() => toStorage(store.getState().cartReducer.cartItems));
  return store;
};

export default makeStore;


