import './CheckOutPage.css';
import { useContext, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../../firebase/config';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const CheckOutPage = () => {
  let { carrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);

  const { register, handleSubmit } = useForm();

  const [pedidoId, setPedidoId] = useState('');

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(dataBase, 'pedidos');

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
    });

    vaciarCarrito();
  };

  if (pedidoId) {
    return (
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: '2em',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '1em',
        }}
      >
        <h1> Gracias por tu compra! </h1>
        <div>
          <SentimentSatisfiedAltIcon
            style={{ fontSize: '5em', color: 'rgb(235, 211, 143)' }}
          />
        </div>
        <p style={{ fontSize: '20px', margin: '1em' }}>
          Tu número de pedido es: {pedidoId}
        </p>
      </div>
    );
  }

  return (
    <div className="mainFormulario">
      <h1 className="main-title">Finalizar compra</h1>
      <form
        onSubmit={handleSubmit(comprar)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <input
          className="form-input"
          type="text"
          placeholder="Ingresá tu nombre"
          {...register('nombre')}
        />
        <input
          className="form-input"
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register('email')}
        />

        <input
          className="form-input"
          type="phone"
          placeholder="Ingresá tu telefono"
          {...register('telefono')}
        />
        <button className="boton-formulario" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
};

export default CheckOutPage;
