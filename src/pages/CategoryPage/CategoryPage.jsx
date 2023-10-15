import CardProduct from '../../components/CardProduct/CardProduct';
import Grid from '@mui/material/Unstable_Grid2';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './CategoryPage.css';

const CategoryPage = () => {
  let { categoryId } = useParams();

  const [productos, setProductos] = useState([]);

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
          setProductos(data.filter((prod) => prod.categoria == categoryId));
        }, 500)
      );
  }, [categoryId]);

  return (
    <section>
      <Grid className="grid-categorias">
        {productos.map((productos) => {
          return (
            <Link to={`/detail/${productos.id}`} key={productos.id}>
              <div>
                <CardProduct producto={productos} />
              </div>
            </Link>
          );
        })}
      </Grid>
    </section>
  );
};

export default CategoryPage;
