import './ItemListContainer.css';
import CardProduct from '../CardProduct/CardProduct';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('/public/productos.json')
        .then((response) => response.json())
        .then((data) => setProductos(data));
    }, 500);
  }, []);

  return (
    <Grid className="productSection" container>
      {productos.map((producto) => {
        return (
          <Link to={`/detail/${producto.id}`} key={producto.id}>
            <div>
              <CardProduct producto={producto} />
            </div>
          </Link>
        );
      })}
    </Grid>
  );
};

export default ItemListContainer;
