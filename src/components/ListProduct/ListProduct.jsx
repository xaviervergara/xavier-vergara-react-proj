import './ListProduct.css';
import CardProduct from '../CardProduct/CardProduct';

const ListProduct = () => {
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
  ];

  return (
    <div className="productSection">
      {productos.map((producto) => {
        return <div key={producto.id}><CardProduct producto={producto} /></div>
      })}
    </div>
  );
};

export default ListProduct;
