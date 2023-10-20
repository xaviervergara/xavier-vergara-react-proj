import './IncDecButtons.css';
import { useState } from 'react';

const IncDecButtons = () => {
  let [cantidad, setCantidad] = useState(0);

  const handleDecrement = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <button className="incDecButtons" onClick={handleDecrement}>
        -
      </button>
      <div className="cantidad"> {cantidad}</div>
      <button className="incDecButtons" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default IncDecButtons;
