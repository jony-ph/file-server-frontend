import { useEffect } from "react";
import { useAppContext } from "../store/store";
import { useNavigate } from "react-router-dom";


export const useFiles = (pathname) => {

  const { items, setItems } = useAppContext();
  const navigate = useNavigate();

  useEffect( () => { 

    async function getItems (){

      try {

        const url = `http://192.168.0.6:4000${pathname}`;
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.message === "Folder doesn't exist"){
          navigate('/files');
          return;
        }
    
        setItems(data);

      } catch(error) {
        console.log(error);
      }
  
    }

    getItems();

  }, [pathname, setItems, navigate]); 

  return items;

}