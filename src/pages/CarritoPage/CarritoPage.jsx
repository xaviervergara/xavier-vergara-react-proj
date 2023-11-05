import "./CarritoPage.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const CarritoPage = () => {
  let { carrito, precioTotal, vaciarCarrito, eliminarProducto } =
    useContext(CarritoContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "monospace",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            backgroundColor: "rgb(77, 146, 115)",
            fontFamily: "monospace",
            borderRadius: "5px",
            color: "white",
            padding: ".3em",
            margin: ".5em",
          }}
        >
          Tu carrito
        </h1>
      </div>

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
              <div className="caracteristica-producto">
                <button
                  onClick={() => eliminarProducto(prod)}
                  className="boton-delete"
                >
                  <DeleteOutlineOutlinedIcon
                    sx={{
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="precio-total-main">
        <div className="vaciar-carrito">
          {carrito.length > 0 && (
            <button
              className="boton-vaciar-carrito"
              onClick={() => vaciarCarrito()}
            >
              Vaciar carrito
            </button>
          )}
        </div>
        {carrito.length > 0 && (
          <div className="precio-total">Precio total: $ {precioTotal()}</div>
        )}
      </div>
      <div
        style={{
          marginRight: "2.6em",
          marginBottom: "2em",
          display: "flex",
          justifyContent: "flex-end",
          fontSize: "1.2em",
        }}
      >
        <Link to="/checkout">
          <button className="boton-vaciar-carrito">Finalizar compra</button>
        </Link>
      </div>
    </div>
  );
};

export default CarritoPage;
