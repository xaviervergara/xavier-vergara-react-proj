import CardProduct from '../../components/CardProduct/CardProduct';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  let { id } = useParams();
  console.log('id', id);
  const [producto, setProducto] = useState([]);
  // console.log(producto);

  useEffect(() => {
    setTimeout(() => {
      fetch(`/public/productos.json/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => setProducto(data));
    }, 500);
  }, [id]);

  return (
    <Grid container>
      <h1>hello</h1>
    </Grid>
  );
};

export default DetailPage;

// {productos.map((producto) => {
//     return (
//       <div key={producto.id}>
//         <CardProduct producto={producto} />
//       </div>
//     );
//   })}
