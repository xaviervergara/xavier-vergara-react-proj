import './ListProduct.css';
import CardProduct from '../CardProduct/CardProduct';
// import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const productos = [
  {
    producto: 'Gan 356 Rs',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=138&useDensity=true&width=1903&height=931&tipoEscala=contain',
    precio: '$ 29.700,00',
  },

  {
    producto: 'Moyu meilong M 2020',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=828&useDensity=true&width=1903&height=931&tipoEscala=contain',
    precio: '$16.000,00',
  },

  {
    producto: 'Qiyi new thunderclap',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=378&useDensity=true&width=1903&height=931&tipoEscala=contain',
    precio: '$ 11.400,00',
  },
  //A partir de aca repito el que está arriba

  {
    producto: 'Moyu tanglong 3x3x3',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=302&useDensity=true&width=1920&height=931&tipoEscala=contain',
    precio: '$13.700',
  },

  {
    producto: 'Fanxin fisher 4x4x4',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=70&useDensity=true&width=1920&height=931&tipoEscala=contain',
    precio: '$18.200',
  },

  {
    producto: 'Cyclone boys 4x4',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=20&useDensity=true&width=1920&height=931&tipoEscala=contain',
    precio: '$12.400',
  },

  {
    producto: 'Cyclone boys 2x2',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=722&useDensity=true&width=1920&height=931&tipoEscala=contain',
    precio: '$9.300',
  },

  {
    producto: 'Cyclone boys 3x3x3 simplificado',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=6&useDensity=true&width=1920&height=931&tipoEscala=contain',
    precio: '$9.900',
  },

  {
    producto: 'Moyu meilong 5x5x5',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=240&useDensity=true&width=1920&height=931&tipoEscala=contain',
    precio: '$18.000',
  },

  {
    producto: 'Fanxin penrose',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=90&useDensity=true&width=1920&height=931&tipoEscala=contain',
    precio: '$10.150',
  },

  {
    producto: 'Fanxin Axis 4x4x4',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=60&useDensity=true&width=1903&height=931&tipoEscala=contain',
    precio: '$18.200',
  },

  {
    producto: 'Cyclone boys ',
    descripcion:
      'Excelente cubo uno de los mas nuevos de la marca. Es magnético. Incluye base Moyu, destornillador de ajuste, folleteria original',
    img: 'https://ss-static-01.esmsv.com/id/168096/productos/obtenerimagen/?id=832&useDensity=true&width=1132&height=636.75&tipoEscala=contain',
    precio: '$16.000',
  },
];

const ListProduct = () => {
  return (
    <Grid className="productSection" container>
      {productos.map((producto) => {
        return (
          <div key={producto.id}>
            <CardProduct producto={producto} />
          </div>
        );
      })}
    </Grid>
  );
};

export default ListProduct;
