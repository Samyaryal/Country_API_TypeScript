import React, { useState} from 'react';
import { useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from '@material-ui/core/IconButton';
import CartItem from './cartItem';
import Search from './Search';
import Button from './Button';
import {Store} from '../../redux/reducers/index'
// import {sortCountryByPopn} from '../../redux/actions/actions';
import { useDispatch } from 'react-redux'; 

const useStyles = makeStyles(() => ({
  favcontainer: {
    position: 'relative'
  },
  cartCount: {
    position: 'absolute',
    top: '0',
    fontSize: 17,
    color: '#095BE3',
    right: 12,
    fontWeight: 600
  },
}));

const Nav = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: Store) => state.cartReducer);
  const [drawer, setDrawer] = useState(false); 

  const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };

  // const ASC = () => dispatch(sortCountryByPopn())

  const classes = useStyles();
  return (
    <>
      <div>
        <div className="header">
          <h1>CountryList App </h1>
        </div>
        <div className="nav-tabs">
          <Search />
          <Button />
            <div className={classes.favcontainer}>
              <IconButton onClick={openDrawer}>
                <ShoppingCartIcon  fontSize='large' className="icon"/>
              </IconButton>
              <span className={classes.cartCount}>
                {cartItems.length > 0 && cartItems.length}
              </span>
            </div>
        </div>
        {/* <div>
          <button onClick={ASC}>Ascending</button>
        </div> */}
        <CartItem  open={drawer} onClose={closeDrawer} />
      </div>
    </>
  );
};

export default Nav;