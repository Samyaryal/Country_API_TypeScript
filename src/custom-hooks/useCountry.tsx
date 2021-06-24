import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsFetchData } from '../redux/actions/actions';
import { Store } from '../redux/reducers/index'; 



const useCountry = (...name: string[]) => {
  const dispatch = useDispatch();

  const countryData = useSelector((state: Store) => state.reducerCountry);
  const url = `https://restcountries.eu/rest/v2/${ name.length === 0 ? `all` : `name/${name}`}`;

  useEffect(() => {
    dispatch(itemsFetchData(url));
  }, [url, dispatch]);

  return countryData;
};

export default useCountry;
