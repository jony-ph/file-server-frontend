import ButtonCreate from "../components/ButtonCreate";
import ButtonUpload from "../components/ButtonUpload";
import Searcher from "../components/Searcher";

import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ButtonOrder from "../components/ButtonOrder";
import { useAppContext } from "../store/store";
import Folder from "../components/Folder";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Files = () => {

  // Obteniendo carpeta en los parámetros de la url
  const { pathname } = useLocation();

  // Importando contexto 
  const store = useAppContext();

  const [folderFiles, setFolderFiles] = useState([]);

  useEffect( () => {
    const path = store.getItem(pathname);
    setFolderFiles(path);
  }, [pathname, store]);

  return ( 
    <div className="main container">
      <h2 className="text-center pt-5">Files</h2>
      <Searcher />
      <Stack direction="horizontal">
        <ButtonUpload />
        <ButtonCreate />
        <ButtonOrder className="ms-auto" />
      </Stack> 

      <Container className="my-5">
        <Row className="text-center" xs={2} sm={3} md={4} lg={5} xl={6} xxl={8}>
          {store.items.map( item => <Folder key={item.id} path={item.name} />)}
        </Row>
      </Container>
    </div>
  );
}
 
export default Files;
