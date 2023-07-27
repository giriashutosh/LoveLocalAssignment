// MyContext.js

import { createContext, useState } from 'react';

const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  // State and functions that you want to share across components
  const [data, setData] = useState([]);

  const sharedContextValue = {
    data,
    setData,
  };

  return <ProductContext.Provider value={sharedContextValue}>{children}</ProductContext.Provider>;
};

export { ProductContext, ProductContextProvider };
