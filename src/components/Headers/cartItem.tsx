import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { removeFromCart } from '../../redux/actions/actions';
import {Store} from '../../redux/reducers/index';
import { Data} from '../../CountrytTypes';

const useStyles = makeStyles(() => ({
  drawerSide: {
    width: 440
  },
  flag: {
    height: 60,
    width: 100,
  },
}));

type Open = {
  open: boolean,
  onClose: () => void;
}

const CartItem = ({ open, onClose }: Open) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { cartItems } = useSelector((state: Store) => state.cartReducer);
  const delAction = (country: Data) => dispatch(removeFromCart(country));

  return (
    <Drawer
      variant='persistent'
      anchor='right'
      open={open}
      classes={{
        paper: classes.drawerSide
      }}
    >
      <div>
        <IconButton onClick={onClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <List>
        {cartItems.length > 0 ?
          cartItems.map((cart: Data) => (
            <ListItem key={cart.name}>
              <img src={cart.flag} className={classes.flag} alt='flag' style={{ border: "1px solid blue" }} />
              <ListItemText>{cart.name}</ListItemText>
              <ListItemIcon>
                <button onClick={() => delAction(cart)}>DELETE</button>
              </ListItemIcon>
            </ListItem>
          )) : <h1>Your cart is empty</h1>
        }
      </List>
    </Drawer>
  );
};

export default CartItem;
