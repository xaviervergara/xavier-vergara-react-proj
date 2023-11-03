import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from 'react-router-dom';
// import { QuantityContext } from '../../context/QuantityContext';
import { CarritoContext } from '../../context/CarritoContext';

const CartWidget = () => {
  // let { quantity } = useContext(QuantityContext);
  let { productosEnCarrito } = useContext(CarritoContext);
  return (
    <Link to="/carrito">
      <Grid className="container-icon">
        <ShoppingCartIcon style={{ fontSize: '2em', color: 'white' }} />
        <div className="cantidad-carrito">{productosEnCarrito()}</div>
      </Grid>
    </Link>
  );
};

export default CartWidget;
