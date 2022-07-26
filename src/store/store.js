import { createContext, useContext, useState, useMemo } from "react";

// Creando contexto global
const AppContext = createContext({
  items: [],
});

function Store({ children }) {
  // Definiendo objeto del contexto creado
  const [items, setItems] = useState([]);

  const context = useMemo(() => ({ items, setItems }));

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

export default Store;
