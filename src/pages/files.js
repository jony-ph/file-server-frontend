import { useLocation } from "react-router-dom";

import FileSystem from "../components/FileSystem";
import ContainerFiles from "../components/ContainerFiles";
import { useFiles } from "../hooks/useFiles";

const Files = () => {

  // Obteniendo carpeta en los parámetros de la url
  const { pathname } = useLocation();
  // Obteniendo carpetas y archivos de la carpeta actual
  const items = useFiles(pathname);

  return ( 
    <div className="main container">
      <h2 className="text-center pt-5">Files</h2>
      <h6 className="text-center">{pathname}</h6>

      <FileSystem />
      <ContainerFiles items={items} />
    </div>
  );
}
 
export default Files;
