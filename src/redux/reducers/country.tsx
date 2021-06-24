import { 
  ITEMS_HAS_ERRORED,  
  ITEMS_IS_LOADING, 
  ITEMS_FETCH_DATA_SUCCESS, 
  SEARCH_COUNTRY
} from '../actions/types';
import {Data} from '../../CountrytTypes';
import { AllActions} from '../actions/types';

type initState = {
  countries: Data[] | Data,
  error: string,
  loading: boolean,
  searchCountry: Data[] | Data
}


const initialState: initState ={
  countries: [],
  error: '',
  loading: false,
  searchCountry: [],
}

const reducerCountry = (state=initialState, action:  AllActions) => {
  switch(action.type){
    case ITEMS_IS_LOADING: 
    return {
      ...state,
      loading: true
    };
    
    case  ITEMS_FETCH_DATA_SUCCESS:
    return {
      ...state,
      countries: action.payload,
      loading: false,
      error: '',
      searchCountry: action.payload
    }
    case ITEMS_HAS_ERRORED:
    return{
      ...state,
      countries: [],
      error: action.payload,
      loading: false,
    }
    case SEARCH_COUNTRY:
    const searchItem = (state.countries as Data[]).filter((country) => country.name.toLowerCase().startsWith(action.payload.toLowerCase()))
    return {
      ...state, 
      searchCountry: searchItem
    }

    // case SORT_COUNTRY_BY_POPN:
    // if ( action.payload=== "asc"){
    // const sortAZ = [...state.searchCountry].sort((a, b) => {
    //   if (a.population < b.population) return -1;
    //   else if (a.population >  b.population) return 1;
    //   else return 0 
    // })
    // return {
    //   ...state,
    //   searchCountry: sortAZ
    // }
    // }
    // if ( action.payload=== "dasc"){
    //   const sortZA = [...state.searchCountry].sort((a, b) => {
    //     if (a.population > b.population) return 1;
    //     else if (a.population < b.population) return -1;
    //     else return 0 
    //   })
    //   return {
    //     ...state,
    //     searchCountry: sortZA
    //   }
    // }
    
    default:
    return state;
  }
}

export default reducerCountry; 
