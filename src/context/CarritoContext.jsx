import { useState, createContext, useEffect } from "react";

export const CarritoContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

//Crear el componente provider

export const CarritoProvider = ({ children }) => {
  let [carrito, setCarrito] = useState(carritoInicial);

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

  //funcion para mostrar precio total del carrito

  const precioTotal = () => {
    return carrito
      .reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
      .toFixed(3);
  };

  //funcion de vaciado de carrito

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  //funcion para eliminar solo el producto seleccionado del carrito

  const eliminarProducto = (producto) => {
    setCarrito(carrito.filter((item) => item.id !== producto.id));
  };

  //actualizar localStorage

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  //RETORNAMOS EL CONTEXT

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        productosEnCarrito,
        precioTotal,
        vaciarCarrito,
        eliminarProducto,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
