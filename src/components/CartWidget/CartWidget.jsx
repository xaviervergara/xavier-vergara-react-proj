import { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { QuantityContext } from '../../context/QuantityContext';

const CartWidget = () => {
  let { quantity } = useContext(QuantityContext);
  let [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // };

  return (
    <Grid className="container-icon">
      <ShoppingCartIcon style={{ fontSize: '2em', color: 'white' }} />
      <div className="cantidad-carrito">{quantity}</div>
    </Grid>
  );
};

export default CartWidget;
