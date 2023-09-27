import {useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css';

const CartWidget = () => {

const [counter, setCounter] = useState(0);

const handleIncrement = ()=>{
  setCounter(counter + 1) 
}

  return (
    <div className="container-icon">
      <ShoppingCartIcon style={{ fontSize: '2em', color: 'white' }} />
      <div className='cantidad-carrito'>{counter}
      <button onClick={handleIncrement} className='carrito-counter'>+</button></div>

    </div>
  );
};

export default CartWidget;
