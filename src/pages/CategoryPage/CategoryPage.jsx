import CardProduct from "../../components/CardProduct/CardProduct";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CategoryPage.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dataBase } from "../../firebase/config";

const CategoryPage = () => {
  let { categoryId } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const productosRef = collection(dataBase, "productos");

    const q = query(productosRef, where("categoria", "==", categoryId));

    getDocs(q).then((resp) => {
      const contenedorProductos = resp.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      setProductos(contenedorProductos);
    });
  }, [categoryId]);

  // useEffect(() => {
  //   fetch(`/public/productos.json`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application.json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) =>
  //       setTimeout(() => {
  //         setProductos(data.filter((prod) => prod.categoria == categoryId));
  //       }, 500)
  //     );
  // }, [categoryId]);

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
