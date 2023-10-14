import CardProduct from '../../components/CardProduct/CardProduct';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import asd from '../../../public/productos.json';
import './DetailPage.css';

const DetailPage = () => {
  let { id } = useParams();
  console.log('id', id);
  const [producto, setProducto] = useState([]);
  // console.log(producto);

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
    <Grid className="detail-grid" container>
      <CardProduct producto={producto} />
    </Grid>
  );
};

export default DetailPage;
