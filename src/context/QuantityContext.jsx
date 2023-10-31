/* eslint-disable no-undef */
//Creamos contexto (alamcen)

import { useState, createContext } from 'react';

export const QuantityContext = createContext();

//Crear el componente provider

export const QuantityProvider = ({ children }) => {
  let [quantity, setQuantity] = useState(1);

  //RETORNAMOS EL CONTEXT

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      {children}
    </QuantityContext.Provider>
  );
};
