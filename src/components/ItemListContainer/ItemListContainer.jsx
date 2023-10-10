import './ItemListContainer.css';
import CardProduct from '../CardProduct/CardProduct';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('../../../public/productos.json')
        .then((response) => response.json())
        .then((data) => setProductos(data));
    }, 500);
  }, []);

  return (
    <Grid className="productSection" container>
      {productos.map((producto, index) => {
        return (
          <div key={index}>
            <CardProduct producto={producto} />
          </div>
        );
      })}
    </Grid>
  );
};

export default ItemListContainer;
