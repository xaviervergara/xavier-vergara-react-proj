import { useState, createContext } from 'react';

export const CarritoContext = createContext();

//Crear el componente provider

export const CarritoProvider = ({ children }) => {
  let [carrito, setCarrito] = useState([]);

  //funcion agregar producto al carrito
  const agregarAlCarrito = (producto, cantidad) => {
    const productoAgregado = { ...producto, cantidad };

    const copiaCarrito = [...carrito];
    const productoExistente = copiaCarrito.find(
      (prod) => prod.id === productoAgregado.id
    );

    if (productoExistente) {
      productoExistente.cantidad += cantidad;
    } else {
      copiaCarrito.push(productoAgregado);
    }
    setCarrito(copiaCarrito);
  };

  //funcion para mostrar la cantidad de prod en carrito

  const productosEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  //RETORNAMOS EL CONTEXT

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, productosEnCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
