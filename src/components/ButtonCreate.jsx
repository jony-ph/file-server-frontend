import Button from 'react-bootstrap/Button';
import { BsFolderPlus } from "react-icons/bs";

const ButtonCreate = () => {
  return ( 
    <Button variant="outline-secondary" className="px-4 mx-4">Crear &nbsp;&nbsp;<BsFolderPlus /> </Button>
  );
}
 
export default ButtonCreate;