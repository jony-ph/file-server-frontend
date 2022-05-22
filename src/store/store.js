import { createContext, useContext, useEffect, useState } from 'react';

// Creando contexto global
const AppContext = createContext({
  items: [],
  createItem: (item) => {},
  getItem: (item) => {},
  updateItem: (item) => {}
});

const Store = ({ children }) => {

  // Definiendo objeto del contexto creado
  const [items, setItems] = useState([]);

  function createItem(item) {
    const temp = [...items];
    temp.push(item);

    setItems(temp);
  }

  function getItem(name) {
    const item = items.find( item => item.name === name );
    return item;
  }

  function updateItem(item) {
    const index = items.findIndex( index => index.id === item.id );
    const temp = [...items];

    temp[index] = { ...item };
  }

  return ( 
    <div className="App">
      <AppContext.Provider value={{
        items,
        createItem,
        getItem,
        updateItem
      }}>
        {children}
      </AppContext.Provider>
    </div> 
  );
}

export default Store;
export function useAppContext() {
  return useContext(AppContext);
}
