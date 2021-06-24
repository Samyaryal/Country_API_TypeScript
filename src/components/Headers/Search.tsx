import React,{useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {  searchCountry } from '../../redux/actions/actions';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('')
  const [debounce, setDebounce] = useState('');
  dispatch(searchCountry(search))

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebounce(search);
  //   }, 500);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [search]);

  // useEffect(() => {
  //   dispatch(searchCountry(debounce));
  // }, [dispatch, debounce]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <input
      className = "input-field"
      value = {search}
      placeholder="search"
      type="text"
      onChange ={handleInputChange}
      />
    </div>
  )
}

export default Search;