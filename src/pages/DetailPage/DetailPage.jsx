import './DetailPage.css';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import IncDecButtons from '../../components/IncDecButtons/IncDecButtons';

const DetailPage = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetch(`/public/productos.json`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application.json',
      },
    })
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          setProducto(data.filter((prod) => prod.id == id)[0]);
        }, 500)
      );
  }, [id]);

  return (
    <Grid className="detail-container">
      <div className="div_left">
        <img className="detail_img" src={producto.img} alt="" />
      </div>
      <div className="div_right">
        <div className="detail_name">{producto.nombre}</div>
        <div className="detail_description">{producto.descripcion}</div>
        <div className="detail_category"> Categoria: {producto.categoria}</div>
        <div className="detail_price">{producto.precio}</div>
        <div className="incDecbuttons">
          <IncDecButtons />
        </div>
        <div className="addToCartContainer">
          <button className="addToCartButton"> Agregar al carrito</button>
        </div>
      </div>
    </Grid>
  );
};

export default DetailPage;
