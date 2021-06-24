import React, { useContext, useState } from "react";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import useCountry from '../../custom-hooks/useCountry';
import { Link } from 'react-router-dom';
import ThemeContext from '../Context/ThemeContext';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/actions';
import {Data} from '../../CountrytTypes';

function TableBodyData() {
  const [double, setDouble] = useState(false);
  const dispatch = useDispatch();
  //const { filteredCountry } = useCountry()
  const { theme } = useContext(ThemeContext);



  const { searchCountry : countries, error, loading } = useCountry();
  if (loading) return <h1> "Data is loading!" </h1> 
  if (error) return <h1> "Something went wrong" </h1> 

 //const addCountry = (country)  =>  dispatch(addToCart(country))

  return (
    <>
      <TableBody>
        {
          (countries as Data[]).map((country: Data) => {
            const { name, flag, population, region, languages } = country
            return (
              <TableRow key={name} className="table-data">
                <TableCell style={{ background: theme.background, color: theme.color }} align="center" component="th" scope="row">
                  <img
                    alt=""
                    src={flag}
                    height="110"
                    width="200"
                  />
                </TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">
                  <Link style={{ color: theme.color }} className="link" to={`${name}`}>{name}</Link>
                </TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">{population}</TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">{region}</TableCell>
                <TableCell style={{ background: theme.background, color: theme.color }} align="center">
                  {languages.map(lang => <li>{lang.name}</li>)}
                </TableCell>

                <TableCell style={{ background: theme.background, color: theme.color }} align="center">
                  <button disabled={double} onClick={() => dispatch(addToCart(country))} >Add To Cart</button>
                </TableCell>
              </TableRow>
            )
          }
          )}

      </TableBody>
    </>
  )
}

export default TableBodyData;