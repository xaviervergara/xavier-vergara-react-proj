import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='icon-container'> 
      <ShoppingCartIcon className='icon' />
    </div>
  );
};

export default CartWidget;
