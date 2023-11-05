import "./DetailPage.css";
import { useContext } from "react";

import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IncDecButtons from "../../components/IncDecButtons/IncDecButtons";
import { CarritoContext } from "../../context/CarritoContext";
import { collection, getDocs } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const DetailPage = () => {
  let { carrito, agregarAlCarrito } = useContext(CarritoContext);

  let { id } = useParams();

  const [producto, setProducto] = useState([]);

  //llamada a la base de datos para pedir el producto
  useEffect(() => {
    const productosRef = collection(dataBase, "productos");

    getDocs(productosRef).then((resp) => {
      const contenedorProductos = resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProducto(contenedorProductos.filter((prod) => prod.id == id)[0]);
    });
  }, [id]);

  // useEffect(() => {
  //   fetch(`/public/productos.json`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application.json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setTimeout(() => {
  //         setProducto(data.filter((prod) => prod.id == id)[0]);
  //       }, 500)
  //     );
  // }, [id]);

  //estado cantidad
  const [cantidad, setCantidad] = useState(1);
  // funcion sumar cantidad al carrito
  const handleDecrement = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  // funcion restar cantidad al carrito
  const handleIncrement = () => {
    producto.stock > cantidad && setCantidad(cantidad + 1);
  };

  return (
    <Grid className="detail-container">
      <div className="div_left">
        <img className="detail_img" src={producto.img} alt="" />
      </div>
      <div className="div_right">
        <div className="detail_name">{producto.nombre}</div>
        <div className="detail_description">{producto.descripcion}</div>
        <div className="detail_category"> Categoria: {producto.categoria}</div>
        <div className="detail_price">
          {producto.precio !== undefined
            ? `$${producto.precio.toFixed(3)}`
            : "Precio no disponible"}
        </div>
        <div className="incDecbuttons">
          <IncDecButtons
            cantidad={cantidad}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            agregarAlCarrito={() => {
              agregarAlCarrito(producto, cantidad);
            }}
          />
        </div>
      </div>
    </Grid>
  );
};

export default DetailPage;
