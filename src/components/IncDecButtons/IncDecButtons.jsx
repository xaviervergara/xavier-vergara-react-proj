import './IncDecButtons.css';
import { useContext, useState } from 'react';
// import { QuantityContext } from '../../context/QuantityContext';

const IncDecButtons = ({
  agregarAlCarrito,
  handleDecrement,
  handleIncrement,
  cantidad,
}) => {
  // let { quantity, setQuantity } = useContext(QuantityContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex' }}>
        <button className="incDecButtons" onClick={handleDecrement}>
          -
        </button>
        <div className="cantidad"> {cantidad}</div>
        <button className="incDecButtons" onClick={handleIncrement}>
          +
        </button>
      </div>

      <div className="addToCartContainer">
        <button className="addToCartButton" onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default IncDecButtons;
