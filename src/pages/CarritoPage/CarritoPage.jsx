import './CarritoPage.css';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const CarritoPage = () => {
  let { carrito } = useContext(CarritoContext);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'monospace',
      }}
    >
      <h1
        style={{
          textAlign: 'center',
          color: 'orange',
          border: '1px solid white',
          borderRadius: '15px',
        }}
      >
        Tu carrito
      </h1>

      <div className="main-lista">
        {carrito.map((prod) => {
          return (
            <div className="productos" key={prod.id}>
              <div className="caracteristica-producto">
                <Link to={`/detail/${prod.id}`}>
                  <img className="imagen-de-producto" src={prod.img} alt="" />
                </Link>
              </div>
              <div className="caracteristica-producto">{prod.nombre}</div>
              <div className="caracteristica-producto">
                prec.Unit: $ {prod.precio.toFixed(3)}
              </div>
              <div className="caracteristica-producto">
                prec.Tot: $ {(prod.precio * prod.cantidad).toFixed(3)}
              </div>
              <div className="caracteristica-producto">
                Cantidad: {prod.cantidad}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarritoPage;
