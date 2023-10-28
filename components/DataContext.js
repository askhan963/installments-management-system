import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [installments, setInstallments] = useState([]);

  return (
    <DataContext.Provider value={{ installments, setInstallments }}>
      {children}
    </DataContext.Provider>
  );
};
