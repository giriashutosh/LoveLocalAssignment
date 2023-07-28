import { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  
  const [data, setData] = useState([]);

  const sharedContextValue = {
    data,
    setData,
  };

  return <ProductContext.Provider value={sharedContextValue}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductContextProvider };
