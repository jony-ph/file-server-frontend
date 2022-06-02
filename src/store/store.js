import { createContext, useContext, useState } from 'react';

// Creando contexto global
const AppContext = createContext({
  items: []
});

const Store = ({ children }) => {

  // Definiendo objeto del contexto creado
  const [items, setItems] = useState([]);


  // function updateItem(item) {
  //   console.log(items)
  //   const index = items.findIndex( index => index.id === item.id );
  //   const temp = [...items];

  //   temp[index] = { ...item };
  // }

  return ( 
      <AppContext.Provider value={{
        items,
        setItems
      }}>
        {children}
      </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

export default Store;