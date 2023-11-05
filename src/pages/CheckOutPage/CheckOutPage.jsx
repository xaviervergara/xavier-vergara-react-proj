import "./CheckOutPage.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const CheckOutPage = () => {
  let { carrito, precioTotal, vaciarCarrito } = useContext(CarritoContext);

  return <div>CheckOutPage</div>;
};

export default CheckOutPage;
