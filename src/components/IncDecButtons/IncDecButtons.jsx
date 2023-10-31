import './IncDecButtons.css';
import { useContext } from 'react';
import { QuantityContext } from '../../context/QuantityContext';

const IncDecButtons = () => {
  let { quantity, setQuantity } = useContext(QuantityContext);

  // console.log(quantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
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
      <div className="cantidad"> {quantity}</div>
      <button className="incDecButtons" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default IncDecButtons;
